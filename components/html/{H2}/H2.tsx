"use client";

import { useThemes } from "@/lib/themes/state/ThemeContext";
import type { AnimationName } from "@/lib/animations/types/AnimationName";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";

interface H2Props {
  animations?: AnimationName[] | undefined;
  children: React.ReactNode;
}

function H2( { animations, children } : H2Props ) {

  const { THEMES_activeTheme } = useThemes();

  //const animationsRef = useAnimationsRegistration('h2', animations)

  return (
    <h2 className={`${THEMES_activeTheme.styles.h2}`}>
      {children}
    </h2>
  );
};

export default H2;
