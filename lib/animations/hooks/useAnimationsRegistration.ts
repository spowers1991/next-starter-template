import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";
import type { Animation } from "../types/Animation";

export function useAnimationsRegistration(
  id: string | undefined,
  animations?: Animation[],
  componentName?: string,
) {

  const pathname = removeLeadingSlash(usePathname());

  const { ANIMATIONS_register } = useAnimations();

  const ref = useRef<HTMLDivElement | null>(null);

  const animationId = `ANIMATION_${id}`

  useEffect(() => {
    const element = ref.current;
    if (!element || !animations?.length) return;

    const animationsEntry = [
      {
        id: animationId,
        element,
        animations,
        pathname,
        component: componentName,
      },
    ];

    ANIMATIONS_register(animationsEntry);
  }, [id, animations]);

  return ref;
}
