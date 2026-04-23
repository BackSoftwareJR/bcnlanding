"use client";

import { motion } from "framer-motion";
import { 
  Gauge, 
  Languages, 
  Search, 
  ShieldCheck, 
  Rocket, 
  ChartNoAxesColumn,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ChevronDown
} from "lucide-react";
import Image from "next/image";

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

const marketPainPoints = [
  {
    title: "Trauma del Kit Digital",
    text: "Muchas PYMES terminaron con webs lentas, plantillas iguales y cero resultados reales en Google."
  },
  {
    title: "Guerra de la velocidad",
    text: "Si una web tarda mas de 2 segundos en movil, en Barcelona el usuario se va con la competencia."
  },
  {
    title: "Multilingua real",
    text: "Una web solo en espanol pierde confianza local en catalan y gran parte del potencial turistico en ingles."
  }
];

const landingFeatures = [
  "Diseno persuasivo orientado a un unico objetivo de conversion",
  "Optimizacion mobile extrema para trafico desde Google Ads e Instagram Ads",
  "Integracion directa con WhatsApp y formularios de alta respuesta",
  "Tracking de conversiones para medir cada lead y mejorar campanas",
  "Todo incluido: diseno, desarrollo y puesta online"
];

const premiumFeatures = [
  "Arquitectura multi-pagina para autoridad digital y SEO sostenible",
  "Estudio de competencia en Barcelona y estructura por palabras clave",
  "Multilingua profesional: espanol, catalan e ingles",
  "Panel simple para editar textos sin depender de terceros"
];

const killerArguments = [
  {
    title: "Tecnologia Speed-First",
    text: "No trabajamos con sistemas pesados. Construimos con Next.js/React para carga casi instantanea.",
    icon: Zap
  },
  {
    title: "SEO Local Barcelona",
    text: "Estructuramos la web para posicionar busquedas como 'abogado en Barcelona' o 'peluqueria en Gracia'.",
    icon: Search
  },
  {
    title: "Propiedad Total",
    text: "Tu codigo es tuyo. No alquilas la web ni quedas atado a una agencia. Pagas una vez y controlas el activo.",
    icon: ShieldCheck
  }
];

const proofStats = [
  { value: "<2s", label: "objetivo de carga en movil", icon: Gauge },
  { value: "3 idiomas", label: "ES + CAT + EN para Barcelona", icon: Languages },
  { value: "100%", label: "propiedad del codigo", icon: ShieldCheck }
];

const workProcess = [
  {
    step: "01",
    title: "Diagnostico comercial",
    text: "Analizamos tu oferta, cliente ideal y puntos de fuga para convertir la web en una herramienta de venta."
  },
  {
    step: "02",
    title: "Arquitectura y copy",
    text: "Definimos estructura, mensajes y jerarquia para que cada bloque empuje a una accion concreta."
  },
  {
    step: "03",
    title: "Desarrollo speed-first",
    text: "Construimos en React/Next.js para rendimiento real, experiencia premium y SEO tecnico limpio."
  },
  {
    step: "04",
    title: "Lanzamiento",
    text: "Activamos medicion de conversion y ajustamos para mejorar resultados desde las primeras semanas."
  }
];

const visualExamples = [
  {
    title: "Bodega vitivinicola",
    description: "Sitio web escaparate de diseno refinado, pensado para unir estetica elegante con navegacion envolvente.",
    image: "/images/cliente-landing-1.png"
  },
  {
    title: "Servicios profesionales",
    description: "Posicionamiento de autoridad con servicios, casos y arquitectura SEO para captar clientes cualificados.",
    image: "/images/cliente-landing-2.png"
  },
  {
    title: "Alquiler vacacional",
    description: "Disenado para exhibir propiedades con alto impacto visual y proceso de reserva fluido.",
    image: "/images/cliente-landing-3.png"
  },
  {
    title: "Cocktail Bar & Food",
    description: "Landing page exclusiva vinculada directamente a una carta digital inmersiva.",
    image: "/images/cliente-landing-4.png"
  }
];

const faqItems = [
  {
    question: "Ya hice una web con Kit Digital, por que deberia rehacerla?",
    answer: "Porque muchas quedaron como un tramite: lentas, con copy generico y sin foco en conversion. Nosotros replanteamos estrategia, estructura y rendimiento para que la web venda, no solo exista."
  },
  {
    question: "WordPress me cuesta 300EUR, por que vosotros sois mas caros?",
    answer: "Porque no vendemos una plantilla: vendemos una ventaja competitiva. Mejor velocidad, mejor SEO tecnico, mejor conversion y propiedad real del activo."
  },
  {
    question: "Cuanto tarda el proyecto en estar online?",
    answer: "Una landing suele salir en pocos dias de trabajo efectivo. Un web corporativo requiere mas arquitectura, pero siempre se define un calendario cerrado desde el inicio."
  },
  {
    question: "Que incluye el precio de la Landing Page desde 500EUR?",
    answer: "Todo lo necesario para salir a vender: estrategia, copy comercial, diseno, desarrollo, optimizacion movil, integracion de contacto y publicacion. Es tuyo para siempre."
  },
  {
    question: "Hay costes posteriores obligatorios?",
    answer: "No hay mensualidades de agencia. Si quieres soporte y actualizaciones, ofrecemos mantenimiento anual de 150EUR."
  },
  {
    question: "Podre editar textos e imagenes yo mismo?",
    answer: "Si. Entregamos panel simple para cambios habituales sin depender de nosotros para cada ajuste comercial."
  },
  {
    question: "Incluye posicionamiento SEO local de Barcelona?",
    answer: "Si, desde la base: estructura, headings, intencion de busqueda, rendimiento y versionado multilingue orientado a SEO local."
  },
  {
    question: "Que pasa si dejo de trabajar con vosotros?",
    answer: "Nada bloqueante. El codigo es tuyo y puedes alojarlo donde quieras. No hay secuestro de web ni cuotas obligatorias de permanencia."
  }
];

export default function WebLandingPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 pt-24">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
        
        <div className="container-width relative px-6 pb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="badge badge-accent">
              <Sparkles className="h-3 w-3" />
              Web y conversion para PYMES en Barcelona
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Tu Sede Digital en Barcelona:{" "}
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-accent-500">
              Rapida, Profesional y de Tu Propiedad.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-200 md:text-xl"
          >
            No alquilamos plantillas. Construimos activos digitales en React/Next.js 
            para dominar Google y convertir visitas en clientes reales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="https://wa.me/393513052627" className="btn-primary group">
              Quiero una web que venda de verdad
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="badge badge-emerald">
              <CheckCircle2 className="h-3 w-3" />
              0EUR Mensualidades
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {proofStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-accent-400" />
                    <span className="text-2xl font-bold text-white md:text-3xl">{stat.value}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary-300">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-primary mb-4">Analisis de mercado</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              El mercado digital en Barcelona
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-primary-500">
              Aqui no gana quien tiene una web cualquiera. Gana quien carga mas rapido, 
              comunica mejor y convierte trafico en conversaciones comerciales.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {marketPainPoints.map((point) => (
              <motion.article
                key={point.title}
                variants={fadeInUp}
                className="card card-hover"
              >
                <h3 className="text-lg font-semibold text-primary">{point.title}</h3>
                <p className="mt-2 text-primary-500">{point.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-accent-200/50 bg-gradient-to-br from-accent-50 via-white to-white p-8 shadow-soft-lg md:p-12"
          >
            <span className="badge badge-accent mb-4">
              <CheckCircle2 className="h-3 w-3" />
              Diagnostico claro
            </span>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Tu web actual te esta frenando si falla en estos 3 puntos
            </h2>
            
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-accent-100 p-3">
                  <Rocket className="h-5 w-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Velocidad pobre</h3>
                  <p className="mt-1 text-sm text-primary-500">
                    Cada segundo de espera reduce leads y destruye campanas de pago.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-accent-100 p-3">
                  <Search className="h-5 w-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">SEO sin arquitectura</h3>
                  <p className="mt-1 text-sm text-primary-500">
                    Sin estructura tecnica, Google no te premia aunque el diseno sea bonito.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-accent-100 p-3">
                  <ChartNoAxesColumn className="h-5 w-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Mensaje poco convincente</h3>
                  <p className="mt-1 text-sm text-primary-500">
                    Si no guias al usuario, navega, duda y se marcha sin contactarte.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-primary mb-4">Nuestras soluciones</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Dos soluciones para dos objetivos de negocio
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-primary-500">
              Una landing captura demanda inmediata. Un web corporativo construye autoridad 
              para vender mejor durante anos.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Landing Page */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <span className="badge badge-primary mb-4">Solucion 1</span>
              <h3 className="text-2xl font-bold text-primary">Landing Page de Alta Conversion</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent">500EUR</span>
                <span className="text-primary-400">todo incluido</span>
              </div>
              <p className="mt-4 text-primary-600">
                Una pagina, un objetivo, una accion. Ideal para profesionales, servicios de urgencia 
                y campanas de captacion donde cada clic debe convertirse en lead.
              </p>
              <ul className="mt-6 space-y-3">
                {landingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-primary-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-primary-50 p-4">
                <p className="text-sm text-primary-600">
                  <strong>Tuyo para siempre.</strong> Mantenimiento anual opcional: 150EUR.
                </p>
              </div>
            </motion.article>

            {/* Premium Web */}
            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 p-8 text-white shadow-soft-lg"
            >
              <span className="badge bg-white/10 text-white mb-4">Solucion 2 - Recomendada</span>
              <h3 className="text-2xl font-bold">Web Corporativo / Premium</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent-400">1200EUR</span>
                <span className="text-primary-300">en adelante</span>
              </div>
              <p className="mt-4 text-primary-200">
                Tu cuartel general online: imagen de marca solida, estructura SEO avanzada 
                y contenido preparado para escalar posicionamiento y ventas.
              </p>
              <ul className="mt-6 space-y-3">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-primary-100">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/393513052627" className="btn-primary mt-8 w-full justify-center">
                Solicitar presupuesto
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge badge-emerald mb-4">Proceso de trabajo</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Como trabajamos contigo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-500">
              Proceso pensado para evitar sorpresas, acelerar salida a mercado y mantener enfoque comercial.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {workProcess.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="card h-full">
                  <span className="text-4xl font-bold text-accent-500/20">{step.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-primary-500">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-accent mb-4">Portfolio</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Ejemplos de nuestro trabajo
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-primary-500">
              Referencias visuales que demuestran que nuestro enfoque funciona en distintos sectores.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {visualExamples.map((example) => (
              <motion.article
                key={example.title}
                variants={fadeInUp}
                className="group card card-hover overflow-hidden p-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={example.image}
                    alt={example.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary">{example.title}</h3>
                  <p className="mt-2 text-sm text-primary-500">{example.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-primary-900">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge bg-white/10 text-white mb-4">Nuestra diferencia</span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Por que nuestra solucion rinde mas
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {killerArguments.map((argument) => {
              const Icon = argument.icon;
              return (
                <motion.div
                  key={argument.title}
                  variants={fadeInUp}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-accent-500/20 p-3">
                    <Icon className="h-6 w-6 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{argument.title}</h3>
                  <p className="mt-2 text-primary-300">{argument.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-primary mb-4">Comparativa</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Comparativa tecnica y comercial
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-primary-500">
              La diferencia no es estetica: es rendimiento, posicionamiento y control real del activo digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 overflow-hidden rounded-2xl border border-primary-200 shadow-soft"
          >
            <table className="min-w-full text-left text-sm">
              <thead className="bg-primary-50 text-primary">
                <tr>
                  <th className="px-6 py-4 font-semibold">Caracteristica</th>
                  <th className="px-6 py-4 font-semibold">Web economica</th>
                  <th className="px-6 py-4 font-semibold text-accent">Nuestra solucion</th>
                </tr>
              </thead>
              <tbody className="text-primary-600">
                <tr className="border-t border-primary-100">
                  <td className="px-6 py-4 font-medium">Velocidad</td>
                  <td className="px-6 py-4">Lenta en movil</td>
                  <td className="px-6 py-4 text-emerald-600">Hiper-veloz nativa</td>
                </tr>
                <tr className="border-t border-primary-100 bg-primary-50/50">
                  <td className="px-6 py-4 font-medium">Seguridad</td>
                  <td className="px-6 py-4">Riesgo por plugins</td>
                  <td className="px-6 py-4 text-emerald-600">Arquitectura robusta</td>
                </tr>
                <tr className="border-t border-primary-100">
                  <td className="px-6 py-4 font-medium">Costes mensuales</td>
                  <td className="px-6 py-4">Frecuentes</td>
                  <td className="px-6 py-4 text-emerald-600">0EUR por propiedad</td>
                </tr>
                <tr className="border-t border-primary-100 bg-primary-50/50">
                  <td className="px-6 py-4 font-medium">SEO</td>
                  <td className="px-6 py-4">Dificil optimizar</td>
                  <td className="px-6 py-4 text-emerald-600">Estructura nativa</td>
                </tr>
                <tr className="border-t border-primary-100">
                  <td className="px-6 py-4 font-medium">Diseno</td>
                  <td className="px-6 py-4">Plantilla repetida</td>
                  <td className="px-6 py-4 text-emerald-600">A medida para conversion</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-500">
              Preguntas tipicas de PYMES en Barcelona cuando comparan precio, tecnologia y retorno.
            </p>
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
                className="group card cursor-pointer"
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
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              No es un gasto, es una inversion en un activo que te pertenece.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-200">
              Si quieres competir en Barcelona, necesitas una web que convierta, cargue rapido 
              y proyecte autoridad desde el primer segundo.
            </p>
            <a href="https://wa.me/393513052627" className="btn-primary mt-10 group">
              Hablar por WhatsApp y definir estrategia
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
