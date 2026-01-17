import { Animations } from "../Animations";
import type { AnimationName } from "../types/AnimationName";

export function animationsFactory(element : HTMLElement, animationName: AnimationName): void {
  switch (animationName) {
    case "text-reveal":
      return Animations.textReveal(element);

    default:
      throw new Error(`Unknown animation: ${animationName}`);
  }
}
