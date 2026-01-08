import { gsap } from "gsap";

export function textReveal(element: HTMLElement | null) {
  if (!element) return;

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
