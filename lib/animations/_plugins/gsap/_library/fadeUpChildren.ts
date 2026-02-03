import { RefObject } from "react";
import gsap from "gsap";

export function fadeUpChildren(
  containerRef: RefObject<HTMLDivElement | null>,
  tlRef: RefObject<gsap.core.Timeline | null>
) {
  const container = containerRef.current;
  if (!container) return;

  const elements = Array.from(container.children) as HTMLElement[];
  if (!elements.length) return;

  // Kill previous timeline safely
  tlRef.current?.kill();

  tlRef.current = gsap.timeline().fromTo(
    elements,
    { opacity: 0, y: 15 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }
  );
}

