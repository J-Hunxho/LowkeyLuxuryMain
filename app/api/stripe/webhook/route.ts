import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { insertOrder } from '@/lib/db';
import { sendTelegramMessage } from '@/lib/telegram';
import { verifyStripeSignature } from '@/lib/stripe';

type StripeEvent = {
  type: string;
  data?: {
    object?: {
      id?: string;
      metadata?: Record<string, string>;
      payment_intent?: string;
      customer_details?: { email?: string };
      amount_total?: number;
      currency?: string;
      payment_status?: string;
    };
  };
};

/**
 * Handle Stripe webhook POSTs by verifying the signature, persisting completed checkout session orders, and notifying customers via Telegram.
 *
 * Verifies the `stripe-signature` header against the raw request body, parses a Stripe event, and on `checkout.session.completed` inserts an order record (mapping missing fields to sensible defaults/null). If a numeric Telegram user ID is present in session metadata, sends a confirmation message. On verification or configuration failures returns a JSON error response.
 *
 * @param request - Incoming NextRequest containing the raw webhook payload and `stripe-signature` header
 * @returns A NextResponse with `{ received: true }` when the event is handled; on failure a JSON error object with an appropriate HTTP status code
 */
export async function POST(request: NextRequest) {
  if (!config.stripeWebhookSecret) {
    return NextResponse.json({ error: 'Stripe webhook secret is missing' }, { status: 500 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  const payload = await request.text();
  if (!verifyStripeSignature(payload, signature)) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  const event = JSON.parse(payload) as StripeEvent;

  if (event.type === 'checkout.session.completed' && event.data?.object?.id) {
    const session = event.data.object;
    const sessionId = session.id;
    if (!sessionId) {
      return NextResponse.json({ received: true });
    }
    const telegramUserIdRaw = session.metadata?.telegramUserId;
    const telegramUserId = telegramUserIdRaw ? Number(telegramUserIdRaw) : null;

    await insertOrder({
      id: randomUUID(),
      stripeSessionId: sessionId,
      stripePaymentIntentId: session.payment_intent ?? null,
      stripeCustomerEmail: session.customer_details?.email ?? null,
      amountTotalCents: session.amount_total ?? 0,
      currency: session.currency ?? 'usd',
      status: session.payment_status ?? 'paid',
      telegramUserId,
      productId: session.metadata?.productId ?? null,
      createdAt: new Date().toISOString(),
    });

    if (telegramUserId) {
      await sendTelegramMessage(
        telegramUserId,
        'Payment confirmed. Your Lowkey Luxury order is now active.'
      );
    }
  }

  return NextResponse.json({ received: true });
}
