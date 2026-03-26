import { Suspense } from 'react';
import { MiniAppStorefront } from '@/components/miniapp/storefront';

/**
 * Renders the MiniAppStorefront wrapped in React `Suspense`.
 *
 * @returns A React element that displays a fallback `<main>` with "Loading Mini App..." while `MiniAppStorefront` is loading, then renders the storefront.
 */
export default function MiniAppPage() {
  return (
    <Suspense fallback={<main className="px-6 py-12 text-white">Loading Mini App...</main>}>
      <MiniAppStorefront />
    </Suspense>
  );
}
