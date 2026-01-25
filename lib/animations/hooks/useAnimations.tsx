"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import type { Animation } from "../types/Animation";
import { animate } from "../actions/animate";

export function useAnimations(
  ref: RefObject<HTMLDivElement | null>,
  animations: Animation[] | undefined
) {
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    animations?.forEach((animation) => {
      animate(element, animation)
    });

  }, [ref, animations]);
}
