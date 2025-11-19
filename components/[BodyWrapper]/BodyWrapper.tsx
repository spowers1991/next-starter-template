"use client";

import { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface BodyWrapperProps {
  children: ReactNode;
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <div className={THEMES_activeTheme.styles.body}>
      {children}
    </div>
  );
}
