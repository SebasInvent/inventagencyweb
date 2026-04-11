"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Target, Zap, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  { number: "50+", label: "Proyectos Entregados" },
  { number: "30+", label: "Clientes Satisfechos" },
  { number: "5+", label: "Años de Experiencia" },
  { number: "100%", label: "Compromiso" },
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

export function AboutStitch() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Somos <span className="text-foreground/30">InventAgency</span>
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl border border-foreground/10 bg-foreground/[0.02]"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:bg-white hover:border-white hover:text-black transition-all duration-500"
              >
                <value.icon className="w-8 h-8 mb-4 text-foreground group-hover:text-black transition-colors" />
                <h4 className="text-xl font-bold mb-2 group-hover:text-black transition-colors">{value.title}</h4>
                <p className="text-sm text-foreground/50 group-hover:text-black/60 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
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

          <div className="flex justify-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-foreground/10 flex items-center justify-center mb-4 mx-auto border border-foreground/20">
                  <span className="text-3xl font-bold text-foreground/50">{member.initials}</span>
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-foreground/50">{member.role}</p>
              </motion.div>
            ))}
          </div>
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
          <p className="text-foreground/50 mb-8 max-w-2xl mx-auto">
            Tu proyecto merece lo mejor. Hablemos sobre cómo podemos llevar tu visión al siguiente nivel.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Iniciar Proyecto
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
