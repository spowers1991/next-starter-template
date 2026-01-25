import { AnimationName } from "./AnimationName";
import { AnimationConfig } from "./AnimationConfig";

export interface Animation {
  name: AnimationName;
  config?: AnimationConfig;
}