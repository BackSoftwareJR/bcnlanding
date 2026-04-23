"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Tu sistema, tu propiedad", href: "/#propiedad" },
  { label: "Contacto", href: "/#contacto" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-primary-200/50 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-soft">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className={`text-lg font-bold transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
                BCN <span className="text-accent">Digital</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-primary-600 hover:bg-primary-100 hover:text-primary"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/393513052627"
                className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-600 hover:shadow-glow-accent sm:inline-flex"
              >
                Hablar ahora
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-lg p-2 transition-colors md:hidden ${
                  scrolled
                    ? "text-primary hover:bg-primary-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-sm bg-white shadow-soft-xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-primary-100 px-6 py-4">
                  <span className="text-lg font-bold text-primary">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-2 text-primary-500 hover:bg-primary-100"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 overflow-auto px-4 py-6">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-primary transition-colors hover:bg-primary-50"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4 text-primary-400" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Services Quick Links */}
                  <div className="mt-8">
                    <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-primary-400">
                      Servicios
                    </p>
                    <div className="space-y-1">
                      {[
                        { label: "Web & Landing", href: "/servicios/paginas-web-landing-pages" },
                        { label: "Menu Digital", href: "/servicios/menu-digital-pedidos-mesa" },
                        { label: "E-commerce", href: "/servicios/ecommerce-local-sin-comisiones" },
                        { label: "Reservas", href: "/servicios/sistema-reservas-citas" },
                        { label: "SEO Local", href: "/servicios/seo-local-totems-nfc" }
                      ].map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-xl px-4 py-2.5 text-sm text-primary-600 transition-colors hover:bg-primary-50 hover:text-primary"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>

                {/* Footer CTA */}
                <div className="border-t border-primary-100 p-6">
                  <a
                    href="https://wa.me/393513052627"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Hablar por WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
