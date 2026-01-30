import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";
import type { Animation } from "../types/Animation";

export function useAnimationsRegistration(
  name: string,
  animations?: Animation[]
) {
  const pathname = removeLeadingSlash(usePathname());

  const { ANIMATIONS_register } = useAnimations();

  const ref = useRef<HTMLDivElement | null>(null);

  const registeredName = `${name}_${pathname}`;

  useEffect(() => {
    const element = ref.current;
    if (!element || !animations?.length) return;

    const animationsEntry = [
      {
        name: registeredName,
        element,
        animations,
      },
    ];
    console.log(animationsEntry)
    ANIMATIONS_register(animationsEntry);
  }, [registeredName, animations, ANIMATIONS_register]);

  return ref;
}
