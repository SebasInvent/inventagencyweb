import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'El Camino de Camilo · Invent Agency',
  description:
    'Estructuración del rol de Camilo Bustamante como Director de Marketing y Ventas y Socio Comercial de Invent Agency.',
  // Documento interno — no queremos que Google lo indexe.
  robots: { index: false, follow: false },
}

/**
 * Standalone layout para /camilo.
 *
 * El root layout del sitio (src/app/layout.tsx) es un passthrough que no
 * provee <html>/<body> — esos viven en [locale]/layout.tsx, que arrastra
 * i18n, ThemeProvider, CustomCursor y LoadingScreen. Esta página es un
 * one-pager ejecutivo self-contained, así que define su propio shell sin
 * heredar nada de ese stack. El middleware excluye /camilo del flujo i18n.
 */
export default function CamiloLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  )
}
