"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Particles } from "@/components/ui/Particles";
import { MagneticButton } from "@/components/ui/MagneticButton";

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: 0.8 + i * 0.04,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export function HeroStitch() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Multi-layer parallax: 3 layers at different speeds
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);   // slowest - background glow
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);  // medium - grid + particles
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);  // fastest - content

  // GPU-accelerated blur filter on scroll
  const blurFilter = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(8px)"]);
  const smoothBlur = useSpring(blurFilter, { stiffness: 200, damping: 30 });

  // Desaturation on scroll
  const saturate = useTransform(scrollYProgress, [0, 0.8], ["saturate(1)", "saturate(0.3)"]);

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const line1 = "Arquitectos de";
  const line2 = "Estrategia Digital";

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Layer 1: Background - slowest parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Particles className="absolute inset-0 z-0" quantity={60} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Layer 2: Mid - grid pattern */}
      <motion.div style={{ y: midY }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.06), transparent 80%)`,
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[1]" />

      {/* Layer 3: Foreground content - fastest parallax + GPU filter */}
      <motion.div
        className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center px-6 py-32"
        style={{ y: fgY, opacity, filter: smoothBlur }}
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#00D4FF]/80">
            Sistemas de Élite Operativos
          </span>
        </motion.div>

        {/* Main Heading - Letter by Letter */}
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.9] mb-8 overflow-hidden" style={{ textShadow: "0 0 40px rgba(0, 212, 255, 0.1)" }}>
          <span className="inline-flex overflow-hidden">
            {line1.split("").map((letter, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ perspective: "500px" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="inline-flex overflow-hidden">
            {line2.split("").map((letter, i) => (
              <motion.span
                key={`l2-${i}`}
                custom={line1.length + i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/30"
                style={{ perspective: "500px" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          custom={1.5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-foreground/50 max-w-2xl font-light leading-relaxed mb-12"
        >
          Construimos el Futuro Digital. Agencia de élite que transforma visiones en realidades digitales de alto rendimiento.
        </motion.p>

        {/* CTA Buttons - Magnetic */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-6"
        >
          <MagneticButton
            href="#contact"
            className="bg-white text-black rounded-full font-bold gap-2 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-shadow"
          >
            INICIAR PROYECTO
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton
            href="#portfolio"
            className="border border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            VER PORTFOLIO
          </MagneticButton>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          custom={2.5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
            Tecnologías que usamos
          </span>
          <div className="flex items-center gap-8 opacity-30">
            {["Next.js", "React", "TypeScript", "Supabase", "Tailwind"].map((tech) => (
              <span key={tech} className="text-xs font-medium tracking-wider">{tech}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* clipPath reveal image - appears as user scrolls past hero */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none z-20"
        style={{
          clipPath: useTransform(scrollYProgress, [0.3, 0.7], [
            "inset(100% 0% 0% 0%)",
            "inset(0% 0% 0% 0%)"
          ]),
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-transparent to-[#00D4FF]/5" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00D4FF] to-transparent" />
      </motion.div>
    </section>
  );
}
