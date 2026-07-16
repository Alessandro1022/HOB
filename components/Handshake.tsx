'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from 'framer-motion';

const HAND_PATH =
  'M0,96 L138,93 C160,91 176,84 190,68 C199,57 211,44 222,44 C232,44 236,53 230,63 C225,71 217,79 210,84 L232,82 C246,80 262,80 278,84 L392,100 C404,102 406,116 396,122 L282,138 C260,142 240,146 224,148 C200,151 176,153 152,154 L0,158 Z';
const FINGER_LINES = 'M236,86 L384,104 M232,101 L390,111 M228,116 L386,120';

const SHADOW = '0 2px 26px rgba(7,7,7,0.95), 0 0 60px rgba(7,7,7,0.85)';

function useLine(
  p: MotionValue<number>,
  fadeIn: [number, number],
  fadeOut: [number, number]
) {
  const opacity = useTransform(
    p,
    [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]],
    [0, 1, 1, 0]
  );
  const y = useTransform(p, [fadeIn[0], fadeIn[1]], [20, 0]);
  return { opacity, y };
}

export default function Handshake() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // faser: 0–.38 närmar sig | .38–.58 handslag | .58–.95 glider isär
  const xL = useTransform(p, [0, 0.38, 0.58, 0.95], ['-72vw', '-6vw', '-6vw', '-80vw']);
  const xR = useTransform(p, [0, 0.38, 0.58, 0.95], ['72vw', '6vw', '6vw', '80vw']);
  const rotL = useTransform(p, [0, 0.38, 0.58, 0.95], [-6, 0, 0, -4]);
  const rotR = useTransform(p, [0, 0.38, 0.58, 0.95], [6, 0, 0, 4]);

  const glowOpacity = useTransform(p, [0.36, 0.44, 0.58, 0.68], [0, 0.95, 0.95, 0]);
  const glowScale = useTransform(p, [0.36, 0.5], [0.4, 1.2]);
  const ringOpacity = useTransform(p, [0.38, 0.42, 0.58], [0, 0.9, 0]);
  const ringScale = useTransform(p, [0.38, 0.58], [0.3, 2.7]);

  const lineA = useLine(p, [0.05, 0.16], [0.28, 0.38]);
  const lineB = useLine(p, [0.4, 0.48], [0.56, 0.66]);
  const lineC = useLine(p, [0.68, 0.78], [0.92, 1]);

  const barScale = useTransform(p, [0, 1], [0, 1]);

  if (reduce) {
    return (
      <section className="shake" style={{ height: 'auto' }} aria-label="Två händer möts i ett handslag">
        <div className="shake-stage" style={{ position: 'relative' }}>
          <div className="shake-floor" />
          <div className="shake-line" style={{ position: 'relative', left: 'auto', transform: 'none', opacity: 1 }}>
            <h2>
              Där kompetens, kapital
              <br />
              och affärer möts.
            </h2>
            <p>Varje dag · Under samma tak</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="shake" aria-label="Två händer möts i ett handslag">
      <div className="shake-stage">
        <div className="shake-floor" />

        <motion.div
          className="clasp-glow"
          style={{ opacity: glowOpacity, scale: glowScale, x: '-50%', y: '-50%' }}
        />
        <motion.div
          className="clasp-ring"
          style={{ opacity: ringOpacity, scale: ringScale, x: '-50%', y: '-50%' }}
        />

        {/* ljus hand — från vänster */}
        <motion.svg
          className="hand hand-light"
          viewBox="0 0 420 240"
          aria-hidden="true"
          style={{ x: xL, rotate: rotL, translateX: '-50%', translateY: '-42%' }}
        >
          <defs>
            <linearGradient id="brushed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#EDEBE4" />
              <stop offset="0.45" stopColor="#CFCEC7" />
              <stop offset="0.55" stopColor="#F2F0E9" />
              <stop offset="1" stopColor="#B9B8B1" />
            </linearGradient>
          </defs>
          <path className="silhouette" d={HAND_PATH} />
          <path
            d={FINGER_LINES}
            fill="none"
            stroke="rgba(16,16,16,.28)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* mörk hand — från höger */}
        <motion.svg
          className="hand hand-dark"
          viewBox="0 0 420 240"
          aria-hidden="true"
          style={{ x: xR, rotate: rotR, translateX: '-50%', translateY: '-58%' }}
        >
          <g transform="translate(420,0) scale(-1,1)">
            <path className="silhouette" d={HAND_PATH} />
            <path
              d={FINGER_LINES}
              fill="none"
              stroke="rgba(201,200,194,.3)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
        </motion.svg>

        <motion.div
          className="shake-line"
          style={{ top: '12%', x: '-50%', opacity: lineA.opacity, y: lineA.y, zIndex: 7 }}
        >
          <h2 style={{ textShadow: SHADOW }}>Två parter. En idé.</h2>
          <p>Varje affär börjar med ett möte</p>
        </motion.div>

        <motion.div
          className="shake-line"
          style={{
            top: '10%',
            x: '-50%',
            opacity: lineB.opacity,
            zIndex: 7,
            background:
              'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(7,7,7,0.88) 0%, rgba(7,7,7,0.55) 55%, transparent 78%)',
            padding: '28px 20px 32px',
            borderRadius: '20px',
          }}
        >
          <h2 style={{ textShadow: SHADOW }}>
            Där kompetens, kapital
            <br />
            och affärer möts.
          </h2>
          <p>Varje dag · Under samma tak</p>
        </motion.div>

        <motion.div
          className="shake-line"
          style={{ bottom: '12%', x: '-50%', opacity: lineC.opacity, y: lineC.y, zIndex: 7 }}
        >
          <h2 style={{ textShadow: SHADOW }}>
            <em>…och växer vidare, var för sig — starkare tillsammans.</em>
          </h2>
          <p>Företag hjälper företag att växa</p>
        </motion.div>

        <div className="shake-progress" aria-hidden="true">
          <motion.i style={{ scaleX: barScale }} />
        </div>
      </div>
    </section>
  );
}
