"use client";

import { useRef } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { useAnimations } from "@/lib/animations/hooks/useAnimations";
import type { AnimationName } from "@/lib/animations/types/AnimationName";

interface H2Props {
  animations?: AnimationName[] | undefined;
  children: React.ReactNode;
}

function H2( { animations, children } : H2Props ) {

  const { THEMES_activeTheme } = useThemes();

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <h2 className={`${THEMES_activeTheme.styles.h2}`} data-animate={useAnimations(ref, animations)}>
      {children}
    </h2>
  );
};

export default H2;
