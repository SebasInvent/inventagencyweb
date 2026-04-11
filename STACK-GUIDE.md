# 📋 Stack Guide - Invent Agency Web

> Reglas para mantener consistencia en el codebase

---

## 🎨 Design System

### Colores (CSS Variables)
```css
--background: #000000    /* Fondo principal */
--foreground: #FFFFFF    /* Texto principal */
--accent: #00D4FF        /* Cyan - Color de marca */
--surface: #111111       /* Superficies/cards */
--surface-light: #1A1A1A /* Superficies hover */
--muted: #888888         /* Texto secundario */
```

### Colores de Programas
- **Semienta**: `emerald-500` (#10B981)
- **Raíz**: `violet-500` (#8B5CF6)
- **Árbol**: `orange-500` (#F97316)

---

## 🧩 Componentes Base

### 1. Button (src/components/ui/Button.tsx)
```tsx
import { Button } from "@/components/ui/Button";

<Button variant="primary" size="lg" href="/ruta">
  Texto del botón
</Button>
```

**Variantes:** `primary` | `secondary` | `ghost`  
**Tamaños:** `sm` | `md` | `lg`

### 2. MagneticButton
```tsx
import { MagneticButton } from "@/components/ui/MagneticButton";

<MagneticButton href="/ruta" className="bg-accent text-black">
  Hover me
</MagneticButton>
```

### 3. BentoCard
```tsx
import { BentoCard } from "@/components/ui/BentoCard";

<BentoCard delay={0.1} className="col-span-2">
  Contenido
</BentoCard>
```

### 4. Utils (cn)
```tsx
import { cn } from "@/lib/utils";

className={cn("base", condition && "conditional", className)}
```

---

## 🎬 Animaciones (Framer Motion)

### Patrón Estándar
```tsx
import { motion } from "framer-motion";

// Fade in up
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
>
  Content
</motion.div>

// Stagger container
const container = {
  animate: { transition: { staggerChildren: 0.1 } }
};

<motion.div variants={container}>
  <motion.div variants={fadeInUp}>Item 1</motion.div>
  <motion.div variants={fadeInUp}>Item 2</motion.div>
</motion.div>
```

### Easing
```tsx
const ease = [0.25, 0.1, 0.25, 1]; // Smooth ease-out
```

---

## 📐 Layout

### Contenedor Principal
```tsx
<div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
  Content
</div>
```

### Sección con Padding
```tsx
<section className="py-32 relative">
  <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

---

## 🎯 Estructura de Página

```tsx
export default function PageName() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-color-950/20 via-background to-background" />
        
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
          {/* ... */}
        </div>
      </section>
      
      {/* Other sections */}
      
      <FooterNew />
    </main>
  );
}
```

---

## 🔗 Imports

### Siempre usar aliases
```tsx
// ✅ Correcto
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// ❌ Incorrecto
import { Button } from "../../../components/ui/Button";
```

### Orden de imports
```tsx
// 1. React/Next
import { motion } from "framer-motion";
import Link from "next/link";

// 2. Componentes UI
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";

// 3. Iconos
import { ArrowRight } from "lucide-react";

// 4. Utils
import { cn } from "@/lib/utils";
```

---

## 🎨 Clases CSS Comunes

### Backgrounds
```tsx
bg-background          // Fondo principal
bg-surface             // Cards/superficies
bg-surface-light       // Hover states
```

### Texto
```tsx
text-foreground        // Texto principal
text-muted             // Texto secundario
text-accent            // Color de marca (#00D4FF)
```

### Efectos
```tsx
glow-text              // Texto con glow
gradient-text          // Texto con gradiente
glow-border            // Borde con glow
card-hover             // Efecto hover en cards
```

### Layout
```tsx
relative z-10          // Posicionamiento
overflow-hidden        // Ocultar overflow
backdrop-blur-sm       // Efecto glass
```

---

## 🚫 Qué NO hacer

1. **No usar colores hardcodeados**
   ```tsx
   // ❌ Mal
   className="text-emerald-500"
   
   // ✅ Bien
   className="text-[#10B981]"
   ```

2. **No crear componentes duplicados**
   - Usar los existentes en `src/components/ui/`

3. **No ignorar el tema oscuro/claro**
   - Siempre usar CSS variables

4. **No olvidar el cursor custom**
   - El layout ya lo incluye, no agregar otro

5. **No usar padding arbitrario**
   - Seguir el sistema: `py-32` para secciones

---

## ✅ Checklist antes de commitear

- [ ] Usar componentes UI existentes
- [ ] Colores con CSS variables
- [ ] Animaciones con Framer Motion
- [ ] Layout responsive
- [ ] Imports con aliases
- [ ] No errores de TypeScript
- [ ] Testear en modo claro y oscuro

---

*Invent Agency - Digital Strategy Architects*