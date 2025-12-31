"use client"

import React, { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface DetailsProps {
  children:  ReactNode;
}

function Details( { children } : DetailsProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <details className={THEMES_activeTheme.styles.details}>
      {children}
    </details>
  );
}

export default Details;
