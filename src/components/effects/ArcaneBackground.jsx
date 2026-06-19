import { motion, useReducedMotion } from 'framer-motion';

// Obsidian nightfall with drifting arcane glows + a faint rotating astrolabe.
export default function ArcaneBackground() {
  const reduced = useReducedMotion();

  const glows = [
    { className: 'left-[-12%] top-[-8%] h-[44vw] w-[44vw] bg-arcane/25', range: 50 },
    { className: 'right-[-14%] top-[12%] h-[40vw] w-[40vw] bg-gold/15', range: -42 },
    { className: 'left-[18%] bottom-[-16%] h-[42vw] w-[42vw] bg-emerald/14', range: 40 },
    { className: 'right-[8%] bottom-[2%] h-[26vw] w-[26vw] bg-ember/16', range: -34 },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-obsidian-950">
      {/* drifting arcane glows */}
      {glows.map((g, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${g.className}`}
          animate={
            reduced ? {} : { x: [0, g.range, 0], y: [0, -g.range * 0.6, 0], scale: [1, 1.12, 1] }
          }
          transition={{ duration: 20 + i * 4, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}

      {/* faint astrolabe / magic circle, centered, very subtle */}
      <div className="absolute left-1/2 top-1/2 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <Astrolabe />
      </div>

      {/* starfield dots (CSS, static) */}
      <Stars />

      {/* vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(8,6,15,0.85))]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian-950 to-transparent" />
    </div>
  );
}

function Astrolabe() {
  const runes = Array.from({ length: 24 });
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full animate-spin-slow text-gold">
      <g fill="none" stroke="currentColor" strokeWidth="0.5">
        <circle cx="200" cy="200" r="198" />
        <circle cx="200" cy="200" r="170" />
        <circle cx="200" cy="200" r="120" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="84" strokeDasharray="2 4" />
        {/* tick marks */}
        {runes.map((_, i) => {
          const a = (i / runes.length) * Math.PI * 2;
          const x1 = 200 + Math.cos(a) * 170;
          const y1 = 200 + Math.sin(a) * 170;
          const x2 = 200 + Math.cos(a) * 184;
          const y2 = 200 + Math.sin(a) * 184;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.6" />;
        })}
        {/* inner triangle + hexagram for a sigil feel */}
        <polygon points="200,98 288,250 112,250" strokeWidth="0.4" />
        <polygon points="200,302 112,150 288,150" strokeWidth="0.4" />
      </g>
    </svg>
  );
}

function Stars() {
  // deterministic pseudo-random scatter
  const stars = Array.from({ length: 70 }, (_, i) => {
    const x = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const y = (Math.sin(i * 78.233) * 12543.987) % 1;
    return {
      left: `${Math.abs(x) * 100}%`,
      top: `${Math.abs(y) * 100}%`,
      size: (Math.abs(x) > 0.85 ? 2 : 1),
      o: 0.25 + Math.abs(y) * 0.5,
    };
  });
  return (
    <div className="absolute inset-0">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-parchment animate-flicker"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.o,
            animationDelay: `${(i % 7) * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}
