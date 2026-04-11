"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  RefreshCw,
  Shield,
} from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Inmersión Profunda",
    description:
      "Analizamos tu negocio como un psicólogo analiza la psique. Entendemos tus arquetipos de usuario, tus sombras operativas y tus aspiraciones de crecimiento.",
    duration: "1-2 semanas",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Arquitectura Estratégica",
    description:
      "Diseñamos la estructura que sostendrá tu visión. Cada decisión técnica está alineada con tus objetivos de negocio y escalabilidad futura.",
    duration: "1-2 semanas",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo Iterativo",
    description:
      "Construimos en sprints cortos con entregas constantes. Cada iteración es una oportunidad para refinar y perfeccionar.",
    duration: "4-12 semanas",
  },
  {
    number: "04",
    icon: Shield,
    title: "Validación Rigurosa",
    description:
      "Testing exhaustivo, auditorías de seguridad y optimización de rendimiento. Nada sale a producción sin pasar nuestros estándares.",
    duration: "1-2 semanas",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Lanzamiento Estratégico",
    description:
      "Deployment progresivo con monitoreo en tiempo real. Acompañamos cada lanzamiento como si fuera nuestro propio producto.",
    duration: "1 semana",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Evolución Continua",
    description:
      "El lanzamiento es solo el comienzo. Iteramos basados en datos reales y feedback de usuarios para maximizar el impacto.",
    duration: "Ongoing",
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00D4FF]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
            Nuestra Filosofía
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Metodología <span className="gradient-text">Jungiana</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Como Carl Jung exploró las profundidades de la psique humana,
            nosotros exploramos las profundidades de tu negocio. Cada proyecto
            es un viaje de individuación digital — transformando el potencial
            latente en realidad manifiesta.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 via-[#00D4FF]/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:mb-16`}
              >
                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`bg-[#0A0A0A] border border-white/5 p-6 hover:border-[#00D4FF]/30 transition-all duration-300 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    } max-w-lg`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-12 h-12 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                        <phase.icon size={24} />
                      </div>
                      <div>
                        <span className="text-[#00D4FF] text-xs font-mono">
                          FASE {phase.number}
                        </span>
                        <h3 className="text-xl font-semibold">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      {phase.description}
                    </p>
                    <span className="text-xs text-white/30 font-mono">
                      Duración: {phase.duration}
                    </span>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] border-2 border-[#00D4FF] rounded-full z-10">
                  <div className="absolute inset-1 bg-[#00D4FF] rounded-full animate-pulse" />
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-white/70 italic max-w-4xl mx-auto">
            &ldquo;No se puede iluminar la oscuridad con más oscuridad, solo con
            luz. No se puede transformar un negocio con más de lo mismo, solo
            con innovación radical.&rdquo;
          </blockquote>
          <p className="text-[#00D4FF] mt-6 font-mono text-sm">
            — Filosofía InventAgency
          </p>
        </motion.div>
      </div>
    </section>
  );
}
