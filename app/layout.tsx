import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppSticky } from "@/components/whatsapp-sticky";

export const metadata: Metadata = {
  title: "BCN Digital Local | Digitalizacion de negocios en Barcelona",
  description: "Soluciones digitales para PYMES locales: web, reservas, e-commerce, menu digital y SEO local.",
  metadataBase: new URL("https://bcn.backsoftware.it")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-surface text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
