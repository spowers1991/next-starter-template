"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface LIProps {
  children?: React.ReactNode;
}

export default function LI({ children }: LIProps) {

  const { THEMES_activeTheme } = useThemes();
  
  return (
    <li className={`${THEMES_activeTheme.styles.li}`}>
      {children}
    </li>
  );
}
