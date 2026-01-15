"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface MainProps {
  children: React.ReactNode;
}

function Main( { children } : MainProps ) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <main className={`${THEMES_activeTheme.styles.main}`}>
      {children}
    </main>
  );
};

export default Main;
