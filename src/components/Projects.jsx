import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Gem } from 'lucide-react';
import { projects, accentHex } from '../data/resume';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Reveal from './ui/Reveal';

function ProjectCard({ project, index }) {
  const hex = accentHex[project.accent];
  const featured = project.featured;

  return (
    <Reveal delay={(index % 2) * 0.08} className={featured ? 'lg:col-span-3' : 'lg:col-span-2'}>
      <TiltCard className="h-full" max={6} glareColor={`${hex}30`}>
        <motion.article
          whileHover="hover"
          className="rune-card ornament gild-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8"
        >
          <motion.div
            aria-hidden
            variants={{ hover: { opacity: 1 } }}
            initial={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
            style={{ background: `radial-gradient(600px circle at 30% 0%, ${hex}22, transparent 60%)` }}
          />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              {featured && (
                <span
                  className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-[10px] uppercase tracking-widest"
                  style={{ background: `${hex}1f`, color: hex }}
                >
                  <Sparkles className="h-3 w-3" /> Signature Artifact
                </span>
              )}
              <h3 className="font-display text-lg font-bold leading-snug text-parchment sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-1 font-accent text-sm italic text-parchment-faint">{project.org}</p>
            </div>
            <span
              className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-45"
              style={{ background: `${hex}1a`, color: hex }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <p className="relative mt-4 flex-1 leading-relaxed text-parchment-dim">{project.description}</p>

          {/* wax-seal impact */}
          <div
            className="relative mt-5 inline-flex items-center gap-2 self-start rounded-xl border px-3 py-1.5"
            style={{ borderColor: `${hex}40`, background: `${hex}12` }}
          >
            <Gem className="h-4 w-4" style={{ color: hex }} />
            <span className="font-display text-sm font-bold" style={{ color: hex }}>
              {project.impact}
            </span>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-2 border-t border-gold/10 pt-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-gold/10 bg-obsidian-950/40 px-2.5 py-1 font-body text-xs text-parchment-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.article>
      </TiltCard>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Artifacts"
        title="Artifacts forged in"
        highlight="production fire"
        description="Production AI built inside regulated enterprises — distilled into the artifacts that mattered most."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
