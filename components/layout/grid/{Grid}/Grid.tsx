"use client";

import type { GridConfig } from "./types/GridConfig";

export default function Grid({
  children,
  className = "",
  cols = 2,
  rows,
  gap = 4,
}: GridConfig) {
  const gridColsClass = `grid-cols-${cols}`;
  const gridRowsClass = rows ? `grid-rows-${rows}` : "";
  const gapClass = `gap-${gap}`;
  return (
    <div
      className={`grid ${gridColsClass} ${gridRowsClass} ${gapClass} ${className}`}
    >
      {children}
    </div>
  );
}
