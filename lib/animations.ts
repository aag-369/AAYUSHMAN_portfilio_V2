import { motion } from "framer-motion";

export const scrollReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.21, 0.61, 0.35, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08
    }
  }
};
