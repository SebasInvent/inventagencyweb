"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSkiper() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.15), transparent 80%)`,
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="text-foreground">Construimos</span>
                <br />
                <span className="text-foreground">el </span>
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#00A3CC] to-[#0077AA] bg-clip-text text-transparent">
                  Futuro
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#00A3CC] to-[#0077AA] bg-clip-text text-transparent">
                  Digital
                </span>
              </h1>

              <p className="text-xl text-foreground/60 mb-8 max-w-xl">
                Agencia de élite que transforma visiones en realidades digitales. 
                Desde biometría hasta blockchain, desde IA hasta FinTech.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="group relative px-8 py-4 bg-foreground text-background font-medium overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Iniciar Proyecto
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#00D4FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>

                <motion.a
                  href="#portfolio"
                  className="px-8 py-4 border border-border text-foreground font-medium hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Portfolio
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
            >
              {[
                { value: "15+", label: "Proyectos" },
                { value: "6+", label: "Industrias" },
                { value: "100%", label: "Custom" },
                { value: "24/7", label: "Soporte" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-[#00D4FF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Animated 3D Shape */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="relative w-80 h-80"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Triangle Shape */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.1" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon
                      points="100,20 180,180 20,180"
                      fill="url(#triangleGradient)"
                      stroke="#00D4FF"
                      strokeWidth="2"
                      filter="url(#glow)"
                    />
                  </svg>
                </div>

                {/* Orbiting Elements */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#00D4FF] rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                    }}
                    animate={{
                      x: [
                        Math.cos((angle * Math.PI) / 180) * 150,
                        Math.cos(((angle + 360) * Math.PI) / 180) * 150,
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * 150,
                        Math.sin(((angle + 360) * Math.PI) / 180) * 150,
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-[#00D4FF] rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
