import { Reveal } from '@/components/ui/animated';

const policySections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us, including your name, email address, company details, project requirements, and any other information submitted through our forms or communications.',
      'We also collect limited technical information automatically, such as IP address, browser type, pages visited, referral source, and device information, to improve platform reliability, security, and performance.',
      'When purchases or subscriptions are made, payment information is processed by Stripe. We do not store full card numbers or sensitive payment credentials on our servers.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use your information to deliver services, manage client relationships, process payments, provide support, communicate updates, and improve our systems.',
      'We may use data for analytics, fraud prevention, legal compliance, and protection of our rights, users, and business operations.',
      'We do not sell your personal information.',
    ],
  },
  {
    title: '3. Payments and Stripe',
    content: [
      'All payment transactions are handled by Stripe as our payment processor and financial infrastructure partner.',
      "Stripe may collect and process payment-related personal data subject to Stripe's own privacy practices and legal obligations.",
      'By completing a payment through our platform, you acknowledge and agree that payment processing is governed by Stripe\'s terms and privacy policy in addition to ours.',
    ],
  },
  {
    title: '4. Legal Bases for Processing',
    content: [
      'We process personal data where necessary to perform a contract, pursue legitimate interests, comply with legal obligations, and where required, based on your consent.',
    ],
  },
  {
    title: '5. Data Sharing',
    content: [
      'We share information only with service providers and partners necessary to operate our business, such as hosting providers, analytics tools, communications infrastructure, and payment processors.',
      'We may disclose information when required by law, legal process, or to protect security, rights, and operational integrity.',
    ],
  },
  {
    title: '6. Data Retention',
    content: [
      'We retain personal data only as long as reasonably necessary for the purposes described in this policy, including contractual, legal, accounting, and security requirements.',
    ],
  },
  {
    title: '7. Security',
    content: [
      'We apply appropriate technical and organizational safeguards to protect personal information against unauthorized access, alteration, disclosure, or destruction.',
      'No method of transmission or storage is completely secure. We therefore cannot guarantee absolute security.',
    ],
  },
  {
    title: '8. Your Rights',
    content: [
      'Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or object to processing of your personal information, and to request data portability.',
      'To exercise applicable rights, contact us at contact@lowkey.luxury.',
    ],
  },
  {
    title: '9. Third-Party Services and Links',
    content: [
      'Our website may contain links to third-party sites or services. We are not responsible for the privacy practices of those external services.',
    ],
  },
  {
    title: "10. Children's Privacy",
    content: [
      'Our services are not directed to children under 13, and we do not knowingly collect personal data from children under 13.',
    ],
  },
  {
    title: '11. Changes to This Privacy Policy',
    content: [
      'We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised effective date.',
    ],
  },
  {
    title: '12. Contact',
    content: [
      'If you have questions about this Privacy Policy or your personal data, contact us at contact@lowkey.luxury.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-6xl">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">Effective Date: March 25, 2026</p>
        <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
          Lowkey Luxury (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy and handling your data with discretion and care.
        </p>
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
