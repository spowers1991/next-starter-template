"use client";

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface SectionProps {
  children: React.ReactNode;
}

function Section( { children } : SectionProps ) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <section className={`${THEMES_activeTheme.styles.section}`}>
      {children}
    </section>
  );
};

export default Section;
