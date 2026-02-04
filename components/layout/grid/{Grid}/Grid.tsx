"use client";

import React from "react";
import type { GridConfig } from "./types/GridConfig";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";

type GridProps = GridConfig & {
  id?: string | undefined;
  animations?: Animation[] | undefined;
};

function Grid({
  id,
  children,
  className = "",
  cols = 2,
  rows,
  gap = 4,
  animations,
}: GridProps) {


  const componentName = `<Grid/>`;
  const animationRef = useAnimationsRegistration(id, animations, componentName);

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