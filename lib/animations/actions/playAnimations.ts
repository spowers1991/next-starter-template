import type { AnimationsEntry } from "../types/AnimationsEntry";
import { animate } from "./animate";

export function playAnimations(entries: AnimationsEntry[]) {
  entries.forEach(entry => {
    entry.animations?.forEach(animation => {
      animate(
        entry.element,
        {
          ...animation,
          config: { ...animation.config, status: 'play' }
        }
      );
    });
  });
}
