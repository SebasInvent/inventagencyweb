"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  Blocks,
  Brain,
  Wallet,
  HeartPulse,
  Ticket,
  Bot,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Biometría & Verificación",
    description:
      "Sistemas de reconocimiento facial, verificación de identidad y control de acceso de alto rendimiento. Tecnología InsightFace, liveness detection y validación documental.",
    projects: ["Medicare", "StadiumAccess", "RegisterID", "RecoFacial"],
    color: "#00D4FF",
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description:
      "Desarrollo de blockchains propias, smart contracts, certificación NFT y sistemas de trazabilidad. Integración con redes como Polygon y BSC.",
    projects: ["Oriluxchain", "Veralix"],
    color: "#8B5CF6",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Agentes cognitivos, motores de recomendación, análisis de sentimiento y automatización inteligente. Integración con GPT-4 y modelos custom.",
    projects: ["SalesAgent.io", "WellnessApp"],
    color: "#10B981",
  },
  {
    icon: Wallet,
    title: "FinTech & Lending",
    description:
      "Plataformas de crédito automatizado, scoring crediticio, integración con burós y sistemas de pago. Arquitectura DDD y compliance regulatorio.",
    projects: ["Kito", "BotsTrading"],
    color: "#F59E0B",
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description:
      "Sistemas de salud integrados, dashboards de bienestar, integración con wearables y análisis predictivo de salud.",
    projects: ["Medicare", "WellnessApp"],
    color: "#EF4444",
  },
  {
    icon: Ticket,
    title: "Ticketing & Eventos",
    description:
      "Plataformas de venta de boletas, QR anti-fraude, sistemas de afiliados y control de acceso masivo.",
    projects: ["Ticketsystem", "StadiumAccess"],
    color: "#EC4899",
  },
  {
    icon: Bot,
    title: "Automatización & Bots",
    description:
      "Trading algorítmico, bots de atención al cliente, automatización de procesos y sistemas de monitoreo.",
    projects: ["BotsTrading", "SalesAgent.io"],
    color: "#6366F1",
  },
  {
    icon: Globe,
    title: "Plataformas Web & Mobile",
    description:
      "Desarrollo full-stack con Next.js, React Native, Flutter. Arquitecturas escalables y experiencias de usuario premium.",
    projects: ["Lakshmi", "Monsantsmile", "Kito"],
    color: "#14B8A6",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
            Nuestras Capacidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Servicios de <span className="gradient-text">Élite</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Dominamos el espectro completo de tecnologías emergentes. Cada
            proyecto es una oportunidad para redefinir lo posible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111111] border border-white/5 p-6 hover:border-[#00D4FF]/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}10 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4 border border-white/10 group-hover:border-[#00D4FF]/50 transition-colors"
                  style={{ color: service.color }}
                >
                  <service.icon size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#00D4FF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.projects.slice(0, 3).map((project) => (
                    <span
                      key={project}
                      className="text-xs px-2 py-1 bg-white/5 text-white/40 border border-white/5"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${service.color}20 50%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
