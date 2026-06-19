import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Floating embers / fireflies that rise, drift, glow, link when close, and
// swirl gently toward the cursor. Skipped entirely under reduced-motion.
export default function Embers({ density = 0.00007, className = '' }) {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let parts = [];
    let raf;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const palette = ['#d9b25f', '#f3d99a', '#a06bff', '#3fc99a', '#e8688a'];

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      if (width === 0 || height === 0) return; // wait for a real size
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.max(30, Math.floor(width * height * density)));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.05), // drift upward like embers
        r: Math.random() * 1.7 + 0.5,
        c: palette[Math.floor(Math.random() * palette.length)],
        tw: Math.random() * Math.PI * 2, // twinkle phase
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 150) {
          // gentle swirl around the cursor
          p.vx += (-dym / dm) * 0.02 + (dxm / dm) * 0.006;
          p.vy += (dxm / dm) * 0.02 + (dym / dm) * 0.006;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy = p.vy * 0.985 - 0.0015; // keep a faint upward bias

        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const twinkle = 0.55 + Math.sin(t * 0.002 + p.tw) * 0.45;

        // soft glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grd.addColorStop(0, p.c);
        grd.addColorStop(1, 'transparent');
        ctx.globalAlpha = twinkle * 0.5;
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // constellation links (gold, faint)
        for (let j = i + 1; j < parts.length; j++) {
          const q = parts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.globalAlpha = (1 - d / 110) * 0.12;
            ctx.strokeStyle = '#d9b25f';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    init();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);

    // Re-init when the parent first gets (or changes) a real size — robust to
    // being mounted before layout settles.
    const ro = new ResizeObserver(() => init());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, [reduced, density]);

  if (reduced) return null;

  return (
    <canvas ref={canvasRef} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} />
  );
}
