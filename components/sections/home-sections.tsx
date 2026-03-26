import Link from 'next/link';
import { Reveal } from '@/components/ui/animated';

const offerings = [
  ['Systems architecture', 'Operating layers that remove friction from fulfillment, sales, and delivery.'],
  ['Automation design', 'AI-assisted execution that preserves judgment while reducing operational drag.'],
  ['Revenue infrastructure', 'Payments, routing, notifications, and backend flows aligned to move cash cleanly.'],
];

const steps = [
  ['Audit', 'We identify the leaks, delays, and manual dependencies that cap growth.'],
  ['Design', 'We define the stack, logic, and operator controls before writing production code.'],
  ['Deploy', 'We implement, refine, and harden the system until it performs without supervision.'],
];

const outcomes = [
  'Lead routing that reaches decision-makers in seconds, not the next business day.',
  'Client fulfillment pipelines that eliminate ad-hoc follow-up and reduce owner dependency.',
  'Payment and delivery systems that feel invisible to the client and obvious to the operator.',
];

/**
 * Render the homepage's multi-section layout: hero, positioning, offerings, process, outcomes, and a final call-to-action with animated reveal effects.
 *
 * @returns A React fragment containing five stacked sections: a hero panel, a positioning panel (with links to /contact and /systems), an offerings grid, a "how it works" steps grid, an outcomes panel, and a contact call-to-action. Repeated cards are produced from internal arrays and revealed with staggered delays.
 */
export function HomeSections() {
  return (
    <>
      <section className="shell content-auto grid min-h-[calc(100vh-5rem)] items-end gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow mb-4 sm:mb-6">Lowkey luxury / business infrastructure</p>
            <h1 className="font-serif text-[3.25rem] leading-[0.95] text-white sm:text-7xl lg:text-[7.5rem]">
              We build systems that run while you don&apos;t.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/64 sm:mt-8 sm:text-xl sm:leading-8">
              Elite operators do not scale by adding effort. They scale by installing control.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="panel p-6 sm:p-8 lg:p-10">
          <p className="text-sm uppercase tracking-luxe text-white/40">Positioning</p>
          <div className="mt-8 space-y-4 text-sm text-white/72 sm:mt-10 sm:space-y-5 sm:text-base">
            <p>Private, selective, execution-first.</p>
            <p>Built for founders, agencies, and acquisition-minded teams that need serious infrastructure.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact" className="rounded-full border border-gold-400/25 px-6 py-3 text-center text-sm text-gold-100 transition hover:border-gold-300/50 hover:bg-gold-400/10">
              Apply to work
            </Link>
            <Link href="/systems" className="rounded-full px-6 py-3 text-center text-sm text-white/70 transition hover:text-white">
              View system stacks
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="shell content-auto py-14 sm:py-20">
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">What we build</p>
            <h2 className="font-serif text-3xl text-white sm:text-5xl">Infrastructure with presence.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Every layer is designed to feel quiet, direct, and impossible to mistake for commodity work.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {offerings.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.08} className="panel p-6 sm:p-8">
              <p className="text-sm text-gold-300">0{index + 1}</p>
              <h3 className="mt-5 font-serif text-2xl sm:mt-6 sm:text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/58 sm:text-base">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell content-auto py-14 sm:py-20">
        <Reveal className="mb-10">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="font-serif text-3xl sm:text-5xl">A clean path from complexity to control.</h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {steps.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.1} className="rounded-[1.75rem] border border-white/6 bg-white/[0.02] p-6 sm:rounded-[2rem] sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5 sm:pb-6">
                <h3 className="font-serif text-2xl sm:text-3xl">{title}</h3>
                <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-white/35 sm:text-sm sm:tracking-normal">Step 0{index + 1}</span>
              </div>
              <p className="pt-5 text-sm leading-7 text-white/58 sm:pt-6 sm:text-base">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell content-auto py-14 sm:py-20">
        <div className="panel grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <Reveal>
            <p className="eyebrow mb-3">Case-level outcomes</p>
            <h2 className="font-serif text-3xl sm:text-5xl">Results that compound after launch.</h2>
          </Reveal>

          <div className="space-y-4">
            {outcomes.map((item, index) => (
              <Reveal key={item} delay={index * 0.08} className="rounded-[1.25rem] border border-gold-400/10 bg-black/20 p-5 sm:rounded-[1.5rem] sm:p-6">
                <p className="text-sm leading-7 text-white/72 sm:text-base">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell content-auto py-16 sm:py-24">
        <Reveal className="rounded-[2rem] border border-gold-400/10 bg-gradient-to-br from-white/[0.05] to-gold-400/[0.04] px-6 py-12 text-center sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-16">
          <p className="eyebrow mb-3">Ready when the business is.</p>
          <h2 className="font-serif text-3xl sm:text-5xl">Built for companies that no longer tolerate improvisation.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:mt-6 sm:text-base">
            If the ambition is serious, the infrastructure should be too.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold-400 px-7 py-3 text-sm font-medium text-black transition hover:bg-gold-300 sm:mt-10">
            Start the application
          </Link>
        </Reveal>
      </section>
    </>
  );
}
