import { Reveal } from '@/components/ui/animated';

const terms = [
  'All services, subscriptions, and deliverables are provided subject to written scope and acceptance terms.',
  'Fees, billing cycles, and renewal logic are governed by the checkout and subscription terms presented at purchase.',
  'Use of this website must comply with applicable law and may not interfere with security, availability, or normal operation.',
  'Unauthorized use of proprietary content, branding, or system logic is prohibited.',
  'To the maximum extent permitted by law, Lowkey Luxury disclaims indirect or consequential damages and limits liability to fees paid for the applicable service period.',
  'These terms may be updated at any time by posting revised terms on this page.',
];

export default function TermsPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-6xl">Terms</h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">
          By accessing or using Lowkey Luxury services, you agree to the following baseline terms.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-6">
        {terms.map((term, index) => (
          <Reveal key={term} delay={index * 0.04} className="panel p-6 sm:p-8">
            <p className="text-sm leading-7 text-white/65 sm:text-base">{term}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
