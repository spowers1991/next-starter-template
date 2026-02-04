import type { AnimationsEntry } from "../types/AnimationsEntry";

export const ANIMATIONS_register = (
  prevEntries: AnimationsEntry[],
  entries: AnimationsEntry[]
): AnimationsEntry[] => {
  return [
    ...new Map(
      [...prevEntries, ...entries].map(entry => [entry.id, entry])
    ).values()
  ];
};
