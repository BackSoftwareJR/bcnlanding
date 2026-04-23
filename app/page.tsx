"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  TrendingUp, 
  Star,
  ArrowRight,
  Users,
  Award,
  Clock,
  ChevronDown
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const stats = [
  { value: "50+", label: "Proyectos entregados", icon: Award },
  { value: "<2s", label: "Tiempo de carga objetivo", icon: Zap },
  { value: "0€", label: "Cuotas mensuales", icon: Shield },
  { value: "100%", label: "Propiedad del codigo", icon: CheckCircle2 }
];

const benefits = [
  {
    title: "Sin dependencia de plataformas",
    description: "No pagas comisiones a terceros. Tu sistema, tu negocio, tus reglas.",
    icon: Shield
  },
  {
    title: "Resultados desde la primera semana",
    description: "Implementaciones agiles pensadas para generar impacto comercial inmediato.",
    icon: TrendingUp
  },
  {
    title: "Tecnologia moderna y rapida",
    description: "React, Next.js y las mejores practicas para rendimiento y SEO.",
    icon: Zap
  },
  {
    title: "Soporte local en Barcelona",
    description: "Equipo cercano que entiende el mercado local y tus necesidades reales.",
    icon: Users
  }
];

const testimonials = [
  {
    quote: "En dos semanas teniamos el sistema de reservas funcionando. Ahora gestionamos 3x mas citas sin aumentar personal.",
    author: "Maria Garcia",
    role: "Centro de Estetica en Gracia",
    rating: 5
  },
  {
    quote: "La landing nos trajo un 40% mas de contactos cualificados. La diferencia con nuestra web anterior es abismal.",
    author: "Pere Soler",
    role: "Despacho de Abogados en Eixample",
    rating: 5
  },
  {
    quote: "El menu digital redujo errores de comanda y aumento el ticket medio. Los clientes lo usan encantados.",
    author: "Carlos Fernandez",
    role: "Restaurante en Born",
    rating: 5
  }
];

const faqItems = [
  {
    question: "Por que no usais WordPress como todo el mundo?",
    answer: "Porque WordPress fue disenado hace 20 anos para blogs. Hoy existen tecnologias mucho mas rapidas y seguras como React/Next.js que ofrecen mejor rendimiento, SEO y experiencia de usuario. La diferencia se nota en Google y en conversion."
  },
  {
    question: "Cuanto cuesta realmente un proyecto con vosotros?",
    answer: "Depende del alcance. Una landing page profesional desde 500€, una web corporativa desde 1.200€, un e-commerce desde 2.000€. Sin cuotas mensuales ni costes ocultos. El activo es tuyo para siempre."
  },
  {
    question: "Que pasa si necesito cambios despues de la entrega?",
    answer: "Tienes propiedad total del codigo. Puedes modificarlo tu mismo, contratar a otro desarrollador o pedirnos mantenimiento opcional (150€/ano). No hay secuestro de web ni dependencia forzada."
  },
  {
    question: "Trabajais solo con negocios en Barcelona?",
    answer: "Nuestro foco es Barcelona y area metropolitana porque conocemos el mercado local. Pero aceptamos proyectos de toda Cataluna y Espana si el fit es bueno."
  }
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#030b1f]">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-blue-500/35 blur-3xl" />
        <div className="absolute -right-24 top-24 h-[320px] w-[320px] rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#030b1f]" />
        
        <div className="container-width relative px-6 pb-20 pt-24 md:pb-32 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="badge border border-white/25 bg-white/10 text-blue-100 backdrop-blur-lg">
              <Zap className="h-3 w-3" />
              Digitalizacion para PYMES de Barcelona
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Digitalizamos tu negocio local.{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
              Empieza a vender mas hoy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/90 md:text-xl"
          >
            Implementamos sistemas digitales listos para facturar desde la primera semana, 
            sin depender de plataformas que te quitan margen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="https://wa.me/393513052627" className="btn-primary group">
              Solicitar diagnostico express
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#servicios" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Ver servicios
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-blue-300" />
                    <span className="text-2xl font-bold text-white md:text-3xl">{stat.value}</span>
                  </div>
                  <p className="mt-1 text-sm text-blue-100/80">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-blue-200/70"
          >
            <span className="text-xs font-medium">Descubre mas</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section id="propiedad" className="scroll-mt-24 section-padding bg-transparent">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="badge badge-accent mb-4">
                  <Shield className="h-3 w-3" />
                  Diferenciador clave
                </span>
                <h2 className="section-title">
                  Tu sistema, tu propiedad
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-primary-600">
                  No somos un SaaS. Diseñamos e implementamos una vez, y el activo digital es tuyo para siempre. 
                  Sin cuotas mensuales, sin comisiones por venta y con control total sobre tu negocio.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-lg">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium text-primary">Codigo 100% tuyo</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-lg">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium text-primary">0€ cuotas mensuales</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-lg">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium text-primary">Sin comisiones por venta</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge badge-primary mb-4">
              Por que elegirnos
            </span>
            <h2 className="section-title">
              Ventajas que marcan la diferencia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-500">
              No vendemos humo ni promesas vacias. Entregamos soluciones que funcionan desde el primer dia.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  className="card card-hover group"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-accent-100 p-3 text-accent-600 transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{benefit.title}</h3>
                  <p className="mt-2 text-primary-500">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="scroll-mt-24 section-padding bg-transparent">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-accent mb-4">
              Soluciones probadas
            </span>
            <h2 className="section-title">
              Servicios para crecer en tu zona
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-500">
              Cada solucion esta pensada para que tu equipo comercial la explique facilmente 
              y el cliente visualice resultados de inmediato.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="section-padding bg-[#071126]">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge mb-4 border border-white/20 bg-white/10 text-white">
              <Star className="h-3 w-3 text-accent-400" />
              Lo que dicen nuestros clientes
            </span>
            <h2 className="section-title text-white">
              Resultados reales de negocios locales
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={fadeInUp}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="leading-relaxed text-blue-100/90">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-primary-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge badge-emerald mb-4">
              <Clock className="h-3 w-3" />
              Proceso simple
            </span>
            <h2 className="section-title">
              Como trabajamos contigo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-500">
              Un proceso claro y sin sorpresas para que sepas exactamente que esperar.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-4"
          >
            {[
              { step: "01", title: "Diagnostico", desc: "Analizamos tu negocio y definimos objetivos claros", showArrow: true },
              { step: "02", title: "Propuesta", desc: "Te presentamos la solucion ideal con precio cerrado", showArrow: true },
              { step: "03", title: "Desarrollo", desc: "Construimos tu sistema con actualizaciones frecuentes", showArrow: true },
              { step: "04", title: "Lanzamiento", desc: "Activamos y optimizamos para resultados inmediatos", showArrow: false }
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-lg">
                  <span className="text-4xl font-bold text-accent-500/20">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-primary-500">{item.desc}</p>
                </div>
                {item.showArrow && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:block">
                    <ArrowRight className="h-5 w-5 text-primary-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge badge-primary mb-4">
              Preguntas frecuentes
            </span>
            <h2 className="section-title">
              Resolvemos tus dudas
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-3xl space-y-4"
          >
            {faqItems.map((item) => (
              <motion.details
                key={item.question}
                variants={fadeInUp}
                className="group card cursor-pointer rounded-3xl"
              >
                <summary className="flex items-center justify-between font-semibold text-primary list-none">
                  {item.question}
                  <ChevronDown className="h-5 w-5 text-primary-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-primary-600 leading-relaxed">{item.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="section-padding bg-[#030b1f]">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Listo para digitalizar tu negocio?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100/90">
              Agenda una llamada de 15 minutos. Te explicamos como podemos ayudarte 
              sin compromiso ni presion.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://wa.me/393513052627" className="btn-primary group">
                Hablar por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-blue-200/70">o</span>
              <a href="mailto:info@bcndigitallocal.com" className="text-white underline underline-offset-4 hover:text-blue-300">
                Escribenos un email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
