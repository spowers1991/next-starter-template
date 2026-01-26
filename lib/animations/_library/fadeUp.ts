"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export const fadeUp = (
  element: HTMLDivElement | null,
  config: AnimationConfig
): gsap.core.Timeline => {

  const index = config.index ?? 0;
  const delay = config.delay ?? 0;

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
    }
  );

  return tl;
};