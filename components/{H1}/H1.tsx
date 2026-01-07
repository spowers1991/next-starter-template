"use client";

import { useRef } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { animationsHandler } from "@/lib/animations/animationsHandler";
import type { AnimationName } from "@/lib/animations/types/AnimationName";

interface H1Props {
  animations?: AnimationName[];
  children: React.ReactNode;
}

function H1( { animations, children } : H1Props ) {

  const { THEMES_activeTheme } = useThemes();

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <h1 ref={ref} className={`${THEMES_activeTheme.styles.h1}`} data-animate={animationsHandler(ref, animations)}>
      {children}
    </h1>
  );

};

export default H1;
