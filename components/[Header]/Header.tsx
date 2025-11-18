"use client";

import MainMenu from "./[MainMenu]/MainMenu"; 
import { useThemes } from "@/lib/themes/state/ThemeContext";

export default function Header() {
  const { THEMES_activeTheme } = useThemes();

  return (
    <header className={THEMES_activeTheme.styles.header}>
      <MainMenu />
    </header>
  );
}
