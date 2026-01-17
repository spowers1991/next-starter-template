import theme2025Json from "@/themes/json_configs/theme2025.json";
import theme2025WarmJson from "@/themes/json_configs/theme2025Warm.json";
import theme2026Json from "@/themes/json_configs/theme2026.json"
import midnightEmberJson from "@/themes/json_configs/midnightEmber.json"

import type { Theme } from "@/lib/themes/types/Theme";

export const theme2025 = theme2025Json as Theme;
export const theme2025Warm = theme2025WarmJson as Theme;
export const theme2026 = theme2026Json as Theme;
export const midnightEmber = midnightEmberJson as Theme;

export const Themes: Record<string, Theme> = {
  theme2025,
  theme2025Warm,
  theme2026,
  midnightEmber
};

export const ThemeArray: Theme[] = Object.values(Themes);

export default ThemeArray;
