"use client";

import { useLayoutEffect, useRef, useImperativeHandle } from "react";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { usePathname } from "next/navigation";
import { animateTimeline } from "../actions/animateTimeline";
import type { Animation } from "../types/Animation";

export interface AnimationRefHandle {
  restart: () => void;
}

interface UseTimelineAnimationsRefParams {
  id: string | null;
  children?: React.ReactNode;
  animations?: Animation[]; // Adjust this type based on your actual animation config
}

export function useTimelineAnimationsRef(
  { id, children, animations }: UseTimelineAnimationsRefParams,
  ref: React.ForwardedRef<AnimationRefHandle>
) {
  const { ANIMATIONS_register } = useAnimations();
  const pathname = removeLeadingSlash(usePathname());

  const animationId = `ANIMATION_${id}`;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  // ▶️ Animate when children change
  useLayoutEffect(() => {
    if(!containerRef.current || !animations || animations.length === 0) return;
    animations.forEach(animation => {
       animateTimeline( containerRef , tlRef, animation);
    });

    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [children, animations]);

  // ▶️ Register once
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    ANIMATIONS_register([
      {
        id: animationId,
        element: containerRef.current,
        containerRef,
        animations,
        timeline: tlRef,
        pathname,
      },
    ]);
  }, [animationId, pathname, animations, ANIMATIONS_register]);

  // ▶️ Imperative API
  useImperativeHandle(ref, () => ({
    restart() {
      tlRef.current?.restart();
    },
  }));

  return containerRef;
}
