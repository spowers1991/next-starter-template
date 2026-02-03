"use client";

import React, {
  forwardRef,
} from "react";
import { useAnimationsRef } from "@/lib/animations/hooks/useAnimationsRef";
import { AnimationConfig } from "@/lib/animations/types/AnimationConfig";

export interface AnimatorHandle {
  restart: () => void;
}

interface AnimatorProps {
  id: string | null,
  children: React.ReactNode;
  config: AnimationConfig;
}

const Animator = forwardRef<AnimatorHandle, AnimatorProps>(
  ({ id, children, config }, ref) => {
    const containerRef = useAnimationsRef(id, ref);

    return (
      <div className="grid grid-cols-3 gap-4" ref={containerRef}>
        {children}
      </div>
    );
  }
);

export default Animator;

