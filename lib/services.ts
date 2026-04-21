export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  idealFor: string;
  benefits: string[];
  cta: string;
  iconKey: "globe" | "utensils" | "store" | "calendar" | "map";
};

export const services: Service[] = [
  {
    slug: "paginas-web-landing-pages",
    title: "Paginas Web & Landing Pages",
    shortDescription: "Landing Pages y Webs corporativas en React/Next.js para convertir trafico en clientes.",
    problem: "Una web lenta o generica te hace perder confianza, posicionamiento y ventas antes del primer contacto.",
    idealFor:
      "Ideal para profesionales, comercios locales y empresas que quieren autoridad digital real en Barcelona.",
    benefits: [
      "Landing de alta conversion para campanas y captacion rapida",
      "Web corporativa premium para marca, SEO y autoridad",
      "Multilingua para mercado local y turistico (ES/CAT/EN)",
      "Propiedad total del codigo y 0EUR en mensualidades de agencia"
    ],
    cta: "Quiero mi estrategia Web & Landing",
    iconKey: "globe"
  },
  {
    slug: "menu-digital-pedidos-mesa",
    title: "Menu Digital y Pedidos a Mesa",
    shortDescription: "Reduce esperas y aumenta ticket medio con pedidos directos desde el movil.",
    problem: "Las colas y la friccion al pedir hacen que vendas menos en hora punta.",
    idealFor: "Ideal para bares, restaurantes, cafeterias y locales con terraza en Barcelona.",
    benefits: [
      "Carta digital actualizable en minutos",
      "Pedidos a mesa sin esperas innecesarias",
      "Menos errores de comanda y mejor experiencia",
      "Upselling visual con extras y sugerencias"
    ],
    cta: "Quiero modernizar mi servicio en sala",
    iconKey: "utensils"
  },
  {
    slug: "ecommerce-local-sin-comisiones",
    title: "E-commerce Local sin comisiones",
    shortDescription: "Vende online sin marketplaces ni plataformas que se queden tu margen.",
    problem: "Depender de terceros reduce beneficios y limita el control de tu marca.",
    idealFor: "Ideal para tiendas locales de moda, alimentacion, regalos y productos especializados.",
    benefits: [
      "Tienda propia con imagen de marca",
      "Cobros directos en tu cuenta sin comisiones por venta",
      "Catalogo facil de gestionar por tu equipo",
      "Preparado para campañas y promociones locales"
    ],
    cta: "Quiero mi tienda online propia",
    iconKey: "store"
  },
  {
    slug: "sistema-reservas-citas",
    title: "Sistema de Reservas y Citas",
    shortDescription: "Automatiza agendas y reduce llamadas perdidas con reservas online 24/7.",
    problem: "Gestionar citas por telefono te hace perder tiempo y oportunidades de venta.",
    idealFor: "Ideal para peluquerias, centros de estetica, clinicas, estudios tattoo y entrenadores.",
    benefits: [
      "Agenda online siempre disponible",
      "Recordatorios automaticos para reducir no-shows",
      "Bloques y duraciones personalizables por servicio",
      "Mas orden operativo y mejor experiencia del cliente"
    ],
    cta: "Quiero automatizar mis citas",
    iconKey: "calendar"
  },
  {
    slug: "seo-local-totems-nfc",
    title: "SEO Local y Totems NFC",
    shortDescription: "Haz que te encuentren en Google Maps y consigue mas reseñas de calidad.",
    problem: "Si no apareces bien posicionado en tu zona, tus clientes van a la competencia.",
    idealFor: "Ideal para cualquier PYME local que quiera dominar su zona y atraer trafico cercano.",
    benefits: [
      "Optimizacion de ficha de Google Business Profile",
      "Estrategia para mejorar posicion en Maps",
      "Totems NFC para facilitar resenas en punto de venta",
      "Mas visibilidad local y mas confianza social"
    ],
    cta: "Quiero posicionarme primero en mi zona",
    iconKey: "map"
  }
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
