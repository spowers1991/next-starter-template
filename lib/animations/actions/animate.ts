import type { AnimationName } from "../types/AnimationName";
import { animationsFactory } from "../factory/animationsFactory";

export function animate(element : HTMLElement, animationName: AnimationName): void {
  animationsFactory(element, animationName)
}
