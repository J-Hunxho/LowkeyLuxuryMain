import { Reveal } from '@/components/ui/animated';

const blueprint = [
  {
    zone: 'Zone A',
    title: 'Intake & Qualification Mesh',
    items: ['Multi-source lead ingestion', 'Intent scoring logic', 'Segment-specific route rules', 'Automatic SLA timers'],
  },
  {
    zone: 'Zone B',
    title: 'Payment & Fulfillment Spine',
    items: ['Stripe Checkout + webhook workflows', 'Invoice and subscription event handling', 'Fulfillment orchestration', 'Failure and retry safeguards'],
  },
  {
    zone: 'Zone C',
    title: 'Ops Intelligence Command',
    items: ['Executive KPI cockpit', 'Exception and anomaly alerts', 'Role-based approvals', 'Compliance-ready event logs'],
  },
];

const governance = [
  'Least-privilege access controls across sensitive systems.',
  'Documented incident escalation playbooks for payment and delivery failures.',
  'Data minimization and retention schedules across customer and transaction data.',
  'Quarterly architecture reviews with roadmap recommendations.',
];

export default function ArchitecturePage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="max-w-4xl">
        <p className="eyebrow mb-4">Architecture</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Business Infrastructure Command Architecture</h1>
        <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
          This framework is engineered for founders and operators who need dependable execution under growth pressure.
          It prioritizes control, resilience, and observability over flashy complexity.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {blueprint.map((block, index) => (
          <Reveal key={block.title} delay={index * 0.08} className="panel p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-200">{block.zone}</p>
            <h2 className="mt-4 font-serif text-3xl">{block.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              {block.items.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-black/30 px-4 py-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-gold-400/10 via-transparent to-white/[0.01] p-8">
        <p className="eyebrow mb-3">Governance and risk posture</p>
        <h2 className="font-serif text-4xl">Built for durability, not temporary hype.</h2>
        <ul className="mt-6 space-y-4 text-sm leading-7 text-white/68 sm:text-base">
          {governance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
