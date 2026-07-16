'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'p' | 'blockquote' | 'h1' | 'h2' | 'span';
  className?: string;
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay, ease: [0.2, 0.6, 0.2, 1] }}
    >
      {children}
    </M>
  );
}
