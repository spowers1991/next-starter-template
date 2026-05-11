import { useThemes } from "@/lib/themes/state/ThemeContext";

export function useStyles(styles: { p: string }, themeName: string) {
  const { THEMES_setThemeStyles } = useThemes();
  THEMES_setThemeStyles(styles, themeName);
}