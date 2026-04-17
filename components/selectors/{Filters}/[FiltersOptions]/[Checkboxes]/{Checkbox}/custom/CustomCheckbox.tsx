"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

function CustomCheckbox() {
  const { THEMES_activeTheme } = useThemes();

  return (
    THEMES_activeTheme.styles?.checkbox &&
      <div className={`${THEMES_activeTheme.styles.checkbox}`}></div>
  );
};

export default CustomCheckbox;
