import { animationsFactory } from "../factory/animationsFactory";
import { Animation } from "../types/Animation";

export function animate(element : HTMLDivElement | null, animation: Animation | null): void {
  animationsFactory(element, animation)
}
