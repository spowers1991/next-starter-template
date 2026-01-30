import type { Animation } from "../types/Animation";

export interface AnimationsEntry {
  name: string;
  element: HTMLDivElement | null;
  animations: Animation[] | undefined;
}
