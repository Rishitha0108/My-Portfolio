import { ArrowUp } from 'lucide-react';
import { profile, navItems } from '../data/resume';

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gild font-display text-sm font-bold text-obsidian-950">
            RK
          </span>
          <div>
            <div className="font-display text-sm font-semibold text-parchment">{profile.name}</div>
            <div className="font-accent text-sm italic text-parchment-faint">{profile.epithet}</div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-display text-xs uppercase tracking-wider text-parchment-dim transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-full border border-gold/20 bg-obsidian-900/60 px-4 py-2 text-sm text-parchment-dim transition-colors hover:text-gold-light"
        >
          Ascend
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-gold/10 pt-6 text-center text-xs text-parchment-faint">
        © {new Date().getFullYear()} {profile.name}. Forged with React, Three.js, Tailwind CSS &amp; Framer Motion.
      </div>
    </footer>
  );
}
