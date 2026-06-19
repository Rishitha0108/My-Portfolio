import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float, Sparkles, Environment, Lightformer, MeshTransmissionMaterial,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// The arcane relic — a faceted crystal with a glowing soul, an orbiting
// wireframe ward, and floating gold dust. Locally lit (no network HDRI).
function Relic({ pointer }) {
  const group = useRef();
  const crystal = useRef();
  const ward = useRef();
  const soul = useRef();

  useFrame((state, delta) => {
    // slow auto-spin + parallax lean toward the pointer
    if (crystal.current) {
      crystal.current.rotation.y += delta * 0.25;
      crystal.current.rotation.x += delta * 0.08;
    }
    if (ward.current) {
      ward.current.rotation.y -= delta * 0.18;
      ward.current.rotation.z += delta * 0.05;
    }
    if (group.current) {
      const tx = pointer.current.x * 0.4;
      const ty = pointer.current.y * 0.3;
      group.current.rotation.y += (tx - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-ty - group.current.rotation.x) * 0.05;
    }
    if (soul.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.08;
      soul.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group} scale={0.72}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
        {/* faceted crystal */}
        <mesh ref={crystal}>
          <icosahedronGeometry args={[1.35, 0]} />
          <MeshTransmissionMaterial
            transmission={1}
            thickness={1.1}
            roughness={0.08}
            ior={1.7}
            chromaticAberration={0.06}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#c9b6ff"
            attenuationColor="#a06bff"
            attenuationDistance={1.4}
            background={new THREE.Color('#0c0a18')}
          />
        </mesh>

        {/* glowing soul at the core */}
        <mesh ref={soul} scale={0.55}>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshBasicMaterial color="#f3d99a" toneMapped={false} />
        </mesh>

        {/* gold wireframe ward */}
        <mesh ref={ward} scale={1.9}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#d9b25f" wireframe transparent opacity={0.16} toneMapped={false} />
        </mesh>

        <Sparkles count={50} scale={6} size={2.6} speed={0.35} color="#d9b25f" opacity={0.7} />
        <Sparkles count={30} scale={5} size={2} speed={0.3} color="#a06bff" opacity={0.6} />
      </Float>
    </group>
  );
}

export default function CrystalScene() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onPointerMove={(e) => {
        pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#d9b25f" />
      <pointLight position={[-4, -2, 3]} intensity={35} color="#a06bff" />
      <pointLight position={[0, 4, -3]} intensity={20} color="#3fc99a" />

      {/* local studio reflections — no external HDRI fetch */}
      <Environment resolution={256}>
        <Lightformer form="circle" intensity={3} color="#a06bff" position={[-3, 2, 3]} scale={4} />
        <Lightformer form="circle" intensity={2} color="#d9b25f" position={[3, -1, 3]} scale={4} />
        <Lightformer form="ring" intensity={1.4} color="#3fc99a" position={[0, 3, -2]} scale={3} />
        <Lightformer form="rect" intensity={0.6} color="#ffffff" position={[0, 0, 5]} scale={6} />
      </Environment>

      <Relic pointer={pointer} />

      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={0.35} intensity={0.9} radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
}
