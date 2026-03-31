import Link from 'next/link';
import { Reveal } from '@/components/ui/animated';
import { SystemDiagram } from '@/components/sections/system-diagram';

const installs = [
  {
    id: 'I',
    title: 'Acquisition Infrastructure Install',
    description: 'Transforms your inbound chaos into a controlled qualification flow with executive-level routing logic.',
  },
  {
    id: 'II',
    title: 'Revenue System Install',
    description: 'Connects offer sequencing, Stripe payments, and fulfillment operations so conversion becomes predictable.',
  },
  {
    id: 'III',
    title: 'Command Layer Install',
    description: 'Installs operational oversight dashboards, automations, and escalation paths for leadership visibility.',
  },
];

const proofRows = [
  ['Pipeline response time', 'From hours to under 8 minutes'],
  ['Manual ops workload', 'Reduced by 40–70% after automation rollout'],
  ['Revenue visibility', 'Live funnel + checkout attribution in one view'],
];

const pricing = [
  ['Entry: Strategic Audit', '$1,500 one-time'],
  ['Core: System Build', '$8,000 – $18,000 project'],
  ['Recurring: Optimization', '$2,500 / month'],
  ['High-Ticket: Command Partner', '$35,000+ / quarter'],
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

export function HomeSections() {
  return (
    <>
      <section className="shell relative py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <Reveal className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/50 p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(212,175,55,0.22),transparent_42%)]" />
            <p className="eyebrow relative">Sleep Rich Doctrine</p>
            <h1 className="relative mt-5 max-w-4xl font-serif text-5xl leading-[0.9] sm:text-7xl lg:text-[6.1rem]">
              Your business should mint money while you sleep.
            </h1>
            <p className="relative mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              I build elite infrastructure and automation systems that convert demand, control operations, and compound
              revenue. This is engineered dominance, not digital decoration.
            </p>
            <div className="relative mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-300">
                Apply for Private Access
              </Link>
              <Link href="/systems" className="rounded-full border border-gold-400/35 px-8 py-3 text-sm text-gold-100 transition hover:border-gold-300/60 hover:bg-gold-300/10">
                See Revenue Systems
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="panel p-7">
            <p className="text-xs uppercase tracking-[0.23em] text-white/40">Scarcity status</p>
            <p className="mt-4 font-serif text-5xl text-gold-200">06 slots</p>
            <p className="mt-2 text-sm text-white/65">remaining for April 2026 build cycle</p>
            <div className="mt-7 space-y-3 text-sm text-white/70">
              <p>• Application review within 48 hours.</p>
              <p>• Built for operators doing $20k+/mo.</p>
              <p>• Selective intake to protect outcomes.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="rounded-[2rem] border border-gold-400/15 bg-white/[0.02] p-7">
            <p className="eyebrow mb-3">Authority</p>
            <h2 className="font-serif text-4xl">I architect infrastructure, not websites.</h2>
            <p className="mt-5 text-sm leading-7 text-white/64 sm:text-base">
              Lowkey Luxury is a U.S.-based business infrastructure studio led by Jacob Young. We install revenue systems,
              Stripe payment architectures, and automation command layers for growth-focused companies.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SystemDiagram />
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-20">
        <Reveal className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Infrastructure installs</p>
            <h2 className="font-serif text-4xl sm:text-6xl">Systems, engineered for revenue.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base">
            Engagements are architected as installable assets with documented logic, performance checkpoints, and team handoff.
          </p>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {installs.map((install, index) => (
            <Reveal key={install.title} delay={index * 0.08} className="panel relative overflow-hidden p-7">
              <div className="pointer-events-none absolute right-4 top-4 text-5xl font-serif text-gold-400/15">{install.id}</div>
              <h3 className="relative font-serif text-3xl">{install.title}</h3>
              <p className="relative mt-4 text-sm leading-7 text-white/63">{install.description}</p>
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

      <section className="shell py-14 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="panel p-8">
            <p className="eyebrow mb-3">Meet the Founder</p>
            <h2 className="font-serif text-5xl">Jacob Young</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/67 sm:text-base">
              <p>
                Self-taught tech strategist. 3.8 GPA. Systems builder with a psychology foundation and engineering-level
                execution discipline.
              </p>
              <p>
                Jacob overcame poverty and homelessness at age 14, graduated high school, entered college for psychology,
                and later pivoted into robotics engineering for Amazon and custom weld fabrication for Tesla-related and
                other major industrial programs.
              </p>
              <p>
                His leadership philosophy is direct: obstacles are data, not excuses. Build stronger systems, lead with
                courage, and make outcomes inevitable.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-white/10 bg-black/35 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Proof of execution</p>
            <div className="mt-6 space-y-4">
              {proofRows.map(([label, result]) => (
                <div key={label} className="rounded-xl border border-gold-400/12 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.13em] text-white/45">{label}</p>
                  <p className="mt-2 text-base text-gold-100">{result}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-20">
        <Reveal className="mb-8">
          <p className="eyebrow mb-3">Transparent pricing structure</p>
          <h2 className="font-serif text-4xl sm:text-6xl">Investment Paths</h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-4">
          {pricing.map(([tier, amount], index) => (
            <Reveal key={tier} delay={index * 0.06} className="rounded-[1.6rem] border border-gold-400/15 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-white/46">Tier {index + 1}</p>
              <p className="mt-4 font-serif text-2xl">{tier}</p>
              <p className="mt-4 text-lg text-gold-200">{amount}</p>
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
        <Reveal className="relative overflow-hidden rounded-[2.3rem] border border-gold-400/20 bg-black px-8 py-14 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.22),transparent_55%)]" />
          <p className="eyebrow relative mb-3">Selective access only</p>
          <h2 className="relative font-serif text-4xl sm:text-6xl">If you want elite outcomes, apply now.</h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/69 sm:text-base">
            This is not open access. Approved clients receive direct strategy, architecture, and execution support to build
            systems that generate revenue without founder exhaustion.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-300">
              Submit Application
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-8 py-3 text-sm text-white/84 transition hover:border-gold-400/40 hover:text-white">
              View Scope & Deliverables
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
