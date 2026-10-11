// Tiny event-based toast bus — no dependency needed.
const EVENT = "portfolio:toast";

export const showToast = (message) => {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: message }));
};

export const TOAST_EVENT = EVENT;

export const copyText = async (text, message = "Copied to clipboard") => {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast("Couldn't copy — please copy it manually");
  }
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export const isMac = () =>
  typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
