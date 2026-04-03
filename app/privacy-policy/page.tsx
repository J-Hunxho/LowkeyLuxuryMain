import { Reveal } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lowkey Luxury',
  description: 'Privacy and payment-data policy for Lowkey Luxury, including Stripe processing disclosures.',
};

const sections = [
  {
    title: '1. Scope and Business Identity',
    bullets: [
      'This policy applies to Lowkey Luxury LLC, a U.S.-based business infrastructure management studio.',
      'It covers personal information collected through lowkey.luxury pages, applications, email communication, and service delivery workflows.',
    ],
  },
  {
    title: '2. Data Categories We Process',
    bullets: [
      'Identity and contact data (name, email, company, role, and submitted project details).',
      'Service operations data (project communications, implementation records, and support requests).',
      'Technical data (IP address, browser information, cookie/session metadata, and anti-fraud signals).',
      'Transaction metadata (invoice IDs, payment status, and billing country) from Stripe events.',
    ],
  },
  {
    title: '3. Stripe Payment Compliance Notice',
    bullets: [
      'Payments are processed by Stripe, Inc. and/or its affiliated entities as our payment processor.',
      'Cardholder data is collected and processed directly by Stripe-hosted or Stripe-secured flows; Lowkey Luxury does not store full PAN/card numbers or CVC values.',
      'We use Stripe webhooks and API metadata strictly for billing, fraud prevention, reconciliation, and fulfillment workflows.',
      'Processing of payment information is also governed by Stripe\'s own privacy terms and PCI-DSS control environment.',
    ],
  },
  {
    title: '4. Why We Process Personal Information',
    bullets: [
      'To review applications, execute contracts, deliver infrastructure services, and provide client support.',
      'To operate secure billing and subscription processes, including payment recovery and invoice administration.',
      'To maintain platform reliability, monitor abuse, and meet legal, tax, and accounting obligations.',
    ],
  },
  {
    title: '5. Sharing and Subprocessors',
    bullets: [
      'We share data only with vendors necessary for hosting, communications, analytics, security monitoring, and payment operations.',
      'We require vendors to process data under contractual confidentiality and security obligations.',
      'We may disclose information when required by law, legal process, or to protect rights, users, or infrastructure security.',
    ],
  },
  {
    title: '6. Retention, Security, and Access Controls',
    bullets: [
      'We retain data only for as long as necessary for service delivery, dispute handling, legal retention, and operational security.',
      'Controls include access limitation, environment-variable based secret handling, and event logging for critical payment workflows.',
      'No internet transmission or storage mechanism is absolutely secure; we continuously improve technical and organizational safeguards.',
    ],
  },
  {
    title: '7. Your Privacy Rights',
    bullets: [
      'Depending on jurisdiction, you may request access, correction, deletion, portability, or restriction of processing.',
      'You may object to certain processing where applicable and request details on subprocessors used for your engagement.',
      'To submit a request, email contact@lowkey.luxury. We may verify identity before fulfilling requests.',
    ],
  },
  {
    title: '8. International Transfers',
    bullets: [
      'If data is transferred across borders, we apply reasonable contractual and technical safeguards appropriate to the transfer context.',
      'Service providers may process data in the United States or other jurisdictions where they operate secure infrastructure.',
    ],
  },
  {
    title: '9. Policy Updates and Contact',
    bullets: [
      'We may update this policy when services, regulations, or processors change. Material updates will be posted with a revised effective date.',
      'Contact: contact@lowkey.luxury | Lowkey Luxury LLC (United States).',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-6xl">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">Effective Date: April 3, 2026</p>
        <p className="mt-3 text-sm leading-7 text-white/55 sm:text-base">
          This policy is drafted for operational clarity and platform compliance posture; it is not individualized legal advice.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-7">
        {sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 0.03} className="panel p-6 sm:p-8">
            <h2 className="font-serif text-2xl sm:text-3xl">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/67 sm:text-base">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
