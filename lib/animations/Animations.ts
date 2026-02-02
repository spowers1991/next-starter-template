import { fadeUp } from "./_library/fadeUp";
import { fadeUpChildren } from "./_library/fadeUpChildren";
import { textReveal } from "./_library/textReveal";

export const Animations = {
  text: {
    reveal: textReveal,
  },
  fadeUp,
  children: {
    fadeUp: fadeUpChildren,
  },
} as const;
