import { Suspense } from 'react';
import { MiniAppStorefront } from '@/components/miniapp/storefront';

export default function MiniAppPage() {
  return (
    <Suspense fallback={<main className="px-6 py-12 text-white">Loading Mini App...</main>}>
      <MiniAppStorefront />
    </Suspense>
  );
}
