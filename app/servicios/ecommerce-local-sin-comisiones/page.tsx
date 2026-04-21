import Image from "next/image";
import { ArrowRight, BadgeEuro, ChartNoAxesCombined, CreditCard, Monitor, Rocket, ShieldCheck, Smartphone, Store, Tablet } from "lucide-react";

const marketAnalysis = [
  "En Barcelona, el comerç de proximitat (moda, gastronomia, artesania) sigue siendo fuerte, pero muchos negocios locales aun ven el e-commerce como complejo o caro de gestionar.",
  "Modelos de plataforma con cuotas y comisiones reducen margen real: vender mas no siempre significa ganar mas cuando pagas peajes constantes.",
  "Nuevos emprendedores de activewear, joyeria y producto natural necesitan lanzar marca con nivel profesional sin asumir costes fijos altos desde el primer mes."
];

const targetSegments = [
  {
    title: "Tiendas fisicas que quieren digitalizarse",
    example: "Ejemplo: boutique en Gracia o gastronomia local que quiere enviar en toda Espana y Europa.",
    benefit: "Tu tienda vende 24/7 mientras tu equipo se enfoca en atencion, producto y experiencia en local."
  },
  {
    title: "Nuevos emprendedores y marcas de producto",
    example: "Ejemplo: lanzamiento de marca de cosmetica, gafas o complementos artesanales.",
    benefit: "Empiezas con una base tecnica rapida, SEO-friendly y preparada para competir desde el primer dia."
  },
  {
    title: "Negocios cansados de Shopify/Amazon",
    example: "Ejemplo: ecommerce que paga cuota mensual + comision por venta y quiere recuperar margen.",
    benefit: "El ahorro anual en comisiones puede amortizar la inversion y mejorar rentabilidad de forma directa."
  }
];

const ecommerceFeatures = [
  "Pagos integrados con Stripe, PayPal y tarjeta. El dinero entra directo en tu cuenta.",
  "Rendimiento premium con React/Next.js: carga ultra-rapida para mejorar conversion y SEO.",
  "Panel de gestion sencillo para productos, precios, stock y pedidos sin friccion operativa.",
  "Propiedad total del activo digital: sin dependencia estructural de una plataforma de terceros.",
  "Configuracion de logistica y envios por zonas: Barcelona ciudad, Peninsula e internacional.",
  "Arquitectura preparada para campanas, promociones y crecimiento de catalogo."
];

const useCases = [
  {
    title: "Atelier Nexo - Moda local",
    summary: "Pasa de vender solo en tienda a captar pedidos online de toda Espana con colecciones estacionales.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Tienda de moda con escaparate y productos"
  },
  {
    title: "Casa Mestral - Gourmet artesano",
    summary: "Digitaliza catalogo y envios para monetizar producto premium fuera de su barrio habitual.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    alt: "Productos gourmet en estanterias"
  },
  {
    title: "Viva Active BCN - Nueva marca",
    summary: "Lanza ecommerce de activewear sin pagar cuotas de plataforma durante todo el primer ano.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    alt: "Marca de ropa y accesorios de estilo activo"
  }
];

const comparisonRows = [
  {
    concept: "Modelo de coste",
    oldWay: "Cuota mensual + comision por venta",
    ourWay: "Pago unico por desarrollo en propiedad"
  },
  {
    concept: "Control del negocio",
    oldWay: "Dependencia de plataforma y reglas externas",
    ourWay: "Control total sobre tecnologia, marca y datos"
  },
  {
    concept: "Margen por venta",
    oldWay: "Se reduce con cada transaccion",
    ourWay: "Maximo margen operativo (sin peajes por venta)"
  },
  {
    concept: "Escalabilidad",
    oldWay: "Coste variable creciente con facturacion",
    ourWay: "Base estable para crecer sin penalizacion por volumen"
  }
];

const savingsExamples = [
  "Si facturas 2.500EUR/mes y pagas entre cuotas/comisiones un 3%-5%, el coste anual puede rondar 900EUR-1.500EUR.",
  "Con mayor volumen (5.000EUR-10.000EUR/mes), el impacto de peajes crece y puede superar varios miles de euros al ano.",
  "Con una tienda en propiedad desde 1.500EUR, conviertes ese gasto recurrente en inversion sobre un activo propio."
];

const visualGallery = [
  {
    title: "Home de ecommerce orientada a conversion",
    image: "/images/ecommerce-inspiracion-1.png",
    alt: "Persona comprando en tienda online desde smartphone"
  },
  {
    title: "Catalogo visual para producto premium",
    image: "/images/ecommerce-inspiracion-2.png",
    alt: "Catalogo de productos en tienda de moda"
  },
  {
    title: "Checkout rapido y seguro",
    image: "/images/ecommerce-inspiracion-3.png",
    alt: "Proceso de pago online en comercio digital"
  },
  {
    title: "Gestion de pedidos desde cualquier dispositivo",
    image: "/images/ecommerce-inspiracion-4.png",
    alt: "Panel de analitica y gestion de ecommerce"
  }
];

export default function EcommerceLocalSinComisionesPage() {
  return (
    <main className="bg-gradient-to-b from-surface via-white to-slate-50">
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute -right-12 top-8 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-8 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">E-commerce Local & Global</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Vende Online sin Comisiones y Recupera el Control de tu Margen.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-200 md:text-lg">
            Creamos tu tienda online personalizada, ultra-rapida y de tu propiedad. Sin cuotas mensuales de plataforma. Lo
            que vendes es 100% para ti.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
            Desde 1500EUR (pago unico)
          </div>
          <a
            href="https://wa.me/393513052627"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
          >
            Quiero mi tienda online en propiedad
            <ArrowRight size={16} />
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-accent">
                <CreditCard size={16} />
                <p className="text-xs font-semibold uppercase tracking-wide">Pagos directos</p>
              </div>
              <p className="mt-2 text-sm text-slate-100">Stripe, PayPal y tarjeta conectados con tu cuenta.</p>
            </article>
            <article className="rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-accent">
                <Rocket size={16} />
                <p className="text-xs font-semibold uppercase tracking-wide">Rendimiento premium</p>
              </div>
              <p className="mt-2 text-sm text-slate-100">Carga ultra-rapida para conversion, UX y SEO.</p>
            </article>
            <article className="rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-accent">
                <ShieldCheck size={16} />
                <p className="text-xs font-semibold uppercase tracking-wide">Activo en propiedad</p>
              </div>
              <p className="mt-2 text-sm text-slate-100">Sin dependencia estructural de terceros.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-primary">Analisis de mercado en Barcelona</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Esta pagina esta pensada para apoyar a tu equipo de ventas con discurso consultivo: margen, control y escalabilidad.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {marketAnalysis.map((point) => (
            <article
              key={point}
              className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-emerald-200"
            >
              <p className="text-slate-700">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Tu propia tienda online, sin peajes ni comisiones</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Comparativa de costes clara para cerrar objeciones economicas en visita comercial.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl2 border border-slate-200 bg-white shadow-soft">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold">Shopify/Amazon (comisiones constantes)</th>
                <th className="px-4 py-3 font-semibold">Nuestra solucion (propiedad unica)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {comparisonRows.map((row) => (
                <tr key={row.concept} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium">{row.concept}</td>
                  <td className="px-4 py-3 text-slate-600">{row.oldWay}</td>
                  <td className="px-4 py-3 font-medium text-emerald-800">{row.ourWay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Para quien es ideal</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {targetSegments.map((segment) => (
            <article
              key={segment.title}
              className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30"
            >
              <h3 className="text-xl font-semibold text-primary">{segment.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{segment.example}</p>
              <p className="mt-3 text-slate-700">{segment.benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Caracteristicas tecnicas que sostienen el valor</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          No vendemos una plantilla: construimos infraestructura comercial para ecommerce local y expansion digital.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ecommerceFeatures.map((feature) => (
            <article key={feature} className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <Store size={16} className="mt-1 shrink-0 text-emerald-700" />
                <p className="text-emerald-900">{feature}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Inspiracion visual para tu tienda online</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Imagenes de referencia reales para mostrar al cliente como se puede ver una experiencia ecommerce moderna y
          profesional.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {visualGallery.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <Image src={item.image} alt={item.alt} width={1200} height={760} className="h-56 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-primary">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <h2 className="text-3xl font-bold text-primary">Diseno 100% responsive y mobile-first</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Todo se construye para verse perfecto en cualquier pantalla, con prioridad absoluta al movil. Hoy la mayor parte
            del trafico ecommerce llega desde telefono, y tu tienda debe convertir desde ese primer toque.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-primary">
                <Smartphone size={16} />
                <p className="text-sm font-semibold">Prioridad smartphone</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Navegacion, catalogo, filtros y checkout optimizados para pulgar y lectura rapida.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-primary">
                <Tablet size={16} />
                <p className="text-sm font-semibold">Adaptacion en tablet</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Layout flexible para venta en showroom, ferias o uso interno de equipo comercial.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-primary">
                <Monitor size={16} />
                <p className="text-sm font-semibold">Experiencia desktop premium</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Visualizacion limpia en escritorio para branding, SEO y conversion en sesiones largas.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Casos de uso visuales para vender mejor</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Ejemplos inspiracionales para que el cliente final visualice su proyecto y tome decision con claridad.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <Image src={item.image} alt={item.alt} width={1200} height={760} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="rounded-xl2 border border-primary/20 bg-primary p-7 text-white shadow-soft md:p-8">
          <h2 className="text-3xl font-bold">Calcula tu ahorro</h2>
          <p className="mt-3 max-w-3xl text-slate-200">
            Si hoy pagas comisiones por cada venta, ya tienes una fuga de margen. Esta seccion te ayuda a convertir esa fuga
            en argumento de inversion.
          </p>
          <ul className="mt-6 space-y-3 text-slate-100">
            {savingsExamples.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <BadgeEuro size={16} className="mt-1 shrink-0 text-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-slate-100">
            <div className="flex items-center gap-2 font-semibold text-accent">
              <ChartNoAxesCombined size={16} />
              Indicador comercial clave
            </div>
            <p className="mt-2">Cuanto mayor sea tu facturacion, mayor sera el ahorro anual por eliminar comisiones por venta.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-xl2 border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-bold text-primary">Pitch comercial para cerrar la propuesta</h2>
          <p className="mt-4 text-slate-600">
            Cuanto vendiste online el ultimo ano? Si usaste plataformas con cuota y comision, sabes que has dejado dinero
            sobre la mesa. Nosotros construimos tu propiedad digital: inviertes una vez desde 1500EUR y cada euro de venta se
            queda en tu negocio.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
          >
            Hablar por WhatsApp y revisar mi caso
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
