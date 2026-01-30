"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export const fadeUp = (
  element: HTMLDivElement | HTMLDivElement[] | null,
  config: AnimationConfig
): gsap.core.Timeline => {
  const index = config.index ?? 1;
  const delay = config.delay ?? 1;
  const stagger = config.delay ?? 1;

  const tl = gsap.timeline();

  tl.fromTo(
    element,
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: index * delay,
      stagger: stagger > 0 ? stagger : undefined,
    }
  );

  if (config.status === 'restart') {
    tl.restart();
  } else {
    tl.play();
  }

  return tl;
};