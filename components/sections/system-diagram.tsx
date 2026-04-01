import type { CSSProperties } from 'react';

const nodes = [
  { id: 'lead', label: 'Lead Signal', x: 12, y: 22 },
  { id: 'qualify', label: 'Qualification Engine', x: 42, y: 12 },
  { id: 'offer', label: 'Offer Routing', x: 74, y: 26 },
  { id: 'checkout', label: 'Stripe Checkout', x: 68, y: 58 },
  { id: 'delivery', label: 'Delivery System', x: 40, y: 74 },
  { id: 'retention', label: 'Retention Loops', x: 14, y: 58 },
];

const links = [
  ['lead', 'qualify'],
  ['qualify', 'offer'],
  ['offer', 'checkout'],
  ['checkout', 'delivery'],
  ['delivery', 'retention'],
  ['retention', 'lead'],
  ['qualify', 'checkout'],
  ['offer', 'delivery'],
] as const;

function getNode(id: string) {
  return nodes.find((node) => node.id === id);
}

export function SystemDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-gold-400/20 bg-black/40 p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_50%)]" />
      <div className="relative h-[360px] w-full">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {links.map(([from, to]) => {
            const a = getNode(from);
            const b = getNode(to);
            if (!a || !b) {
              return null;
            }

            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(212,175,55,0.34)"
                strokeWidth="0.45"
                strokeDasharray="1.5 1.2"
              />
            );
          })}
        </svg>

        {nodes.map((node, index) => (
          <div
            key={node.id}
            className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-black/75 p-2.5 text-center text-[11px] text-white/80 shadow-halo"
            style={{ '--delay': `${index * 150}ms`, left: `${node.x}%`, top: `${node.y}%` } as CSSProperties}
          >
            <div className="mb-1 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
            {node.label}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/42">Revenue topology / live architecture map</p>
    </div>
  );
}
