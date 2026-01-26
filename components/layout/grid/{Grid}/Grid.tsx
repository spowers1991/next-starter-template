"use client";

import React, { useRef } from "react";
import type { GridConfig } from "./types/GridConfig";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimations } from "@/lib/animations/hooks/useAnimations";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";

type GridProps = GridConfig & {
  animations?: Animation[];
};

function Grid({
  children,
  className = "",
  cols = 2,
  rows,
  gap = 4,
  animations,
}: GridProps) {


  const animationRef = useAnimationsRegistration(
    'Movies.MoviesFilters.fadeUp',
    [{ name: 'fade-up-children', config: { delay: 0.2 } }]
  );

  //const ref = useRef<HTMLDivElement | null>(null);

  //useAnimations(animationRef, animations);

  const gridColsClass = `grid-cols-${cols}`;
  const gridRowsClass = rows ? `grid-rows-${rows}` : "";
  const gapClass = `gap-${gap}`;

  return (
    <div
      ref={animationRef}
      className={`grid ${gridColsClass} ${gridRowsClass} ${gapClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default Grid;
