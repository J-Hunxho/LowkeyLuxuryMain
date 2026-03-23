import { Reveal } from '@/components/ui/animated';
/**
 * Render the contact page with introductory copy and an application form.
 *
 * The layout is a two-column responsive grid: a left content block with eyebrow text,
 * headline, and supporting copy, and a right panel containing an application form with
 * fields for name, company, and a freeform "what needs to change" textarea, plus a submit button.
 * Both columns are wrapped with `Reveal` for animated entrance.
 *
 * @returns The JSX element for the contact page.
 */
export default function ContactPage() { return <div className="shell py-24"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><Reveal><p className="eyebrow mb-4">Apply to work</p><h1 className="font-serif text-5xl sm:text-6xl">For businesses ready for real infrastructure.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/58">Share the current bottleneck, the target state, and the operating environment. If the fit is right, the next move will be precise.</p></Reveal><Reveal delay={0.12} className="panel p-8 lg:p-10"><form className="space-y-6"><div><label className="mb-2 block text-sm text-white/58" htmlFor="name">Name</label><input id="name" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" /></div><div><label className="mb-2 block text-sm text-white/58" htmlFor="company">Company</label><input id="company" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" /></div><div><label className="mb-2 block text-sm text-white/58" htmlFor="scope">What needs to change</label><textarea id="scope" rows={6} className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" /></div><button type="submit" className="rounded-full bg-gold-400 px-7 py-3 text-sm font-medium text-black transition hover:bg-gold-300">Submit application</button></form></Reveal></div></div>; }
