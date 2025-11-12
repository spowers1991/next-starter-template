"use client";

import React from "react";
import { useTheme } from "@/lib/themes/state/ThemeContext";

const ThemeSelector: React.FC = () => {
  const { theme, setThemeByName } = useTheme();

  return (
    <>
      <label htmlFor="theme-select" className={`${theme.styles.label}`}>
        Select Theme:
      </label>
      <select
        id="theme-select"
        onChange={(e) => setThemeByName(e.target.value)}
        className={`${theme.styles.select}`}
      >
        <option value="theme2025">Theme 2025</option>
        <option value="pantone2025">Pantone 2025</option>
        <option value="awardWinning2025">Award Winning 2025</option>
      </select>
    </>
  );
};

export default ThemeSelector;
