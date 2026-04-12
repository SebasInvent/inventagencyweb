"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Spline = lazy(() => import("@splinetool/react-spline"));

/* ─── Spline 3D Background with monochrome overlay ─── */
function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-screen pointer-events-auto overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="animate-pulse text-white/30 text-xs tracking-[0.3em] uppercase">Cargando</div>
          </div>
        }
      >
        <Spline
          style={{ width: "100%", height: "100vh", pointerEvents: "auto" }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>

      {/* Monochrome desaturation overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "grayscale(100%)", mixBlendMode: "saturation" }} />

      {/* Dark vignette — left/right/bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.95) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)
          `,
        }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{ backgroundImage: "url(/noise.svg)", backgroundRepeat: "repeat", backgroundSize: "128px" }} />
    </div>
  );
}

/* ─── Navbar — minimal, monochrome ─── */
function GalaxyNavbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Transformación", href: "#transformacion" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  const linkClass = (name: string) => {
    const active = hoveredItem === name;
    const other = hoveredItem !== null && !active;
    return `text-[13px] tracking-wide transition-colors duration-200 ${active ? "text-white" : other ? "text-white/30" : "text-white/60"}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left — Logo + Links */}
        <div className="flex items-center gap-10">
          <a href="#hero" className="flex items-center">
            <Image
              src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
              alt="InventAgency"
              width={130}
              height={65}
              className="h-7 w-auto"
            />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className={linkClass(l.name)} onMouseEnter={() => setHoveredItem(l.name)} onMouseLeave={() => setHoveredItem(null)}>
                {l.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="https://dash.inventagency.co/login" className="hidden md:block text-white/50 hover:text-white text-[13px] tracking-wide transition-colors">
            Iniciar Sesión
          </a>
          <a
            href="#contact"
            className="bg-white text-black font-semibold text-[13px] py-2 px-5 rounded-full hover:bg-white/90 transition-colors"
          >
            Iniciar Proyecto
          </a>
          <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="text-white/60 hover:text-white text-sm transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero Content — clean, B/W ─── */
function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-white/70 text-[11px] font-medium uppercase tracking-[0.2em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/80" />
          </span>
          Development on Demand
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="mt-6 text-[2.75rem] sm:text-6xl md:text-[4.5rem] font-bold leading-[0.92] tracking-[-0.03em] text-white"
      >
        Arquitectos de
        <br />
        <span className="text-white/40">Estrategia Digital</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16 }}
        className="mt-6 text-base sm:text-lg text-white/45 max-w-md leading-relaxed"
      >
        Transformamos ideas en ecosistemas digitales que dominan mercados. Software, IA, Blockchain y Biometría.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24 }}
        className="mt-10 flex flex-col sm:flex-row items-start gap-3"
      >
        <a
          href="#contact"
          className="bg-white text-black font-semibold text-sm py-3 px-7 rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors"
        >
          Iniciar Proyecto
          <ArrowRight size={16} />
        </a>
        <a
          href="#services"
          className="border border-white/15 text-white/70 font-medium text-sm py-3 px-7 rounded-full flex items-center gap-2 hover:border-white/30 hover:text-white transition-colors backdrop-blur-sm"
        >
          Explorar Servicios
        </a>
      </motion.div>
    </div>
  );
}

/* ─── Screenshot / Preview Section ─── */
function PreviewSection({ screenshotRef }: { screenshotRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 mt-16">
      <motion.div
        ref={screenshotRef}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm shadow-2xl shadow-black/40"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md bg-white/[0.04] border border-white/[0.06] max-w-xs mx-auto flex items-center justify-center">
              <span className="text-[10px] text-white/25">app.inventagency.co</span>
            </div>
          </div>
        </div>
        {/* Screenshot */}
        <div className="p-1">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Platform Preview"
            className="w-full h-auto block rounded-lg grayscale contrast-[0.9]"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Stats bar ─── */
function StatsBar() {
  const stats = [
    { value: "50+", label: "Proyectos Entregados" },
    { value: "12", label: "Industrias" },
    { value: "99%", label: "Uptime SLA" },
    { value: "3", label: "Países" },
  ];

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-black/60 px-6 py-8 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{s.value}</div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-white/35 mt-1.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─── Main Export ─── */
export function GalaxyHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <div ref={sectionRef} className="relative bg-black">
      <GalaxyNavbar />

      {/* ── Hero ── */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <SplineBackground />
        </div>

        <motion.div
          ref={heroContentRef}
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 min-h-screen flex items-center pointer-events-none"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pointer-events-auto">
            <HeroContent />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/25">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>

      {/* ── Below Hero ── */}
      <div className="bg-black relative z-10" style={{ marginTop: "-8vh" }}>
        <PreviewSection screenshotRef={screenshotRef} />
        <StatsBar />
      </div>
    </div>
  );
}
