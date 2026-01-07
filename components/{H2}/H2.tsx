"use client";

import { useRef } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { animationsHandler } from "@/lib/animations/animationsHandler";
import type { AnimationName } from "@/lib/animations/types/AnimationName";

interface H2Props {
  animations?: AnimationName[];
  children: React.ReactNode;
}

function H2( { animations, children } : H2Props ) {

  const { THEMES_activeTheme } = useThemes();

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <h2 className={`${THEMES_activeTheme.styles.h2}`} data-animate={animationsHandler(ref, animations)}>
      {children}
    </h2>
  );
};

export default H2;
