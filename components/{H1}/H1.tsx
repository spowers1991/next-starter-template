"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface H1Props {
  children: React.ReactNode;
}

function H1( { children } : H1Props ) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <h1 className={`${THEMES_activeTheme.styles.h1}`}>
      {children}
    </h1>
  );
};

export default H1;
