import type { Metadata } from 'next';
import './globals.css';
import { SiteFrame } from '@/components/layout/site-frame';

export const metadata: Metadata = {
  title: 'Lowkey Luxury',
  description: 'Luxury business infrastructure, operator-grade systems, and revenue architecture.',
};

/**
 * Provides the application's root HTML structure and global layout wrapper.
 *
 * @param children - Page content to render inside the layout
 * @returns The root <html lang="en"> element containing a <body> with global classes and a SiteFrame that wraps `children`
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
