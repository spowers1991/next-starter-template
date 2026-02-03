"use client";

import { useLayoutEffect, useRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { fadeUpChildren } from "@/lib/animations/_plugins/gsap/_library/fadeUpChildren";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { usePathname } from "next/navigation";

export interface AnimationRefHandle {
  restart: () => void;
}

interface UseAnimationsRefParams {
  id: string | null;
  children?: React.ReactNode;
}

export function useAnimationsRef(
  { id, children }: UseAnimationsRefParams,
  ref: React.ForwardedRef<AnimationRefHandle>
) {
  const { ANIMATIONS_register } = useAnimations();
  const pathname = removeLeadingSlash(usePathname());

  const animationId = `ANIMATION_${id}`;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // ▶️ Animate when children change
  useLayoutEffect(() => {
    fadeUpChildren(containerRef, tlRef);

    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [children]);

  // ▶️ Register once
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    ANIMATIONS_register([
      {
        id: animationId,
        element: containerRef.current,
        timeline: tlRef.current,
        pathname,
      },
    ]);
  }, [animationId]);

  // ▶️ Imperative API
  useImperativeHandle(ref, () => ({
    restart() {
      tlRef.current?.restart();
    },
  }));

  return containerRef;
}
