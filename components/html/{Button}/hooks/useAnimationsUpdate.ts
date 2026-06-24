import { useAnimations } from "@/lib/animations/state/AnimationsContext";

export function useAnimationsUpdate() {
  const { ANIMATIONS_update } = useAnimations();
  return ANIMATIONS_update;
}
