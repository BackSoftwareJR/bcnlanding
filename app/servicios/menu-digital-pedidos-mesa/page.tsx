import Image from "next/image";

const marketPainPoints = [
  "Dificultad para contratar camareros cualificados en Barcelona, especialmente en zonas turisticas.",
  "Coste laboral alto para tareas repetitivas como tomar comandas y gestionar cambios de ultima hora.",
  "Errores de pedido en horas punta y friccion con clientes internacionales por idioma.",
  "Poca venta sugerida en sala: se pierde margen al no proponer extras de forma constante."
];

const baseFeatures = [
  "Web-app de menu digital fluida, sin PDF ilegibles y con carga rapida desde cualquier movil.",
  "Traduccion automatica por idioma del dispositivo del cliente para vender mejor a turista internacional.",
  "Panel admin para ocultar platos, editar precios, destacar recomendaciones y actualizar carta en tiempo real.",
  "Filtros de alergenos y etiquetas de dieta (sin gluten, vegano, etc.) para cumplimiento normativo y confianza.",
  "Fotos de producto y descripciones comerciales para aumentar conversion frente a una carta en papel.",
  "Estructura por categorias y productos destacados para guiar la compra y subir ticket medio."
];

const plusFeatures = [
  "Auto-pedido desde QR en mesa con envio directo de comanda a cocina o caja.",
  "Upselling inteligente en cada decision de compra para aumentar ticket medio.",
  "Pago integrado opcional (Apple Pay / tarjeta) o flujo de pago en caja.",
  "Menor tiempo muerto en sala y mayor rotacion de mesas en servicios de alta demanda."
];

const faqItems = [
  {
    question: "Mis clientes prefieren hablar con un camarero, no con el movil.",
    answer:
      "Totalmente. El sistema no elimina el trato humano: elimina tareas repetitivas. Asi el equipo se centra en recomendar, vender mejor y cuidar la experiencia, lo que impacta en reseñas y fidelizacion."
  },
  {
    question: "1500EUR me parece una inversion alta.",
    answer:
      "No es un gasto recurrente, es un activo en propiedad. Si solo generas unas pocas ventas extra al dia por sugerencias automaticas, la inversion se recupera rapido y el resto se convierte en margen."
  },
  {
    question: "Y si quiero cambiar platos, precios o ocultar productos?",
    answer:
      "Incluimos un panel de gestion sencillo para que lo hagas en segundos desde movil o tablet, sin depender de terceros ni costes de impresion."
  }
];

const exampleProjects = [
  {
    name: "New Flower Cafe",
    goal: "Bar food con menu digital para agilizar pedidos y mejorar experiencia en sala.",
    result: "Servicio mas fluido en hora punta y mejor conversion en platos y extras destacados.",
    image: "/images/menu-cliente-new-flower-cafe.png"
  },
  {
    name: "Josetta Saffirio",
    goal: "Proyecto vitivinicola para gestionar cantina, menu y adquisiciones en un flujo digital unificado.",
    result: "Operativa mas ordenada entre producto y servicio, con mejor control de compra y venta.",
    image: "/images/menu-cliente-josetta-saffirio.png"
  }
];

export default function MenuDigitalPedidosPage() {
  return (
    <main className="bg-surface">
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Hosteleria en Barcelona</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Convierte tu menu en tu mejor camarero.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Sistemas de menu digital y auto-pedido a mesa disenados a medida. Sin cuotas mensuales. Sin comisiones.
            100% de tu propiedad.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Ver demo en vivo
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">Analisis de mercado para ventas en calle</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Este bloque esta pensado para que el comercial entre en la reunion con contexto: no vendemos tecnologia, vendemos
          velocidad operativa, ventas adicionales y control del margen.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {marketPainPoints.map((point) => (
            <article key={point} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-slate-700">{point}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-xl2 border border-emerald-200 bg-emerald-50 p-6">
          <p className="font-semibold text-emerald-800">
            Nuestra nota de oro: mientras otros venden SaaS con cuota mensual, nosotros implementamos sistemas en propiedad.
            Pagas una sola vez y el activo es tuyo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Dos soluciones, dos niveles de impacto</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          El objetivo comercial es mostrar claridad: la opcion Base moderniza la operativa; la opcion Plus acelera ventas y
          se amortiza rapido.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl2 border border-slate-200 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Paquete 1</p>
            <h3 className="mt-2 text-2xl font-bold text-primary">Menu Digital Base</h3>
            <p className="mt-1 text-sm font-semibold text-accent">Desde 500EUR</p>
            <p className="mt-4 text-slate-600">
              No es &quot;pasar la carta a un QR&quot;. Es una herramienta comercial que mejora lectura, decision de compra y
              actualizacion operativa en minutos.
            </p>
            <p className="mt-3 text-slate-600">
              Diferencia frente al menu de papel: en papel no puedes medir que se vende mas, no puedes destacar platos
              estrategicos por franja horaria y cada cambio de precio obliga a reimprimir. Aqui todo se adapta en tiempo real
              y tu equipo mantiene control total sin depender de terceros.
            </p>
            <ul className="mt-5 space-y-2 text-slate-700">
              {baseFeatures.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              Pitch vendedor: el cliente decide mas rapido, el equipo recibe menos preguntas repetitivas y tu carta deja de ser
              un coste de impresion para convertirse en un activo de venta que puedes optimizar cada semana.
            </div>
          </article>

          <article className="rounded-xl2 border border-primary/20 bg-primary p-7 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Paquete 2</p>
            <h3 className="mt-2 text-2xl font-bold">Sistema Auto-Pedido & Upselling Inteligente</h3>
            <p className="mt-1 text-sm font-semibold text-accent">Desde 1500EUR</p>
            <p className="mt-4 text-slate-200">
              La opcion para restaurantes con volumen: menos friccion operativa, mas venta por mesa y mejor rotacion.
            </p>
            <p className="mt-3 text-sm text-slate-200">
              Importante: el sistema avanzado puede requerir compra aparte de hardware y componentes adicionales (por ejemplo,
              impresoras, dispositivos de cocina/caja y otros accesorios segun operativa). Todo el alcance tecnico y economico
              se explica con detalle durante la reunion.
            </p>
            <ul className="mt-5 space-y-2 text-slate-100">
              {plusFeatures.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-slate-100">
              Pitch vendedor: cuesta menos que un mes de personal adicional y trabaja 24/7 vendiendo extras en cada pedido.
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Galeria visual para apoyar el discurso comercial</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Imagenes de referencia online para explicar el concepto durante la visita.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <figure className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft">
            <Image
              src="/images/menu-galeria-1.png"
              alt="Cliente escaneando QR en mesa de restaurante"
              width={1000}
              height={640}
              className="h-48 w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-slate-700">Pedido desde mesa con QR en segundos.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft">
            <Image
              src="/images/menu-galeria-2.png"
              alt="Cocina profesional recibiendo pedidos digitales"
              width={1000}
              height={640}
              className="h-48 w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-slate-700">Comandas claras para cocina sin errores de lectura.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft">
            <Image
              src="/images/menu-galeria-3.png"
              alt="Pago digital en movil en restaurante"
              width={1000}
              height={640}
              className="h-48 w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-slate-700">Pago rapido desde movil o flujo de pago en caja.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-primary">Proyectos de ejemplo</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Casos de muestra para apoyar credibilidad durante el proceso comercial.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {exampleProjects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft">
              <Image src={project.image} alt={project.name} width={1000} height={640} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Objetivo:</span> {project.goal}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Resultado:</span> {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-primary">FAQ para gestionar objeciones en visita</h2>
        <p className="mt-3 text-slate-600">
          Esta seccion sirve tanto para la web como para ayudar al vendedor a responder dudas en tiempo real.
        </p>
        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
              <summary className="cursor-pointer list-none font-semibold text-primary">{item.question}</summary>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 rounded-xl2 bg-primary p-8 text-white shadow-soft">
          <h3 className="text-2xl font-bold">Quieres ver una demo personalizada para tu restaurante?</h3>
          <p className="mt-3 text-slate-200">
            Te mostramos el flujo completo en tablet: menu, pedido, upselling y pago. En 15 minutos veras si encaja con tu
            operativa actual.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Solicitar demo en vivo
          </a>
        </div>
      </section>
    </main>
  );
}
