import { Reveal } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Lowkey Luxury',
  description: 'Terms of Service for Lowkey Luxury infrastructure and automation services.',
};

const terms = [
  {
    title: '1) Services',
    detail:
      'Lowkey Luxury provides business infrastructure consulting, system architecture, implementation, and optimization services as defined in approved scopes and invoices.',
  },
  {
    title: '2) Payment Terms',
    detail:
      'Project and retainer fees are billed in advance unless otherwise stated in writing. Payment processing may be handled through Stripe and is subject to Stripe checkout terms.',
  },
  {
    title: '3) Client Responsibilities',
    detail:
      'Clients are responsible for timely feedback, required account access, and accurate business information. Delays in these inputs may affect delivery timelines.',
  },
  {
    title: '4) Intellectual Property',
    detail:
      'Upon full payment, clients receive usage rights to final deliverables as outlined in the agreement. Pre-existing frameworks, templates, and internal methods remain property of Lowkey Luxury.',
  },
  {
    title: '5) Refunds and Cancellations',
    detail:
      'Refund eligibility follows the published Refund Policy. Custom work already delivered or substantially performed is generally non-refundable.',
  },
  {
    title: '6) Limitation of Liability',
    detail:
      'To the maximum extent permitted by law, liability is limited to the amount paid for the applicable engagement period. No guarantee of specific revenue outcomes is made.',
  },
  {
    title: '7) Contact',
    detail: 'Questions regarding these terms can be sent to contact@lowkey.luxury.',
  },
];

export default function TermsPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-6xl">Terms of Service</h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">Effective Date: March 30, 2026</p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-6">
        {terms.map((term, index) => (
          <Reveal key={term.title} delay={index * 0.04} className="panel p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-white sm:text-3xl">{term.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">{term.detail}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
