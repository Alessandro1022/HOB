'use client';

import dynamic from 'next/dynamic';
import Reveal from './Reveal';

const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });

export default function Hero() {
  return (
    <header className="hero" id="top">
      <HeroScene />
      <div className="hero-content">
        <Reveal className="hero-eyebrow">Ett affärshus · Grundat för framtiden</Reveal>
        <Reveal as="h1" delay={0.12} className="wordmark">
          House <span className="of">of</span> Business
        </Reveal>
        <Reveal as="p" delay={0.24} className="hero-sub">
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
