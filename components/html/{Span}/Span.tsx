"use client"

import { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface SpanProps {
  children: ReactNode;
}

export default function Span({ children }: SpanProps) {
const { THEMES_activeTheme } = useThemes();

  return (
    <span className={THEMES_activeTheme.styles.span}>
      {children}
    </span>
  );
}
