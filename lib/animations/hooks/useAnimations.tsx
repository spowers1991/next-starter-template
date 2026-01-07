"use client";

import { useEffect } from "react";
import { AnimationName } from "../types/AnimationName";
import { textReveal } from "@/lib/animations/{textReveal}/textReveal";

export function useAnimations(
  ref: React.RefObject<HTMLElement>,
  animations: AnimationName[]
) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    console.log(animations)
    animations.map((letter, letterIndex) => (
      textReveal(element)
    ))
    //textReveal(element)

  }, [ref, animations]);
}
