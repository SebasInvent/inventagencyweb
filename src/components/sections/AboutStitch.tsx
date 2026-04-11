"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Target, Zap, Globe, Award } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";

const stats = [
  { number: 50, suffix: "+", label: "Proyectos Entregados" },
  { number: 30, suffix: "+", label: "Clientes Satisfechos" },
  { number: 5, suffix: "+", label: "Años de Experiencia" },
  { number: 100, suffix: "%", label: "Compromiso" },
];

const values = [
  {
    icon: Target,
    title: "Excelencia",
    description: "Cada proyecto es una obra maestra. No aceptamos nada menos que la perfección.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Adoptamos lo último en tecnología para mantenerte siempre un paso adelante.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Trabajamos con clientes de todo el mundo, sin fronteras ni limitaciones.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Código limpio, diseño impecable, resultados medibles. Siempre.",
  },
];

const team = [
  { name: "Sebastian", role: "CEO & Founder", initials: "SG" },
  { name: "Equipo", role: "Desarrolladores Elite", initials: "EQ" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export function AboutStitch() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#00D4FF]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00D4FF]/60 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0077AA]">InventAgency</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-foreground/60 leading-relaxed mb-6">
              Nacimos con una misión clara: transformar la forma en que las empresas interactúan con la tecnología.
              No somos solo una agencia de desarrollo; somos arquitectos de soluciones digitales de alto impacto.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Desde Bogotá, Colombia, trabajamos con clientes globales para crear experiencias digitales
              que no solo funcionan perfectamente, sino que también impresionan.
            </p>
          </motion.div>
        </div>

        {/* Stats with Animated Counters */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-8 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:border-[#00D4FF]/20 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00D4FF] mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-foreground/40 uppercase tracking-[0.15em]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values with Spotlight */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h3>
            <p className="text-foreground/50 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada línea de código que escribimos.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp}>
                <SpotlightCard className="h-full p-8 group hover:bg-white hover:border-white transition-all duration-500">
                  <value.icon className="w-8 h-8 mb-4 text-[#00D4FF] group-hover:text-black transition-colors" />
                  <h4 className="text-xl font-bold mb-2 group-hover:text-black transition-colors">{value.title}</h4>
                  <p className="text-sm text-foreground/50 group-hover:text-black/60 transition-colors">
                    {value.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">El Equipo</h3>
            <p className="text-foreground/50 max-w-2xl mx-auto">
              Personas apasionadas por la tecnología y comprometidas con tu éxito.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-8"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF]/10 to-[#0077AA]/10 flex items-center justify-center mb-4 mx-auto border border-[#00D4FF]/20">
                  <span className="text-3xl font-bold text-[#00D4FF]/60">{member.initials}</span>
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-foreground/50 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para trabajar juntos?
          </h3>
          <p className="text-foreground/50 mb-10 max-w-2xl mx-auto">
            Tu proyecto merece lo mejor. Hablemos sobre cómo podemos llevar tu visión al siguiente nivel.
          </p>
          <MagneticButton
            href="#contact"
            className="bg-white text-black rounded-full font-bold gap-2"
          >
            Iniciar Proyecto
            <ArrowUpRight size={20} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
