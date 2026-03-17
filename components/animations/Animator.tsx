"use client";

import React, { forwardRef } from "react";
import type { Animation } from "@/lib/animations/types/Animation";
import { useTimelineAnimationsRef } from "@/lib/animations/hooks/useTimelineAnimationsRef";

export interface AnimatorHandle {
  restart: () => void;
}

interface AnimatorProps {
  id: string | null;
  animations : Animation[];
  children: React.ReactNode;
  classNames?: string;
}

const Animator = forwardRef<AnimatorHandle, AnimatorProps>(
  ({ id, children, animations, classNames }, ref) => {
    const containerRef = useTimelineAnimationsRef(
      { id, children, animations },
      ref
    );

    return (
      <div className="grid grid-cols-3 gap-4" ref={containerRef}>
        {children}
      </div>
    );
  }
);

Animator.displayName = "Animator";
export default Animator;
