"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

function ThemeSelector() {
  const { 
    THEMES_themes, 
    THEMES_activeTheme, 
    THEMES_setThemeByName 
  } = useThemes();
  
  return (
    <>
      <label htmlFor="theme-select" className={`${THEMES_activeTheme.styles.label}`}>
        Select Theme:
      </label>
      <select
        id="theme-select"
        onChange={(e) => THEMES_setThemeByName(e.target.value)}
        className={`${THEMES_activeTheme.styles.select}`}
      >
        {THEMES_themes.map((theme, index) => ( 
          <option key={index} value={theme.name}>
            {theme.name.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
}

export default ThemeSelector;
