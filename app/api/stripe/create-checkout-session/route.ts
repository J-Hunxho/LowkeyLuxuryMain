import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { listProducts } from '@/lib/db';
import { createCheckoutSession } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { productId?: string; telegramUserId?: number };
    if (!body.productId) {
      return NextResponse.json({ error: 'Missing productId' }, { status: 400 });
    }

    const products = await listProducts();
    const product = products.find((entry) => entry.id === body.productId);

    if (!product) {
      return NextResponse.json({ error: 'Unknown product' }, { status: 404 });
    }

    const session = await createCheckoutSession({
      priceId: product.stripePriceId,
      successUrl: `${config.appUrl}/miniapp?status=success`,
      cancelUrl: `${config.appUrl}/miniapp?status=cancelled`,
      productId: product.id,
      telegramUserId: body.telegramUserId,
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unexpected error' },
      { status: 500 }
    );
  }
}
