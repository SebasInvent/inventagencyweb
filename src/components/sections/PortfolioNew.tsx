"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useState } from "react";

const categories = ["Todos", "Biometría", "Blockchain", "IA", "FinTech", "HealthTech"];

const projects = [
  {
    title: "Medicare",
    category: "Biometría",
    description: "Plataforma de salud con autenticación biométrica avanzada",
    image: "/projects/medicare.jpg",
    tags: ["Biometría", "HealthTech"],
  },
  {
    title: "Oriluxchain",
    category: "Blockchain",
    description: "Blockchain empresarial con contratos inteligentes",
    image: "/projects/orilux.jpg",
    tags: ["Blockchain", "Smart Contracts"],
  },
  {
    title: "SalesAgent.io",
    category: "IA",
    description: "Agente de ventas con IA conversacional",
    image: "/projects/salesagent.jpg",
    tags: ["IA", "Chatbot"],
  },
  {
    title: "Kito",
    category: "FinTech",
    description: "Plataforma de préstamos peer-to-peer",
    image: "/projects/kito.jpg",
    tags: ["FinTech", "Lending"],
  },
  {
    title: "StadiumAccess",
    category: "Biometría",
    description: "Control de acceso biométrico para estadios",
    image: "/projects/stadium.jpg",
    tags: ["Biometría", "IoT"],
  },
  {
    title: "Veralix",
    category: "Blockchain",
    description: "Verificación de identidad descentralizada",
    image: "/projects/veralix.jpg",
    tags: ["Blockchain", "Identity"],
  },
];

export function PortfolioNew() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-medium text-[#00D4FF] uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#00A3CC] to-[#0077AA] bg-clip-text text-transparent">
              Transforman
            </span>
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#00D4FF] text-black"
                  : "bg-card/50 text-foreground/70 hover:bg-card border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <SpotlightCard>
                <div className="aspect-video bg-foreground/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold text-foreground/10">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-foreground/60 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-[#00D4FF]/10 text-[#00D4FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
                >
                  Ver Proyecto
                  <ExternalLink size={14} />
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
