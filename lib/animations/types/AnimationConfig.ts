import type { AnimationName } from "./AnimationName";

export interface AnimationConfig {
  name: AnimationName;
  duration?: string; // e.g., "0.5s"
  delay?: string;    // e.g., "0.2s"
}