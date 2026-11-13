import { motion, useReducedMotion } from "motion/react";

export default function PageTransition({ children }) {
  const reduce = useReducedMotion();
  const enterBlur = reduce ? "blur(0px)" : "blur(6px)";

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 24, filter: enterBlur }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: reduce ? 0 : -16, filter: enterBlur }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
