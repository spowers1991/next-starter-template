"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Theme } from "../types/Theme";

import ThemeArray, { Themes } from "@/themes/Themes"; // built-in themes

interface ThemeContextType {
  THEMES_themes: Theme[];
  THEMES_activeTheme: Theme;
  THEMES_registerThemes: (themes: Theme[]) => void;
  THEMES_setThemeByName: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  THEMES_themes: [],
  THEMES_activeTheme: ThemeArray[0],
  THEMES_registerThemes: () => {},
  THEMES_setThemeByName: () => {},
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

  return (
    <ThemeContext.Provider
      value={{
        THEMES_themes,
        THEMES_activeTheme,
        THEMES_registerThemes,
        THEMES_setThemeByName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemes = (): ThemeContextType => useContext(ThemeContext);
