"use client";

import gsap from "gsap";
import { AnimationConfig } from "../types/AnimationConfig";

export const fadeUp = (element: HTMLDivElement, config: AnimationConfig): gsap.core.Timeline => {
  const index = config.index ?? 0;
  const delay = config.delay ?? 0;

  const tl = gsap.timeline({ delay: index * delay });

  tl.fromTo(
    element,
    { y: 10 },
    {
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    }
  );

  tl.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power1.out",
    },
    0
  );

  return tl;
};
