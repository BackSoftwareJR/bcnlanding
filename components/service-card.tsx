"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Store, UtensilsCrossed, CalendarClock, MapPinned, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

const iconMap = {
  globe: Globe,
  utensils: UtensilsCrossed,
  store: Store,
  calendar: CalendarClock,
  map: MapPinned
};

const colorVariants = {
  globe: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    border: "group-hover:border-blue-200"
  },
  utensils: {
    bg: "bg-amber-50",
    icon: "bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
    border: "group-hover:border-amber-200"
  },
  store: {
    bg: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    border: "group-hover:border-emerald-200"
  },
  calendar: {
    bg: "bg-violet-50",
    icon: "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
    border: "group-hover:border-violet-200"
  },
  map: {
    bg: "bg-rose-50",
    icon: "bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
    border: "group-hover:border-rose-200"
  }
};

export function ServiceCard({ service }: Props) {
  const Icon = iconMap[service.iconKey];
  const colors = colorVariants[service.iconKey];

  return (
    <motion.div 
      whileHover={{ y: -6 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href={`/servicios/${service.slug}`}
        className={`group relative block h-full overflow-hidden rounded-2xl border border-primary-200/60 bg-white p-6 shadow-soft transition-all duration-300 ${colors.border} hover:shadow-soft-lg`}
      >
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 ${colors.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
        
        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <div className={`mb-5 inline-flex rounded-xl p-3 transition-all duration-300 ${colors.icon}`}>
            <Icon className="h-6 w-6" />
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-primary transition-colors group-hover:text-primary-800">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-primary-500 transition-colors group-hover:text-primary-600">
            {service.shortDescription}
          </p>

          {/* CTA */}
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-600">
            Ver detalles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
