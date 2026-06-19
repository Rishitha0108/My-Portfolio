import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { education, specializations, accentHex } from '../data/resume';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-[2200px] scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Tomes"
        title="Tomes studied,"
        highlight="mastery earned"
        description="Formal grounding in computer science and engineering — sharpened into deep, applied AI expertise."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {education.map((edu, i) => {
          const hex = accentHex[edu.accent];
          return (
            <Reveal key={edu.degree} delay={i * 0.12} direction={i === 0 ? 'right' : 'left'}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rune-card ornament group relative h-full overflow-hidden rounded-3xl p-8"
              >
                <div
                  className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-45"
                  style={{ background: hex }}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-2xl ring-1 ring-white/10"
                    style={{ background: `${hex}1f`, color: hex }}
                  >
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug text-parchment">{edu.degree}</h3>
                    <p className="font-accent text-base italic" style={{ color: hex }}>{edu.school}</p>
                  </div>
                </div>
                <p className="relative mt-5 leading-relaxed text-parchment-dim">{edu.detail}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* sigils of specialization */}
      <Reveal delay={0.1}>
        <div className="rune-card ornament mt-6 rounded-3xl p-8">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-gold" />
            <h3 className="font-display text-base font-semibold uppercase tracking-wider text-parchment">
              Sigils of specialization
            </h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {specializations.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.04 }}
                className="cursor-default rounded-xl border border-gold/20 bg-gradient-to-r from-gold/[0.06] to-transparent px-4 py-2 text-sm text-parchment"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
