import { animationsTimelinesFactory } from "../factory/animationsTimelinesFactory";
import type { RefObject } from "react";
import type { Animation } from "../types/Animation";

export function animateTimeline(
  containerRef?: RefObject<HTMLDivElement | null>,
  tlRef?: RefObject<gsap.core.Timeline | null>,
  animation?: Animation | undefined
): void {
    if (containerRef && tlRef) {
      animationsTimelinesFactory(containerRef, tlRef, animation);
    }
}
