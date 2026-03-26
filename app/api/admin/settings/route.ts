import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { listProducts, replaceProducts } from '@/lib/db';
import { Product } from '@/lib/types';

/**
 * Checks whether the request's Bearer token matches the configured admin API key.
 *
 * @returns `true` if the `Authorization` header contains a Bearer token equal to `config.adminApiKey`, `false` otherwise.
 */
function authorize(request: NextRequest): boolean {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  return Boolean(token && config.adminApiKey && token === config.adminApiKey);
}

/**
 * Handle GET requests for the admin product settings endpoint.
 *
 * Returns the stored products when the request includes a valid admin API key; if authorization fails, responds with HTTP 401.
 *
 * @returns `{ products: Product[] }` containing the current products on success, or `{ error: 'Unauthorized' }` with HTTP 401 when the request is not authorized.
 */
export async function GET(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const products = await listProducts();
  return NextResponse.json({ products });
}

/**
 * Handle PUT requests to replace stored products, validating authorization and input.
 *
 * Validates a Bearer token against the admin API key, ensures the request body
 * contains a `products` array, and that each product has `id`, `name`,
 * `description`, and `stripePriceId`. On success, replaces stored products.
 *
 * @returns `NextResponse` with `{ ok: true }` on success. On error, returns a JSON error payload:
 * - `401` with `{ error: 'Unauthorized' }` when authorization fails
 * - `400` with `{ error: 'Invalid payload' }` when `products` is not an array
 * - `400` with `{ error: 'Invalid products' }` when any product is missing required fields
 */
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
