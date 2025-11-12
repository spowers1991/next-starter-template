"use client"; 

import { useTheme } from "@/lib/themes/state/ThemeContext";
import TextReveal from "@/components/[TextReveal]/TextReveal";
import Button from "@/components/[Button]/Button";
import ThemeSelector from "@/components/[ThemeSelector]/ThemeSelector";

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`${theme.styles.main}`}>

      <ThemeSelector/>
      
      <h1 className={`${theme.styles.h1}`}>
        <TextReveal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </TextReveal>
      </h1>

      <Button styles={theme.styles} onClick={toggleTheme}>
        Toggle Theme
      </Button>   

    </main>
  );
}
