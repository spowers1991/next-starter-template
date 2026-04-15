import type { Animation } from "../types/Animation";
import type { AnimationName } from "../types/AnimationName";
import { Animations } from "../Animations";

export function animationsFactory(element : HTMLDivElement | null, animation: Animation | null): void | gsap.core.Timeline | null | Animation[] {
  if (!animation || !element) return;  
  const animationName = animation?.name as AnimationName;

  switch (animationName) {
    case "textReveal":
      return Animations.element.text.reveal(element, animation?.config ?? {});
  }
}