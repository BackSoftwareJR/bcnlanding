import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  MapPin,
  MessagesSquare,
  ShieldCheck,
  Smartphone,
  Star,
  Store,
  Waves
} from "lucide-react";

const marketTruths = [
  {
    title: "Efecto Top 3 en Google Maps",
    text: "En busquedas como 'paella', 'barberia' o 'fisioterapia en Barcelona', los primeros 3 negocios capturan la mayor parte de clics y visitas."
  },
  {
    title: "La prueba social decide en segundos",
    text: "Un negocio con mas estrellas y volumen de reseñas transmite confianza inmediata al turista y al cliente local."
  },
  {
    title: "El problema real es la friccion",
    text: "Pedir una reseña verbalmente no basta. Si el cliente tiene que buscarte manualmente, casi siempre lo deja para despues."
  }
];

const nfcFlow = [
  "Cliente satisfecho en caja o salida del local",
  "Tap en el Totem NFC con su movil (sin app)",
  "Apertura directa de Google reseñas en 1 segundo",
  "Reseña enviada con minima friccion"
];

const packs = [
  {
    name: "Pack Visibilidad",
    price: "400EUR",
    subtitle: "Inversion en reputacion local",
    highlight: false,
    items: [
      "Optimizacion profesional de Google Business Profile",
      "Posicionamiento local inicial (categorias, servicios, SEO en ficha)",
      "1 Totem NFC personalizado para reseñas",
      "Seguimiento inicial y mejora constante del perfil",
      "Local link building en directorios de Barcelona"
    ]
  },
  {
    name: "Pack Full Digital",
    price: "650EUR",
    subtitle: "Mejor valor - posicionamiento + activo web",
    highlight: true,
    items: [
      "Todo lo incluido en Pack Visibilidad",
      "Sitio web profesional/landing de alta velocidad",
      "Web optimizada para movil, SEO y conversion",
      "Estructura multilingue para publico local y turistico",
      "Conexion web + reputacion local en una misma estrategia"
    ]
  }
];

const sectors = [
  "Restaurantes y bares en zonas turisticas (Ramblas, Born, Barceloneta)",
  "Peluquerias y barberias de barrio (Eixample, Gracia, Sants)",
  "Clinicas, fisios y centros de bienestar con alta competencia local",
  "Tiendas locales y negocios de proximidad que necesitan mas visibilidad en Maps"
];

export default function SeoLocalTotemsNfcPage() {
  return (
    <main className="bg-gradient-to-b from-surface via-white to-slate-50">
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute -right-10 top-8 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-4 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">SEO Local y Reputacion</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Domina Google Maps en Barcelona y Convierte Clientes de Paso en Fans.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-200 md:text-lg">
              No solo te encuentran, te eligen. Optimizamos tu perfil de Google y activamos Totems NFC para disparar reseñas
              positivas de forma natural y constante.
            </p>
            <a
              href="https://wa.me/393513052627"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
            >
              Quiero subir en Google Maps
              <ArrowRight size={16} />
            </a>
          </div>
          <article className="overflow-hidden rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
              alt="Cliente acercando su telefono para una accion rapida de reseña"
              width={1200}
              height={800}
              className="h-56 w-full rounded-xl object-cover md:h-72"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white/10 p-3 text-sm text-slate-100">
                <div className="flex items-center gap-2 text-accent">
                  <Smartphone size={15} />
                  Tap NFC
                </div>
                <p className="mt-1">Sin buscar en Google, sin pasos extra.</p>
              </div>
              <div className="rounded-lg bg-white/10 p-3 text-sm text-slate-100">
                <div className="flex items-center gap-2 text-accent">
                  <Star size={15} />
                  Reseña instantanea
                </div>
                <p className="mt-1">Menos friccion, mas opiniones positivas.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-primary">La guerra de las reseñas en Barcelona</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Un gran negocio puede estar vacio si no destaca en Google Maps. Esta estrategia convierte reputacion en flujo
          comercial.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {marketTruths.map((item) => (
            <article key={item.title} className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <h2 className="text-3xl font-bold text-primary">El producto fisico: Totem NFC</h2>
            <p className="mt-3 text-slate-600">
              Tecnologia contactless para reseñas: cliente acerca el movil y accede directo a tu ficha de Google para valorar.
              Sin friccion, sin buscar, sin perder conversion.
            </p>
            <div className="mt-6 space-y-3">
              {nfcFlow.map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <BadgeCheck size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                  <p className="text-sm text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl2 border border-slate-200 bg-primary p-6 text-white shadow-soft md:p-8">
            <h3 className="text-2xl font-bold">Sistema hibrido que escala reputacion</h3>
            <p className="mt-3 text-slate-200">
              SEO tecnico para que Google te entienda + activacion fisica en local para multiplicar reseñas reales.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin size={16} />
                  <p className="text-sm font-semibold">Visibilidad local</p>
                </div>
                <p className="mt-2 text-sm text-slate-100">Sube posiciones en Maps con estructura correcta y señales locales.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <MessagesSquare size={16} />
                  <p className="text-sm font-semibold">Mas reseñas, mas confianza</p>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Cada cliente satisfecho se convierte en una oportunidad de reputacion positiva.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <ChartNoAxesCombined size={16} />
                  <p className="text-sm font-semibold">Mejora constante</p>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Gestion y mejora continua. No te dejamos solo: trabajamos para que el ranking suba.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Packs estrategicos: inversion en reputacion</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Dos opciones claras para que el cliente vea valor inmediato y elija segun su situacion actual.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {packs.map((pack) => (
            <article
              key={pack.name}
              className={`rounded-xl2 border p-7 shadow-soft ${
                pack.highlight ? "border-primary/25 bg-primary text-white" : "border-slate-200 bg-white"
              }`}
            >
              <p className={`text-sm font-semibold uppercase tracking-wide ${pack.highlight ? "text-accent" : "text-slate-500"}`}>
                {pack.highlight ? "Mejor valor" : "Plan base"}
              </p>
              <h3 className={`mt-2 text-2xl font-bold ${pack.highlight ? "text-white" : "text-primary"}`}>{pack.name}</h3>
              <p className={`mt-1 text-sm ${pack.highlight ? "text-slate-200" : "text-slate-600"}`}>{pack.subtitle}</p>
              <p className={`mt-4 text-3xl font-bold ${pack.highlight ? "text-white" : "text-primary"}`}>{pack.price}</p>
              <ul className={`mt-6 space-y-2 text-sm ${pack.highlight ? "text-slate-100" : "text-slate-700"}`}>
                {pack.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              {pack.highlight ? (
                <p className="mt-5 rounded-lg bg-white/10 p-3 text-sm text-slate-100">
                  Incluye web profesional + estrategia local completa. Perfecto para nuevos negocios o webs antiguas.
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-emerald-900">Para quien es especialmente util en Barcelona</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {sectors.map((sector) => (
              <p key={sector} className="flex items-start gap-2 text-sm text-emerald-900">
                <Waves size={16} className="mt-0.5 shrink-0" />
                {sector}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-xl2 border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-bold text-primary">Pitch comercial para cerrar en visita</h2>
          <p className="mt-4 text-slate-600">
            Si hoy no estas en el Top 3 de Google Maps, estas regalando clientes a la competencia. Con 400EUR optimizamos tu
            perfil local y activamos tu Totem NFC para convertir clientes satisfechos en reseñas reales de forma inmediata.
          </p>
          <p className="mt-3 text-slate-600">
            Y por 650EUR tienes todo: reputacion local + web profesional de alta velocidad para captar demanda desde Google,
            Maps y redes. Es una inversion pequena para un impacto comercial sostenido.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <Store size={16} />
              Gestion y mejora constante
            </div>
            <p className="mt-1">No te dejamos solo. Monitorizamos, ajustamos y empujamos tu posicionamiento local.</p>
          </div>
          <a
            href="https://wa.me/393513052627"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
          >
            Solicitar estrategia SEO local
            <ArrowRight size={16} />
          </a>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={14} />
            Sin cuotas ocultas. Control total de tu reputacion y tus datos.
          </p>
        </div>
      </section>
    </main>
  );
}
