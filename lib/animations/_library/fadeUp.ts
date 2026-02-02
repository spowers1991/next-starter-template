"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export const fadeUp = (
  element: HTMLDivElement | HTMLDivElement[] | null,
  config: AnimationConfig
): gsap.core.Timeline => {
  
  const delay = config.delay ?? 1;
  const duration = config.duration ?? 1;
  const stagger = config.stagger ?? 1;

  const tl = gsap.timeline();
  
  tl.fromTo(
    element,
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      ease: "power2.out",
      delay: delay,
      stagger: stagger,
    }
  );

  if (config.status === 'restart') {
    tl.restart();
  } else {
    tl.play();
  }

  return tl;
};