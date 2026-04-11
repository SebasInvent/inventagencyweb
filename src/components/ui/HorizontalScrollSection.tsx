"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScrollSection({ children, className = "" }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} style={{ height: "300vh" }} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-8 pl-8">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
