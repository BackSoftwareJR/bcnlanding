"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Store, UtensilsCrossed, CalendarClock, MapPinned } from "lucide-react";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  const iconMap = {
    globe: Globe,
    utensils: UtensilsCrossed,
    store: Store,
    calendar: CalendarClock,
    map: MapPinned
  };
  const Icon = iconMap[service.iconKey];

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/servicios/${service.slug}`}
        className="group block rounded-xl2 border border-slate-200 bg-white p-6 shadow-soft transition hover:border-primary/30"
      >
        <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-primary-soft">{service.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>
      </Link>
    </motion.div>
  );
}
