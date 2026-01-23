"use client";

import { getFlexBasisClass } from "./factories/flexClassesFactory";
import type { FlexRepeaterConfig } from "./type/FlexRepeaterConfig";

export default function FlexRepeater<T>({
  items,
  renderItem,
  className = "",
  direction = "row",
  wrap = true,
  cols = 2,
}: FlexRepeaterConfig<T>) {
  const flexDirectionClass = `flex-${direction}`;
  const flexWrapClass = wrap ? "flex-wrap" : "";
  const basisClass = getFlexBasisClass(cols);
  return (
    <div
      className={`flex ${flexDirectionClass} ${flexWrapClass} ${className}`}
    >
      {items.map((item, index) => (
        <div key={index} className={`${basisClass}`}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}