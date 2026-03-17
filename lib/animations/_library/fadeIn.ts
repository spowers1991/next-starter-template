"use client";

import gsap from "gsap";
import type { AnimationConfig } from "../types/AnimationConfig";
import type { RefObject } from "react";

export const fadeIn = (
  element: RefObject<HTMLDivElement | null>,
  tlRef: RefObject<gsap.core.Timeline | null>,
  config: AnimationConfig = {}
): gsap.core.Timeline => {
  
  const delay = config.delay ?? 1;
  const duration = config.duration ?? 1;

  const tl = gsap.timeline();
  if (tlRef) {
    tlRef.current = tl;
  }
  
  tl.fromTo(
    element.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: duration,
      ease: "power2.out",
      delay: delay,
    }
  );

  if (config.status === 'restart') {
    tl.restart();
  } else {
    tl.play();
  }

  return tl;
};