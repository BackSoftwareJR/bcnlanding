"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  Linkedin,
  Instagram
} from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Paginas Web & Landing", href: "/servicios/paginas-web-landing-pages" },
    { label: "Menu Digital", href: "/servicios/menu-digital-pedidos-mesa" },
    { label: "E-commerce Local", href: "/servicios/ecommerce-local-sin-comisiones" },
    { label: "Sistema de Reservas", href: "/servicios/sistema-reservas-citas" },
    { label: "SEO Local & NFC", href: "/servicios/seo-local-totems-nfc" }
  ],
  empresa: [
    { label: "Sobre nosotros", href: "/#propiedad" },
    { label: "Proceso de trabajo", href: "/#servicios" },
    { label: "Contacto", href: "/#contacto" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-width px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                BCN <span className="text-accent-400">Digital</span> Local
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-300">
              Digitalizamos negocios locales en Barcelona con soluciones propias, 
              sin cuotas mensuales y con resultados desde la primera semana.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-primary-300 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-primary-300 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent-400" />
                <span className="text-sm text-primary-300">
                  Barcelona, Espana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent-400" />
                <a
                  href="https://wa.me/393513052627"
                  className="text-sm text-primary-300 transition-colors hover:text-white"
                >
                  WhatsApp Comercial
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent-400" />
                <a
                  href="mailto:info@bcndigitallocal.com"
                  className="text-sm text-primary-300 transition-colors hover:text-white"
                >
                  info@bcndigitallocal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-accent-400" />
                <span className="text-sm text-primary-300">
                  Lun - Vie: 9:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-accent-600 to-accent-500 p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Listo para empezar tu proyecto?
              </h3>
              <p className="mt-1 text-accent-100">
                Hablemos sobre como digitalizar tu negocio
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/393513052627"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-600 shadow-lg transition-shadow hover:shadow-xl"
            >
              Contactar ahora
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-width flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-primary-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} BCN Digital Local. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-white">
              Privacidad
            </Link>
            <Link href="/legal" className="hover:text-white">
              Aviso Legal
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
