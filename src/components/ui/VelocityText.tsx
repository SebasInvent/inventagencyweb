"use client";

import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

interface VelocityTextProps {
  children: string;
  className?: string;
  baseVelocity?: number;
}

export function VelocityText({ children, className = "", baseVelocity = 5 }: VelocityTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth the velocity to avoid jitter
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map velocity to skew amount (text distortion)
  const skew = useTransform(smoothVelocity, [-1000, 0, 1000], [-8, 0, 8], { clamp: true });

  // Map velocity to scale (slight stretch)
  const scaleX = useTransform(smoothVelocity, [-1000, 0, 1000], [0.95, 1, 0.95], { clamp: true });

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        skewX: skew,
        scaleX,
        transformOrigin: "center",
      }}
    >
      {children}
    </motion.span>
  );
}
