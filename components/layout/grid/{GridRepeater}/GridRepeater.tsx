"use client";

import { getGridColsClass } from "./factories/gridClassesFactory";
import type { GridRepeaterConfig } from "./types/GridRepeaterConfig";

export default function GridRepeater<T>({
  items,
  renderItem,
  className = "",
  cols = 4,
  rows,
}: GridRepeaterConfig<T>) {
  const gridColsClass = getGridColsClass(cols);
  const gridRowsClass = rows ? `grid-rows-${rows}` : "";
  return (
    <div
      className={`grid ${gridColsClass} ${gridRowsClass} ${className}`}
    >
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}