import type { RefObject } from "react";
import { AnimationName } from "../types/AnimationName";
import { useAnimations } from "../hooks/useAnimations";

export function animationsHandler(
  ref: RefObject<HTMLElement>,
  animations?: AnimationName[]
) {
  if (!animations || animations.length === 0) return;

  useAnimations(ref, animations);
}
