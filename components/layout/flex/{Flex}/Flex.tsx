"use client";

import { Children } from "react";
import { FlexProps } from "./types/FlexProps";

export default function Flex({
  children,
  className = "",
  cols = 2,
  gap = 4,  
}: FlexProps) {
  const colsClass = cols ? `w-full mb-12 md:mb-0 md:w-1/${cols}` : "";
  const gapClass = `gap-${gap}`;
  return (
    <div
      className={`flex flex-col md:flex-row ${gapClass} ${className}`}
    >
      {Children.map(children, (child, index) => (
        <div key={index} className={colsClass}>
          {child}
        </div>
      ))}
    </div>
  );
}