"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { House } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Volver a la home"
            className="rounded-full border border-slate-200 p-2 text-primary transition hover:border-primary/30 hover:bg-primary/5"
          >
            <House className="h-4 w-4" />
          </Link>
          <Link href="/" className="text-lg font-bold text-primary">
            BCN Digital Local
          </Link>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="/#servicios" className="hover:text-primary">
            Servicios
          </a>
          <a href="/#propiedad" className="hover:text-primary">
            Tu sistema, tu propiedad
          </a>
          <a href="/#contacto" className="hover:text-primary">
            Contacto
          </a>
        </nav>
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/393513052627"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft"
        >
          Hablar ahora
        </motion.a>
      </div>
    </header>
  );
}
