import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppSticky } from "@/components/whatsapp-sticky";
import { ChunkErrorReloader } from "@/components/chunk-error-reloader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A"
};

export const metadata: Metadata = {
  title: {
    default: "BCN Digital Local | Digitalizacion de negocios en Barcelona",
    template: "%s | BCN Digital Local"
  },
  description: "Digitalizamos tu negocio local en Barcelona. Webs, reservas, e-commerce, menu digital y SEO local. Sin cuotas mensuales, propiedad total del codigo.",
  keywords: [
    "digitalizacion negocios Barcelona",
    "web para PYMES Barcelona",
    "landing page Barcelona",
    "e-commerce local",
    "menu digital restaurante",
    "sistema reservas online",
    "SEO local Barcelona",
    "desarrollo web React Next.js"
  ],
  authors: [{ name: "BCN Digital Local" }],
  creator: "BCN Digital Local",
  publisher: "BCN Digital Local",
  metadataBase: new URL("https://bcn.backsoftware.it"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://bcn.backsoftware.it",
    siteName: "BCN Digital Local",
    title: "BCN Digital Local | Digitalizacion de negocios en Barcelona",
    description: "Digitalizamos tu negocio local en Barcelona. Webs, reservas, e-commerce y mas. Sin cuotas mensuales.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BCN Digital Local - Digitalizacion para PYMES"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BCN Digital Local | Digitalizacion de negocios en Barcelona",
    description: "Digitalizamos tu negocio local en Barcelona. Webs, reservas, e-commerce y mas. Sin cuotas mensuales.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-surface text-primary antialiased">
        <ChunkErrorReloader />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
