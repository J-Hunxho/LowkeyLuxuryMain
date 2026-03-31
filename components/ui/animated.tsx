'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
/**
 * Animates its children into view with a fade-and-rise motion when they enter the viewport.
 *
 * @param children - Elements to render inside the animated container
 * @param delay - Delay in seconds before the animation starts (defaults to 0)
 * @param className - Additional CSS class names applied to the wrapper element
 * @returns A motion.div element that fades in and moves upward when scrolled into view
 */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay, ease: [0.22,1,0.36,1] }} className={className}>{children}</motion.div>;
}
