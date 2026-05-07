"use client";

import React from "react";
import SVG from "@/components/assets/{SVG}/SVG";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";
import Flex from "@/components/layout/flex/{Flex}/Flex";

interface ButtonProps {
  name: string;
  children: React.ReactNode;
  events?: { name: string; type: string }[];
  options?: { iconWidth?: number; iconImage?: string };
}

function Button({ name, children, events, options }: ButtonProps) {
  const { FILTERS_clearFilters } = useFilters();
  const { ANIMATIONS_update } = useAnimations();

  const { THEMES_activeTheme } = useThemes();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    for (const event of events || []) {
      if (event?.type === "onClick" && event?.name === "clearFilters") {
        FILTERS_clearFilters();
      }
      if (event?.type === "onClick" && event?.name === "restartAnimations") {
        ANIMATIONS_update([
          { 
            id: 'ANIMATION_[Movies]_<H1/>', 
            config: { status: "restart"}
          }
        ])
      }
    }
    // Add more event handling logic here as needed
  };

  return (
    <button
      onClick={handleClick}
      className={`group ${THEMES_activeTheme.styles.button} w-[unset]`}
    >
      <Flex align={"center"} gap={2}>
        <span className={`whitespace-nowrap`}>
          {children}
        </span>
        <SVG 
          src={options?.iconImage || "/images/svg/arrow-right.svg"}
          alt="Cart" 
          width={options?.iconWidth} 
          height={options?.iconWidth} 
          className={`group-hover:translate-x-1 transition-all duration-300`} 
        />
      </Flex>
    </button>
  );
};

export default Button;
