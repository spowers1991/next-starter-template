import type { Theme } from "@/lib/themes/types/Theme";

import theme2025 from "@/themes/json_configs/theme2025.json";
import theme2025Warm from "@/themes/json_configs/theme2025Warm.json";

export const Themes: Record<string, Theme> = {
  theme2025,
  theme2025Warm,
};

export const ThemeArray: Theme[] = Object.values(Themes);

export default ThemeArray;
