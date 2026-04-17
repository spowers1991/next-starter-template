"use client"

import { ReactNode} from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface HtmlProps {
  children: ReactNode;
}

export default function Html({ children }: HtmlProps) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <html lang="en" style={{ fontFamily: THEMES_activeTheme.font }}>
      {children}
    </html>
  );
}
