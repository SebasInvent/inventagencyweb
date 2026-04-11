"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO",
    company: "Orilux Jewelry",
    content:
      "InventAgency transformó completamente nuestra visión de certificación de joyas. La blockchain que desarrollaron nos posiciona como líderes en autenticidad y trazabilidad en el mercado latinoamericano.",
    rating: 5,
    project: "Oriluxchain",
  },
  {
    name: "María Fernanda López",
    role: "Directora de Operaciones",
    company: "Medicare Colombia",
    content:
      "El sistema biométrico que implementaron revolucionó nuestro proceso de atención. La verificación de pacientes es ahora instantánea y segura. Excelente trabajo técnico y acompañamiento.",
    rating: 5,
    project: "Medicare",
  },
  {
    name: "Andrés Gutiérrez",
    role: "Fundador",
    company: "Kito Finance",
    content:
      "Necesitábamos una plataforma de lending que cumpliera con regulaciones colombianas y fuera escalable. InventAgency entregó exactamente eso, con un scoring crediticio impecable.",
    rating: 5,
    project: "Kito",
  },
  {
    name: "Laura Martínez",
    role: "CTO",
    company: "StadiumAccess",
    content:
      "El control de acceso biométrico para nuestros estadios maneja miles de validaciones por hora sin fallar. La integración de reconocimiento facial es de clase mundial.",
    rating: 5,
    project: "StadiumAccess",
  },
  {
    name: "Roberto Sánchez",
    role: "Director Comercial",
    company: "TechRetail",
    content:
      "El agente de ventas con IA que desarrollaron aumentó nuestras conversiones en un 40%. La capacidad de entender intención y actitud del cliente es impresionante.",
    rating: 5,
    project: "SalesAgent.io",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Cada proyecto es una colaboración que transforma negocios. Estas son
            las voces de quienes confiaron en nosotros.
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-[#00D4FF]/20">
              <Quote size={48} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-[#00D4FF] fill-[#00D4FF]"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 font-light">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-white font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-white/50 text-sm">
                  {testimonials[activeIndex].role},{" "}
                  {testimonials[activeIndex].company}
                </p>
              </div>
              <div className="px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-sm font-mono">
                {testimonials[activeIndex].project}
              </div>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#00D4FF] w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <p className="text-center text-white/30 text-sm mb-8 font-mono">
            EMPRESAS QUE CONFÍAN EN NOSOTROS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["Orilux", "Medicare", "Kito", "StadiumAccess", "Veralix"].map(
              (company) => (
                <div
                  key={company}
                  className="text-white/40 text-xl font-bold tracking-wider hover:text-[#00D4FF] transition-colors"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
