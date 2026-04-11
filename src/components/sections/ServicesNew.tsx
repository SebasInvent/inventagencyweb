"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Database, Fingerprint, Lock, Rocket, Smartphone, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const services = [
  {
    icon: Fingerprint,
    title: "Biometría",
    description: "Sistemas de identificación y autenticación biométrica de última generación.",
    projects: ["Medicare", "StadiumAccess", "RegisterID"],
  },
  {
    icon: Lock,
    title: "Blockchain",
    description: "Soluciones descentralizadas y contratos inteligentes para máxima seguridad.",
    projects: ["Oriluxchain", "Veralix"],
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "IA conversacional, análisis predictivo y automatización inteligente.",
    projects: ["SalesAgent.io", "WellnessApp"],
  },
  {
    icon: Database,
    title: "FinTech",
    description: "Plataformas financieras, lending y trading automatizado.",
    projects: ["Kito", "BotsTrading"],
  },
  {
    icon: Smartphone,
    title: "HealthTech",
    description: "Soluciones digitales para el sector salud y bienestar.",
    projects: ["Medicare", "WellnessApp"],
  },
  {
    icon: Zap,
    title: "Ticketing",
    description: "Sistemas de venta y gestión de tickets de nueva generación.",
    projects: ["Ticketsystem"],
  },
];

export function ServicesNew() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-medium text-[#00D4FF] uppercase tracking-wider">
              Servicios
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Soluciones de{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#00A3CC] to-[#0077AA] bg-clip-text text-transparent">
              Élite
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Transformamos industrias con tecnología de vanguardia
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard>
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {service.projects.map((project) => (
                        <span
                          key={project}
                          className="text-xs px-2 py-1 rounded bg-foreground/5 text-foreground/70"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-[#00D4FF] transition-colors"
          >
            Iniciar tu Proyecto
            <Rocket size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
