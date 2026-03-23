import type { Metadata } from 'next';
import './globals.css';
import { SiteFrame } from '@/components/layout/site-frame';

export const metadata: Metadata = {
  title: 'Lowkey Luxury',
  description: 'Luxury business infrastructure, operator-grade systems, and revenue architecture.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
