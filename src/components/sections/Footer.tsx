"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  servicios: [
    { name: "Biometría", href: "#services" },
    { name: "Blockchain", href: "#services" },
    { name: "Inteligencia Artificial", href: "#services" },
    { name: "FinTech", href: "#services" },
    { name: "HealthTech", href: "#services" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#methodology" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Metodología", href: "#methodology" },
    { name: "Contacto", href: "#contact" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "NDA", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/inventagency" },
  { icon: Linkedin, href: "https://linkedin.com/company/inventagency" },
  { icon: Twitter, href: "https://twitter.com/inventagency" },
  { icon: Instagram, href: "https://instagram.com/inventagency" },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#hero"
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/icono blanco.png"
                alt="InventAgency"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-normal tracking-wide text-white lowercase">invent</span>
                <span className="text-sm font-light tracking-[0.3em] text-[#00D4FF] lowercase">agency</span>
              </div>
            </motion.a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Arquitectos de estrategia digital. Transformamos visiones en
              realidades tecnológicas que definen el futuro de los negocios.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} InventAgency. Todos los derechos
            reservados.
          </p>
          <p className="text-white/30 text-sm font-mono">
            Crafted with <span className="text-[#00D4FF]">◆</span> in Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
