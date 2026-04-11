"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const categories = ["Todos", "E-commerce", "FinTech", "Web3", "Salud", "Trading"];

const projects = [
  {
    title: "Coffees Market",
    category: "E-commerce",
    tags: ["E-commerce", "Marketplace"],
    description: "Marketplace premium de café colombiano con logística integrada",
    url: "https://coffeesmarket.com",
    color: "from-amber-900/20 to-amber-700/10",
  },
  {
    title: "Veralix",
    category: "Web3",
    tags: ["Blockchain", "DeFi"],
    description: "Gestión descentralizada de activos digitales",
    url: "https://veralix.io",
    color: "from-purple-900/20 to-purple-700/10",
  },
  {
    title: "Black Lion Capital",
    category: "Trading",
    tags: ["3D", "FinTech"],
    description: "Landing 3D inmersiva para firma de inversión",
    url: "https://black-lion-threejs.vercel.app",
    color: "from-gray-900/20 to-gray-700/10",
  },
  {
    title: "MyFundalytics",
    category: "FinTech",
    tags: ["FinTech", "Analytics"],
    description: "Plataforma de análisis financiero y gestión de portafolios",
    url: "https://myfundalytics.com",
    color: "from-blue-900/20 to-blue-700/10",
  },
  {
    title: "BetterCred",
    category: "FinTech",
    tags: ["FinTech", "IA"],
    description: "Scoring crediticio potenciado con inteligencia artificial",
    url: "https://bettercred.io",
    color: "from-green-900/20 to-green-700/10",
  },
  {
    title: "David Guerrero VSL",
    category: "Trading",
    tags: ["Marketing", "Trading"],
    description: "Video sales letter para mastermind de trading",
    url: "https://davidguerrerofx.com/vsl-mastermind-corto",
    color: "from-red-900/20 to-red-700/10",
  },
  {
    title: "Medicare SASSC",
    category: "Salud",
    tags: ["HealthTech", "Biometría"],
    description: "Plataforma de salud con verificación biométrica",
    url: "#",
    color: "from-cyan-900/20 to-cyan-700/10",
  },
  {
    title: "A1A Face ID",
    category: "Salud",
    tags: ["Biometría", "Seguridad"],
    description: "Sistema de verificación facial para control de acceso",
    url: "#",
    color: "from-indigo-900/20 to-indigo-700/10",
  },
  {
    title: "Denom App",
    category: "E-commerce",
    tags: ["CRM", "Automatización"],
    description: "CRM con automatizaciones inteligentes para e-commerce",
    url: "#",
    color: "from-orange-900/20 to-orange-700/10",
  },
];

export function PortfolioStitch() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-foreground/50 text-xs font-bold uppercase tracking-[0.3em]"
          >
            <span className="h-[1px] w-8 bg-[#00D4FF]/50" />
            Proyectos Verificables
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter max-w-3xl"
          >
            SOLUCIONES DIGITALES PARA LÍDERES DE INDUSTRIA.
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`h-10 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#00D4FF] text-black"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                key={project.title}
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-foreground/10 cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-8xl font-bold text-foreground/5">{project.title.charAt(0)}</span>
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }} />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#00D4FF]/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#00D4FF]/60 text-xs font-bold uppercase tracking-widest mb-2">
                    {project.tags.join(" + ")}
                  </span>
                  <h3 className="text-white text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#00D4FF] text-xs font-medium flex items-center gap-1">
                      Ver proyecto <ExternalLink size={12} />
                    </span>
                    <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-6 left-8 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/40 text-xs mt-1">{project.tags.join(" · ")}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 bg-foreground/[0.02] backdrop-blur-sm rounded-2xl p-10 md:p-20 text-center border border-foreground/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-transparent to-[#00D4FF]/5" />
          <div className="relative z-10">
            <h2 className="text-foreground text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              ¿Listo para construir el futuro?
            </h2>
            <p className="text-foreground/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Trabajamos con empresas visionarias para transformar industrias a través de diseño y tecnología.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
              >
                Contáctanos
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-foreground/30 text-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-foreground/5 transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
