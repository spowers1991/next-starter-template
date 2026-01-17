"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface ULProps {
  children?: React.ReactNode;
}

export default function UL({ children }: ULProps) {

  const { THEMES_activeTheme } = useThemes();
  
  return (
    <ul className={`${THEMES_activeTheme.styles.ul}`}>
      {children}
    </ul>
  )
}
