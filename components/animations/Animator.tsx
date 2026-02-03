"use client";

import React, { forwardRef } from "react";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimationsRef } from "@/lib/animations/hooks/useAnimationsRef";

export interface AnimatorHandle {
  restart: () => void;
}

interface AnimatorProps {
  id: string | null;
  animations : Animation[];
  children: React.ReactNode;
}

const Animator = forwardRef<AnimatorHandle, AnimatorProps>(
  ({ id, children }, ref) => {
    const containerRef = useAnimationsRef(
      { id, children },
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
