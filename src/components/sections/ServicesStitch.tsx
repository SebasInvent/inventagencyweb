"use client";

import { motion } from "framer-motion";
import { Fingerprint, Database, Brain, CreditCard, HeartPulse, Ticket, ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ScrollMarquee } from "@/components/ui/ScrollMarquee";

const services = [
  {
    icon: Fingerprint,
    title: "Biometría",
    description: "Verificación de identidad mediante reconocimiento fisiológico avanzado y hashing biométrico seguro.",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    icon: Database,
    title: "Blockchain",
    description: "Protocolos descentralizados y arquitecturas de smart contracts para ecosistemas digitales trustless.",
    span: "md:col-span-8 md:row-span-1",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Frameworks neuronales para automatización y predicción inteligente.",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    icon: CreditCard,
    title: "FinTech",
    description: "Sistemas monetarios y pagos globales de próxima generación.",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description: "Diagnóstico de pacientes y monitoreo de bienestar con tecnología de punta.",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    icon: Ticket,
    title: "Ticketing",
    description: "Acceso a eventos seguro con autenticación dinámica basada en NFTs.",
    span: "md:col-span-7 md:row-span-1",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export function ServicesStitch() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[#00D4FF]/60 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Nuestra Expertise
            </span>
            <h2 className="text-foreground text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Arquitectando la <br />
              <span className="text-foreground/30 italic font-light">Frontera Digital.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-foreground/50 text-lg max-w-xs">
              Soluciones de alto rendimiento para la próxima generación de líderes de la industria.
            </p>
            <a
              href="#portfolio"
              className="group flex items-center gap-2 text-foreground font-bold text-sm uppercase tracking-widest"
            >
              Ver Todos los Sistemas
              <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Scroll-driven text marquee */}
        <ScrollMarquee
          lines={[
            { text: "Blockchain", reverse: false },
            { text: "Inteligencia Artificial", reverse: true },
            { text: "FinTech", reverse: false },
            { text: "Biometría", reverse: true },
          ]}
          className="mb-16"
        />

        {/* Bento Grid with Tilt */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp} className={service.span}>
              <TiltCard className="h-full rounded-xl p-8 flex flex-col justify-between cursor-pointer bg-foreground/[0.02] border border-foreground/10 hover:bg-white hover:border-white transition-all duration-500">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <service.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <ArrowUpRight size={20} className="text-foreground/20 group-hover:text-black/20 transition-colors" />
                </div>
                <div>
                  <h4 className="text-foreground text-xl md:text-2xl font-bold mb-2 group-hover:text-black transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-foreground/40 text-sm leading-relaxed group-hover:text-black/60 transition-colors">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 pt-16 border-t border-foreground/10 flex flex-col items-center text-center"
        >
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-6">¿Listo para construir el futuro?</h2>
          <p className="text-foreground/50 text-xl max-w-2xl mb-10">
            Colabora con nuestros ingenieros para transformar tu industria con tecnología de vanguardia.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Lanzar Proyecto
            </a>
            <a
              href="#contact"
              className="border border-foreground/30 text-foreground px-8 py-4 rounded-lg font-bold hover:bg-foreground/5 transition-colors"
            >
              Contactar Ventas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
