import { Reveal } from '@/components/ui/animated';

const engagements = [
  {
    title: 'Infrastructure Audit',
    scope: 'Architecture review, revenue leak detection, tooling map, and 30-day action plan.',
    delivery: 'One-time advisory engagement with implementation blueprint.',
  },
  {
    title: 'Core Revenue System Build',
    scope: 'End-to-end design and deployment of intake, checkout, fulfillment, and dashboard control.',
    delivery: 'Project-based implementation with documented handoff.',
  },
  {
    title: 'Optimization Retainer',
    scope: 'Continuous performance tuning, automation upgrades, QA checks, and reporting enhancements.',
    delivery: 'Monthly recurring advisory + execution support.',
  },
  {
    title: 'Command Partner Tier',
    scope: 'Embedded strategic and technical leadership for high-growth companies with complex operations.',
    delivery: 'Quarterly high-ticket private engagement.',
  },
];

/**
 * Render the Services page with a header and a grid of engagement cards showing scope and delivery details.
 *
 * @returns The JSX element for the Services page containing an intro section and a responsive grid of engagement panels.
 */
export default function ServicesPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="max-w-3xl">
        <p className="eyebrow mb-4">Engagement scope</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Clear services. Concrete deliverables.</h1>
        <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
          Every offer has defined outputs, timeline expectations, and operational boundaries to keep execution transparent.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {engagements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="panel p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-200">Engagement 0{index + 1}</p>
            <h2 className="mt-4 font-serif text-3xl">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{item.scope}</p>
            <p className="mt-5 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70">{item.delivery}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
