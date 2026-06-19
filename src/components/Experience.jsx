import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Castle } from 'lucide-react';
import { experience, accentHex } from '../data/resume';
import SectionHeading from './ui/SectionHeading';

function TimelineNode({ job, index }) {
  const hex = accentHex[job.accent];
  const isLeft = index % 2 === 0;

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12">
      {/* rune node on the ley-line */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 18 }}
        className="absolute left-4 top-7 z-10 md:left-1/2 md:-translate-x-1/2"
      >
        <span className="relative grid h-4 w-4 place-items-center rounded-full" style={{ background: hex }}>
          <span className="absolute h-4 w-4 animate-ping rounded-full opacity-40" style={{ background: hex }} />
          <span className="h-1.5 w-1.5 rounded-full bg-obsidian-950" />
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`ml-12 md:ml-0 ${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}
      >
        <div className="rune-card ornament group relative overflow-hidden rounded-3xl p-6 sm:p-7">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-90"
            style={{ background: `linear-gradient(90deg, transparent, ${hex}, transparent)` }}
          />
          <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${isLeft ? 'md:justify-end' : ''}`}>
            <span
              className="rounded-full px-3 py-1 font-display text-[11px] uppercase tracking-wider"
              style={{ background: `${hex}1f`, color: hex }}
            >
              {job.period}
            </span>
          </div>

          <h3 className="mt-3 font-display text-xl font-bold text-parchment">{job.role}</h3>

          <div className={`mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-parchment-dim ${isLeft ? 'md:justify-end' : ''}`}>
            <span className="inline-flex items-center gap-1.5">
              <Castle className="h-3.5 w-3.5" style={{ color: hex }} />
              {job.company}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
          </div>

          <p className="mt-3 font-accent text-base italic leading-relaxed text-parchment-dim">{job.blurb}</p>

          <ul className="mt-4 space-y-2.5">
            {job.achievements.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: isLeft ? 12 : -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 text-left"
              >
                <span
                  className="mt-0.5 whitespace-nowrap rounded-md px-2 py-0.5 font-display text-xs font-bold ring-1 ring-inset ring-white/10"
                  style={{ color: hex, background: `${hex}14` }}
                >
                  {a.metric}
                </span>
                <span className="text-sm leading-relaxed text-parchment">{a.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.3', 'end 0.8'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative mx-auto max-w-[2200px] scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Chronicle"
        title="Five courts."
        highlight="One craft."
        description="A chronicle across banking, insurance, pharma, and academia — each chapter measured in outcomes, not output."
      />

      <div ref={ref} className="relative mt-16">
        {/* ley-line spine */}
        <div className="absolute left-4 top-0 h-full w-px bg-gold/15 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-px bg-gradient-to-b from-gold via-arcane to-emerald shadow-[0_0_12px_rgba(217,178,95,0.6)]"
          />
        </div>

        <div className="flex flex-col gap-12">
          {experience.map((job, i) => (
            <TimelineNode key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
