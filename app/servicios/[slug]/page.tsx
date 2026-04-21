import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { services, servicesBySlug } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    return {
      title: "Servicio no encontrado"
    };
  }

  return {
    title: `${service.title} | BCN Digital Local`,
    description: service.shortDescription
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) notFound();

  return <ServiceDetailLayout service={service} />;
}
