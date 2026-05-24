export const fadeUp = {
  hidden: { opacity: 0, y: 24, x: -10, scale: 0.985 },
  show: {
    opacity: 1,
    y: [24, -4, 0],
    x: [-10, 4, 0],
    scale: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
}

export const heroVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
}

export const marqueeVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}
