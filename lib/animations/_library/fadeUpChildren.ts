"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";

export const fadeUpChildren = (
  element: HTMLDivElement | null,
  config: AnimationConfig
): { timeline: gsap.core.Timeline | null; rerun: () => void } => {

  if (!element || element.children.length === 0) {
    return { timeline: null, rerun: () => {} };
  }


  const children = Array.from(element.children) as HTMLElement[];

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
    paused: true,
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
      duration: config.delay ?? 1,
      stagger: config.delay ?? 0.2,
    }
  );

  if (config.status === 'restart') {
    gsap.set(children, { opacity: 0, y: 30 });
    tl.restart(true);
  } else {
    tl.play();
  }

  return { 
    timeline: tl, 
    rerun: () => {
      gsap.set(children, { opacity: 0, y: 30 });
      tl.restart(true);
    }
  };
};