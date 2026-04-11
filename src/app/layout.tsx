import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inventagency.co"),
  title: {
    default: "InventAgency | Digital Strategy Architects",
    template: "%s | InventAgency",
  },
  description:
    "Agencia digital de élite que transforma visiones en realidades tecnológicas. Biometría, Blockchain, IA, FinTech, HealthTech. Arquitectamos el futuro de tu presencia digital.",
  keywords: [
    "agencia digital",
    "desarrollo software",
    "biometría",
    "blockchain",
    "inteligencia artificial",
    "fintech",
    "healthtech",
    "Colombia",
    "Bogotá",
    "desarrollo web",
    "aplicaciones móviles",
  ],
  authors: [{ name: "InventAgency", url: "https://inventagency.co" }],
  creator: "InventAgency",
  publisher: "InventAgency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InventAgency | Digital Strategy Architects",
    description:
      "Agencia digital de élite. Biometría, Blockchain, IA, FinTech, HealthTech.",
    url: "https://inventagency.co",
    siteName: "InventAgency",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InventAgency - Digital Strategy Architects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InventAgency | Digital Strategy Architects",
    description:
      "Agencia digital de élite. Biometría, Blockchain, IA, FinTech, HealthTech.",
    images: ["/og-image.png"],
    creator: "@inventagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InventAgency",
  description:
    "Agencia digital de élite que transforma visiones en realidades tecnológicas.",
  url: "https://inventagency.co",
  logo: "https://inventagency.co/logo.png",
  sameAs: [
    "https://twitter.com/inventagency",
    "https://linkedin.com/company/inventagency",
    "https://github.com/inventagency",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@inventagency.co",
    contactType: "sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/icon-cyan.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icono blanco.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00D4FF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased cursor-none`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="inventagency-theme">
          <LoadingScreen />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
