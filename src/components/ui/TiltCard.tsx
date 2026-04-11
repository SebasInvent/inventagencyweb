"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

export function TiltCard({
  children,
  className = "",
  tiltAmount = 10,
  glareEnabled = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring] as unknown as [MotionValue<number>, MotionValue<number>],
              ([latestX, latestY]: number[]) =>
                `radial-gradient(600px circle at ${50 + latestX * 50}% ${50 + latestY * 50}%, rgba(0, 212, 255, 0.12), transparent 40%)`
            ),
            zIndex: 1,
          }}
        />
      )}
    </motion.div>
  );
}
