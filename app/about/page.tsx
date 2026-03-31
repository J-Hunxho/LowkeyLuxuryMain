import { Reveal } from '@/components/ui/animated';

export default function AboutPage() {
  return (
    <div className="shell py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="eyebrow mb-4">Founder profile</p>
          <h1 className="font-serif text-5xl sm:text-6xl">Built in adversity. Proven in engineering. Focused on leadership.</h1>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-base leading-8 text-white/65 sm:text-lg">
          <p>
            Jacob Young is a self-taught technologist, systems builder, and high-accountability operator with a 3.8 GPA
            academic record and a relentless learning standard.
          </p>
          <p>
            His path began in poverty and included homelessness at age 14. That pressure forged the mindset now behind
            Lowkey Luxury: no excuses, no fragility, just disciplined execution and strategic resilience.
          </p>
          <p>
            After studying psychology in college, Jacob pivoted into engineering environments that demanded real output,
            including robotic engineering for Amazon and custom weld fabrication supporting major industrial programs such
            as Tesla-adjacent production work.
          </p>
          <p>
            Today he applies that same operating intensity to business systems—so founders can scale with control,
            confidence, and composure.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14 grid gap-5 rounded-[2rem] border border-gold-400/12 bg-white/[0.03] p-7 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-200">Identity</p>
          <p className="mt-3 font-serif text-3xl">Natural Leader</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-200">Method</p>
          <p className="mt-3 font-serif text-3xl">Systems Thinking</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-200">Promise</p>
          <p className="mt-3 font-serif text-3xl">Overcome + Execute</p>
        </div>
      </Reveal>
    </div>
  );
}
