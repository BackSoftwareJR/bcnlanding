"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export function WhatsAppSticky() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const messages = [
    "Hola! Como podemos ayudarte?",
    "Consultanos sin compromiso",
    "Respuesta en menos de 1h"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Expanded Card */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 w-72 overflow-hidden rounded-2xl bg-white shadow-soft-xl"
              >
                {/* Header */}
                <div className="bg-emerald-500 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">BCN Digital Local</p>
                        <p className="text-xs text-emerald-100">Normalmente responde en 1h</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="rounded-lg p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="bg-[#E5DDD5] p-4">
                  <div className="space-y-2">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm text-primary shadow-sm"
                      >
                        {message}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-primary-100 p-4">
                  <a
                    href="https://wa.me/393513052627"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-emerald-600 hover:shadow-glow-emerald"
                  >
                    <Send className="h-4 w-4" />
                    Iniciar conversacion
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft-lg transition-all hover:bg-emerald-600 hover:shadow-glow-emerald"
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse animation */}
            {!isExpanded && (
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400 opacity-30" />
            )}
          </motion.button>

          {/* Tooltip */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 right-full mr-3 hidden whitespace-nowrap rounded-lg bg-primary-900 px-3 py-2 text-xs font-medium text-white shadow-soft lg:block"
            >
              Necesitas ayuda?
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-primary-900" />
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
