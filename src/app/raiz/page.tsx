"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { FooterNew } from "@/components/sections/FooterNew";
import { Heart, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

export default function RaizPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-background to-background" />
        <motion.div
          className="absolute top-32 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-8">
                <Heart className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-400 font-medium">Programa de 6 meses</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Progra</span>
                <span className="text-violet-400">ma</span>
                <br />
                <span className="text-violet-400">Ra</span>
                <span className="text-foreground">íz</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted mb-6 leading-relaxed">
                Integración profunda entre tu Ser y tu empresa. Escala desde la coherencia.
              </p>

              <p className="text-lg text-muted/70 mb-8">
                Para empresas de $100K-$500K ARR que quieren crecer sin perder su esencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-violet-500 text-white font-semibold rounded-full hover:bg-violet-400 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Profundizar mi transformación
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <span className="text-3xl font-bold text-violet-400 flex items-center">$8,000 USD</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface border border-surface-light rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-violet-400">Lo que incluye</h3>
              <ul className="space-y-4">
                {[
                  "Diagnóstico profundo del Ser",
                  "24 sesiones de coaching 1:1",
                  "Rediseño de cultura organizacional",
                  "Desarrollo de liderazgo consciente",
                  "Estrategia de crecimiento alineada",
                  "Grupo de pares exclusivo",
                  "Soporte prioritario",
                  "Workshops mensuales"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Profundiza tu <span className="text-violet-400">transformación</span>
          </h2>
          <Link href="/contact">
            <motion.button
              className="px-12 py-6 bg-violet-500 text-white font-bold rounded-full text-lg hover:bg-violet-400 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar programa Raíz
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </motion.button>
          </Link>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}
