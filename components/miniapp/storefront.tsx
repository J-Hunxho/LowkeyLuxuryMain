'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Product } from '@/lib/types';

type Status = 'idle' | 'loading' | 'error';

/**
 * Render a client-side mini storefront that lists products and initiates Stripe checkout.
 *
 * Fetches product data when mounted and displays loading or error states. Shows payment
 * outcome messages based on the URL `status` query parameter and redirects the browser
 * to the Stripe checkout URL returned from the session-creation API when available.
 *
 * @returns The component's rendered JSX for the mini storefront.
 */
export function MiniAppStorefront() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const searchParams = useSearchParams();

  useEffect(() => {
    void fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products ?? []);
        setStatus('idle');
      })
      .catch(() => setStatus('error'));
  }, []);

  async function beginCheckout(productId: string) {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12 text-white">
      <h1 className="text-3xl font-semibold">Lowkey Mini App</h1>
      {searchParams.get('status') === 'success' && <p className="mt-3 text-emerald-400">Payment successful.</p>}
      {searchParams.get('status') === 'cancelled' && <p className="mt-3 text-amber-400">Payment cancelled.</p>}
      {status === 'loading' && <p className="mt-6 text-zinc-300">Loading products...</p>}
      {status === 'error' && <p className="mt-6 text-rose-400">Could not load products.</p>}

      <div className="mt-8 space-y-4">
        {products.map((product) => (
          <section key={product.id} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <h2 className="text-xl font-medium">{product.name}</h2>
            <p className="mt-2 text-zinc-300">{product.description}</p>
            <p className="mt-2 font-semibold">${(product.amountUsdCents / 100).toFixed(2)}</p>
            <button
              onClick={() => void beginCheckout(product.id)}
              className="mt-4 rounded-lg bg-amber-400 px-4 py-2 font-medium text-zinc-900"
            >
              Checkout
            </button>
          </section>
        ))}
      </div>
    </main>
  );
}
