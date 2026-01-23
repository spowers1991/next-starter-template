"use client";

import { Children } from "react";
import { FlexProps } from "./types/FlexProps";

export default function Flex({
  children,
  className = "",
  cols = 2,
  gap = 0,
  direction = "row",
  wrap = true,
}: FlexProps) {
  const flexDirectionClass = `flex-${direction}`;
  const flexWrapClass = wrap ? "flex-wrap" : "";
  const basisClass = cols ? `w-1/${cols}` : "";
  const gapClass = `gap-${gap}`;
  return (
    <div
      className={`flex ${flexDirectionClass} ${flexWrapClass} ${gapClass} ${className}`}
    >
      {Children.map(children, (child, index) => (
        <div key={index} className={basisClass}>
          {child}
        </div>
      ))}
    </div>
  );
}