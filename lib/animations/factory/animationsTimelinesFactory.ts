import type { Animation } from "../types/Animation";
import type { RefObject } from "react";
import type { AnimationName } from "../types/AnimationName";
import type { AnimationConfig } from "../types/AnimationConfig";
import { Animations } from "../Animations";

export function animationsTimelinesFactory(containerRef : RefObject<HTMLDivElement | null>, tlRef: RefObject<gsap.core.Timeline | null>, animation?: Animation): void | gsap.core.Timeline | null | Animation {
    if (!animation) return;
    const animationName = animation?.name as AnimationName;  
    const animationConfig = animation?.config as AnimationConfig | undefined;
    
    switch (animationName) {
        case "fadeIn":
            return Animations.element.fadeIn(containerRef, tlRef, animationConfig);
        case "fadeUpChildren":
            return Animations.timelines.fadeUpChildren(containerRef, tlRef, animationConfig);
        default:
        throw new Error(`Unknown animation: ${animationName}`);
    }                                                                                                  
    
}