"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export const fadeUpChildren = (
  element: HTMLDivElement | null,
  config: AnimationConfig
): gsap.core.Timeline | null => {

  if (!element || element.children.length === 0) return null;

  const children = Array.from(
    element.children
  ) as HTMLElement[];

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.fromTo(
    children,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: config.delay ?? 0.6,
      stagger: config.delay ?? 2,
      //delay: config.delay ?? 0,
    }
  );

  return tl;
};
