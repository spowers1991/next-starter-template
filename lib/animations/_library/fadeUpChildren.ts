"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export const fadeUpChildren = (
  element: HTMLDivElement | null,
  config: AnimationConfig,
) => {

  if (!element || element.children.length === 0) return

  const children = Array.from(element.children) as HTMLElement[];

  gsap.set(children, { opacity: 0, y: 30 });

  const tl = gsap.timeline({
    paused: false,
    defaults: {
      ease: "power2.out",
      duration: config.duration ?? 0.1,
    },
  });

  tl.to(children, {
    opacity: 1,
    y: 0,
    stagger: config.stagger ?? 0.1,
  });

  if (config?.status === 'restart') {
    tl.restart();
  } else {
    tl.play();
  }

  return tl
};

