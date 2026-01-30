import type { Animation } from "../types/Animation";
import { Animations } from "../Animations";
import { AnimationName } from "../types/AnimationName";

export function animationsFactory(element : HTMLDivElement | null, animation: Animation | null): void | gsap.core.Timeline | null {

  const animationName = animation?.name as AnimationName;

  switch (animationName) {
    case "text-reveal":
      return Animations.textReveal(element, animation?.config ?? {});
    case "fade-up":
      return Animations.fadeUp(element, animation?.config ?? {});
    case "fade-up-children":
      return Animations.fadeUpChildren(element, animation?.config ?? {}).timeline;

    default:
      throw new Error(`Unknown animation: ${animationName}`);
  }
}
