import { Reveal } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lowkey Luxury',
  description: 'Privacy Policy for Lowkey Luxury and Stripe-enabled payment processing.',
};

const policySections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you submit directly, such as name, email, business details, project scope, and communication history.',
      'We may collect technical usage data (IP address, browser/device details, and navigation events) for analytics, performance, and security monitoring.',
      'Payments are processed by Stripe; we do not store full card numbers or payment credentials on our servers.',
    ],
  },
  {
    title: '2. How We Use Information',
    content: [
      'To evaluate applications, deliver services, issue invoices, process payments, and provide support.',
      'To maintain platform reliability, detect fraud, satisfy legal obligations, and improve client experience.',
    ],
  },
  {
    title: '3. Data Sharing',
    content: [
      'We share data only with service providers essential to operations (hosting, communications, analytics, and payment providers).',
      'We may disclose data when legally required or necessary to protect rights, security, and operational integrity.',
    ],
  },
  {
    title: '4. Data Retention and Security',
    content: [
      'Data is retained only as long as needed for contractual, legal, accounting, and security purposes.',
      'We use reasonable technical and organizational safeguards, but no method of data transmission or storage is absolutely secure.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'Depending on your location, you may request access, correction, deletion, or restriction of personal data processing.',
      'Requests can be sent to contact@lowkey.luxury.',
    ],
  },
  {
    title: '6. Contact',
    content: ['Business identity: Lowkey Luxury LLC (United States).', 'Privacy inquiries: contact@lowkey.luxury.'],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-6xl">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">Effective Date: March 30, 2026</p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-8">
        {policySections.map((section, index) => (
          <Reveal key={section.title} delay={index * 0.03} className="panel p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-white sm:text-3xl">{section.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/65 sm:text-base">
              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
