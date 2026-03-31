import { Reveal } from '@/components/ui/animated';

const systems = [
  {
    name: 'Acquisition Control System',
    layers: ['Positioned landing pages', 'Qualification logic', 'CRM routing', 'Executive alerts'],
  },
  {
    name: 'Revenue Continuity System',
    layers: ['Stripe architecture', 'Offer sequencing', 'Fulfillment automations', 'Churn prevention logic'],
  },
  {
    name: 'Operational Intelligence System',
    layers: ['Team task orchestration', 'KPI instrumentation', 'Exception handling', 'Decision dashboards'],
  },
];

/**
 * Render the Systems page showing installed systems and their layers as styled cards.
 *
 * @returns The React element for the page, including a header section and a list of system cards that display each system's name and its layers as tiles.
 */
export default function SystemsPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <Reveal className="max-w-4xl">
        <p className="eyebrow mb-4">Installed systems</p>
        <h1 className="font-serif text-5xl sm:text-6xl">Revenue infrastructure that behaves like an asset.</h1>
        <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
          These are composable system environments engineered for control, speed, and long-term reliability.
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {systems.map((system, index) => (
          <Reveal key={system.name} delay={index * 0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 lg:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-200">System 0{index + 1}</p>
            <h2 className="mt-4 font-serif text-4xl">{system.name}</h2>
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
