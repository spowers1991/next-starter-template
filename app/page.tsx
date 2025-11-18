"use client"; 

import { useThemes } from "@/lib/themes/state/ThemeContext";
import TextReveal from "@/components/[TextReveal]/TextReveal";
import ThemeSelector from "@/components/[ThemeSelector]/ThemeSelector";

export default function Page() {
  const { THEMES_activeTheme } = useThemes();

  return (
    <main className={`${THEMES_activeTheme.styles.main}`}>

      <ThemeSelector/>
      
      <h1 className={`${THEMES_activeTheme.styles.h1}`}>
        <TextReveal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </TextReveal>
      </h1>

    </main>
  );
}
