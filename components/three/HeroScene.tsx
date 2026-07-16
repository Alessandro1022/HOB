'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Particles({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
    }
    return arr;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.y = t * 0.015 + pointer.x * 0.06;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.03 + pointer.y * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#fff2d9"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function SignPlate() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.28 - 0.34,
      0.06
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.14 + 0.04,
      0.06
    );
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.5}>
      <group ref={group} position={[3.4, -0.2, -2.5]}>
        {/* halo-glow bakom plattan */}
        <mesh position={[0, 0, -0.35]}>
          <planeGeometry args={[5.4, 6.8]} />
          <meshBasicMaterial color="#fff2d9" transparent opacity={0.07} />
        </mesh>
        <mesh position={[0, 0, -0.2]}>
          <planeGeometry args={[4.4, 5.8]} />
          <meshBasicMaterial color="#fff2d9" transparent opacity={0.1} />
        </mesh>
        {/* borstad silverplåt */}
        <mesh>
          <boxGeometry args={[3.6, 4.9, 0.08]} />
          <meshStandardMaterial color="#b9b8b1" metalness={0.92} roughness={0.32} />
        </mesh>
        {/* upphöjda "textrader" i mattsvart */}
        {[1.4, 0.55, -0.35].map((y, i) => (
          <mesh key={i} position={[0, y, 0.07]}>
            <boxGeometry args={[i === 1 ? 1.1 : 2.4, 0.34, 0.05]} />
            <meshStandardMaterial color="#0e0e0d" metalness={0.5} roughness={0.55} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.8]}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[-4, 5, 6]} intensity={1.4} color="#fff2d9" />
      <pointLight position={[4, -2, 2]} intensity={0.7} color="#c9c8c2" />
      <Particles />
      <SignPlate />
      <fog attach="fog" args={['#070707', 9, 20]} />
    </Canvas>
  );
}
