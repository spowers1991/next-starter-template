import { RefObject } from "react";
import type { Animation } from "../types/Animation";

export interface AnimationsEntry {
  id: string | undefined,
  element: HTMLDivElement | null;
  containerRef?: RefObject<HTMLDivElement | null>;
  timeline?: RefObject<gsap.core.Timeline | null>
  animations?: Animation[] | undefined;
  pathname?: string,
  component?: string,
}
