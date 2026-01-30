import type { AnimationsEntry } from "../types/AnimationsEntry";
import type { AnimationConfig } from "../types/AnimationConfig";
import { animate } from "../actions/animate";

export const ANIMATIONS_update = (
  ANIMATIONS_entries: AnimationsEntry[],
  targets: { name: string; config?: AnimationConfig }[]
) => {
  ANIMATIONS_entries.forEach((ANIMATIONS_entry) => {
    targets.forEach(target => {
      if (ANIMATIONS_entry.name === target.name) {
        ANIMATIONS_entry.animations?.forEach((animation) => {
          animate(
            ANIMATIONS_entry.element,
            {
              ...animation,
              config: { ...animation.config, ...target.config }
            }
          );
        });
      }
    });
  });
};
