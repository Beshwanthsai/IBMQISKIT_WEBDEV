import type { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up',
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Scale animation
export const scaleAnimation = (delay: number = 0, duration: number = 0.5): Variants => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay,
        duration,
      },
    },
  };
};

// Stagger container for children elements
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Quantum bit flip animation - for quantum-themed elements
export const quantumFlip: Variants = {
  hidden: {
    rotateY: 0,
    opacity: 0.5,
  },
  show: {
    rotateY: 180,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
    },
  },
};

// Quantum entanglement animation - for connected elements
export const quantumEntanglement = (index: number): Variants => {
  return {
    hidden: {
      scale: 1,
      opacity: 0.7,
    },
    show: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        delay: index * 0.2,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };
};