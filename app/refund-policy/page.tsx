import { Reveal } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Lowkey Luxury',
  description: 'Refund Policy for Lowkey Luxury consulting and infrastructure implementation services.',
};

const items = [
  'Strategic Audit (Entry tier) is refundable within 24 hours of purchase if no advisory call or deliverable has been provided.',
  'Core System Build projects require scheduling and custom implementation. Deposits are non-refundable once planning has begun or assets have been delivered.',
  'Monthly Optimization retainers can be canceled before the next billing cycle; partial month refunds are not provided for time already reserved or work delivered.',
  'High-ticket Command Partner engagements are bespoke and reserve executive capacity. These are non-refundable after contract execution unless otherwise stated in writing.',
  'If a billing error occurs, contact us within 7 days at contact@lowkey.luxury for review and correction.',
];

/**
 * Renders the Refund Policy page for Lowkey Luxury.
 *
 * Displays a header with "Legal", the "Refund Policy" title and effective date, then renders the listed refund statements with staggered reveal animations.
 *
 * @returns A React element representing the Refund Policy page.
 */
export default function RefundPolicyPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-6xl">Refund Policy</h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">Effective Date: March 30, 2026</p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-5">
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 0.04} className="panel p-6 sm:p-8">
            <p className="text-sm leading-7 text-white/65 sm:text-base">{item}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
