import theme2025JSON from "@/themes/json_configs/theme2025.json";
import theme2025WarmJSON from "@/themes/json_configs/theme2025Warm.json";
import theme2026JSON from "@/themes/json_configs/theme2026.json"
import midnightEmberJSON from "@/themes/json_configs/midnightEmber.json"
import neoSlateModernJSON from "@/themes/json_configs/neoSlateModern.json"
import material from "@/themes/json_configs/material.json"

import type { Theme } from "@/lib/themes/types/Theme";

export const theme2025 = theme2025JSON as Theme;
export const theme2025Warm = theme2025WarmJSON as Theme;
export const theme2026 = theme2026JSON as Theme;
export const midnightEmber = midnightEmberJSON as Theme;
export const neoSlateModern = neoSlateModernJSON as Theme;
export const materialTheme = material as Theme;

export const Themes: Record<string, Theme> = {
  materialTheme,
  theme2025,
  theme2025Warm,
  theme2026,
  midnightEmber,
  neoSlateModern,
};

export const ThemeArray: Theme[] = Object.values(Themes);

export default ThemeArray;
