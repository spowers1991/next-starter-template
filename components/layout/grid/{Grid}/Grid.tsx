"use client";

import React, { forwardRef } from "react";
import type { GridConfig } from "./types/GridConfig";

const Grid = forwardRef<HTMLDivElement, GridConfig>(function Grid(
  { children, className = "", cols = 2, rows, gap = 4 },
  ref
) {
  const gridColsClass = `grid-cols-${cols}`;
  const gridRowsClass = rows ? `grid-rows-${rows}` : "";
  const gapClass = `gap-${gap}`;

  return (
    <div
      ref={ref}
      className={`grid ${gridColsClass} ${gridRowsClass} ${gapClass} ${className}`}
    >
      {children}
    </div>
  );
});

export default Grid;