import { useEffect, useRef } from 'react';
import { usePathname } from "next/navigation";
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { useAnimations } from '@/lib/animations/state/AnimationContext';
import type { Animation } from '../types/Animation';

export function useAnimationsRegistration(
  name: string,
  animations: Animation[] | undefined
) {

  const pathname = removeLeadingSlash(usePathname());
  const idRef = useRef(crypto.randomUUID().slice(0, 5));

  const registeredName = `${idRef.current}_${name}_${pathname}`

  const { ANIMATIONS_register, ANIMATIONS_unregister } = useAnimations();
  const ref = useRef<HTMLDivElement  | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    ANIMATIONS_register(registeredName, element, animations);

    return () => {
      ANIMATIONS_unregister(registeredName);
    };
    // 👇 deliberately exclude `animations` and `ref.current`
  }, [name, ANIMATIONS_register, ANIMATIONS_unregister]);

  return ref;
}
