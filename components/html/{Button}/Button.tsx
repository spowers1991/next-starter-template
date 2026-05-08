"use client";

import React from "react";
import SVG from "@/components/assets/{SVG}/SVG";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import Flex from "@/components/layout/flex/{Flex}/Flex";
import { useClickEvents } from "./hooks/useClickEvents";

interface ButtonProps {
  name: string;
  children: React.ReactNode;
  events?: { name: string; type: string }[];
  options?: { iconWidth?: number; iconImage?: string };
}

function Button({ name, children, events, options }: ButtonProps) {
  
  const { THEMES_activeTheme } = useThemes();

  const handleClick = useClickEvents(events);

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
