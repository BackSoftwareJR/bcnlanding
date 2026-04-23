"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Users, Sparkles } from "lucide-react";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};


export function ServiceDetailLayout({ service }: Props) {
  return (
    <main className="bg-surface">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 pt-24">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-width relative px-6 pb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="badge badge-accent">
              <Sparkles className="h-3 w-3" />
              Solucion para negocio local
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-200 md:text-xl"
          >
            {service.problem}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://wa.me/393513052627"
            className="btn-primary mt-8 inline-flex"
          >
            {service.cta}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-emerald mb-4">
              <CheckCircle2 className="h-3 w-3" />
              Lo que incluye
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Beneficios clave
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <motion.article
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover flex items-start gap-4"
              >
                <div className="flex-shrink-0 rounded-lg bg-emerald-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>
                <p className="text-primary-700 leading-relaxed">{benefit}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-primary-900 to-primary-800 p-8 text-white shadow-soft-lg md:p-12"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-white/10 p-3">
                <Users className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Para quien es ideal</h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-primary-200">
                  {service.idealFor}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-accent-200/50 bg-gradient-to-br from-accent-50 via-white to-emerald-50/30 p-8 shadow-soft-lg md:p-12"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Quieres ver como quedaria en tu negocio?
              </h2>
              <p className="mt-4 text-lg text-primary-600">
                Te ensenamos una demo aplicada a tu caso real para que tomes una decision con claridad.
                Sin compromiso, sin presion.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/393513052627"
                  className="btn-primary"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
<Link
                  href="/#servicios"
                  className="btn-secondary"
                >
                  Ver otros servicios
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
