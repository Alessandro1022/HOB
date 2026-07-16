'use client';

import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });

function Staggered({ text, base = 0 }: { text: string; base?: number }) {
  const reduce = useReducedMotion();
  return (
    <span aria-label={text} style={{ display: 'inline-block' }}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: 'inline-block' }}
          initial={reduce ? false : { opacity: 0, y: '0.45em', filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: base + i * 0.045, ease: [0.2, 0.6, 0.2, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <header className="hero">
      <HeroScene />
      <div className="hero-content">
        <Reveal className="hero-eyebrow">Ett affärshus · Grundat för framtiden</Reveal>
        <h1 className="wordmark">
          <Staggered text="House" base={0.2} />
          <span className="of">of</span>
          <Staggered text="Business" base={0.55} />
        </h1>
        <Reveal as="p" delay={0.9} className="hero-sub">
          Vi bygger inte ett traditionellt säljbolag.
          <br />
          <em>Vi bygger ett affärshus.</em>
        </Reveal>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>Skrolla</span>
      </div>
    </header>
  );
}
