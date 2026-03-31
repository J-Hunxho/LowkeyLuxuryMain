import crypto from 'crypto';
import { config } from '@/lib/config';

const apiBase = 'https://api.stripe.com/v1';

export async function createCheckoutSession(input: {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  productId: string;
  telegramUserId?: number;
}): Promise<{ id: string; url: string | null }> {
  if (!config.stripeSecretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }

  const form = new URLSearchParams();
  form.set('mode', 'payment');
  form.set('line_items[0][price]', input.priceId);
  form.set('line_items[0][quantity]', '1');
  form.set('success_url', input.successUrl);
  form.set('cancel_url', input.cancelUrl);
  form.set('metadata[productId]', input.productId);
  if (input.telegramUserId) {
    form.set('metadata[telegramUserId]', String(input.telegramUserId));
  }

  const response = await fetch(`${apiBase}/checkout/sessions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.stripeSecretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  });

  if (!response.ok) {
    throw new Error(`Stripe API error: ${response.status}`);
  }

  const data = (await response.json()) as { id: string; url: string | null };
  return data;
}

export function verifyStripeSignature(payload: string, signatureHeader: string): boolean {
  if (!config.stripeWebhookSecret) return false;

  const parts = signatureHeader.split(',');
  const timestamp = parts.find((part) => part.startsWith('t='))?.slice(2);
  const signatures = parts.filter((part) => part.startsWith('v1=')).map((part) => part.slice(3));

  if (!timestamp || signatures.length === 0) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const expected = crypto
    .createHmac('sha256', config.stripeWebhookSecret)
    .update(signedPayload, 'utf8')
    .digest('hex');

  return signatures.some((signature) => {
    const left = Buffer.from(signature);
    const right = Buffer.from(expected);
    if (left.length != right.length) return false;
    return crypto.timingSafeEqual(left, right);
  });
}
