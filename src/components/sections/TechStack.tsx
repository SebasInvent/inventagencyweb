"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "BaaS" },
  { name: "Prisma", category: "ORM" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "OpenAI", category: "AI" },
  { name: "InsightFace", category: "Biometrics" },
  { name: "Solidity", category: "Blockchain" },
  { name: "Docker", category: "DevOps" },
  { name: "Railway", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
];

const technologiesReversed = [...technologies].reverse();

export function TechStack() {
  return (
    <section className="py-20 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Dominamos las <span className="gradient-text">Herramientas del Futuro</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-[#111111] border border-white/5 hover:border-[#00D4FF]/30 transition-colors group"
              >
                <span className="text-white/70 group-hover:text-[#00D4FF] transition-colors font-medium">
                  {tech.name}
                </span>
                <span className="text-white/30 text-xs ml-2 font-mono">
                  {tech.category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>

      {/* Second row - reverse direction */}
      <div className="relative mt-6">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: [-1920, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...technologiesReversed, ...technologiesReversed].map((tech, index) => (
              <div
                key={`${tech.name}-rev-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-[#111111] border border-white/5 hover:border-[#00D4FF]/30 transition-colors group"
              >
                <span className="text-white/70 group-hover:text-[#00D4FF] transition-colors font-medium">
                  {tech.name}
                </span>
                <span className="text-white/30 text-xs ml-2 font-mono">
                  {tech.category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
