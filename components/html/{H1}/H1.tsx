"use client";

import { useRef } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { useAnimations } from "@/lib/animations/hooks/useAnimations";
import type { Animation } from "@/lib/animations/types/Animation";

interface H1Props {
  animations?: Animation[] | undefined,
  children: React.ReactNode
}

function H1( { animations, children } : H1Props ) {

  const { THEMES_activeTheme } = useThemes();

  const ref = useRef<HTMLDivElement | null>(null);

  useAnimations(ref, animations)

  return (
    <h1 ref={ref} className={`${THEMES_activeTheme.styles.h1}`}>
      {children}
    </h1>
  );

};

export default H1;
