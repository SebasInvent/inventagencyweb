"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { AnimatedText, GradientText } from "@/components/ui/AnimatedText";
import { GlowCard } from "@/components/ui/GlowCard";

const particlePositions = [
  { left: 5, top: 10 }, { left: 15, top: 25 }, { left: 25, top: 45 },
  { left: 35, top: 15 }, { left: 45, top: 65 }, { left: 55, top: 35 },
  { left: 65, top: 75 }, { left: 75, top: 20 }, { left: 85, top: 55 },
  { left: 95, top: 40 }, { left: 10, top: 80 }, { left: 20, top: 60 },
  { left: 30, top: 90 }, { left: 40, top: 30 }, { left: 50, top: 70 },
  { left: 60, top: 50 }, { left: 70, top: 85 }, { left: 80, top: 5 },
  { left: 90, top: 95 }, { left: 12, top: 42 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles - using fixed positions to avoid hydration mismatch */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00D4FF]/30 rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: (i % 5) * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-border rounded-full mb-8 backdrop-blur-sm"
        >
          <Zap size={16} className="text-[#00D4FF]" />
          <span className="text-sm text-foreground/70">
            Arquitectos de Estrategia Digital
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <AnimatedText className="text-foreground">
            Construimos el
          </AnimatedText>
          <br />
          <AnimatedText delay={0.5}>
            <GradientText>Futuro Digital</GradientText>
          </AnimatedText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Somos una agencia de élite que transforma visiones en realidades
          digitales. Desde biometría hasta blockchain, desde IA hasta FinTech —
          arquitectamos soluciones que definen el mañana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group px-8 py-4 bg-[#00D4FF] text-black font-medium flex items-center gap-2 hover:bg-[#00D4FF]/90 transition-all shadow-lg shadow-[#00D4FF]/20"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Iniciar tu Proyecto
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
          <motion.a
            href="#portfolio"
            className="px-8 py-4 border border-border text-foreground font-medium hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Portafolio
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { value: "15+", label: "Proyectos Ejecutados" },
            { value: "6+", label: "Industrias" },
            { value: "100%", label: "Soluciones Custom" },
            { value: "24/7", label: "Soporte Continuo" },
          ].map((stat, index) => (
            <GlowCard key={index} className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-[#00D4FF]">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/50 mt-1">{stat.label}</div>
            </GlowCard>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
