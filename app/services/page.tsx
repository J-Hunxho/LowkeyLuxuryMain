import { Reveal } from '@/components/ui/animated';

const engagements = [
  {
    tier: 'Engagement 01',
    title: 'Executive Infrastructure Audit',
    scope: 'System mapping, revenue leak analysis, tooling risk review, and a prioritized 90-day implementation blueprint.',
    delivery: 'One-time strategic package with leadership briefing and execution roadmap.',
  },
  {
    tier: 'Engagement 02',
    title: 'Core Architecture Deployment',
    scope: 'Build and integrate qualification, payment, fulfillment, and reporting systems aligned to operating cadence.',
    delivery: 'Project-based implementation with documentation and training handoff.',
  },
  {
    tier: 'Engagement 03',
    title: 'Managed Optimization Program',
    scope: 'Monthly performance operations: conversion testing, automation hardening, monitoring, and KPI review cycles.',
    delivery: 'Retainer model with iterative releases and governance check-ins.',
  },
  {
    tier: 'Engagement 04',
    title: 'Command Partner (Private)',
    scope: 'Embedded executive-level architecture partner for complex, high-growth environments requiring rapid strategic execution.',
    delivery: 'Quarterly private advisory + implementation leadership.',
  },
];

export default function ServicesPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="max-w-4xl">
        <p className="eyebrow mb-4">Engagement Portfolio</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Service architecture with boardroom-level clarity.</h1>
        <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
          Every engagement has scoped outcomes, explicit operating assumptions, and accountability checkpoints.
          You are never buying abstract creative work—you are investing in infrastructure performance.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {engagements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="panel p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-200">{item.tier}</p>
            <h2 className="mt-4 font-serif text-3xl">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{item.scope}</p>
            <p className="mt-5 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70">{item.delivery}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
