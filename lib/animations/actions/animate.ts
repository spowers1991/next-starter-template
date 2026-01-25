import { animationsFactory } from "../factory/animationsFactory";
import { Animation } from "../types/Animation";

export function animate(element : HTMLDivElement, animation: Animation): void {
  animationsFactory(element, animation)
}
