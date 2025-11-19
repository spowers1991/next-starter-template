"use client";

import { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <body className={THEMES_activeTheme.styles.body}>
      {children}
    </body>
  );
}
