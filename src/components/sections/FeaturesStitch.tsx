"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Palette } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Modelado de negocios digitales orientado a la dominancia del mercado global.",
  },
  {
    icon: Code,
    title: "Ingeniería",
    description: "Arquitectura de software de misión crítica con escalabilidad infinita.",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Interfaces minimalistas que fusionan estética futurista con usabilidad impecable.",
  },
];

export function FeaturesStitch() {
  return (
    <section className="relative py-24 px-6 border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-xl border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/20 transition-all"
          >
            <feature.icon className="w-8 h-8 text-foreground mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
            <p className="text-foreground/50 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
