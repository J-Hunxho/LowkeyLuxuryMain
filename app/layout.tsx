import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { SiteFrame } from '@/components/layout/site-frame';
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400','500','600','700'] });
export const metadata: Metadata = { title: 'Lowkey Luxury', description: 'Luxury business infrastructure, operator-grade systems, and revenue architecture.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable} font-sans antialiased`}><SiteFrame>{children}</SiteFrame></body></html>;
}
