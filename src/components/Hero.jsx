import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ScrollText, Mail, Sparkle } from 'lucide-react';
import { profile, stats } from '../data/resume';
import Embers from './effects/Embers';
import Relic3D from './effects/Relic3D';
import MagneticButton from './ui/MagneticButton';
import CountUp from './ui/CountUp';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const sigils = [
  { label: 'LangGraph', className: 'left-[5%] top-[24%]', accent: 'text-gold' },
  { label: 'RAG', className: 'right-[7%] top-[18%]', accent: 'text-arcane' },
  { label: 'LLaMA 3', className: 'left-[10%] bottom-[22%]', accent: 'text-emerald' },
  { label: 'GPT-4o', className: 'right-[9%] bottom-[26%]', accent: 'text-ember' },
];

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <Embers />

      {/* the 3D relic — full-bleed canvas so the crystal & its glow never clip a box edge */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Relic3D className="h-full w-full opacity-90" />
      </div>

      {/* radial scrim so the name commands the hierarchy over the glowing relic */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[6] h-[88vmin] w-[88vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(8,6,15,0.80) 0%, rgba(8,6,15,0.5) 36%, rgba(8,6,15,0) 68%)',
        }}
      />

      {/* floating discipline sigils */}
      {!reduced &&
        sigils.map((s, i) => (
          <motion.div
            key={s.label}
            className={`absolute z-10 hidden lg:block ${s.className}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            transition={{
              opacity: { delay: 1.1 + i * 0.15, duration: 0.6 },
              scale: { delay: 1.1 + i * 0.15, duration: 0.6 },
              y: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <span className={`rune-card rounded-full px-4 py-2 font-display text-[11px] uppercase tracking-widest ${s.accent}`}>
              {s.label}
            </span>
          </motion.div>
        ))}

      <motion.div style={reduced ? {} : { y, opacity }} className="relative z-20 mx-auto w-full max-w-[2200px] px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.div variants={item}>
            <span className="rune-card inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-parchment-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              Available for AI / ML engineering roles
            </span>
          </motion.div>

          <motion.span variants={item} className="rubric mt-7">
            <Sparkle className="h-3.5 w-3.5" /> {profile.role}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl font-bold leading-[1.0] text-parchment drop-shadow-[0_2px_30px_rgba(0,0,0,0.7)] sm:text-7xl md:text-[5.4rem]"
          >
            {profile.firstName}
            <br />
            <span className="text-gilded animate-gild-pan">{profile.lastName}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-accent text-xl italic text-gold/90 sm:text-2xl">
            {profile.epithet}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-parchment-dim sm:text-xl">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-3 font-display text-[11px] uppercase tracking-[0.4em] text-emerald/80">
            {profile.focus}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <MagneticButton
              href="#projects"
              data-magnetic
              className="group inline-flex items-center gap-2 rounded-xl bg-gild bg-[length:200%_auto] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-obsidian-950 shadow-gold transition-[background-position] duration-500 hover:bg-right"
            >
              View Artifacts
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              href={profile.resumeFile}
              download
              data-magnetic
              className="gild-border group inline-flex items-center gap-2 rounded-xl bg-obsidian-900/60 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-parchment backdrop-blur-xl transition-colors hover:text-gold-light"
            >
              <ScrollText className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              The Résumé
            </MagneticButton>

            <MagneticButton
              href="#contact"
              data-magnetic
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-parchment-dim transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4" />
              Summon Me
            </MagneticButton>
          </motion.div>

          {/* runestone stats */}
          <motion.div variants={item} className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rune-card ornament rounded-2xl px-4 py-5 text-center">
                <div className="text-gilded font-display text-3xl font-bold sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-sm leading-snug text-parchment-faint">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      {!reduced && (
        <motion.div
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-gold/30 p-1.5">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-gold"
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
