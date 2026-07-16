'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Hem', href: '#top' },
  { label: 'Om oss', href: '#vision' },
  { label: 'Verksamheter', href: '#verksamheter' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="nav"
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.6, 0.2, 1] }}
        >
          <a className="nav-mark metal-text" href="#top">
            HOB
          </a>
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
