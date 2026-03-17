import type { AnimationsEntry } from "../types/AnimationsEntry";
import type { AnimationTarget } from "../types/AnimationTarget";
import { animate } from "../actions/animate";
import { animateTimeline } from "../actions/animateTimeline";

export const ANIMATIONS_update = (
  ANIMATIONS_entries: AnimationsEntry[],
  targets: AnimationTarget[]
) => {
            console.log(ANIMATIONS_entries, targets);
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
          animateTimeline(
            ANIMATIONS_entry.containerRef,
            ANIMATIONS_entry.timeline,
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
