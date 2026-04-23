"use client";

import { useEffect } from "react";

const RELOAD_GUARD_KEY = "chunk-error-auto-reload";

function shouldHandleChunkError(input: unknown): boolean {
  const text =
    typeof input === "string"
      ? input
      : input instanceof Error
        ? `${input.name} ${input.message}`
        : "";

  return /ChunkLoadError|Loading chunk [\w-]+ failed|Failed to fetch dynamically imported module/i.test(text);
}

function reloadOnce() {
  if (typeof window === "undefined") {
    return;
  }

  const alreadyReloaded = sessionStorage.getItem(RELOAD_GUARD_KEY) === "1";
  if (alreadyReloaded) {
    sessionStorage.removeItem(RELOAD_GUARD_KEY);
    return;
  }

  sessionStorage.setItem(RELOAD_GUARD_KEY, "1");
  window.location.reload();
}

export function ChunkErrorReloader() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      if (shouldHandleChunkError(event.error ?? event.message)) {
        reloadOnce();
      }
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (shouldHandleChunkError(event.reason)) {
        reloadOnce();
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
