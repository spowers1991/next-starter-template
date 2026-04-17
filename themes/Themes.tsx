import materialJSON from "@/themes/json_configs/material.json"
import themeAuroraJSON from "@/themes/json_configs/themeAurora.json"
import themeEmberJSON from "@/themes/json_configs/themeEmber.json"
import themeEmeraldJSON from "@/themes/json_configs/themeEmerald.json"
import themeVioletJSON from "@/themes/json_configs/themeViolet.json"
import themeCoralJSON from "@/themes/json_configs/themeCoral.json"

import type { Theme } from "@/lib/themes/types/Theme";

export const materialTheme = materialJSON as Theme;
export const themeAurora = themeAuroraJSON as Theme;
export const themeEmber = themeEmberJSON as Theme;
export const themeEmerald = themeEmeraldJSON as Theme;
export const themeViolet = themeVioletJSON as Theme;
export const themeCoral = themeCoralJSON as Theme;

export const Themes: Record<string, Theme> = {
  materialTheme,
  themeAurora,
  themeEmber,
  themeEmerald,
  themeViolet,
  themeCoral
};

export const ThemeArray: Theme[] = Object.values(Themes);

export default ThemeArray;
