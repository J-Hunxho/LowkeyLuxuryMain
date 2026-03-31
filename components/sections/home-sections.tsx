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
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
