import { shallowEqual } from "../../../utils/arrays/shallowEqual";
import type { Theme } from "../../types/Theme";
import type { ThemeStyles } from "../../types/ThemeStyles";

/**
 * Updates theme styles for a specific theme or the active theme.
 * Returns an object with updated theme and themes array.
 */
export function setThemeStyles({
  styles,
  themeIdOrName,
  activeTheme,
  themes
}: {
  styles: Partial<ThemeStyles>,
  themeIdOrName?: string,
  activeTheme: Theme,
  themes: Theme[],
}): { updatedTheme: Theme, updatedThemes: Theme[] } {
  function mergeThemeStyles(theme: Theme, styles: Partial<ThemeStyles>): Theme {
    return {
      ...theme,
      styles: {
        ...theme.styles,
        ...styles,
      },
    };
  }

  let updatedTheme = activeTheme;
  let updatedThemes = themes;

  if (!themeIdOrName) {
    const merged = mergeThemeStyles(activeTheme, styles);
    updatedTheme = shallowEqual(activeTheme.styles, merged.styles) ? activeTheme : merged;
    return { updatedTheme, updatedThemes };
  }

  updatedThemes = themes.map((theme) => {
    if (theme.id === themeIdOrName || theme.name === themeIdOrName) {
      const merged = mergeThemeStyles(theme, styles);
      if (shallowEqual(theme.styles, merged.styles)) return theme;
      if (theme.id === activeTheme.id) updatedTheme = merged;
      return merged;
    }
    return theme;
  });

  return { updatedTheme, updatedThemes };
}
