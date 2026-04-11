"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { FooterNew } from "@/components/sections/FooterNew";
import { ArrowRight, Check } from "lucide-react";

const includes = [
  "Diagnóstico completo del Ser",
  "12 sesiones de coaching 1:1",
  "Diseño de identidad empresarial",
  "Prácticas de presencia diarias",
  "Grupo de pares (cohorte)",
  "Recursos y bibliografía",
  "Soporte por WhatsApp",
  "Certificado de completitud"
];

export default function SemientaPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 max-w-6xl w-full px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 w-fit"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/80">
                  Programa de 3 meses
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8"
              >
                Programa<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                  Semienta
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-foreground/50 max-w-xl leading-relaxed mb-8"
              >
                El inicio de tu transformación. Construye los fundamentos del Ser empresarial 
                para emprendedores que están comenzando.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <a
                  href="#contact"
                  className="group px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  COMENZAR
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-3xl font-bold text-white/80">$3,000 USD</span>
              </motion.div>
            </div>

            {/* Right - Includes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <h3 className="text-xl font-bold mb-6 text-white/90">Incluye</h3>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/60">
                    <Check size={16} className="text-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Tu transformación<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              comienza hoy
            </span>
          </h2>
          <p className="text-foreground/50 mb-8 max-w-xl mx-auto">
            La mejor inversión que puedes hacer no es en tu empresa. 
            Es en la persona que construye esa empresa.
          </p>
          <a
            href="#contact"
            className="inline-flex px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all"
          >
            COMENZAR MI TRANSFORMACIÓN
          </a>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}
