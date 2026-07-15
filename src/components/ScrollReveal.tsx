import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: directionOffset[direction].y, x: directionOffset[direction].x }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
