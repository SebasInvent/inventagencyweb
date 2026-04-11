"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { FooterNew } from "@/components/sections/FooterNew";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Heart, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

const programColor = "#8B5CF6"; // Violet 500

export default function RaizPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-background to-background" />
        <motion.div
          className="absolute top-32 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${programColor}10` }}
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
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                style={{ 
                  backgroundColor: `${programColor}10`,
                  borderColor: `${programColor}30`
                }}
              >
                <Heart className="w-4 h-4" style={{ color: programColor }} />
                <span className="text-sm font-medium" style={{ color: programColor }}>
                  Programa de 6 meses
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Progra</span>
                <span style={{ color: programColor }}>ma</span>
                <br />
                <span style={{ color: programColor }}>Ra</span>
                <span className="text-foreground">íz</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted mb-6 leading-relaxed">
                Integración profunda entre tu Ser y tu empresa. Escala desde la coherencia.
              </p>

              <p className="text-lg text-muted/70 mb-8">
                Para empresas de $100K-$500K ARR que quieren crecer sin perder su esencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  href="/contact"
                  className="px-8 py-4 font-semibold rounded-full flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: programColor, 
                    color: "#FFFFFF"
                  }}
                >
                  Profundizar mi transformación
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <span 
                  className="text-3xl font-bold flex items-center"
                  style={{ color: programColor }}
                >
                  $8,000 USD
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BentoCard className="p-8">
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: programColor }}
                >
                  Lo que incluye
                </h3>
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
                      <CheckCircle2 
                        className="w-5 h-5 flex-shrink-0" 
                        style={{ color: programColor }}
                      />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${programColor}10 0%, transparent 70%)`
          }}
        />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Profundiza tu <span style={{ color: programColor }}>transformación</span>
          </h2>
          <MagneticButton
            href="/contact"
            className="px-12 py-6 font-bold rounded-full text-lg"
            style={{ 
              backgroundColor: programColor, 
              color: "#FFFFFF"
            }}
          >
            Comenzar programa Raíz
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </MagneticButton>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}
