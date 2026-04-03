import { Reveal } from '@/components/ui/animated';

const systems = [
  {
    name: 'Acquisition Command System',
    summary: 'Transforms inbound attention into qualified, routed opportunities with strict response-time governance.',
    layers: ['Positioned landing infrastructure', 'Qualification and scoring logic', 'CRM auto-routing', 'Real-time leadership alerts'],
  },
  {
    name: 'Revenue Continuity System',
    summary: 'Protects cash flow by integrating Stripe events, offer sequencing, and resilient fulfillment orchestration.',
    layers: ['Checkout architecture', 'Webhook event automation', 'Delivery orchestration', 'Retention and dunning flows'],
  },
  {
    name: 'Operational Intelligence System',
    summary: 'Makes leadership decision quality measurable through centralized telemetry and exception visibility.',
    layers: ['KPI instrumentation', 'Role-based action queues', 'Escalation workflows', 'Audit-ready logs'],
  },
];

export default function SystemsPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="max-w-4xl">
        <p className="eyebrow mb-4">Installed Systems</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Revenue infrastructure engineered like mission-critical software.</h1>
        <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
          Each system is designed as a durable business asset with explicit controls, failure paths, and operator visibility.
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {systems.map((system, index) => (
          <Reveal key={system.name} delay={index * 0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 lg:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-200">System 0{index + 1}</p>
            <h2 className="mt-4 font-serif text-4xl">{system.name}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-base">{system.summary}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {system.layers.map((layer) => (
                <div key={layer} className="rounded-xl border border-gold-400/15 bg-black/25 p-4 text-center text-sm text-white/72">
                  {layer}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
