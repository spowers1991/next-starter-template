import type { Animation } from "../types/Animation";

export interface AnimationsEntry {
  id: string | undefined,
  element: HTMLDivElement | null;
  animations: Animation[] | undefined;
  pathname?: string,
  component?: string,
}
