import { Transition, Variants } from 'framer-motion';

export const springSm: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
};

export const staggerContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: springSm },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: springSm },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: springSm },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: springSm },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -16, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: springSm },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: springSm },
};

export const slideInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: springSm },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: springSm },
};

export const blur: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: springSm },
};

export const blurUp: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 16 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: springSm },
};
