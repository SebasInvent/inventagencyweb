"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar el mensaje");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00D4FF] text-sm font-mono tracking-wider uppercase">
              Iniciemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Tu Próximo <span className="gradient-text">Proyecto</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Cada gran transformación comienza con una conversación. Cuéntanos
              tu visión y juntos la convertiremos en realidad digital.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[#00D4FF]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Email</p>
                  <a
                    href="mailto:hello@inventagency.co"
                    className="text-white hover:text-[#00D4FF] transition-colors"
                  >
                    hello@inventagency.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[#00D4FF]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Teléfono</p>
                  <a
                    href="tel:+573001234567"
                    className="text-white hover:text-[#00D4FF] transition-colors"
                  >
                    +57 300 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[#00D4FF]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Ubicación</p>
                  <p className="text-white">Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[#111111] border border-white/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00D4FF]">48h</div>
                <div className="text-xs text-white/40">Respuesta</div>
              </div>
              <div className="text-center border-x border-white/5">
                <div className="text-2xl font-bold text-[#00D4FF]">100%</div>
                <div className="text-xs text-white/40">Compromiso</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00D4FF]">NDA</div>
                <div className="text-xs text-white/40">Garantizado</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/40 text-sm mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-sm mb-2">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-white/40 text-sm mb-2">
                  Cuéntanos tu visión
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors resize-none"
                  placeholder="Describe tu proyecto, tus objetivos y cualquier detalle relevante..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#00D4FF] text-black font-medium py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-3"
                  >
                    <CheckCircle size={18} />
                    <span>¡Mensaje enviado! Te contactaremos pronto.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3"
                  >
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-white/30 text-xs text-center">
                Al enviar este formulario, aceptas nuestra política de
                privacidad. Nunca compartiremos tu información.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
