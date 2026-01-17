"use client"

import { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface PProps {
  children: ReactNode;
}

export default function P({ children }: PProps) {
const {THEMES_activeTheme} = useThemes();

  return (
    <p className={THEMES_activeTheme.styles.p}>
      {children}
    </p>
  );
}
