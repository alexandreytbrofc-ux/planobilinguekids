// Meta Pixel — Pixel ID 2400052707493255
// Inicialização única (código base oficial já dispara PageView).
// Guards de módulo evitam duplicação por Strict Mode / re-renders / SPA.

type Fbq = {
  (...args: unknown[]): void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: (...args: unknown[]) => void;
  callMethod?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export const META_PIXEL_ID = "2400052707493255";

let initialized = false;
let viewContentFired = false;

export function initMetaPixel(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true; // guarda imediata: nunca inicializa duas vezes

  if (window.fbq) return; // já existe — não duplicar

  const fbq = function (this: unknown, ...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as Fbq;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  if (!window._fbq) window._fbq = fbq;
  window.fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);

  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView"); // único PageView — parte do código base oficial
}

export function trackViewContent(): void {
  if (viewContentFired || typeof window === "undefined") return;
  viewContentFired = true; // 1 ViewContent por carregamento, mesmo com Strict Mode
  initMetaPixel();
  window.fbq?.("track", "ViewContent");
}

export function trackInitiateCheckout(): void {
  if (typeof window === "undefined") return;
  initMetaPixel();
  window.fbq?.("track", "InitiateCheckout");
}
