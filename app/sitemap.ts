import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const BASE_URL = "https://bcn.backsoftware.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => ({
    url: `${BASE_URL}/servicios/${service.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1
    },
    ...serviceRoutes
  ];
}
