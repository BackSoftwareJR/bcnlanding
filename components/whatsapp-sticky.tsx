"use client";

import { motion } from "framer-motion";

export function WhatsAppSticky() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.2 }}
      href="https://wa.me/393513052627"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-soft"
    >
      WhatsApp
    </motion.a>
  );
}
