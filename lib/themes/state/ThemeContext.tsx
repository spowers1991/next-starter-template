"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Theme } from "../types/Theme";
import type { ThemeStyles } from "../types/ThemeStyles";
import { setThemeStyles as ACTIONS_setThemeStyles } from "../actions/set/setThemeStyles";

import ThemeArray, { Themes } from "@/themes/Themes"; // built-in themes

interface ThemeContextType {
  THEMES_themes: Theme[];
  THEMES_activeTheme: Theme;
  THEMES_registerThemes: (themes: Theme[]) => void;
  THEMES_setThemeByName: (name: string) => void;
  THEMES_setThemeStyles: (styles: Partial<ThemeStyles>, themeIdOrName?: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  THEMES_themes: [],
  THEMES_activeTheme: ThemeArray[0],
  THEMES_registerThemes: () => {},
  THEMES_setThemeByName: () => {},
  THEMES_setThemeStyles: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
  themes?: Theme[]; // optional external themes
}

export const ThemeProvider = ({ children, themes = [] }: ThemeProviderProps) => {
  // 1. Default active theme
  const [THEMES_activeTheme, THEMES_setTheme] = useState<Theme>(ThemeArray[0]);

  // 2. Registered themes (built-in + optional prop themes)
  const [THEMES_themes, THEMES_setThemes] = useState<Theme[]>([...themes]);

  // 3. Register additional themes dynamically
  const THEMES_registerThemes = (newThemes: Theme[]) => {
    THEMES_setThemes((prev) => [...prev, ...newThemes]);
  };

  // 4. Switch theme by name using filter
  const THEMES_setThemeByName = (name: string) => {
    // Check built-in Themes record first
    if (Themes[name]) {
     // THEMES_setTheme(Themes[name]);
      return;
    }

    // Check registered themes
    const matched = THEMES_themes.filter((t) => t.name === name);
    if (matched.length > 0) {
      THEMES_setTheme(matched[0]);
    }
  };

  const THEMES_setThemeStyles = (styles: Partial<ThemeStyles>, themeIdOrName?: string) => {
    const { updatedTheme, updatedThemes } = ACTIONS_setThemeStyles({
      styles,
      themeIdOrName,
      activeTheme: THEMES_activeTheme,
      themes: THEMES_themes,
    });
    THEMES_setTheme(updatedTheme);
    THEMES_setThemes(updatedThemes);
  };

  return (
    <ThemeContext.Provider
      value={{
        THEMES_themes,
        THEMES_activeTheme,
        THEMES_registerThemes,
        THEMES_setThemeByName,
        THEMES_setThemeStyles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemes = (): ThemeContextType => useContext(ThemeContext);
