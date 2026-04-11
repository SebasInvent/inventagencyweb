"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Lightbulb, Code2, Rocket, Repeat, CheckCircle2 } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    subtitle: "Entender para innovar",
    description: "Sumergimos en tu negocio, analizamos tu mercado y comprendemos tus objetivos. Esta fase es crucial para alinear nuestra visión con la tuya.",
    steps: ["Workshop inicial", "Análisis de requerimientos", "Research de mercado", "Definición de KPIs"],
    duration: "1-2 semanas",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    subtitle: "Planificar para ganar",
    description: "Diseñamos la arquitectura tecnológica y la experiencia de usuario. Cada decisión está respaldada por datos y mejores prácticas.",
    steps: ["Arquitectura de sistema", "UX/UI Design", "Tech Stack selection", "Roadmap definido"],
    duration: "2-3 semanas",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    subtitle: "Construir con excelencia",
    description: "Codificación ágil con revisiones constantes. Utilizamos metodologías modernas para entregar código limpio, escalable y mantenible.",
    steps: ["Sprints ágiles", "Code reviews", "Testing continuo", "Documentación"],
    duration: "4-8 semanas",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    subtitle: "Deploy sin fricciones",
    description: "Liberación cuidadosa con monitoreo en tiempo real. Garantizamos que todo funcione perfectamente desde el primer momento.",
    steps: ["QA final", "Deploy gradual", "Monitoreo 24/7", "Backup & Recovery"],
    duration: "1 semana",
  },
  {
    number: "05",
    icon: Repeat,
    title: "Optimización",
    subtitle: "Mejorar continuamente",
    description: "El lanzamiento es solo el inicio. Analizamos métricas, recopilamos feedback y refinamos para maximizar resultados.",
    steps: ["Analytics & Insights", "A/B Testing", "Performance tuning", "Iteraciones mensuales"],
    duration: "Continuo",
  },
];

const principles = [
  { title: "Transparencia Total", description: "Comunicación clara y acceso a todo el proceso en tiempo real." },
  { title: "Código de Calidad", description: "Estándares enterprise, tests automatizados, documentación completa." },
  { title: "Escalabilidad", description: "Arquitecturas que crecen contigo sin perder rendimiento." },
  { title: "Seguridad", description: "Mejores prácticas de seguridad en cada capa del sistema." },
];

export function MethodologyStitch() {
  return (
    <section id="methodology" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider mb-4 block">
              Nuestra Metodología
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              Proceso <span className="text-foreground/30">Estructurado</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Un enfoque sistemático que garantiza resultados excepcionales. 
              Cada fase está diseñada para maximizar valor y minimizar riesgos.
            </p>
          </motion.div>
        </div>

        {/* Phases Timeline */}
        <div className="space-y-8 mb-32">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="grid lg:grid-cols-[120px_1fr_300px] gap-8 items-start p-8 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:bg-white hover:border-white transition-all duration-500">
                {/* Number */}
                <div className="text-4xl font-bold text-foreground/20 group-hover:text-black/20 transition-colors">
                  {phase.number}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <phase.icon className="w-6 h-6 text-foreground group-hover:text-black transition-colors" />
                    <h3 className="text-2xl font-bold group-hover:text-black transition-colors">{phase.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/50 group-hover:text-black/60 transition-colors mb-2">
                    {phase.subtitle}
                  </p>
                  <p className="text-foreground/60 group-hover:text-black/70 transition-colors">
                    {phase.description}
                  </p>
                </div>

                {/* Steps & Duration */}
                <div className="lg:text-right">
                  <div className="text-xs text-foreground/40 group-hover:text-black/40 transition-colors mb-3">
                    {phase.duration}
                  </div>
                  <ul className="space-y-1">
                    {phase.steps.map((step) => (
                      <li
                        key={step}
                        className="text-sm text-foreground/50 group-hover:text-black/60 transition-colors flex items-center gap-2 lg:justify-end"
                      >
                        <CheckCircle2 size={14} className="opacity-50" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Principios de Trabajo</h3>
            <p className="text-foreground/50 max-w-2xl mx-auto">
              Los fundamentos que guían cada decisión técnica y de negocio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-foreground/10 bg-foreground/[0.02]"
              >
                <h4 className="text-lg font-bold mb-2">{principle.title}</h4>
                <p className="text-sm text-foreground/50">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 p-12 rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
        >
          <h3 className="text-2xl font-bold mb-4">Stack Tecnológico Moderno</h3>
          <p className="text-foreground/50 mb-8 max-w-2xl mx-auto">
            Utilizamos las mejores tecnologías del mercado para construir soluciones robustas y escalables.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-foreground/20 text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Comenzar Proyecto
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
