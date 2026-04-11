"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollMarqueeProps {
  lines: { text: string; reverse?: boolean }[];
  className?: string;
}

export function ScrollMarquee({ lines, className = "" }: ScrollMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Each line moves based on scroll position, some in reverse
  return (
    <div ref={containerRef} className={`overflow-hidden py-4 ${className}`}>
      {lines.map((line, index) => {
        const direction = line.reverse ? 1 : -1;
        return (
          <ScrollLine key={line.text + index} text={line.text} direction={direction} scrollY={scrollY} />
        );
      })}
    </div>
  );
}

function ScrollLine({
  text,
  direction,
  scrollY,
}: {
  text: string;
  direction: number;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  // Map scroll position to horizontal translation
  const x = useTransform(scrollY, [0, 5000], [0, direction * 1500]);

  return (
    <motion.div style={{ x }} className="flex whitespace-nowrap gap-8">
      {/* Repeat the text to fill the width */}
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground/[0.03] uppercase select-none">
          {text}
          <span className="text-[#00D4FF]/10 mx-8">✦</span>
        </span>
      ))}
    </motion.div>
  );
}
