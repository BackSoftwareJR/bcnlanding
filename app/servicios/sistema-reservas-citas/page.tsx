import Image from "next/image";
import {
  AlarmClockCheck,
  ArrowRight,
  BellRing,
  CalendarClock,
  CalendarSync,
  CheckCircle2,
  CreditCard,
  Globe,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  UserX
} from "lucide-react";

const painPoints = [
  {
    problem: "Plataformas como Treatwell/Booksy cobran cuota mensual y comision por reservas.",
    impact: "Pagas por cada cliente nuevo y compites en la misma pantalla con negocios cercanos.",
    solution: "Sistema propio sin peajes por reserva y con control total de marca y datos."
  },
  {
    problem: "Telefono, WhatsApp y mensajes interrumpen todo el dia de trabajo.",
    impact: "Pierdes foco con el cliente presencial y acabas respondiendo fuera de horario.",
    solution: "Reservas automatizadas 24/7 para que tu agenda se llene sin interrupciones."
  },
  {
    problem: "No-shows y cancelaciones de ultima hora vacian huecos de facturacion.",
    impact: "Horas bloqueadas sin ingreso real, especialmente en servicios largos.",
    solution: "Recordatorios automáticos + opcion de deposito previo para reducir ausencias."
  }
];

const keyFeatures = [
  {
    title: "Recordatorios automaticos",
    description: "Envio por Email, SMS o WhatsApp 24/48 horas antes de la cita para reducir no-shows hasta un 80%.",
    icon: BellRing
  },
  {
    title: "Depositos o pago por adelantado",
    description: "Bloquea la cita solo cuando el cliente confirma con deposito. Ideal para tatuajes, tratamientos largos y bonos.",
    icon: CreditCard
  },
  {
    title: "Sincronizacion con Google Calendar",
    description: "Tu agenda en tiempo real en movil, tablet y escritorio para evitar solapes y mantener control diario.",
    icon: CalendarSync
  },
  {
    title: "Panel de control propio",
    description: "Los datos del cliente son 100% tuyos para fidelizacion, promociones y recordatorios de retorno.",
    icon: ShieldCheck
  }
];

const useCases = [
  {
    sector: "Peluquerias, barberias y estetica (Eixample, Gracia, Sants)",
    value:
      "Reservas por servicio y profesional: corte, color, barba, manicure. El cliente elige hora y especialista sin llamadas.",
    benefit: "Agenda organizada, menos interrupciones y mejor experiencia en recepcion."
  },
  {
    sector: "Estudios de tatuajes y piercings (Raval, Born, Poblenou)",
    value:
      "Confirmacion con deposito antes de bloquear sesiones largas. Opcionalmente, aprobacion manual desde el movil.",
    benefit: "No-shows bajo control y mejor proteccion de horas de alto valor."
  },
  {
    sector: "Clinicas, fisios y entrenadores (Les Corts, Sant Gervasi)",
    value:
      "Formularios de pre-consulta, flujos de privacidad y seguimiento de citas con sincronizacion en calendario profesional.",
    benefit: "Operativa mas limpia, preparacion previa y menos huecos improductivos."
  }
];

const calendarBlocks = [
  { time: "09:00", status: "Confirmada", client: "Carlos M. - Corte + Barba" },
  { time: "11:30", status: "Deposito pagado", client: "Marta R. - Sesion Tattoo 3h" },
  { time: "15:00", status: "Recordatorio enviado", client: "Laura G. - Fisio" },
  { time: "18:30", status: "Pendiente de aprobacion", client: "Ivan P. - Piercing" }
];

const visualExamples = [
  {
    title: "Reserva online desde el movil",
    text: "Tus clientes ven huecos disponibles en tiempo real y reservan en menos de 1 minuto.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Persona reservando cita desde smartphone"
  },
  {
    title: "Gestion diaria de agenda y equipo",
    text: "Visualiza todos los profesionales, turnos y servicios en una vista clara.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Equipo revisando calendario y agenda digital"
  },
  {
    title: "Experiencia premium para cliente final",
    text: "Flujo limpio de seleccion de servicio, profesional y hora disponible.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Cliente usando interfaz digital de reservas"
  }
];

const implementationRoadmap = [
  {
    title: "Kickoff y mapeo operativo",
    description:
      "Definimos servicios, tiempos por bloque, politicas de cancelacion y reglas de aprobacion para construir una agenda realista."
  },
  {
    title: "Configuracion de flujos",
    description:
      "Activamos reservas, recordatorios, depositos y sincronizacion de calendario segun las necesidades de tu negocio."
  },
  {
    title: "Pruebas con casos reales",
    description:
      "Probamos la experiencia de cliente y operativa interna con escenarios de hora punta, cambios y reprogramaciones."
  },
  {
    title: "Lanzamiento asistido",
    description:
      "Publicamos el sistema y acompanamos los primeros dias para ajustar textos, disponibilidad y conversion."
  }
];

const expectedOutcomes = [
  "Reduccion de interrupciones en recepcion y WhatsApp durante la jornada",
  "Menos no-shows gracias a recordatorios y politica de deposito",
  "Mayor ocupacion real de agenda con huecos mejor aprovechados",
  "Mejor experiencia para cliente final y equipo interno"
];

export default function SistemaReservasCitasPage() {
  return (
    <main className="bg-gradient-to-b from-surface via-white to-slate-50">
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute -right-12 top-8 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-8 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Sistema de Reservas y Citas</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Tu Agenda Llena. Cero Interrupciones. Cero Comisiones.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-200 md:text-lg">
            Automatiza tus reservas 24/7, elimina los no-shows con recordatorios inteligentes y olvida cuotas de plataformas
            externas. El sistema es tuyo.
          </p>
          <div className="mt-5 inline-flex rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
            Sitio web incluido gratis + sistema de reservas conectado
          </div>
          <a
            href="https://wa.me/393513052627"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
          >
            Calcula cuanto tiempo y dinero ahorraras
            <ArrowRight size={16} />
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-accent">
                <AlarmClockCheck size={16} />
                <p className="text-xs font-semibold uppercase tracking-wide">Agenda automatizada</p>
              </div>
              <p className="mt-2 text-sm text-slate-100">Reservas activas incluso fuera de horario laboral.</p>
            </article>
            <article className="rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-accent">
                <UserX size={16} />
                <p className="text-xs font-semibold uppercase tracking-wide">Anti no-show</p>
              </div>
              <p className="mt-2 text-sm text-slate-100">Recordatorios y deposito previo para proteger tu facturacion.</p>
            </article>
            <article className="rounded-xl2 border border-white/10 bg-white/10 p-4 backdrop-blur sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-accent">
                <Smartphone size={16} />
                <p className="text-xs font-semibold uppercase tracking-wide">Movil primero</p>
              </div>
              <p className="mt-2 text-sm text-slate-100">Diseno responsive para gestionar todo desde el telefono.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-primary">Puntos de dolor: problema real vs solucion real</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Esta seccion ayuda a ventas a transformar frustracion diaria en decision de compra clara.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {painPoints.map((item) => (
            <article key={item.problem} className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Problema</p>
              <p className="mt-2 text-slate-700">{item.problem}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-amber-600">Impacto</p>
              <p className="mt-2 text-slate-600">{item.impact}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-emerald-600">Nuestra solucion</p>
              <p className="mt-2 text-emerald-800">{item.solution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Como reserva un cliente en 3 pasos</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Disponibilidad online visible 24/7: el cliente entra, elige servicio y hora libre, y confirma cita sin llamadas.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Paso 1</p>
            <p className="mt-2 text-slate-700">Ve horarios reales disponibles y selecciona el servicio en segundos.</p>
          </article>
          <article className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Paso 2</p>
            <p className="mt-2 text-slate-700">
              Elige profesional (si aplica) y confirma con deposito o pago previo cuando sea necesario.
            </p>
          </article>
          <article className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Paso 3</p>
            <p className="mt-2 text-slate-700">
              Recibe recordatorio automatico y puede reprogramar sin saturar tu WhatsApp ni recepcion.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Ejemplos visuales de uso real</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Imagenes de referencia para que tus clientes entiendan rapidamente el nivel de experiencia que van a ofrecer.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {visualExamples.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl2 border border-slate-200 bg-white shadow-soft">
              <Image src={item.image} alt={item.alt} width={1200} height={760} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Funcionalidades clave</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {keyFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <Icon size={17} className="mt-1 shrink-0 text-emerald-700" />
                  <div>
                    <h3 className="font-semibold text-emerald-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-emerald-800">{feature.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <h2 className="text-3xl font-bold text-primary">Interfaz limpia para movil</h2>
            <p className="mt-3 text-slate-600">
              Simulacion visual de agenda diaria pensada para que el negocio revise, apruebe o reprograme citas desde el
              telefono en segundos.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <CalendarClock size={16} />
                  <p className="text-sm font-semibold">Agenda de Hoy</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">4 citas</span>
              </div>
              <div className="space-y-3">
                {calendarBlocks.map((block) => (
                  <article key={block.time + block.client} className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{block.time}</p>
                    <p className="mt-1 text-sm font-semibold text-primary">{block.client}</p>
                    <p className="mt-1 text-xs text-emerald-700">{block.status}</p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-xl2 border border-slate-200 bg-primary p-6 text-white shadow-soft md:p-8">
            <h3 className="text-2xl font-bold">Trabaja mientras duermes</h3>
            <p className="mt-3 text-slate-200">
              Un alto porcentaje de reservas se hace fuera de horario. Si no automatizas, esas citas se van con la competencia.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <PhoneCall size={16} />
                  <p className="text-sm font-semibold">Menos llamadas, mas foco</p>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Atiendes mejor a quien ya esta en tu local sin abandonar la operativa para contestar mensajes.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <CalendarClock size={16} />
                  <p className="text-sm font-semibold">Control de aprobacion</p>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Configura reservas en estado pendiente y apruebalas con un toque desde el movil.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <Globe size={16} />
                  <p className="text-sm font-semibold">Web incluida y conectada</p>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Incluimos una web profesional gratuita conectada al sistema para captar reservas desde Google, Instagram y
                  WhatsApp.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Casos de uso por sector</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.sector} className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">{item.sector}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.value}</p>
              <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{item.benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="text-3xl font-bold text-primary">Roadmap de implementacion</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Plan de trabajo claro para pasar de agenda manual a sistema profesional sin frenar la operativa diaria.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {implementationRoadmap.map((item) => (
            <article key={item.title} className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <h2 className="text-3xl font-bold text-primary">Resultados esperados tras implementacion</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {expectedOutcomes.map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-emerald-900">Ideal para el mercado local de Barcelona</h2>
          <p className="mt-3 max-w-3xl text-emerald-800">
            En Barcelona la demanda es alta y la competencia tambien. Este sistema ayuda a negocios con agenda intensa y
            clientes que reservan a cualquier hora, especialmente en movil.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <p className="flex items-start gap-2 text-sm text-emerald-900">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              Estudios tattoo y piercing que necesitan deposito para bloquear sesiones largas.
            </p>
            <p className="flex items-start gap-2 text-sm text-emerald-900">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              Peluquerias y barberias con alto volumen diario y necesidad de evitar llamadas constantes.
            </p>
            <p className="flex items-start gap-2 text-sm text-emerald-900">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              Clinicas, fisios y coaches que requieren agenda ordenada y formularios previos.
            </p>
            <p className="flex items-start gap-2 text-sm text-emerald-900">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              Centros de estetica y nails que quieren fidelizar clientes con recordatorios automaticos.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-xl2 border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-bold text-primary">Pitch comercial para cerrar con seguridad</h2>
          <p className="mt-4 text-slate-600">
            Cuantas veces al dia paras para responder WhatsApp o llamadas de citas? Y cuantas horas has perdido por no-shows?
            Nuestro sistema automatiza reservas, permite deposito previo y envia recordatorios antes de cada cita. Tu solo
            revisas tu calendario al empezar el dia y trabajas con tranquilidad.
          </p>
          <p className="mt-3 text-slate-600">
            Pagas una instalacion unica y el sistema es tuyo para siempre. Sin cuotas mensuales, sin comisiones ocultas y con
            todos los datos de clientes dentro de tu negocio.
          </p>
          <p className="mt-3 text-slate-600">
            Ademas, la web profesional de reservas esta incluida gratuitamente y conectada al sistema para que tus clientes
            vean disponibilidad online y reserven desde cualquier dispositivo.
          </p>
          <a
            href="https://wa.me/393513052627"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:brightness-110"
          >
            Ver demo personalizada para mi negocio
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
