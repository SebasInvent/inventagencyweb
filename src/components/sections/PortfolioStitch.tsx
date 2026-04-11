"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Blockchain", "IA", "FinTech", "Biometría", "HealthTech"];

const projects = [
  {
    title: "Medicare",
    category: "HealthTech",
    tags: ["HealthTech", "Biometría"],
    description: "Advanced patient diagnostics",
  },
  {
    title: "Oriluxchain",
    category: "Blockchain",
    tags: ["Blockchain"],
    description: "Supply chain verification",
  },
  {
    title: "SalesAgent.io",
    category: "IA",
    tags: ["IA"],
    description: "Autonomous B2B sales cycles",
  },
  {
    title: "Kito",
    category: "FinTech",
    tags: ["FinTech"],
    description: "Global payments infrastructure",
  },
  {
    title: "StadiumAccess",
    category: "Biometría",
    tags: ["Biometría"],
    description: "Frictionless entry solutions",
  },
  {
    title: "Veralix",
    category: "Blockchain",
    tags: ["Blockchain"],
    description: "Decentralized asset management",
  },
];

export function PortfolioStitch() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-foreground/50 text-xs font-bold uppercase tracking-[0.3em]"
          >
            <span className="h-[1px] w-8 bg-foreground/50" />
            Selected Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter max-w-3xl"
          >
            FUTURISTIC SOLUTIONS FOR HIGH-END INDUSTRIES.
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`h-10 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 cursor-pointer"
            >
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
                <span className="text-6xl font-bold text-foreground/10">{project.title.charAt(0)}</span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-foreground/50 text-xs font-bold uppercase tracking-widest mb-2">
                  {project.tags.join(" + ")}
                </span>
                <h3 className="text-foreground text-3xl font-bold mb-4">{project.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/50 text-sm">{project.description}</span>
                  <ArrowUpRight className="text-foreground" />
                </div>
              </div>

              {/* Title at bottom */}
              <div className="absolute bottom-6 left-8 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 bg-foreground/[0.02] backdrop-blur-sm rounded-2xl p-10 md:p-20 text-center border border-foreground/10 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-foreground text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              Ready to build the future?
            </h2>
            <p className="text-foreground/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              We partner with visionary companies to transform industries through design and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
