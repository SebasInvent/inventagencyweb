"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { FooterNew } from "@/components/sections/FooterNew";
import { Button } from "@/components/ui/Button";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { Sparkles, Target, Brain, Heart, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const programColor = "#10B981"; // Emerald 500

export default function SemientaPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-background to-background" />
        <motion.div
          className="absolute top-32 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${programColor}10` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div 
                variants={fadeInUp} 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                style={{ 
                  backgroundColor: `${programColor}10`,
                  borderColor: `${programColor}30`
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: programColor }} />
                <span className="text-sm font-medium" style={{ color: programColor }}>
                  Programa de 3 meses
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Progra</span>
                <span style={{ color: programColor }}>ma</span>
                <br />
                <span style={{ color: programColor }}>Semien</span>
                <span className="text-foreground">ta</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted mb-6 leading-relaxed">
                El inicio de tu transformación. Construye los fundamentos del Ser empresarial.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-muted/70 mb-8">
                Para emprendedores que están comenzando y quieren construir desde la calma, 
                el propósito y la coherencia.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <MagneticButton 
                  href="/contact"
                  className="px-8 py-4 font-semibold rounded-full flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: programColor, 
                    color: "#000000"
                  }}
                >
                  Comenzar mi transformación
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <span 
                  className="text-3xl font-bold flex items-center"
                  style={{ color: programColor }}
                >
                  $3,000 USD
                </span>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <BentoCard className="p-8">
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: programColor }}
                >
                  Lo que incluye
                </h3>
                <ul className="space-y-4">
                  {[
                    "Diagnóstico completo del Ser",
                    "12 sesiones de coaching 1:1",
                    "Diseño de identidad empresarial",
                    "Prácticas de presencia diarias",
                    "Grupo de pares (cohorte)",
                    "Recursos y bibliografía",
                    "Soporte por WhatsApp",
                    "Certificado de completitud"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <CheckCircle2 
                        className="w-5 h-5 flex-shrink-0" 
                        style={{ color: programColor }}
                      />
                      <span className="text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="py-32 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Los <span style={{ color: programColor }}>5 pilares</span> del Ser
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Fundamentos que transformarán tu relación con el emprendimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Presencia", desc: "Aprende a estar completamente aquí, ahora. Sin la ansiedad del futuro ni el peso del pasado." },
              { icon: Target, title: "Propósito", desc: "Conecta con tu 'por qué' más profundo. Tu empresa como expresión de quien eres." },
              { icon: Heart, title: "Integridad", desc: "Alinea lo que piensas, sientes, dices y haces. Coherencia interna-externa." },
              { icon: Sparkles, title: "Abundancia", desc: "Cambia de mentalidad de escasez a expansión. Hay suficiente para todos." },
              { icon: Users, title: "Resiliencia", desc: "Desarrolla la capacidad de volver al centro después del caos." }
            ].map((pillar, index) => (
              <BentoCard
                key={index}
                delay={index * 0.1}
                className="group"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${programColor}20` }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: programColor }} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-muted text-sm">{pillar.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-background" />
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${programColor}10 0%, transparent 70%)`
          }}
        />
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Tu transformación <span style={{ color: programColor }}>comienza hoy</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
              La mejor inversión que puedes hacer no es en tu empresa. 
              Es en la persona que construye esa empresa.
            </p>
            <MagneticButton
              href="/contact"
              className="px-12 py-6 font-bold rounded-full text-lg"
              style={{ 
                backgroundColor: programColor, 
                color: "#000000"
              }}
            >
              Comenzar mi transformación
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}
