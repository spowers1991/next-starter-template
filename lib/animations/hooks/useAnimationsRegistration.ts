import { useEffect, useRef } from 'react';
import { useAnimations } from '@/lib/animations/state/AnimationContext';
import type { Animation } from '../types/Animation';

export function useAnimationsRegistration(
  name: string,
  animations: Animation[]
) {
  const { ANIMATIONS_register, ANIMATIONS_unregister } = useAnimations();
  const ref = useRef<HTMLDivElement  | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    ANIMATIONS_register(name, element, animations);

    return () => {
      ANIMATIONS_unregister(name);
    };
    // 👇 deliberately exclude `animations` and `ref.current`
  }, [name, ANIMATIONS_register, ANIMATIONS_unregister]);

  return ref;
}
