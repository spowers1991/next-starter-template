"use client"

import React, { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface SummaryProps {
  children:  ReactNode;
}

function Summary( { children } : SummaryProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <summary className={THEMES_activeTheme.styles.summary}>
      {children}
    </summary>
  );
}

export default Summary;
