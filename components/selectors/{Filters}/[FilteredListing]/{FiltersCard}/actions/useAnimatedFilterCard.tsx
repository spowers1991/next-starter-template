"use client";

import { useEffect, useRef } from "react";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import { animateCard } from "../animations/animateCard";

export function useAnimatedFilterCard(index: number) {
  const { STATE_setShowAnimation, STATE_showAnimation } = useFilters();
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current || !STATE_showAnimation) return;

    const tl = animateCard(cardRef.current, index);

    return () => {
      tl.kill();
    };
  }, [STATE_showAnimation, index]);

  return { cardRef, STATE_setShowAnimation };
}