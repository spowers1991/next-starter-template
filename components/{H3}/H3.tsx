"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface H3Props {
  children: React.ReactNode;
}

function H3( { children } : H3Props ) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <h3 className={`${THEMES_activeTheme.styles.h3}`}>
      {children}
    </h3>
  );
};

export default H3;
