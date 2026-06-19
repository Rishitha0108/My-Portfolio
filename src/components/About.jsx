import { motion } from 'framer-motion';
import { Wand2, ShieldCheck, Gauge, Quote } from 'lucide-react';
import { profile, aboutHighlights } from '../data/resume';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const icons = [Wand2, ShieldCheck, Gauge];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[2200px] scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="The Path"
        title="From frontier models to"
        highlight="systems that hold"
        description="One thread runs through every chapter: take what is experimental and make it dependable, compliant, and measurable."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-12">
        {/* narrative codex page */}
        <Reveal direction="right" className="lg:col-span-7">
          <div className="rune-card ornament relative h-full overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-arcane/20 blur-3xl" />
            <Quote className="h-8 w-8 text-gold/70" />
            <p className="dropcap mt-5 text-lg leading-relaxed text-parchment sm:text-xl">
              {profile.intro}
            </p>
            <p className="mt-5 leading-relaxed text-parchment-dim">
              I have forged generative-AI assistants for core banking, fraud models for insurers and
              global banks, and clinical analytics for pharma — and most recently, multi-agent
              automation across university research computing. Across all of them I obsess over the same
              question:{' '}
              <span className="text-gold-light">does it hold up in production, under audit, at scale?</span>
            </p>

            <div className="rule-diamond my-7" />

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <div className="font-display text-[11px] uppercase tracking-widest text-parchment-faint">Currently</div>
                <div className="mt-1 text-parchment">Senior AI &amp; Automation Engineer</div>
              </div>
              <div>
                <div className="font-display text-[11px] uppercase tracking-widest text-parchment-faint">Based in</div>
                <div className="mt-1 text-parchment">{profile.location}</div>
              </div>
              <div>
                <div className="font-display text-[11px] uppercase tracking-widest text-parchment-faint">Realms</div>
                <div className="mt-1 text-parchment">Banking · Insurance · Pharma · Higher-Ed</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* warded highlights */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {aboutHighlights.map((h, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={h.title} direction="left" delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rune-card group flex h-full items-start gap-4 rounded-2xl p-6"
                >
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-parchment">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-parchment-dim">{h.body}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
