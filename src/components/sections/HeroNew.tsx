"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BentoCard } from "@/components/ui/BentoCard";

export function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[120px]"
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
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px]"
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <Sparkles size={16} className="text-[#00D4FF]" />
            <span className="text-sm text-foreground/70">Digital Strategy Architects</span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-6">
            <TextReveal className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
              Construimos el
            </TextReveal>
            <TextReveal 
              delay={0.5}
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#00A3CC] to-[#0077AA] bg-clip-text text-transparent"
            >
              Futuro Digital
            </TextReveal>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Agencia de élite que transforma visiones en realidades digitales. 
            Desde biometría hasta blockchain, desde IA hasta FinTech.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="bg-[#00D4FF] text-black hover:bg-[#00D4FF]/90 shadow-lg shadow-[#00D4FF]/20 hover:shadow-[#00D4FF]/40"
            >
              <span className="flex items-center gap-2">
                Iniciar Proyecto
                <ArrowRight size={18} />
              </span>
            </MagneticButton>
            <MagneticButton
              href="#portfolio"
              className="border border-border text-foreground hover:border-[#00D4FF] hover:text-[#00D4FF] bg-card/50 backdrop-blur-sm"
            >
              Ver Portfolio
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { value: "15+", label: "Proyectos" },
            { value: "6+", label: "Industrias" },
            { value: "100%", label: "Custom" },
            { value: "24/7", label: "Soporte" },
          ].map((stat, index) => (
            <BentoCard key={index} delay={1.4 + index * 0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00D4FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
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
