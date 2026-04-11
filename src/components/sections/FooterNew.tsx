"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

export function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Invent<span className="text-foreground/50">Agency</span>
              </h3>
              <p className="text-foreground/60 max-w-md">
                Agencia de élite que transforma visiones en realidades digitales.
              </p>
            </motion.div>
          </div>

          {/* Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-2">
                {["Inicio", "Servicios", "Portfolio", "Contacto"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Social
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: MessageCircle, href: "https://t.me/InventAgencyBot", label: "Telegram" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-foreground/10 border border-border hover:border-foreground flex items-center justify-center transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-foreground/50">
            © {currentYear} InventAgency. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/50 hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-foreground/50 hover:text-foreground transition-colors">
              Términos
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
