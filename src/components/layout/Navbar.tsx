"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#services" },
  { name: "Transformación", href: "#transformacion" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Nosotros", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#hero"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                alt="InventAgency"
                width={160}
                height={80}
                className="h-10 w-auto"
              />
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <ThemeToggle />
              <motion.a
                href="https://dash.inventagency.co/login"
                className="px-5 py-2 border border-foreground/20 text-foreground text-sm font-medium hover:border-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Sesión
              </motion.a>
              <motion.a
                href="#contact"
                className="px-5 py-2 bg-[#00D4FF] text-black text-sm font-bold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Proyecto
              </motion.a>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-12">
                <Image
                  src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                  alt="InventAgency"
                  width={160}
                  height={80}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="https://dash.inventagency.co/login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="text-2xl text-foreground hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
