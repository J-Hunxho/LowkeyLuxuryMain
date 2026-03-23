import { Reveal } from '@/components/ui/animated';
/**
 * Renders the About page layout for the site.
 *
 * The page includes an eyebrow label and large heading, three descriptive paragraphs,
 * and a panel with three labeled info blocks ("Position", "Approach", "Standard").
 *
 * @returns The About page React element containing headings, descriptive text, and the info panel.
 */
export default function AboutPage() { return <div className="shell py-24"><div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]"><Reveal><p className="eyebrow mb-4">About</p><h1 className="font-serif text-5xl sm:text-6xl">This is operator work, not freelance labor.</h1></Reveal><Reveal delay={0.12} className="space-y-6 text-lg leading-8 text-white/60"><p>Lowkey Luxury exists to install the systems ambitious companies need before growth becomes expensive.</p><p>The posture is selective, controlled, and execution-driven. The objective is simple: remove dependency, sharpen delivery, and create operational calm behind the brand.</p><p>No inflated storytelling. No performative agency language. Just disciplined design, reliable implementation, and infrastructure that respects serious businesses.</p></Reveal></div><Reveal className="mt-16 panel p-8 lg:p-12"><div className="grid gap-6 md:grid-cols-3"><div><p className="text-sm uppercase tracking-luxe text-gold-300/75">Position</p><p className="mt-4 font-serif text-3xl">Selective partner</p></div><div><p className="text-sm uppercase tracking-luxe text-gold-300/75">Approach</p><p className="mt-4 font-serif text-3xl">Calm precision</p></div><div><p className="text-sm uppercase tracking-luxe text-gold-300/75">Standard</p><p className="mt-4 font-serif text-3xl">Built to hold</p></div></div></Reveal></div>; }
