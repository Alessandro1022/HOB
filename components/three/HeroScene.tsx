'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const COUNT = 1400;

const vertexShader = `
attribute float aPhase;
attribute float aSpeed;
attribute float aScale;
attribute float aWarm;
uniform float uTime;
varying float vAlpha;
varying float vWarm;
void main() {
  float tw = 0.5 + 0.5 * sin(uTime * aSpeed + aPhase);
  tw = tw * tw; // mjukare puls: dröjer i mörkt, pustar fram
  vAlpha = 0.06 + 0.94 * tw;
  vWarm = aWarm;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aScale * (0.5 + 1.1 * tw) * (320.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`;

const fragmentShader = `
varying float vAlpha;
varying float vWarm;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float core = smoothstep(0.5, 0.02, d);
  float halo = smoothstep(0.5, 0.25, d) * 0.35;
  vec3 cool = vec3(0.38, 0.38, 0.36);
  vec3 warm = vec3(0.78, 0.6, 0.28);
  vec3 col = mix(cool, warm, vWarm);
  gl_FragColor = vec4(col, (core + halo) * vAlpha);
}
`;

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);

  const { positions, phases, speeds, scales, warms } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const phases = new Float32Array(COUNT);
    const speeds = new Float32Array(COUNT);
    const scales = new Float32Array(COUNT);
    const warms = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.35 + Math.random() * 1.1; // olika andningstakt
      scales[i] = 0.5 + Math.random() * 1.7;
      warms[i] = Math.random() < 0.22 ? 1 : 0; // var femte stjärna guldvarm
    }
    return { positions, phases, speeds, scales, warms };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (mat.current) mat.current.uniforms.uTime.value = clock.elapsedTime;
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.y = t * 0.012 + pointer.x * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.08) * 0.025 + pointer.y * 0.035;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aWarm" args={[warms, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ uTime: { value: 0 } }}
        transparent
        depthWrite={false}
      />
    </points>
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
      <Stars />
    </Canvas>
  );
}
