"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

export function ServiceDetailLayout({ service }: Props) {
  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-sm font-semibold text-accent">
          Solucion para negocio local
        </motion.p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-primary md:text-5xl">{service.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{service.problem}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="mb-5 text-2xl font-semibold text-primary">Beneficios clave</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <article key={benefit} className="rounded-xl2 border border-slate-200 bg-white p-5 text-slate-700 shadow-soft">
              {benefit}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-xl2 border border-primary/10 bg-primary p-8 text-slate-100 shadow-soft">
          <h2 className="text-2xl font-semibold">Para quien es ideal</h2>
          <p className="mt-3 max-w-3xl text-slate-200">{service.idealFor}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-xl2 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-primary">Quieres ver como quedaria en tu negocio?</h2>
          <p className="mt-3 text-slate-600">
            Te ensenamos una demo aplicada a tu caso real para que tomes una decision con claridad.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            {service.cta}
          </a>
        </div>
      </section>
    </main>
  );
}
