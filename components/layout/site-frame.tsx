'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/systems', label: 'Systems' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Apply' },
];

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-obsidian text-white">
      <div className="pointer-events-none fixed inset-0 bg-hero-radial opacity-90" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-2xl">
        <div className="shell flex h-20 items-center justify-between gap-4 sm:h-24 sm:gap-6">
          <Link href="/" className="group flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold-400/30 shadow-glow sm:h-14 sm:w-14">
              <Image
                src="/lowkey-logo.svg"
                alt="Lowkey Luxury logo"
                fill
                sizes="(max-width: 640px) 44px, 56px"
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="eyebrow truncate">Lowkey Luxury</p>
              <p className="truncate text-xs text-white/60 transition group-hover:text-white/80 sm:text-sm">Infrastructure over effort</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${active ? 'text-gold-200' : 'text-white/62 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-nav"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-gold-400/30 hover:text-white md:hidden"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-[2px] h-px w-4 bg-current transition ${isMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 top-[12px] h-px w-4 bg-current transition ${isMenuOpen ? '-translate-y-[4px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              id="mobile-site-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/5 md:hidden"
            >
              <div className="shell py-4">
                <div className="rounded-[1.5rem] border border-gold-400/10 bg-black/40 p-3 shadow-halo backdrop-blur-xl">
                  {navItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm transition ${active ? 'bg-gold-400/10 text-gold-200' : 'text-white/72 hover:bg-white/[0.04] hover:text-white'}`}
                      >
                        <span>{item.label}</span>
                        <span className="text-white/28">/</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-white/5 py-10">
        <div className="shell flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Built for operators who value permanence.</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link href="/privacy-policy" className="link-hover">
              Privacy Policy
            </Link>
            <span className="text-white/25">|</span>
            <Link href="/terms" className="link-hover">
              Terms
            </Link>
            <span className="text-white/25">|</span>
            <Link href="/contact" className="link-hover">
              Contact
            </Link>
          </div>
          <a href="mailto:contact@lowkey.luxury" className="link-hover text-white/55">
            contact@lowkey.luxury
          </a>
        </div>
      </footer>
    </div>
  );
}
