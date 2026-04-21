import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <main>
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Digitalizacion para PYMES de Barcelona</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Digitalizamos tu negocio local en Barcelona. Empieza a vender mas hoy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Implementamos sistemas digitales listos para facturar desde la primera semana, sin depender de plataformas que
            te quitan margen.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Solicitar diagnostico express
          </a>
        </div>
      </section>

      <section id="propiedad" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-xl2 border border-primary/10 bg-white p-8 shadow-soft md:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Diferenciador clave</p>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Tu sistema, tu propiedad</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            No somos un SaaS. Disenas e implementas una vez, y el activo digital es tuyo para siempre. Sin cuotas mensuales,
            sin comisiones por venta y con control total sobre tu negocio.
          </p>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-3 text-3xl font-bold text-primary">Servicios para crecer en tu zona</h2>
        <p className="mb-8 max-w-2xl text-slate-600">
          Cada solucion esta pensada para que tu equipo comercial la explique facilmente en visita presencial y el cliente
          visualice resultados de inmediato.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
