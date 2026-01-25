import type { Animation } from "../types/Animation";
import { Animations } from "../Animations";
import { AnimationName } from "../types/AnimationName";

export function animationsFactory(element : HTMLDivElement, animation: Animation): void | gsap.core.Timeline {

  const animationName = animation?.name as AnimationName;
  
  switch (animationName!) {
    case "text-reveal":
      return Animations.textReveal(element);
    case "fade-up":
      return Animations.fadeUp(element, animation?.config!);

    default:
      throw new Error(`Unknown animation: ${animationName}`);
  }
}
