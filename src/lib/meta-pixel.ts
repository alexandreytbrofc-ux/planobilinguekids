// Meta Pixel — Pixel ID 2400052707493255
// Inicialização única (código base oficial já dispara PageView).
// Guards de módulo evitam duplicação por Strict Mode / re-renders / SPA.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = "2400052707493255";

let initialized = false;
let viewContentFired = false;

export function initMetaPixel(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true; // guarda antes de tudo: nunca inicializa duas vezes

  if (window.fbq) return; // já existe (ex.: outro snippet), não duplicar

  const n = (window.fbq = function (...args: unknown[]) {
    const f = n as unknown as { queue: unknown[][]; push: (...a: unknown[]) => void; loaded?: boolean; version?: string };
    if (f.push === f) f.queue.push(args);
    else f.queue.push(args);
  } as unknown as (...args: unknown[]) => void);
  const f = n as unknown as { queue: unknown[][]; push: unknown; loaded: boolean; version: string };
  if (!window._fbq) window._fbq = n;
  f.push = n;
  f.loaded = true;
  f.version = "2.0";
  f.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView"); // único PageView — parte do código base oficial
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
