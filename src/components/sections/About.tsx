"use client";

import { motion } from "framer-motion";
import { Target, Eye, Zap, Shield, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precisión Estratégica",
    description:
      "Cada línea de código, cada decisión de diseño está alineada con tus objetivos de negocio.",
  },
  {
    icon: Eye,
    title: "Visión Holística",
    description:
      "Vemos más allá del proyecto inmediato. Arquitectamos para el crecimiento futuro.",
  },
  {
    icon: Zap,
    title: "Ejecución Ágil",
    description:
      "Sprints cortos, entregas constantes, iteración basada en feedback real.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    description:
      "Auditorías de seguridad, encriptación de datos, cumplimiento regulatorio.",
  },
  {
    icon: Users,
    title: "Partnership Real",
    description:
      "No somos proveedores, somos socios estratégicos en tu transformación digital.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description:
      "Exploramos tecnologías emergentes para mantener tu ventaja competitiva.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00D4FF]/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
              Nuestra Filosofía
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              El <span className="gradient-text">Jung Digital</span> de tu
              Negocio
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                Como Carl Jung exploró las profundidades del inconsciente
                colectivo para revelar arquetipos universales, nosotros
                exploramos las profundidades de tu negocio para revelar su
                verdadero potencial digital.
              </p>
              <p>
                Cada empresa tiene una &ldquo;sombra digital&rdquo; — capacidades
                latentes que esperan ser manifestadas. Nuestro trabajo es
                iluminar esas posibilidades y transformarlas en realidades
                tecnológicas que impulsen tu crecimiento.
              </p>
              <p>
                No construimos software. Arquitectamos{" "}
                <span className="text-[#00D4FF]">ecosistemas digitales</span>{" "}
                que evolucionan con tu visión.
              </p>
            </div>
          </motion.div>

          {/* Right - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Concentric circles */}
              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border border-[#00D4FF]/10 rounded-full"
                  style={{
                    transform: `scale(${ring * 0.25})`,
                  }}
                  animate={{
                    rotate: ring % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 20 + ring * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-[#00D4FF]/20 to-transparent border border-[#00D4FF]/30 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-4xl font-bold text-[#00D4FF]">IA</span>
                </motion.div>
              </div>

              {/* Floating nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-3 h-3 bg-[#00D4FF] rounded-full"
                  style={{
                    left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                    top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Nuestros <span className="text-[#00D4FF]">Valores</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 bg-[#111111] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-4 text-[#00D4FF] group-hover:border-[#00D4FF]/50 transition-colors">
                <value.icon size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-[#00D4FF] transition-colors">
                {value.title}
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
