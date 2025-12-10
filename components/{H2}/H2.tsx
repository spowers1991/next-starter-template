"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface H1Props {
  children: React.ReactNode;
}

function H2( { children } : H1Props ) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <h2 className={`${THEMES_activeTheme.styles.h2}`}>
      {children}
    </h2>
  );
};

export default H2;
