"use client";

import React from "react";
import type { GridConfig } from "./types/GridConfig";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";

type GridProps = GridConfig & {
  animations?: Animation[] | undefined;
};

function Grid({
  children,
  className = "",
  cols = 2,
  rows,
  gap = 4,
  animations,
}: GridProps) {


  const animationRef = useAnimationsRegistration('grid', animations);

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
