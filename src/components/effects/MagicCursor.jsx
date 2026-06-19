import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// A bespoke cursor: a soft arcane orb that trails a comet of embers and
// blooms to a gold ring over interactive elements. Pointer-fine devices only.
export default function MagicCursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const on = fine && !reduced;
    setEnabled(on);
    document.documentElement.classList.toggle('no-magic', !on);
    return () => document.documentElement.classList.add('no-magic');
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot = { x: target.x, y: target.y };
    const ring = { x: target.x, y: target.y };
    const trail = trailRefs.current.map(() => ({ x: target.x, y: target.y }));
    let hovering = false;
    let down = false;
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target;
      hovering = !!(el.closest && el.closest('a, button, [data-magnetic], input, [role="button"]'));
    };
    const onDown = () => (down = true);
    const onUp = () => (down = false);

    const lerp = (a, b, n) => a + (b - a) * n;

    const render = () => {
      dot.x = lerp(dot.x, target.x, 0.5);
      dot.y = lerp(dot.y, target.y, 0.5);
      ring.x = lerp(ring.x, target.x, 0.16);
      ring.y = lerp(ring.y, target.y, 0.16);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const s = (hovering ? 1.9 : 1) * (down ? 0.8 : 1);
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${s})`;
        ringRef.current.style.borderColor = hovering ? 'rgba(243,217,154,0.95)' : 'rgba(160,107,255,0.7)';
        ringRef.current.style.boxShadow = hovering
          ? '0 0 24px rgba(217,178,95,0.6)'
          : '0 0 20px rgba(160,107,255,0.5)';
      }

      // comet trail — each follower chases the previous
      let px = dot.x;
      let py = dot.y;
      for (let i = 0; i < trail.length; i++) {
        trail[i].x = lerp(trail[i].x, px, 0.35);
        trail[i].y = lerp(trail[i].y, py, 0.35);
        px = trail[i].x;
        py = trail[i].y;
        const node = trailRefs.current[i];
        if (node) {
          const scale = 1 - i / (trail.length + 1);
          node.style.transform = `translate(${trail[i].x}px, ${trail[i].y}px) translate(-50%, -50%) scale(${scale})`;
          node.style.opacity = String(0.5 * scale);
        }
      }

      raf = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90]">
      {/* comet trail */}
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full"
          style={{ background: i % 2 ? '#d9b25f' : '#a06bff', filter: 'blur(0.5px)' }}
        />
      ))}
      {/* outer ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border transition-[border-color] duration-200 will-change-transform"
      />
      {/* core orb */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-gold-light will-change-transform"
        style={{ boxShadow: '0 0 12px rgba(243,217,154,0.9)' }}
      />
    </div>
  );
}
