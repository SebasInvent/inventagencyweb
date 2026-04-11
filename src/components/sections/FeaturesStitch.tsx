"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Palette, TrendingUp, Shield, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const features = [
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Modelado de negocios digitales orientado a la dominancia del mercado global.",
    span: "md:col-span-4 md:row-span-2",
    detail: "Research + Positioning + Go-to-Market",
  },
  {
    icon: Code,
    title: "Ingeniería",
    description: "Arquitectura de software de misión crítica con escalabilidad infinita.",
    span: "md:col-span-4 md:row-span-1",
    detail: "Full Stack + Cloud + DevOps",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Interfaces minimalistas que fusionan estética futurista con usabilidad impecable.",
    span: "md:col-span-4 md:row-span-1",
    detail: "UX/UI + Motion + Brand",
  },
];

const metrics = [
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Retention" },
  { icon: Shield, value: 99, suffix: ".9%", label: "Uptime SLA" },
  { icon: Zap, value: 50, suffix: "+", label: "Proyectos Entregados" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export function FeaturesStitch() {
  return (
    <section className="relative py-32 px-6 border-t border-foreground/10 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4FF]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-[#00D4FF]/60 uppercase tracking-[0.2em] mb-4 block">
            Nuestros Pilares
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Tres fuerzas, <span className="text-foreground/30">un resultado</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] mb-20"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp} className={feature.span}>
              <SpotlightCard className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-foreground/50 text-sm leading-relaxed mb-4">{feature.description}</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#00D4FF]/50 font-medium">
                  {feature.detail}
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className="group p-8 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:border-[#00D4FF]/30 transition-all duration-500 text-center"
            >
              <metric.icon className="w-6 h-6 text-[#00D4FF]/60 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/40">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
