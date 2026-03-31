import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { listProducts, replaceProducts } from '@/lib/db';
import { Product } from '@/lib/types';

function authorize(request: NextRequest): boolean {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  return Boolean(token && config.adminApiKey && token === config.adminApiKey);
}

export async function GET(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const products = await listProducts();
  return NextResponse.json({ products });
}

export async function PUT(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await request.json()) as { products?: Product[] };
  if (!Array.isArray(body.products)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const valid = body.products.every(
    (product) => product.id && product.name && product.description && product.stripePriceId
  );
  if (!valid) {
    return NextResponse.json({ error: 'Invalid products' }, { status: 400 });
  }

  await replaceProducts(body.products);
  return NextResponse.json({ ok: true });
}
