import crypto from 'crypto';
import { config } from '@/lib/config';

const apiBase = 'https://api.stripe.com/v1';

/**
 * Create a Stripe Checkout Session for a single unit of the specified price.
 *
 * @param input - Configuration for the checkout session:
 *   - `priceId`: The Stripe Price ID to charge.
 *   - `successUrl`: URL to redirect to after successful payment.
 *   - `cancelUrl`: URL to redirect to if the customer cancels.
 *   - `productId`: Application product identifier stored in session metadata.
 *   - `telegramUserId` (optional): Telegram user ID to include in session metadata.
 * @returns The created Checkout Session object with its Stripe `id` and redirect `url` (or `null`).
 * @throws Error if `STRIPE_SECRET_KEY` is not configured.
 * @throws Error if the Stripe API responds with a non-2xx status (`Stripe API error: <status>`).
 */
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

/**
 * Validates a Stripe webhook signature header against the configured webhook secret.
 *
 * Returns `false` if the webhook secret is not configured or the signature header is missing required parts.
 *
 * @param payload - The raw request body (exact string used to compute the signature)
 * @param signatureHeader - The value of the `Stripe-Signature` header from the webhook request
 * @returns `true` if any `v1=` signature in the header matches the expected HMAC-SHA256 of `<timestamp>.<payload>` using the configured webhook secret, `false` otherwise
 */
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
