"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Theme } from "../types/Theme";
import theme2025 from "@/themes/theme2025.json";
import pantone2025 from "@/themes/pantone2025.json";
import awardWinning2025 from "@/themes/awardWinning2025.json";

interface ThemeContextType {
  theme: Theme;
  setThemeByName: (name: string) => void;
  toggleTheme: () => void;
}

const themes: Record<string, Theme> = {
  theme2025,
  pantone2025,
  awardWinning2025,
};

const ThemeContext = createContext<ThemeContextType>({
  theme: theme2025 as Theme,
  toggleTheme: () => {},
  setThemeByName: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(theme2025 as Theme);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === theme2025 ? pantone2025 : prev === pantone2025 ? awardWinning2025 : theme2025
    );
  };

  const setThemeByName = (name: string) => {
    if (themes[name]) {
      setTheme(themes[name]);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
