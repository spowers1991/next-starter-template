import type { Animation } from "../types/Animation";
import { Animations } from "../Animations";
import { AnimationName } from "../types/AnimationName";

export function animationsFactory(element : HTMLDivElement | null, animation: Animation | null): void | gsap.core.Timeline | null | Animation[] {

  const animationName = animation?.name as AnimationName;
  
  switch (animationName) {
    case "textReveal":
      return Animations.text.reveal(element, animation?.config ?? {});
    case "fadeUp":
      return Animations.fadeUp(element, animation?.config ?? {});
    case "fadeUpChildren":
      return Animations.children.fadeUp(element, animation?.config ?? {});

    default:
      throw new Error(`Unknown animation: ${animationName}`);
  }
}