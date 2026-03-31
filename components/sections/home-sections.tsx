import Link from 'next/link';
import { Reveal } from '@/components/ui/animated';

const installs = [
  {
    title: 'Signal-to-Close Infrastructure',
    summary: 'Capture, qualify, and route buyers into the right offer with zero lag between intent and action.',
    points: ['Multi-step qualification funnels', 'CRM + automation orchestration', 'Executive visibility dashboards'],
  },
  {
    title: 'Revenue Control Systems',
    summary: 'Checkout, fulfillment, retention, and escalation layers engineered to keep cash flow stable.',
    points: ['Stripe lifecycle automations', 'Delivery handoff logic', 'Retention and churn guardrails'],
  },
  {
    title: 'Operator Command Environment',
    summary: 'A private control layer for leadership decisions, team actions, and performance accountability.',
    points: ['Role-based command surfaces', 'Real-time alerts & approvals', 'Audit-ready activity records'],
  },
];

const metrics = [
  { label: 'Lead response lag', value: '-83%', detail: 'after routing automations are installed' },
  { label: 'Manual fulfillment load', value: '-61%', detail: 'through workflow architecture and QA gates' },
  { label: 'Revenue visibility', value: '+100%', detail: 'when payment, delivery, and reporting connect' },
];

const pricingTiers = [
  {
    name: 'Entry: Strategic Audit',
    price: '$1,500',
    cadence: 'one-time',
    description: 'For founders who need architectural clarity before spending more on tools or people.',
  },
  {
    name: 'Core: System Build',
    price: '$8,000 – $18,000',
    cadence: 'project',
    description: 'Design + implementation of the core acquisition, revenue, and operational infrastructure.',
  },
  {
    name: 'Recurring: Optimization',
    price: '$2,500/mo',
    cadence: 'monthly',
    description: 'Performance tuning, automations, reporting refinement, and system reliability maintenance.',
  },
  {
    name: 'High-Ticket: Command Partner',
    price: '$35,000+',
    cadence: 'quarter',
    description: 'Private infrastructure partnership for companies demanding full-stack operating control.',
  },
];

/**
 * Renders the home page sections: hero, metrics, authority/positioning, infrastructure installs, founder bio, pricing, and the private-engagement CTA.
 *
 * @returns The composed JSX element containing the landing page's sectioned layout and content cards.
 */
export function HomeSections() {
  return (
    <>
      <section className="shell grid min-h-[calc(100vh-5rem)] gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
        <Reveal className="space-y-8">
          <p className="eyebrow">Sleep Rich doctrine / elite infrastructure</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] sm:text-7xl lg:text-[6.5rem]">
            Build once. Rule quietly. <span className="text-gold-300">Sleep Rich.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/65">
            I architect business infrastructure and automation systems that keep revenue moving even when you are offline.
            Not hype. Not templates. Just control, leverage, and compound results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-black transition hover:bg-gold-300">
              Request Private Access
            </Link>
            <Link href="/systems" className="rounded-full border border-gold-400/35 px-7 py-3 text-sm text-gold-100 transition hover:border-gold-300/60 hover:bg-gold-300/10">
              Explore Infrastructure Installs
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="panel relative overflow-hidden p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gold-300/15 to-transparent" />
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">Selective intake</p>
          <p className="mt-5 font-serif text-4xl text-gold-200">7 client slots</p>
          <p className="mt-2 text-sm text-white/65">for Q2 2026 implementation calendar</p>
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-white/70">
            <p>• Built for founders, operators, and executive teams.</p>
            <p>• Applications reviewed within 48 hours.</p>
            <p>• Engagement requires operational readiness.</p>
          </div>
        </Reveal>
      </section>

      <section className="shell py-14 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">{metric.label}</p>
              <p className="mt-4 font-serif text-5xl text-gold-200">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-white/60">{metric.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-14 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow mb-4">Authority positioning</p>
            <h2 className="font-serif text-4xl sm:text-6xl">Infrastructure Architect. Revenue Systems Operator.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              I do not sell generic web design. I install business systems: automation, backend logic, payment flows, and
              command architecture that remove bottlenecks and create dependable execution at scale.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-gold-300/10 via-transparent to-white/[0.02] p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-200">Business Description</p>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Lowkey Luxury is a U.S.-based business infrastructure and automation studio led by Jacob Young. Services
              include strategic audits, system architecture, implementation, and ongoing optimization for revenue-focused
              companies.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Deliverables can include funnel logic, Stripe payment systems, CRM automations, dashboards, workflow maps,
              and operator training documentation based on engagement scope.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-24">
        <Reveal className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Infrastructure installs</p>
            <h2 className="font-serif text-4xl sm:text-6xl">Systems, not services.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base">
            Every engagement is engineered as an installed revenue system with clear ownership, metrics, and operational handoff.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {installs.map((install, index) => (
            <Reveal key={install.title} delay={index * 0.08} className="panel p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-200">Install 0{index + 1}</p>
              <h3 className="mt-5 font-serif text-3xl">{install.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{install.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {install.points.map((point) => (
                  <li key={point} className="rounded-xl border border-white/10 bg-black/25 px-4 py-2">{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-14 lg:py-24">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-3">Meet the Founder</p>
            <h2 className="font-serif text-4xl sm:text-5xl">Jacob Young</h2>
            <p className="mt-6 text-base leading-8 text-white/62">
              Self-taught tech builder. 3.8 GPA scholar. Systems designer with a psychology foundation and an engineering
              execution mindset.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 text-sm leading-7 text-white/68 sm:text-base">
            <p>
              Jacob grew up in poverty and survived homelessness at just 14. He finished high school, entered college for
              psychology, then pivoted into advanced engineering pathways to master real-world systems.
            </p>
            <p>
              His background includes robotic engineering work for Amazon and custom weld fabrication across major
              manufacturing programs, including projects connected to Tesla and other global names.
            </p>
            <p>
              The outcome: a founder who leads from adversity, executes with precision, and builds infrastructure that
              performs under pressure. The standard is simple—overcome every obstacle, then architect a system that makes
              it easier for the next team to win.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-24">
        <Reveal className="mb-10">
          <p className="eyebrow mb-3">Transparent pricing structure</p>
          <h2 className="font-serif text-4xl sm:text-6xl">Investment Paths</h2>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06} className="rounded-[1.8rem] border border-gold-400/14 bg-black/25 p-7">
              <p className="text-sm uppercase tracking-[0.15em] text-white/45">{tier.cadence}</p>
              <h3 className="mt-3 font-serif text-3xl">{tier.name}</h3>
              <p className="mt-4 text-3xl font-semibold text-gold-200">{tier.price}</p>
              <p className="mt-4 text-sm leading-7 text-white/64">{tier.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-16">
        <Reveal className="rounded-[2.2rem] border border-gold-400/20 bg-gradient-to-br from-gold-400/15 via-black to-black px-8 py-14 text-center">
          <p className="eyebrow mb-3">Private engagement only</p>
          <h2 className="font-serif text-4xl sm:text-6xl">If your company is serious, apply now.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            Access is intentionally limited. If accepted, you receive direct strategic involvement and implementation.
            If not, you will still receive one strategic insight to apply immediately.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-300">
              Start Application
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-8 py-3 text-sm text-white/85 transition hover:border-gold-400/40 hover:text-white">
              Review Engagement Scope
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
