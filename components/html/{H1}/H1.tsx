"use client";

import { useThemes } from "@/lib/themes/state/ThemeContext";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";

interface H1Props {
  animations?: Animation[] | undefined,
  children: React.ReactNode,
}

export default function H1({ animations, children }: H1Props) {

  const { THEMES_activeTheme } = useThemes();
  
  const animationRef = useAnimationsRegistration('h1', animations);

  return (
    <h1
      ref={animationRef}
      className={THEMES_activeTheme.styles.h1}
    >
      {children}
    </h1>
  );
}
