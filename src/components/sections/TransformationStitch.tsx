"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Target, Cpu, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";

const phases = [
  {
    icon: Target,
    title: "Diagnóstico",
    subtitle: "Auditoría Digital Completa",
    description: "Analizamos tu infraestructura digital, procesos y presencia de mercado para identificar brechas críticas y oportunidades de transformación.",
    deliverables: ["Auditoría UX/UI", "Análisis competitivo", "Mapa de brechas tecnológicas", "ROI proyectado"],
    duration: "1 semana",
    color: "#00D4FF",
  },
  {
    icon: Cpu,
    title: "Arquitectura",
    subtitle: "Blueprint de Transformación",
    description: "Diseñamos la arquitectura completa del sistema transformado: stack tecnológico, integraciones, flujos de datos y roadmap de implementación.",
    deliverables: ["Arquitectura de sistema", "Stack tecnológico definido", "Roadmap faseado", "Presupuesto detallado"],
    duration: "2 semanas",
    color: "#00A3CC",
  },
  {
    icon: Rocket,
    title: "Ejecución",
    subtitle: "Build & Deploy de Élite",
    description: "Nuestro equipo de ingeniería ejecuta el plan con metodología ágil, sprints semanales y entregas continuas. Cada fase validada antes de avanzar.",
    deliverables: ["Sprints semanales", "CI/CD pipeline", "QA automatizado", "Deploy progresivo"],
    duration: "4-8 semanas",
    color: "#0077AA",
  },
  {
    icon: BarChart3,
    title: "Evolución",
    subtitle: "Optimización Continua",
    description: "Monitoreo en tiempo real, A/B testing, optimización de conversión y soporte dedicado. Tu sistema nunca deja de mejorar.",
    deliverables: ["Analytics en tiempo real", "A/B testing", "Soporte 24/7", "Reportes mensuales"],
    duration: "Continuo",
    color: "#005577",
  },
];

const results = [
  { metric: 340, suffix: "%", label: "Aumento promedio en conversión" },
  { metric: 12, suffix: "x", label: "ROI en primer año" },
  { metric: 99, suffix: ".9%", label: "Uptime garantizado" },
  { metric: 48, suffix: "h", label: "Tiempo de respuesta soporte" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export function TransformationStitch() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="transformacion" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#00D4FF]/3 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0077AA]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-[#00D4FF]/60 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Programa de Transformación
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
            De idea a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0077AA]">sistema operativo</span>
          </h2>
          <p className="text-foreground/50 text-lg md:text-xl leading-relaxed">
            Un programa integral que transforma tu negocio digital desde cero. No solo construimos software — arquitectamos ecosistemas digitales que dominan mercados.
          </p>
        </motion.div>

        {/* Results bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {results.map((result) => (
            <motion.div key={result.label} variants={fadeUp} className="text-center p-6 rounded-xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="text-3xl md:text-4xl font-bold text-[#00D4FF] mb-1">
                <AnimatedCounter target={result.metric} suffix={result.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-foreground/40">{result.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Phases */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-foreground/10 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00D4FF] to-[#0077AA]"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#00D4FF] bg-background z-10 mt-8">
                  <div className="absolute inset-1 rounded-full bg-[#00D4FF]" />
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"} pl-20 md:pl-0`}>
                  <SpotlightCard className="p-8">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${phase.color}15` }}>
                        <phase.icon className="w-5 h-5" style={{ color: phase.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                        <p className="text-xs text-foreground/40 uppercase tracking-wider">{phase.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-foreground/50 text-sm leading-relaxed mb-6">{phase.description}</p>
                    <div className="space-y-2 mb-4">
                      {phase.deliverables.map((d) => (
                        <div key={d} className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <CheckCircle2 size={14} style={{ color: phase.color }} />
                          <span className="text-foreground/60">{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/30">
                      <span className="uppercase tracking-wider">Duración:</span>
                      <span className="font-medium" style={{ color: phase.color }}>{phase.duration}</span>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Tu transformación <span className="text-[#00D4FF]">empieza hoy</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto mb-10">
            Agenda una sesión de diagnóstico gratuita y descubre el potencial oculto de tu negocio digital.
          </p>
          <MagneticButton
            href="#contact"
            className="bg-[#00D4FF] text-black rounded-full font-bold gap-2 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-shadow"
          >
            INICIAR DIAGNÓSTICO GRATIS
            <ArrowRight size={18} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
