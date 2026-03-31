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
