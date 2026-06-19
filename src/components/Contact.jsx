import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ScrollText, ArrowUpRight, MapPin } from 'lucide-react';
import { profile } from '../data/resume';
import SectionHeading from './ui/SectionHeading';
import MagneticButton from './ui/MagneticButton';
import Reveal from './ui/Reveal';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, accent: '#d9b25f' },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, accent: '#3fc99a' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.links.linkedin, accent: '#a06bff' },
  { icon: Github, label: 'GitHub', value: 'See my code', href: profile.links.github, accent: '#e8688a' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-[2200px] scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal>
        <div className="rune-card gild-border relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          {/* summoning circle */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
            <svg viewBox="0 0 400 400" className="h-full w-full animate-spin-slow text-gold">
              <g fill="none" stroke="currentColor" strokeWidth="0.6">
                <circle cx="200" cy="200" r="190" />
                <circle cx="200" cy="200" r="150" strokeDasharray="3 5" />
                <polygon points="200,40 348,290 52,290" />
                <polygon points="200,360 52,110 348,110" />
                <circle cx="200" cy="200" r="96" />
              </g>
            </svg>
          </div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-arcane/20 blur-[100px]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          <div className="relative">
            <SectionHeading
              eyebrow="Summon"
              title="Let us build AI that"
              highlight="truly endures"
              description="Open to AI/ML and Generative-AI engineering roles. If you’re solving hard problems in a regulated realm, let’s talk."
            />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <MagneticButton
                href={`mailto:${profile.email}`}
                data-magnetic
                className="group inline-flex items-center gap-2 rounded-xl bg-gild bg-[length:200%_auto] px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-obsidian-950 shadow-gold transition-[background-position] duration-500 hover:bg-right"
              >
                <Mail className="h-4 w-4" />
                Cast a Message
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                href={profile.resumeFile}
                download
                data-magnetic
                className="gild-border inline-flex items-center gap-2 rounded-xl bg-obsidian-900/60 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-parchment backdrop-blur-xl transition-colors hover:text-gold-light"
              >
                <ScrollText className="h-4 w-4" />
                The Résumé
              </MagneticButton>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rune-card group flex items-center gap-3 rounded-2xl p-4"
                  >
                    <div
                      className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl ring-1 ring-white/10"
                      style={{ background: `${c.accent}1f`, color: c.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-[10px] uppercase tracking-widest text-parchment-faint">{c.label}</div>
                      <div className="truncate text-sm font-medium text-parchment group-hover:text-gold-light">{c.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-parchment-faint">
              <MapPin className="h-4 w-4" />
              Based in {profile.location} · Open to relocation
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
