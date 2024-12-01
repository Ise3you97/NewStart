import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
  direction?: 'up' | 'down' | 'left' | 'right';
}

const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    up: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  animation = 'fade',
  direction = 'up',
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold,
  });

  const getAnimationVariants = () => {
    if (animation === 'slide') {
      return animations.slide[direction];
    }
    return animations[animation];
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getAnimationVariants()}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}