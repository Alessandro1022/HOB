'use client';

import { motion, useReducedMotion } from 'framer-motion';

const links = [
  { label: 'Hem', href: '#top' },
  { label: 'Om oss', href: '#vision' },
  { label: 'Verksamheter', href: '#verksamheter' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Masthead() {
  const reduce = useReducedMotion();
  return (
    <div className="masthead" id="top">
      <motion.a
        href="#top"
        className="masthead-wordmark"
        initial={reduce ? false : { opacity: 0, letterSpacing: '0.55em' }}
        animate={{ opacity: 1, letterSpacing: '0.32em' }}
        transition={{ duration: 1.4, ease: [0.2, 0.6, 0.2, 1] }}
      >
        House of Business
      </motion.a>
      <motion.div
        className="masthead-divider"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.7, 0, 0.2, 1] }}
      />
      <nav className="masthead-links" aria-label="Huvudmeny">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 + i * 0.09 }}
          >
            {l.label}
          </motion.a>
        ))}
      </nav>
    </div>
  );
}
