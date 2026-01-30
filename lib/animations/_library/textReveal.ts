import { gsap } from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export function textReveal(element: HTMLDivElement | null, config?: AnimationConfig) {
  if (!element) return;

  if (config?.status === 'restart') {
    let text = '';
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'SPAN') {
        text += (node as HTMLElement).textContent || '';
      } else if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent || '';
      }
    });
    element.textContent = text;
  }

  const text = element.textContent || "";
  element.textContent = "";

  const letters = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // preserve spaces
    span.style.opacity = "0";
    element.appendChild(span);
    return span;
  });

  gsap.to(letters, {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.05,
  });
}
