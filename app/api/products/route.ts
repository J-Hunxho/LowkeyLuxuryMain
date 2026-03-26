import { NextResponse } from 'next/server';
import { listProducts } from '@/lib/db';

/**
 * Handles GET requests for products by retrieving all products and returning them as JSON.
 *
 * @returns A JSON HTTP response with a `products` property containing the list of products.
 */
export async function GET() {
  const products = await listProducts();
  return NextResponse.json({ products });
}
