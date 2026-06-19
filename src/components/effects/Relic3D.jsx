import { Suspense, lazy, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import CanvasErrorBoundary from './CanvasErrorBoundary';

const CrystalScene = lazy(() => import('./CrystalScene'));

// Static, hand-styled relic used while the scene loads, on small screens,
// under reduced-motion, or if WebGL is unavailable.
function RelicFallback() {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="relative h-56 w-56">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-gold/30" />
        <div className="absolute inset-4 animate-spin-rev rounded-full border border-arcane/30" />
        <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_35%_30%,#f3d99a,40%,#a06bff_70%,#6f3fd1)] shadow-arcane animate-float" />
        <div className="absolute inset-10 rounded-full bg-gold/20 blur-2xl" />
      </div>
    </div>
  );
}

export default function Relic3D({ className = '' }) {
  const reduced = useReducedMotion();
  const [allow3D, setAllow3D] = useState(false);

  useEffect(() => {
    // gate heavy 3D to capable, wider screens — and re-check on resize so it
    // never latches to the wrong value if mounted at an odd viewport size.
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setAllow3D(mq.matches && !reduced);
    update();
    mq.addEventListener('change', update);
    window.addEventListener('resize', update);
    return () => {
      mq.removeEventListener('change', update);
      window.removeEventListener('resize', update);
    };
  }, [reduced]);

  return (
    <div className={className}>
      {allow3D ? (
        <CanvasErrorBoundary fallback={<RelicFallback />}>
          <Suspense fallback={<RelicFallback />}>
            <CrystalScene />
          </Suspense>
        </CanvasErrorBoundary>
      ) : (
        <RelicFallback />
      )}
    </div>
  );
}
