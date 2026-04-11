"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ContactNew() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
                Contacto
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Iniciemos tu{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#00A3CC] to-[#0077AA] bg-clip-text text-transparent">
                Proyecto
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground/60 mb-12"
            >
              Transforma tu visión en realidad digital. Contáctanos para una consulta gratuita.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "sebastian@inventagency.co" },
                { icon: Phone, label: "Teléfono", value: "+57 310 7556872" },
                { icon: MessageCircle, label: "Telegram", value: "@InventAgencyBot" },
                { icon: MapPin, label: "Ubicación", value: "Global Remote" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SpotlightCard>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Servicio
                  </label>
                  <select className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground focus:border-foreground focus:outline-none transition-colors">
                    <option>Selecciona un servicio</option>
                    <option>Biometría</option>
                    <option>Blockchain</option>
                    <option>Inteligencia Artificial</option>
                    <option>FinTech</option>
                    <option>HealthTech</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#00D4FF] text-black font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all flex items-center justify-center gap-2 rounded-lg"
                >
                  Enviar Mensaje
                  <Send size={18} />
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
