import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ScrollText } from 'lucide-react';
import { profile, navItems } from '../data/resume';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['hero', ...navItems.map((n) => n.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* gilded scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[80] h-[3px] w-full origin-left bg-gild"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-[70] px-4"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled ? 'rune-card gild-border shadow-relic' : 'border border-transparent bg-transparent'
          }`}
        >
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gild font-display text-sm font-bold text-obsidian-950 shadow-gold">
              RK
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide text-parchment sm:block">
              Rishitha<span className="text-gold">.</span>
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative rounded-lg px-3 py-2 font-display text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                    active === item.id ? 'text-gold-light' : 'text-parchment-dim hover:text-parchment'
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg border border-gold/30 bg-gold/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeFile}
              download
              className="hidden items-center gap-2 rounded-lg bg-gild bg-[length:200%_auto] px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-obsidian-950 shadow-gold transition-[background-position] duration-500 hover:bg-right sm:flex"
            >
              <ScrollText className="h-4 w-4" />
              Résumé
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-gold/20 bg-obsidian-900/60 text-parchment md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rune-card mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 font-display text-xs font-medium uppercase tracking-wider transition-colors ${
                        active === item.id ? 'bg-gold/10 text-gold-light' : 'text-parchment-dim'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="p-1">
                  <a
                    href={profile.resumeFile}
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gild px-4 py-3 font-display text-xs font-semibold uppercase tracking-wider text-obsidian-950"
                  >
                    <ScrollText className="h-4 w-4" />
                    Download Résumé
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
