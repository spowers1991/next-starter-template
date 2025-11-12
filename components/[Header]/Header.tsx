"use client";

import MainMenu from "./[MainMenu]/MainMenu"; 
import theme from '@/themes/pantone2025.json'

export default function Header() {
  return (
    <header className={theme.styles.header}>
      <MainMenu />
    </header>
  );
}
