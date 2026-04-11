"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Medicare",
    category: "HealthTech • Biometría",
    description:
      "Sistema Integrado de Atención en Salud con verificación biométrica, panel administrativo, app móvil para pacientes y kiosko de autoservicio.",
    tech: ["NestJS", "Next.js", "Flutter", "PostgreSQL", "InsightFace"],
    image: "/projects/medicare.jpg",
    featured: true,
  },
  {
    name: "Oriluxchain",
    category: "Blockchain • Web3",
    description:
      "Blockchain propia para certificación de joyas con smart contracts, sistema de tokens TCT y integración con Veralix para verificación de autenticidad.",
    tech: ["Python", "FastAPI", "Solidity", "React", "PostgreSQL"],
    image: "/projects/orilux.jpg",
    featured: true,
  },
  {
    name: "SalesAgent.io",
    category: "AI • Omnichannel",
    description:
      "Agente de ventas cognitivo omnicanal con motor de intención, análisis de actitud, recomendaciones personalizadas e integración con Meta APIs.",
    tech: ["Node.js", "Python", "FastAPI", "OpenAI", "Supabase"],
    image: "/projects/salesagent.jpg",
    featured: true,
  },
  {
    name: "StadiumAccess",
    category: "Biometría • Eventos",
    description:
      "Control de acceso masivo para estadios con validación de triple factor: QR, OCR de documentos y reconocimiento facial en tiempo real.",
    tech: ["FastAPI", "React Native", "InsightFace", "Google Vision"],
    image: "/projects/stadium.jpg",
    featured: false,
  },
  {
    name: "Kito",
    category: "FinTech • Lending",
    description:
      "Plataforma de crédito autónomo para MiPymes colombianas con scoring crediticio, integración DataCrédito y arquitectura DDD.",
    tech: ["Expo", "TypeScript", "Zustand", "Supabase"],
    image: "/projects/kito.jpg",
    featured: false,
  },
  {
    name: "Ticketsystem",
    category: "E-commerce • Eventos",
    description:
      "Plataforma de ticketing estilo Eventbrite con QR anti-fraude, sistema de afiliados, múltiples pasarelas de pago y feed tipo TikTok.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Wompi"],
    image: "/projects/tickets.jpg",
    featured: false,
  },
  {
    name: "WellnessApp",
    category: "HealthTech • AI",
    description:
      "Plataforma de bienestar que unifica datos de wearables, biomarkers y lifestyle con insights de IA y predicción de burnout.",
    tech: ["Next.js", "Supabase", "OpenAI", "Oura API", "Recharts"],
    image: "/projects/wellness.jpg",
    featured: false,
  },
  {
    name: "RegisterID",
    category: "GovTech • Biometría",
    description:
      "Sistema de verificación de identidad para la Registraduría colombiana con soporte para cédulas legacy y digitales, liveness detection.",
    tech: ["Flutter", "FastAPI", "ML Kit", "InsightFace", "TensorFlow"],
    image: "/projects/registerid.jpg",
    featured: false,
  },
];

export function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
            Casos de Éxito
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Portafolio de <span className="gradient-text">Impacto</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Cada proyecto representa una transformación digital completa.
            Soluciones que operan en producción, generando valor real.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111111] border border-white/5 overflow-hidden hover:border-[#00D4FF]/30 transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/5">
                    {project.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[#00D4FF] text-xs font-mono">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 group-hover:text-[#00D4FF] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <motion.div
                    className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-[#00D4FF] group-hover:bg-[#00D4FF] transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-white/50 group-hover:text-black transition-colors"
                    />
                  </motion.div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-white/5 text-white/40 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured badge */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-[#00D4FF]/20 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-mono">
                DESTACADO
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-[#111111] border border-white/5 p-5 hover:border-[#00D4FF]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[#00D4FF] text-xs font-mono">
                  {project.category}
                </span>
                <ExternalLink
                  size={14}
                  className="text-white/20 group-hover:text-[#00D4FF] transition-colors"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#00D4FF] transition-colors">
                {project.name}
              </h3>
              <p className="text-white/40 text-sm line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 mb-4">
            ¿Listo para ser nuestro próximo caso de éxito?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Conversemos
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
