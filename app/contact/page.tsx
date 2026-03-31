import { Reveal } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lowkey Luxury',
  description: 'Apply to work with Lowkey Luxury for business infrastructure and automation systems.',
};

/**
 * Render the Contact page presenting a private application form and business contact details.
 *
 * The layout includes a left column with a headline, descriptive text, and business/contact info,
 * and a right column containing an application form (name, email, company, scope) with a submit button.
 *
 * @returns The JSX element for the Contact page containing the consultation application UI.
 */
export default function ContactPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-4">Private application</p>
          <h1 className="font-serif text-5xl sm:text-6xl">Request a system build consultation.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
            Share your current bottleneck, target business outcome, and timeline. If aligned, you will receive next-step
            instructions and availability options.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/65">
            <p>
              Business: <span className="text-white">Lowkey Luxury LLC</span>
            </p>
            <p>
              Founder: <span className="text-white">Jacob Young</span>
            </p>
            <p>
              Email:{' '}
              <a className="link-hover text-gold-200" href="mailto:contact@lowkey.luxury">
                contact@lowkey.luxury
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="panel p-8 lg:p-10">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-white/58" htmlFor="name">
                Name
              </label>
              <input id="name" autoComplete="name" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/58" htmlFor="email">
                Email
              </label>
              <input id="email" type="email" autoComplete="email" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/58" htmlFor="company">
                Company
              </label>
              <input id="company" autoComplete="organization" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/58" htmlFor="scope">
                Current bottleneck and desired outcome
              </label>
              <textarea id="scope" rows={6} className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-gold-400/40" />
            </div>
            <button type="submit" className="rounded-full bg-gold-400 px-7 py-3 text-sm font-medium text-black transition hover:bg-gold-300">
              Submit application
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
