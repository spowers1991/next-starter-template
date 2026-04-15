import { fadeIn } from "./_library/fadeIn";
import { fadeUpChildren } from "./_plugins/gsap/_library/fadeUpChildren";
import { textReveal } from "./_library/textReveal";

export const Animations = {
  element: {
    fadeIn,
    text: {
      reveal: textReveal,
    },
  },
  timelines: {
    fadeUpChildren: fadeUpChildren,
  },
} as const;
