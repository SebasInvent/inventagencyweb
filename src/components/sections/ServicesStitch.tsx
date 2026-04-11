"use client";

import { motion } from "framer-motion";
import { Fingerprint, Database, Brain, CreditCard, HeartPulse, Ticket, ArrowUpRight, Terminal } from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Biometría",
    description: "Identity verification through advanced physiological recognition patterns and secure biometric hashing.",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    icon: Database,
    title: "Blockchain",
    description: "Decentralized protocols and smart contract architectures for trustless digital ecosystems.",
    span: "md:col-span-8 md:row-span-1",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Neural Frameworks",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    icon: CreditCard,
    title: "FinTech",
    description: "Monetary Systems",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description: "Next-gen patient diagnostic data and wellness monitoring.",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    icon: Ticket,
    title: "Ticketing",
    description: "Secure event access utilizing dynamic NFT-based authentication.",
    span: "md:col-span-7 md:row-span-1",
  },
];

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
            <h3 className="text-foreground/50 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Expertise
            </h3>
            <h2 className="text-foreground text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Architecting the <br />
              <span className="text-foreground/30 italic font-light">Digital Frontier.</span>
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
              High-performance solutions tailored for the next generation of industry leaders.
            </p>
            <a
              href="#portfolio"
              className="group flex items-center gap-2 text-foreground font-bold text-sm uppercase tracking-widest"
            >
              View All Systems
              <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.span} group relative rounded-xl p-8 flex flex-col justify-between cursor-pointer overflow-hidden bg-foreground/[0.02] border border-foreground/10 hover:bg-white hover:border-white transition-all duration-500`}
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <service.icon className="w-6 h-6 text-foreground group-hover:text-black transition-colors" />
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
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 pt-16 border-t border-foreground/10 flex flex-col items-center text-center"
        >
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-6">Ready to build the future?</h2>
          <p className="text-foreground/50 text-xl max-w-2xl mb-10">
            Collaborate with our engineers to transform your industry with cutting-edge technology.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Launch Project
            </a>
            <a
              href="#contact"
              className="border border-foreground/30 text-foreground px-8 py-4 rounded-lg font-bold hover:bg-foreground/5 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
