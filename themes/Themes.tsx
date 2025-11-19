import type { Theme } from "@/lib/themes/types/Theme";

import theme2025 from "@/themes/json-configs/theme2025.json";
import pantone2025 from "@/themes/json-configs/pantone2025.json";
import awardWinning2025 from "@/themes/json-configs/awardWinning2025.json";
import midnightNeon from "@/themes/json-configs/midnightNeon.json";
import greenPastol from "@/themes/json-configs/greenPastol.json";

export const Themes: Record<string, Theme> = {
  theme2025,
  pantone2025,
  awardWinning2025,
  midnightNeon,
  greenPastol,
};

export const ThemeArray: Theme[] = Object.values(Themes);

export default ThemeArray;
