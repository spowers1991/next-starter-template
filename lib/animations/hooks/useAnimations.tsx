"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import type { AnimationName } from "@/lib/animations/types/AnimationName";
import { animate } from "../actions/animate";

export function useAnimations(
  ref: RefObject<HTMLElement>,
  animationNames: AnimationName[]
) {
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    animationNames.forEach((animationName) => {
      animate(element, animationName)
    });

  }, [ref, animationNames]);
}
