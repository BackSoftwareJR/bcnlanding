import { Gauge, Languages, Search, ShieldCheck, Rocket, ChartNoAxesColumn } from "lucide-react";
import Image from "next/image";

const marketPainPoints = [
  "Trauma del Kit Digital: muchas PYMES terminaron con webs lentas, plantillas iguales y cero resultados reales en Google.",
  "Guerra de la velocidad: si una web tarda mas de 2 segundos en movil, en Barcelona el usuario se va con la competencia.",
  "Multilingua real: una web solo en espanol pierde confianza local en catalan y gran parte del potencial turistico en ingles."
];

const landingFeatures = [
  "Diseno persuasivo orientado a un unico objetivo de conversion.",
  "Optimizacion mobile extrema para trafico desde Google Ads e Instagram Ads.",
  "Integracion directa con WhatsApp y formularios de contacto de alta respuesta.",
  "Tracking de conversiones para medir cada lead y mejorar campanas.",
  "Todo incluido en la entrega inicial: diseno, desarrollo y puesta online."
];

const premiumFeatures = [
  "Arquitectura multi-pagina para autoridad digital y crecimiento SEO sostenible.",
  "Estudio de competencia en Barcelona y estructura por palabras clave de negocio.",
  "Multilingua profesional: espanol, catalan e ingles.",
  "Panel simple para editar textos sin depender de terceros."
];

const killerArguments = [
  {
    title: "Tecnologia Speed-First (Next.js/React)",
    text: "No trabajamos con sistemas pesados. Construimos con tecnologia moderna para carga casi instantanea, mejor experiencia y mayor conversion."
  },
  {
    title: "SEO Local Barcelona",
    text: "No solo diseno: estructuramos la web para posicionar busquedas como 'abogado en Barcelona' o 'peluqueria en Gracia'."
  },
  {
    title: "Propiedad Total (Sin Ataduras)",
    text: "Tu codigo es tuyo. No alquilas la web ni quedas atado a una agencia para siempre. Pagas una vez y controlas el activo."
  }
];

const proofStats = [
  { value: "<2s", label: "objetivo de carga en movil", icon: Gauge },
  { value: "3 idiomas", label: "ES + CAT + EN para Barcelona", icon: Languages },
  { value: "100%", label: "propiedad del codigo entregado", icon: ShieldCheck }
];

const workProcess = [
  {
    title: "Diagnostico comercial",
    text: "Analizamos tu oferta, cliente ideal y puntos de fuga para convertir la web en una herramienta de venta."
  },
  {
    title: "Arquitectura y copy",
    text: "Definimos estructura, mensajes y jerarquia para que cada bloque empuje a una accion concreta."
  },
  {
    title: "Desarrollo speed-first",
    text: "Construimos en React/Next.js para rendimiento real, experiencia premium y SEO tecnico limpio."
  },
  {
    title: "Lanzamiento y optimizacion",
    text: "Activamos medicion de conversion y ajustamos para mejorar resultados desde las primeras semanas."
  }
];

const visualExamples = [
  {
    title: "Sitio web escaparate para bodega vitivinicola",
    description:
      "Un sitio web escaparate para una bodega vitivinicola, de diseno refinado y cuidado, pensado para unir una estetica elegante con una navegacion intuitiva y envolvente.",
    image: "/images/cliente-landing-1.png"
  },
  {
    title: "Web corporativa para servicios profesionales",
    description: "Posicionamiento de autoridad con servicios, casos y arquitectura SEO para captar clientes cualificados.",
    image: "/images/cliente-landing-2.png"
  },
  {
    title: "Sitio web de alquiler vacacional",
    description:
      "Disenado para exhibir las propiedades con alto impacto visual y ofrecer un proceso de reserva fluido e intuitivo.",
    image: "/images/cliente-landing-3.png"
  },
  {
    title: "Exclusiva landing page para Cocktail Bar & Food",
    description:
      "Exclusiva landing page para un concepto de Cocktail Bar & Food, vinculada directamente a una carta digital inmersiva.",
    image: "/images/cliente-landing-4.png"
  }
];

const responsiveHighlights = [
  "Diseno mobile-first: se prioriza la experiencia en telefono, donde llega la mayor parte del trafico.",
  "Lectura y CTA optimizados para pulgar: botones grandes, jerarquia clara y formularios simples.",
  "Adaptacion completa para movil, tablet, portatil y pantallas grandes sin romper estructura.",
  "Performance pensada para conexiones moviles inestables en calle, metro o zonas con cobertura irregular."
];

const faqItems = [
  {
    question: "Ya hice una web con Kit Digital, por que deberia rehacerla?",
    answer:
      "Porque muchas quedaron como un tramite: lentas, con copy generico y sin foco en conversion. Nosotros replanteamos estrategia, estructura y rendimiento para que la web venda, no solo exista."
  },
  {
    question: "WordPress me cuesta 300EUR, por que vosotros sois mas caros?",
    answer:
      "Porque no vendemos una plantilla: vendemos una ventaja competitiva. Mejor velocidad, mejor SEO tecnico, mejor conversion y propiedad real del activo. El precio se justifica en resultados y control."
  },
  {
    question: "Cuanto tarda el proyecto en estar online?",
    answer:
      "Depende del alcance. Una landing suele salir en pocos dias de trabajo efectivo. Un web corporativo requiere mas arquitectura y contenido, pero siempre se define un calendario cerrado desde el inicio."
  },
  {
    question: "Que incluye el precio de la Landing Page desde 500EUR?",
    answer:
      "Incluye todo lo necesario para salir a vender: estrategia de estructura, copy comercial, diseno, desarrollo, optimizacion movil, integracion de contacto y publicacion. Es tuyo para siempre."
  },
  {
    question: "Hay costes posteriores obligatorios?",
    answer:
      "No hay mensualidades de agencia. Si quieres soporte y actualizaciones, ofrecemos mantenimiento anual de 150EUR."
  },
  {
    question: "Podre editar textos e imagenes yo mismo?",
    answer:
      "Si. Entregamos panel simple para cambios habituales sin depender de nosotros para cada ajuste comercial."
  },
  {
    question: "Incluye posicionamiento SEO local de Barcelona?",
    answer:
      "Si, desde la base: estructura, headings, intencion de busqueda, rendimiento y versionado multilingue orientado a SEO local."
  },
  {
    question: "Y si en unos meses quiero ampliar funcionalidades?",
    answer:
      "La base en Next.js permite crecer sin rehacerlo todo: nuevas secciones, integraciones, captacion avanzada o nuevos idiomas."
  },
  {
    question: "Que pasa si dejo de trabajar con vosotros?",
    answer:
      "Nada bloqueante. El codigo es tuyo y puedes alojarlo donde quieras. No hay secuestro de web ni cuotas obligatorias de permanencia."
  }
];

export default function WebLandingPage() {
  return (
    <main className="bg-surface">
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Web y conversion para PYMES en Barcelona</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Tu Sede Digital en Barcelona: Rapida, Profesional y de Tu Propiedad.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            No alquilamos plantillas. Construimos activos digitales en React/Next.js para dominar Google y convertir visitas
            en clientes reales.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
            0EUR Mensualidades
          </div>
          <a
            href="https://wa.me/393513052627"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Quiero una web que venda de verdad
          </a>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-slate-100">
                    <Icon className="h-4 w-4 text-accent" />
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-200">{stat.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">Analisis del mercado digital en Barcelona</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Aqui no gana quien tiene una web cualquiera. Gana quien carga mas rapido, comunica mejor y convierte trafico en
          conversaciones comerciales.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {marketPainPoints.map((point) => (
            <article key={point} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-slate-700">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl2 border border-slate-200 bg-white p-7 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Diagnostico claro para vender mejor</p>
          <h2 className="mt-2 text-3xl font-bold text-primary">Tu web actual te esta frenando si falla en estos 3 puntos</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-primary">Velocidad pobre</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">Cada segundo de espera reduce leads y destruye campanas de pago.</p>
            </article>
            <article className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-primary">SEO sin arquitectura</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">Sin estructura tecnica, Google no te premia aunque el diseno sea bonito.</p>
            </article>
            <article className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <ChartNoAxesColumn className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-primary">Mensaje poco convincente</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">Si no guias al usuario, navega, duda y se marcha sin contactarte.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Dos soluciones para dos objetivos de negocio</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Una landing captura demanda inmediata. Un web corporativo construye autoridad para vender mejor durante anos.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl2 border border-slate-200 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Solucion 1</p>
            <h3 className="mt-2 text-2xl font-bold text-primary">Landing Page de Alta Conversion</h3>
            <p className="mt-1 text-sm font-semibold text-accent">Desde 500EUR (todo incluido)</p>
            <p className="mt-4 text-slate-600">
              Una pagina, un objetivo, una accion. Ideal para profesionales, servicios de urgencia y campanas de captacion
              donde cada clic debe convertirse en lead.
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Tuyo para siempre. Mantenimiento anual opcional: 150EUR.
            </p>
            <ul className="mt-5 space-y-2 text-slate-700">
              {landingFeatures.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              Pitch comercial: si mandas trafico de Ads a una web sin foco, quemas presupuesto. Con una landing profesional,
              conviertes visitas en oportunidades reales.
            </div>
          </article>

          <article className="rounded-xl2 border border-primary/20 bg-primary p-7 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Solucion 2</p>
            <h3 className="mt-2 text-2xl font-bold">Web Corporativo / Premium</h3>
            <p className="mt-1 text-sm font-semibold text-accent">Desde 1200EUR</p>
            <p className="mt-4 text-slate-200">
              Tu cuartel general online: imagen de marca solida, estructura SEO avanzada y contenido preparado para escalar
              posicionamiento y ventas.
            </p>
            <ul className="mt-5 space-y-2 text-slate-100">
              {premiumFeatures.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-slate-100">
              Pitch comercial: una web lenta y vieja vende desconfianza. Una web premium rapida transmite autoridad y mejora
              resultados en Google y en cierre comercial.
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Como trabajamos contigo</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Proceso pensado para evitar sorpresas, acelerar salida a mercado y mantener enfoque comercial en todo momento.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {workProcess.map((step, index) => (
            <article key={step.title} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Paso {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Ejemplos visuales de estilo y enfoque comercial</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Referencias visuales para mostrar que el enfoque funciona en distintos sectores: restaurantes, clinicas, despachos,
          retail y cualquier negocio local que necesite captar desde internet.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visualExamples.map((example) => (
            <article key={example.title} className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft">
              <Image
                src={example.image}
                alt={example.title}
                width={1400}
                height={900}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary">{example.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{example.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Todo responsive, pensado primero para telefono</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Hoy el cliente te descubre desde el movil. Por eso cada pagina se disena y prueba primero en smartphone, y luego se
          adapta al resto de dispositivos.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {responsiveHighlights.map((item) => (
            <article key={item} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Por que nuestra solucion cuesta mas y rinde mas</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {killerArguments.map((argument) => (
            <article key={argument.title} className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-emerald-900">{argument.title}</h3>
              <p className="mt-2 text-sm text-emerald-800">{argument.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Comparativa tecnica y comercial</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          La diferencia no es estetica: es rendimiento, posicionamiento y control real del activo digital.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl2 border border-slate-200 bg-white shadow-soft">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Caracteristica</th>
                <th className="px-4 py-3 font-semibold">Web economica (WordPress)</th>
                <th className="px-4 py-3 font-semibold">Nuestra solucion (React/Next.js)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Velocidad</td>
                <td className="px-4 py-3">Lenta y pesada en movil</td>
                <td className="px-4 py-3">Hiper-veloz y optimizada de forma nativa</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Seguridad</td>
                <td className="px-4 py-3">Mayor riesgo por plugins y superficie de ataque</td>
                <td className="px-4 py-3">Arquitectura robusta sin dependencias innecesarias</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Costes mensuales</td>
                <td className="px-4 py-3">Frecuentes y a veces obligatorios</td>
                <td className="px-4 py-3">0EUR en cuotas de agencia por propiedad del codigo</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">SEO</td>
                <td className="px-4 py-3">Dificil de optimizar en profundidad</td>
                <td className="px-4 py-3">Estructura nativa para escalar en Google</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Diseno</td>
                <td className="px-4 py-3">Plantilla repetida y poco diferenciada</td>
                <td className="px-4 py-3">Diseno a medida enfocado a conversion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-primary">FAQ comercial para resolver objeciones reales</h2>
        <p className="mt-3 text-slate-600">
          Preguntas tipicas de PYMES en Barcelona cuando comparan precio, tecnologia y retorno.
        </p>
        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <summary className="cursor-pointer list-none font-semibold text-primary">{item.question}</summary>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="rounded-xl2 bg-primary p-8 text-white shadow-soft">
          <h2 className="text-3xl font-bold">No es un gasto, es una inversion en un activo que te pertenece.</h2>
          <p className="mt-3 text-slate-200">
            Si quieres competir en Barcelona, necesitas una web que convierta, cargue rapido y proyecte autoridad desde el
            primer segundo.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Hablar por WhatsApp y definir estrategia
          </a>
        </div>
      </section>
    </main>
  );
}
