import { motion } from 'framer-motion';
import { impactMetrics, accentHex } from '../data/resume';
import SectionHeading from './ui/SectionHeading';
import CountUp from './ui/CountUp';
import Reveal from './ui/Reveal';

export default function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* full-bleed arcane glow band */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[60%] -translate-y-1/2 bg-magic-radial opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-[2200px] px-6">
        <SectionHeading
          eyebrow="Feats"
          title="The feats that"
          highlight="define the craft"
          description="Outcomes pulled straight from production — every figure tied to a measured benchmark, audit, or billing report."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {impactMetrics.map((m, i) => {
            const hex = accentHex[m.accent];
            return (
              <Reveal key={m.label} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rune-card ornament relative h-full overflow-hidden rounded-3xl p-7 text-center sm:p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 -bottom-12 mx-auto h-32 w-32 rounded-full opacity-25 blur-3xl"
                    style={{ background: hex }}
                  />
                  <div
                    className="relative font-display text-5xl font-bold sm:text-6xl"
                    style={{ color: hex, textShadow: `0 0 28px ${hex}66` }}
                  >
                    <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <div className="relative mt-3 text-sm font-medium text-parchment-dim">{m.label}</div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
