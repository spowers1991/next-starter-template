"use client"

import { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { useP } from "./hooks/useP";

interface PProps {
  children: ReactNode;
  functions?: { name?: string; type?: string; handler?: () => void | unknown | undefined }[];
}

export default function P({ children, functions }: PProps) {
  const { THEMES_activeTheme } = useThemes();

  useP(functions);
  
  return (
    <p className={THEMES_activeTheme.styles.p}>
      {children}
    </p>
  );
}
