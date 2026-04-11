"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#00D4FF] z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}
