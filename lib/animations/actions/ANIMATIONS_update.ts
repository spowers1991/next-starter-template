import type { AnimationsEntry } from "../types/AnimationsEntry";
import { animate } from "../actions/animate";
import { AnimationTarget } from "../types/AnimationTarget";

export const ANIMATIONS_update = (
  ANIMATIONS_entries: AnimationsEntry[],
  targets: AnimationTarget[]
) => {
  ANIMATIONS_entries.forEach((ANIMATIONS_entry) => {
    targets.forEach(target => {
      if (ANIMATIONS_entry.id === target.id) {
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
