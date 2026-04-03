import Link from 'next/link';
import { Reveal } from '@/components/ui/animated';

const pillars = [
  {
    title: 'Demand Intelligence Layer',
    copy: 'Unify paid, referral, and organic signals into one qualification fabric. Every lead is scored, routed, and timestamped in under sixty seconds.',
  },
  {
    title: 'Revenue Infrastructure Layer',
    copy: 'Engineer checkout architecture, Stripe lifecycle events, dunning fallback, and delivery automation as one connected transaction system.',
  },
  {
    title: 'Command & Governance Layer',
    copy: 'Equip leadership with operating telemetry, exception alerts, and escalation paths so execution quality scales with growth.',
  },
];

const outcomes = [
  ['Average response latency', '↓ to < 8 minutes'],
  ['Manual handoff burden', '↓ by 40–70%'],
  ['Funnel attribution blind spots', 'eliminated'],
  ['Executive decision latency', '↓ by 52%'],
];

const architectureStages = [
  {
    phase: 'Phase 01',
    name: 'Diagnostic + Blueprint',
    detail: 'Business model decomposition, leakage mapping, data topology, and priority matrix for the first 90 days.',
  },
  {
    phase: 'Phase 02',
    name: 'Core Install',
    detail: 'Acquisition, payments, delivery, and reporting deployed with governance standards and role-based controls.',
  },
  {
    phase: 'Phase 03',
    name: 'Optimization Flywheel',
    detail: 'Continuous tuning across conversion, retention, and operational velocity with monthly architecture reviews.',
  },
];

export function HomeSections() {
  return (
    <>
      <section className="shell py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal className="relative overflow-hidden rounded-[2.2rem] border border-gold-400/25 bg-black/55 p-8 shadow-halo sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(212,175,55,0.24),transparent_40%)]" />
            <p className="eyebrow relative">Lowkey Luxury · Infrastructure Management</p>
            <h1 className="relative mt-4 font-serif text-5xl leading-[0.9] sm:text-7xl lg:text-[6.4rem]">
              Luxury aesthetics.
              <br />
              Enterprise control.
            </h1>
            <p className="relative mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Lowkey Luxury architects business infrastructure ecosystems for operators that need precision, velocity, and discretion.
              We convert fragmented operations into an orchestrated machine that protects margin and compounds growth.
            </p>
            <div className="relative mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-300">
                Apply for Private Buildout
              </Link>
              <Link href="/architecture" className="rounded-full border border-gold-400/35 px-8 py-3 text-sm text-gold-100 transition hover:border-gold-300/60 hover:bg-gold-300/10">
                View Architecture Model
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="panel p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Current implementation window</p>
            <p className="mt-4 font-serif text-5xl text-gold-200">05 slots</p>
            <p className="mt-2 text-sm text-white/64">for April–May 2026 deployment cycle</p>
            <div className="mt-7 space-y-3 text-sm text-white/70">
              <p>• Built for businesses at $20k+/month revenue.</p>
              <p>• Direct founder-level architecture oversight.</p>
              <p>• Security and compliance-forward build standards.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-20">
        <Reveal className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Infrastructure pillar model</p>
            <h2 className="font-serif text-4xl sm:text-6xl">A sophisticated operating stack, not a brochure site.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base">
            Every layer is designed to interlock: acquisition intelligence, payment orchestration, and command governance.
          </p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08} className="panel p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-gold-200">Layer 0{index + 1}</p>
              <h3 className="mt-4 font-serif text-3xl">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{pillar.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-14 lg:py-20">
        <div className="grid gap-7 rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <Reveal>
            <p className="eyebrow mb-3">Transformation outcomes</p>
            <h2 className="font-serif text-4xl sm:text-5xl">What changes after the install.</h2>
            <p className="mt-5 text-sm leading-7 text-white/62 sm:text-base">
              We do not promise vanity metrics. We engineer measurable control improvements in response time, payment reliability, and executive clarity.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {outcomes.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-gold-400/15 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-white/45">{label}</p>
                <p className="mt-3 text-xl text-gold-100">{value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-20">
        <Reveal className="mb-8">
          <p className="eyebrow mb-3">Delivery architecture</p>
          <h2 className="font-serif text-4xl sm:text-6xl">Three-phase infrastructure lifecycle.</h2>
        </Reveal>
        <div className="space-y-5">
          {architectureStages.map((stage, index) => (
            <Reveal key={stage.name} delay={index * 0.06} className="rounded-[1.6rem] border border-white/10 bg-black/35 p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-200">{stage.phase}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-white/40">Business Infrastructure Management</p>
              </div>
              <h3 className="mt-4 font-serif text-3xl">{stage.name}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{stage.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
