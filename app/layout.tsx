import type { Metadata } from 'next';
import './globals.css';
import { SiteFrame } from '@/components/layout/site-frame';

export const metadata: Metadata = {
  title: 'Lowkey Luxury | Sleep Rich Infrastructure',
  description:
    'Lowkey Luxury by Jacob Young delivers business infrastructure, automation systems, and revenue architecture for operators who demand control.',
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
