import type { Metadata } from 'next';
import './globals.css';
import { SiteFrame } from '@/components/layout/site-frame';

export const metadata: Metadata = {
  title: 'Lowkey Luxury | Sleep Rich Infrastructure',
  description:
    'Lowkey Luxury by Jacob Young delivers business infrastructure, automation systems, and revenue architecture for operators who demand control.',
};

/**
 * Application root layout that sets HTML lang, global body classes, and wraps page content with SiteFrame.
 *
 * @param children - The page content to render inside the SiteFrame wrapper
 * @returns The root HTML element containing the application's body and layout
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
