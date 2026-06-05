'use client'

import { useEffect } from 'react'

/* ──────────────────────────────────────────────────────────────────────────
 * El Camino de Camilo · Invent Agency
 *
 * One-pager ejecutivo que estructura el rol de Camilo Bustamante como
 * Director de Marketing y Ventas + Socio Comercial de Invent Agency.
 *
 * Tono: partnership (socio, no empleado). Onboarding — ya aceptó.
 * Branding: negro #0A0A0A + cyan #3cd7ff (mismo del sitio inventagency.co).
 *
 * Los números sensibles (equity %, base, variable) van como placeholders
 * destacados [ A DEFINIR ] para que Sebastián + Camilo los cierren en la
 * conversación. No inventamos esas cifras.
 * ──────────────────────────────────────────────────────────────────────── */

export default function CamiloPage() {
  // Scroll-reveal premium: cada [data-reveal] entra cuando aparece en viewport.
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))

    // Barra de progreso de scroll
    const bar = document.getElementById('progress')
    const onScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      if (bar) bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <main className="camilo-root">
      <style>{CSS}</style>

      <div className="progress-track">
        <div id="progress" className="progress-bar" />
      </div>

      <div className="grid-bg" aria-hidden />
      <div className="glow glow-1" aria-hidden />
      <div className="glow glow-2" aria-hidden />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow" data-reveal>
            <span className="dot" /> INVENT AGENCY · DIRECCIÓN COMERCIAL
          </div>
          <h1 className="hero-title" data-reveal>
            El Camino
            <br />
            de <span className="accent">Camilo</span>.
          </h1>
          <p className="hero-sub" data-reveal>
            Camilo Bustamante — Director de Marketing y Ventas
            <br />
            <strong>Socio Comercial de Invent Agency</strong>
          </p>
          <div className="hero-meta" data-reveal>
            <span>Documento de estructuración de rol</span>
            <span className="sep">·</span>
            <span>Confidencial</span>
            <span className="sep">·</span>
            <span>Medellín, Colombia</span>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden>
          <span>Desplazá para recorrer el camino</span>
          <div className="scroll-line" />
        </div>
      </header>

      {/* ─── 01 · BIENVENIDA ──────────────────────────────────── */}
      <Section n="01" title="No te contratamos. Te sumamos.">
        <div className="welcome" data-reveal>
          <p className="lead">
            Camilo, este documento no es una oferta de empleo. Es el mapa de un
            camino que vamos a construir juntos.
          </p>
          <p>
            Invent Agency no necesita un empleado más. Necesita un{' '}
            <strong>socio que sea dueño del crecimiento</strong> — alguien que
            tome la dirección comercial de toda la compañía y la convierta en una
            máquina que vende, posiciona y escala. Por eso entrás como{' '}
            <span className="accent">socio comercial con equity</span>, no como
            un cargo asalariado.
          </p>
          <p>
            Lo que sigue define tu posición, tu mandato, cómo ganás participación,
            tus primeros 90 días y hacia dónde crece tu rol. Es un punto de
            partida — lo afinamos juntos, pero la dirección ya está clara.
          </p>
        </div>
      </Section>

      {/* ─── 02 · QUÉ ES INVENT ───────────────────────────────── */}
      <Section n="02" title="Qué es Invent Agency">
        <div className="two-col">
          <div data-reveal>
            <p className="lead">
              Invent es dos negocios en uno: una <strong>agencia de desarrollo
              de élite</strong> y una <strong>fábrica de productos SaaS
              propios</strong>.
            </p>
            <p>
              Por un lado vendemos ingeniería a medida — &quot;Development on
              Demand&quot; — a empresas que necesitan construir software serio:
              IA, blockchain, biometría, fintech, healthtech. Por el otro,
              construimos y lanzamos nuestros propios productos verticales que
              generan ingreso recurrente mes a mes.
            </p>
            <p>
              Somos LATAM-first, con base en Colombia, con un stack moderno y un
              equipo que produce a una velocidad inusual. Lo que falta no es
              capacidad de construir. Lo que falta es una{' '}
              <span className="accent">máquina comercial que venda todo lo que
              construimos</span>. Ese es tu lugar.
            </p>
          </div>
          <div className="stat-stack" data-reveal>
            <div className="stat">
              <div className="stat-num">2</div>
              <div className="stat-label">modelos de negocio: agencia + productos propios</div>
            </div>
            <div className="stat">
              <div className="stat-num">6+</div>
              <div className="stat-label">productos SaaS en portafolio</div>
            </div>
            <div className="stat">
              <div className="stat-num">∞</div>
              <div className="stat-label">capacidad de construir — el cuello de botella es comercial</div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 03 · EL PORTAFOLIO ───────────────────────────────── */}
      <Section n="03" title="Lo que vas a vender">
        <p className="section-intro" data-reveal>
          Tu portafolio no es una promesa. Son productos reales, en producción,
          listos para entrar al mercado. Esto es lo que tenés en la mano desde
          el día uno:
        </p>
        <div className="cards">
          {PRODUCTS.map((p, i) => (
            <div className="card product-card" data-reveal style={{ transitionDelay: `${i * 60}ms` }} key={p.name}>
              <div className="card-tag">{p.tag}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 04 · LA POSICIÓN ─────────────────────────────────── */}
      <Section n="04" title="Tu posición">
        <div className="position" data-reveal>
          <div className="position-card">
            <div className="position-row">
              <span className="position-key">Cargo</span>
              <span className="position-val">Director de Marketing y Ventas</span>
            </div>
            <div className="position-row">
              <span className="position-key">Naturaleza</span>
              <span className="position-val accent">Socio Comercial · equity</span>
            </div>
            <div className="position-row">
              <span className="position-key">Nivel</span>
              <span className="position-val">C-level — mesa de decisión</span>
            </div>
            <div className="position-row">
              <span className="position-key">Relación</span>
              <span className="position-val">Socio de Sebastián (fundador)</span>
            </div>
            <div className="position-row">
              <span className="position-key">Mandato</span>
              <span className="position-val">Ser el motor de crecimiento de todo Invent</span>
            </div>
          </div>
          <blockquote className="mission">
            &ldquo;Sos el dueño de cómo Invent se da a conocer, cómo vende y cómo
            crece. Si la compañía factura más cada trimestre, es tu obra. Si el
            mercado nos conoce, es tu obra.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* ─── 05 · LOS DOS MANDATOS ────────────────────────────── */}
      <Section n="05" title="Tus dos mandatos">
        <div className="mandates">
          <div className="mandate" data-reveal>
            <div className="mandate-head">
              <span className="mandate-icon">◆</span>
              <h3>Marketing</h3>
            </div>
            <p className="mandate-sub">Que el mercado nos conozca y nos desee.</p>
            <ul>
              <li>Posicionamiento y narrativa de marca de Invent y de cada producto</li>
              <li>Generación de demanda — inbound, contenido, performance</li>
              <li>Presencia digital: redes, web, casos de éxito, autoridad</li>
              <li>Branding por vertical (Aria, Encore, Ticketsystem...)</li>
              <li>Material comercial: pitch decks, one-pagers, demos</li>
            </ul>
          </div>
          <div className="mandate" data-reveal style={{ transitionDelay: '90ms' }}>
            <div className="mandate-head">
              <span className="mandate-icon">◆</span>
              <h3>Ventas</h3>
            </div>
            <p className="mandate-sub">Que ese deseo se convierta en facturación.</p>
            <ul>
              <li>Pipeline: construir, nutrir y cerrar oportunidades</li>
              <li>Cuentas enterprise y proyectos de desarrollo a medida</li>
              <li>Suscripciones SaaS — adquisición y expansión de MRR</li>
              <li>Alianzas estratégicas y canales de distribución</li>
              <li>Retención y crecimiento de cuentas existentes</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ─── 06 · ÁREAS DE RESPONSABILIDAD ────────────────────── */}
      <Section n="06" title="Tus áreas de responsabilidad">
        <div className="resp-grid">
          {RESPONSIBILITIES.map((r, i) => (
            <div className="resp" data-reveal style={{ transitionDelay: `${i * 50}ms` }} key={r.title}>
              <div className="resp-num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 07 · MODELO DE SOCIO ─────────────────────────────── */}
      <Section n="07" title="Cómo ganás como socio">
        <p className="section-intro" data-reveal>
          Entrás como socio comercial. Eso significa que tu upside no tiene techo
          y está atado a lo que construimos juntos. Tu compensación tiene tres
          capas:
        </p>
        <div className="comp-layers">
          <div className="comp-layer" data-reveal>
            <div className="comp-tag">Capa 1</div>
            <h4>Base</h4>
            <p>Un fijo mensual que te da estabilidad para operar sin presión de corto plazo.</p>
            <div className="comp-value">[ A DEFINIR ]</div>
          </div>
          <div className="comp-layer" data-reveal style={{ transitionDelay: '80ms' }}>
            <div className="comp-tag">Capa 2</div>
            <h4>Variable</h4>
            <p>Comisión sobre ventas y MRR nuevo generado. Cuanto más vende Invent, más ganás vos.</p>
            <div className="comp-value">% sobre ventas — [ A DEFINIR ]</div>
          </div>
          <div className="comp-layer highlight" data-reveal style={{ transitionDelay: '160ms' }}>
            <div className="comp-tag">Capa 3</div>
            <h4>Equity</h4>
            <p>Participación real en Invent. Sos dueño de una porción de todo lo que construimos.</p>
            <div className="comp-value accent">[ % A DEFINIR ]</div>
          </div>
        </div>
        <div className="equity-terms" data-reveal>
          <h4>Cómo funciona el equity</h4>
          <div className="terms-grid">
            <div className="term">
              <span className="term-key">Vesting</span>
              <span className="term-val">4 años — ganás tu participación con el tiempo y el resultado</span>
            </div>
            <div className="term">
              <span className="term-key">Cliff</span>
              <span className="term-val">1 año — el primer tramo se consolida al cumplir el año</span>
            </div>
            <div className="term">
              <span className="term-key">Ligado a performance</span>
              <span className="term-val">Tramos adicionales según metas comerciales cumplidas</span>
            </div>
            <div className="term">
              <span className="term-key">Filosofía</span>
              <span className="term-val accent">Dueño, no empleado. Tu trabajo construye tu patrimonio.</span>
            </div>
          </div>
          <p className="terms-note">
            * Los porcentajes, montos y condiciones exactas se cierran en la
            conversación entre vos y Sebastián. Este documento define el modelo,
            no las cifras finales.
          </p>
        </div>
      </Section>

      {/* ─── 08 · KPIs ────────────────────────────────────────── */}
      <Section n="08" title="Cómo medimos tu éxito">
        <p className="section-intro" data-reveal>
          Tu rol no se mide por horas ni por actividad. Se mide por resultado.
          Estos son los números que importan:
        </p>
        <div className="kpi-grid">
          {KPIS.map((k, i) => (
            <div className="kpi" data-reveal style={{ transitionDelay: `${i * 45}ms` }} key={k.name}>
              <div className="kpi-name">{k.name}</div>
              <div className="kpi-desc">{k.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 09 · PLAN 30-60-90 ───────────────────────────────── */}
      <Section n="09" title="Tus primeros 90 días">
        <div className="timeline">
          {PLAN.map((phase, i) => (
            <div className="phase" data-reveal style={{ transitionDelay: `${i * 100}ms` }} key={phase.days}>
              <div className="phase-marker">
                <div className="phase-dot" />
                {i < PLAN.length - 1 && <div className="phase-line" />}
              </div>
              <div className="phase-body">
                <div className="phase-days">{phase.days}</div>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 10 · EL CAMINO ───────────────────────────────────── */}
      <Section n="10" title="Hacia dónde crece tu rol">
        <div className="path">
          {PATH.map((stage, i) => (
            <div className="path-stage" data-reveal style={{ transitionDelay: `${i * 90}ms` }} key={stage.year}>
              <div className="path-year">{stage.year}</div>
              <h3>{stage.role}</h3>
              <p>{stage.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 11 · RECURSOS ────────────────────────────────────── */}
      <Section n="11" title="Lo que tenés a tu disposición">
        <div className="resources">
          {RESOURCES.map((r, i) => (
            <div className="resource" data-reveal style={{ transitionDelay: `${i * 50}ms` }} key={r.title}>
              <span className="resource-icon">→</span>
              <div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 12 · COMPROMISO MUTUO ────────────────────────────── */}
      <Section n="12" title="Nuestro compromiso mutuo">
        <div className="commitment">
          <div className="commit-col" data-reveal>
            <h4>Lo que Invent pone sobre la mesa</h4>
            <ul>
              <li>Participación real en la compañía — sos dueño</li>
              <li>Productos terminados, listos para vender</li>
              <li>Un equipo de ingeniería que ejecuta a tu ritmo</li>
              <li>Autonomía total sobre la estrategia comercial</li>
              <li>Un asiento en la mesa de decisiones</li>
            </ul>
          </div>
          <div className="commit-col" data-reveal style={{ transitionDelay: '90ms' }}>
            <h4>Lo que esperamos de vos</h4>
            <ul>
              <li>Que tomes la dirección comercial como propia</li>
              <li>Que conviertas el portafolio en facturación recurrente</li>
              <li>Que construyas la marca de Invent en el mercado</li>
              <li>Que armes y lideres el equipo comercial</li>
              <li>Que pienses como socio, no como empleado</li>
            </ul>
          </div>
        </div>
        <div className="closing" data-reveal>
          <p>
            Camilo — el techo de Invent es comercial, no técnico. Construimos lo
            que sea. Lo que necesitamos es alguien que lo lleve al mundo.
          </p>
          <p className="closing-final accent">Ese sos vos. Bienvenido a la mesa.</p>
        </div>
      </Section>

      <footer className="footer">
        <div className="footer-logo">
          INVENT<span className="accent">.</span>
        </div>
        <div className="footer-meta">
          Documento confidencial · Estructuración de rol · {new Date().getFullYear()}
          <br />
          hola@inventagency.co · inventagency.co
        </div>
      </footer>
    </main>
  )
}

/* ─── Componente de sección ─────────────────────────────────── */
function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="section-head" data-reveal>
        <span className="section-n">{n}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}

/* ─── Data ──────────────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Aria', tag: 'IA · SaaS', desc: 'Asistente de IA multicanal por voz y WhatsApp para empresas LATAM. Recepcionista, ventas y soporte 24/7.' },
  { name: 'Encore', tag: 'POS · Nightlife', desc: 'POS + boletería integrada para bares y discotecas. El primero en LATAM que une operación del local con venta de covers online.' },
  { name: 'Ticketsystem', tag: 'Eventos', desc: 'Plataforma de venta de tickets para eventos boutique. Descubrimiento, compra y validación con QR.' },
  { name: 'Invent Cal', tag: 'Agendamiento', desc: 'Sistema de agendamiento LATAM-native. Reservas, disponibilidad y confirmaciones automáticas.' },
  { name: 'Servicios a medida', tag: 'Agencia', desc: 'Desarrollo de élite bajo demanda: IA, blockchain, biometría, fintech. Cuentas enterprise de alto ticket.' },
  { name: 'Y lo que viene', tag: 'Pipeline', desc: 'La fábrica no para. Cada trimestre hay producto nuevo para llevar al mercado.' },
]

const RESPONSIBILITIES = [
  { title: 'Estrategia comercial', desc: 'Definir el plan de crecimiento de todo el portafolio: qué vendemos, a quién y cómo.' },
  { title: 'Go-to-market por producto', desc: 'Diseñar y ejecutar el lanzamiento de cada producto al mercado correcto.' },
  { title: 'Pipeline & forecast', desc: 'Construir un embudo predecible y reportar proyecciones confiables de ingreso.' },
  { title: 'Pricing & packaging', desc: 'Definir precios, planes y paquetes que maximicen conversión y ticket.' },
  { title: 'Marca & posicionamiento', desc: 'Hacer que Invent y sus productos sean conocidos y deseados en su categoría.' },
  { title: 'Equipo comercial', desc: 'Armar, liderar y escalar el equipo de marketing y ventas a medida que crece.' },
  { title: 'Alianzas estratégicas', desc: 'Abrir canales, partnerships y acuerdos que multipliquen la distribución.' },
  { title: 'Datos & reporting', desc: 'Medir todo, leer los números y tomar decisiones basadas en evidencia.' },
]

const KPIS = [
  { name: 'MRR / ARR', desc: 'Ingreso recurrente mensual y anual — la métrica madre.' },
  { name: 'Valor del pipeline', desc: 'Oportunidades activas y su probabilidad de cierre.' },
  { name: 'Win rate', desc: 'Porcentaje de oportunidades que se convierten en cliente.' },
  { name: 'CAC / LTV', desc: 'Costo de adquisición vs. valor de vida del cliente.' },
  { name: 'Clientes nuevos', desc: 'Logos nuevos cerrados por mes y por producto.' },
  { name: 'Alcance de marca', desc: 'Presencia, autoridad y demanda inbound generada.' },
]

const PLAN = [
  {
    days: 'Días 1 – 30',
    title: 'Inmersión y quick wins',
    items: [
      'Conocer a fondo cada producto del portafolio (demos, dogfooding)',
      'Mapear el mercado y la competencia por vertical',
      'Auditar lo comercial actual: leads, clientes, material existente',
      'Cerrar 1-2 quick wins para generar momentum desde el arranque',
    ],
  },
  {
    days: 'Días 31 – 60',
    title: 'Construir la máquina',
    items: [
      'Montar el pipeline y el CRM con etapas claras',
      'Lanzar las primeras campañas de generación de demanda',
      'Definir pricing y packaging de los productos prioritarios',
      'Cerrar los primeros deals con proceso, no con suerte',
    ],
  },
  {
    days: 'Días 61 – 90',
    title: 'Escalar y sistematizar',
    items: [
      'Tener un playbook comercial documentado y replicable',
      'Forecast confiable de los próximos trimestres',
      'Primeras contrataciones o estructura del equipo comercial',
      'Marca de Invent con presencia visible en el mercado',
    ],
  },
]

const PATH = [
  { year: 'Año 1', role: 'Director Comercial', desc: 'Construís la máquina desde cero: pipeline, marca, primeros clientes recurrentes y el playbook que lo hace replicable.' },
  { year: 'Año 2', role: 'Chief Commercial Officer', desc: 'Escalás el equipo, multiplicás el MRR y convertís Invent en una marca reconocida en sus verticales.' },
  { year: 'Año 3+', role: 'Socio pleno · Expansión LATAM', desc: 'Tu participación está consolidada. Liderás la expansión regional y sos co-arquitecto del futuro de Invent.' },
]

const RESOURCES = [
  { title: 'Productos listos para vender', desc: 'No tenés que esperar a que se construya nada. El catálogo ya existe.' },
  { title: 'Equipo de ingeniería', desc: 'Lo que el mercado pida, el equipo lo construye. Vos vendés, ellos ejecutan.' },
  { title: 'Herramientas propias', desc: 'Usás Aria, Cal y el resto del stack para vender — dogfooding que también es demo.' },
  { title: 'Autonomía total', desc: 'Decidís la estrategia comercial sin pedir permiso. Tenés el mandato completo.' },
]

const CSS = `
.camilo-root {
  --bg: #0A0A0A;
  --fg: #FFFFFF;
  --accent: #3cd7ff;
  --accent-glow: rgba(60, 215, 255, 0.3);
  --surface: #131313;
  --surface-2: #1c1b1b;
  --muted: #8a8a8a;
  --line: rgba(255,255,255,0.08);
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-space-grotesk), system-ui, sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
.camilo-root * { box-sizing: border-box; }

/* Progress bar */
.progress-track {
  position: fixed; top: 0; left: 0; right: 0; height: 2px;
  background: rgba(255,255,255,0.04); z-index: 100;
}
.progress-bar {
  height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--accent), #8be9ff);
  box-shadow: 0 0 12px var(--accent-glow);
  transition: width 80ms linear;
}

/* Background decor */
.grid-bg {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(60,215,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(60,215,255,0.025) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%);
}
.glow {
  position: fixed; border-radius: 50%; filter: blur(120px);
  pointer-events: none; z-index: 0; opacity: 0.5;
}
.glow-1 { width: 600px; height: 600px; top: -200px; right: -150px; background: rgba(60,215,255,0.12); }
.glow-2 { width: 500px; height: 500px; bottom: 10%; left: -200px; background: rgba(60,215,255,0.06); }

/* Reveal animation */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
[data-reveal].in { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1; transform: none; transition: none; }
  .progress-bar { transition: none; }
}

/* HERO */
.hero {
  position: relative; z-index: 1;
  min-height: 100vh; display: flex; flex-direction: column;
  justify-content: center; align-items: flex-start;
  padding: 0 clamp(24px, 8vw, 160px);
  max-width: 1400px; margin: 0 auto;
}
.hero-inner { max-width: 900px; }
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 12px; letter-spacing: 0.22em; font-weight: 500;
  color: var(--muted); text-transform: uppercase; margin-bottom: 36px;
}
.hero-eyebrow .dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
  box-shadow: 0 0 10px var(--accent); animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
.hero-title {
  font-size: clamp(3.2rem, 11vw, 9rem);
  font-weight: 600; line-height: 0.92; letter-spacing: -0.04em;
  margin: 0 0 32px;
}
.hero-title .accent {
  background: linear-gradient(135deg, #fff 0%, var(--accent) 90%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-sub {
  font-size: clamp(1.05rem, 2.4vw, 1.5rem); line-height: 1.5;
  color: #d4d4d4; font-weight: 300; margin: 0 0 28px;
}
.hero-sub strong { color: #fff; font-weight: 600; }
.hero-meta {
  display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
  font-size: 13px; color: var(--muted); letter-spacing: 0.04em;
}
.hero-meta .sep { color: var(--accent); opacity: 0.5; }
.hero-scroll {
  position: absolute; bottom: 40px; left: clamp(24px, 8vw, 160px);
  display: flex; align-items: center; gap: 14px;
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted);
}
.scroll-line {
  width: 60px; height: 1px; background: linear-gradient(90deg, var(--accent), transparent);
  position: relative; overflow: hidden;
}
.scroll-line::after {
  content: ''; position: absolute; top: 0; left: 0; width: 20px; height: 100%;
  background: var(--accent); animation: scrollSlide 2s ease-in-out infinite;
}
@keyframes scrollSlide { 0%{transform:translateX(-20px)} 100%{transform:translateX(60px)} }

/* SECTION */
.section {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
  padding: clamp(70px, 11vw, 150px) clamp(24px, 8vw, 80px);
  border-top: 1px solid var(--line);
}
.section-head {
  display: flex; align-items: baseline; gap: clamp(16px, 3vw, 32px);
  margin-bottom: clamp(36px, 6vw, 64px);
}
.section-n {
  font-size: clamp(0.85rem, 1.6vw, 1rem); font-weight: 500;
  color: var(--accent); letter-spacing: 0.1em; font-variant-numeric: tabular-nums;
  padding-top: 0.5em;
}
.section-title {
  font-size: clamp(1.9rem, 5.5vw, 3.6rem); font-weight: 600;
  line-height: 1.04; letter-spacing: -0.03em; margin: 0;
}
.section-intro {
  font-size: clamp(1.05rem, 2vw, 1.3rem); line-height: 1.6;
  color: #c4c4c4; font-weight: 300; max-width: 760px; margin: 0 0 48px;
}
.accent { color: var(--accent); }
.lead { font-size: clamp(1.15rem, 2.2vw, 1.5rem); line-height: 1.5; font-weight: 400; color: #fff; margin: 0 0 24px; }
.section-content p { font-size: 1.02rem; line-height: 1.7; color: #b8b8b8; margin: 0 0 20px; font-weight: 300; }
.section-content p strong { color: #fff; font-weight: 600; }

/* Welcome */
.welcome { max-width: 820px; }

/* Two-col */
.two-col { display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(32px, 6vw, 72px); align-items: start; }
.stat-stack { display: flex; flex-direction: column; gap: 18px; }
.stat {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  padding: 24px 26px;
}
.stat-num { font-size: 2.6rem; font-weight: 600; color: var(--accent); line-height: 1; letter-spacing: -0.03em; }
.stat-label { font-size: 0.9rem; color: var(--muted); margin-top: 10px; line-height: 1.45; }

/* Cards (products) */
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
.card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 18px;
  padding: 28px; transition: border-color 0.4s, transform 0.4s, box-shadow 0.4s;
}
.card:hover {
  border-color: rgba(60,215,255,0.35); transform: translateY(-4px);
  box-shadow: 0 16px 50px -20px var(--accent-glow);
}
.card-tag {
  display: inline-block; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--accent); background: rgba(60,215,255,0.08);
  border: 1px solid rgba(60,215,255,0.2); border-radius: 999px;
  padding: 4px 12px; margin-bottom: 16px;
}
.card h3 { font-size: 1.4rem; font-weight: 600; margin: 0 0 10px; letter-spacing: -0.02em; }
.card p { font-size: 0.95rem; color: var(--muted); line-height: 1.55; margin: 0; }

/* Position */
.position { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,5vw,56px); align-items: center; }
.position-card { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
.position-row { display: flex; justify-content: space-between; gap: 16px; padding: 20px 26px; border-bottom: 1px solid var(--line); }
.position-row:last-child { border-bottom: none; }
.position-key { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); align-self: center; }
.position-val { font-size: 1.05rem; font-weight: 500; text-align: right; }
.mission {
  margin: 0; padding: 0 0 0 28px; border-left: 2px solid var(--accent);
  font-size: clamp(1.2rem, 2.4vw, 1.7rem); line-height: 1.45; font-weight: 300;
  color: #e8e8e8; font-style: italic;
}

/* Mandates */
.mandates { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.mandate { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; padding: 34px; }
.mandate-head { display: flex; align-items: center; gap: 14px; margin-bottom: 8px; }
.mandate-icon { color: var(--accent); font-size: 1rem; }
.mandate-head h3 { font-size: 1.7rem; font-weight: 600; margin: 0; letter-spacing: -0.02em; }
.mandate-sub { font-size: 1rem; color: var(--accent); margin: 0 0 22px; font-weight: 400; }
.mandate ul { list-style: none; padding: 0; margin: 0; }
.mandate li { font-size: 0.97rem; color: #c0c0c0; line-height: 1.5; padding: 11px 0 11px 24px; position: relative; border-top: 1px solid var(--line); }
.mandate li:first-child { border-top: none; }
.mandate li::before { content: '→'; position: absolute; left: 0; color: var(--accent); }

/* Responsibilities */
.resp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2px; background: var(--line); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
.resp { background: var(--bg); padding: 28px 26px; transition: background 0.3s; }
.resp:hover { background: var(--surface); }
.resp-num { font-size: 0.85rem; color: var(--accent); font-weight: 600; letter-spacing: 0.05em; margin-bottom: 14px; }
.resp h4 { font-size: 1.15rem; font-weight: 600; margin: 0 0 8px; letter-spacing: -0.01em; }
.resp p { font-size: 0.9rem; color: var(--muted); line-height: 1.5; margin: 0; }

/* Compensation */
.comp-layers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 40px; }
.comp-layer { background: var(--surface); border: 1px solid var(--line); border-radius: 18px; padding: 30px 26px; position: relative; }
.comp-layer.highlight { border-color: rgba(60,215,255,0.4); box-shadow: 0 0 50px -24px var(--accent-glow); background: linear-gradient(180deg, rgba(60,215,255,0.05), var(--surface)); }
.comp-tag { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
.comp-layer h4 { font-size: 1.5rem; font-weight: 600; margin: 0 0 10px; }
.comp-layer p { font-size: 0.92rem; color: var(--muted); line-height: 1.5; margin: 0 0 22px; }
.comp-value { font-size: 0.95rem; font-weight: 500; padding: 12px 16px; border: 1px dashed var(--line); border-radius: 10px; color: #d0d0d0; text-align: center; }
.comp-value.accent { border-color: rgba(60,215,255,0.4); color: var(--accent); }
.equity-terms { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; padding: clamp(28px, 4vw, 44px); }
.equity-terms h4 { font-size: 1.3rem; font-weight: 600; margin: 0 0 26px; }
.terms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-bottom: 24px; }
.term { display: flex; flex-direction: column; gap: 6px; }
.term-key { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); }
.term-val { font-size: 1rem; color: #c8c8c8; line-height: 1.4; }
.terms-note { font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin: 0; font-style: italic; }

/* KPIs */
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 18px; }
.kpi { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 26px; transition: border-color 0.3s; }
.kpi:hover { border-color: rgba(60,215,255,0.3); }
.kpi-name { font-size: 1.25rem; font-weight: 600; color: var(--accent); margin-bottom: 10px; letter-spacing: -0.01em; }
.kpi-desc { font-size: 0.92rem; color: var(--muted); line-height: 1.5; }

/* Timeline 30-60-90 */
.timeline { display: flex; flex-direction: column; gap: 4px; }
.phase { display: grid; grid-template-columns: 40px 1fr; gap: 24px; }
.phase-marker { display: flex; flex-direction: column; align-items: center; }
.phase-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 16px var(--accent-glow); margin-top: 6px; flex-shrink: 0; }
.phase-line { width: 2px; flex: 1; background: linear-gradient(var(--accent), var(--line)); margin: 8px 0; }
.phase-body { padding-bottom: 44px; }
.phase-days { font-size: 0.85rem; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
.phase-body h3 { font-size: 1.5rem; font-weight: 600; margin: 0 0 18px; letter-spacing: -0.02em; }
.phase-body ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.phase-body li { font-size: 0.97rem; color: #b8b8b8; line-height: 1.5; padding-left: 22px; position: relative; }
.phase-body li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

/* Path */
.path { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.path-stage { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; padding: 34px 30px; position: relative; overflow: hidden; }
.path-stage::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--accent), transparent); }
.path-year { font-size: 0.85rem; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 14px; }
.path-stage h3 { font-size: 1.4rem; font-weight: 600; margin: 0 0 14px; letter-spacing: -0.02em; }
.path-stage p { font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin: 0; }

/* Resources */
.resources { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.resource { display: flex; gap: 18px; align-items: flex-start; background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 26px; }
.resource-icon { color: var(--accent); font-size: 1.3rem; font-weight: 600; line-height: 1; margin-top: 2px; }
.resource h4 { font-size: 1.15rem; font-weight: 600; margin: 0 0 8px; }
.resource p { font-size: 0.92rem; color: var(--muted); line-height: 1.5; margin: 0; }

/* Commitment */
.commitment { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-bottom: 56px; }
.commit-col { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; padding: 36px; }
.commit-col h4 { font-size: 1.25rem; font-weight: 600; margin: 0 0 22px; }
.commit-col ul { list-style: none; padding: 0; margin: 0; }
.commit-col li { font-size: 1rem; color: #c0c0c0; line-height: 1.5; padding: 13px 0 13px 26px; position: relative; border-top: 1px solid var(--line); }
.commit-col li:first-child { border-top: none; }
.commit-col li::before { content: '✦'; position: absolute; left: 0; color: var(--accent); font-size: 0.8rem; top: 15px; }
.closing { text-align: center; max-width: 720px; margin: 0 auto; }
.closing p { font-size: clamp(1.2rem, 2.6vw, 1.7rem); line-height: 1.5; font-weight: 300; color: #e8e8e8; margin: 0 0 16px; }
.closing-final { font-weight: 600 !important; font-size: clamp(1.4rem, 3vw, 2.1rem) !important; }

/* Footer */
.footer {
  position: relative; z-index: 1; text-align: center;
  padding: clamp(60px, 9vw, 100px) 24px clamp(50px, 7vw, 80px);
  border-top: 1px solid var(--line); max-width: 1200px; margin: 0 auto;
}
.footer-logo { font-size: 2.4rem; font-weight: 700; letter-spacing: -0.04em; margin-bottom: 18px; }
.footer-meta { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }

/* Responsive */
@media (max-width: 880px) {
  .two-col, .position, .mandates, .comp-layers, .terms-grid, .path, .resources, .commitment { grid-template-columns: 1fr; }
  .comp-layers { gap: 14px; }
  .mission { padding-left: 20px; }
}
@media (max-width: 560px) {
  .hero-meta { font-size: 11.5px; gap: 8px; }
  .section-head { flex-direction: column; gap: 8px; }
  .section-n { padding-top: 0; }
  .phase { gap: 16px; grid-template-columns: 28px 1fr; }
}
`
