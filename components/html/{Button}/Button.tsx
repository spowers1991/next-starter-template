"use client";

import React from "react";
import SVG from "@/components/assets/{SVG}/SVG";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import Flex from "@/components/layout/flex/{Flex}/Flex";
import { useClickEvents } from "./hooks/useClickEvents";
import { ThemeStyles } from "@/lib/themes/types/ThemeStyles";
import { getClassNames } from "@/lib/themes/actions/get/getClassNames";

interface ButtonProps {
  name?: string;
  themeVariant?: string;
  options?: { type?: "button" | "submit" | "reset", disabled?: boolean, iconWidth?: number; iconImage?: string };
  onClick?: () => void;
  events?: { name: string; type: string, handler?: () => void }[];
  children: React.ReactNode;
}

function Button({ name, themeVariant, options, onClick, events, children }: ButtonProps) {
  
  const elementName = "button" as keyof ThemeStyles["button"];

  themeVariant = themeVariant as ThemeStyles["button"] extends { variants: infer V } ? keyof V : never;

  const buttonName = "button_" + (name || themeVariant || "default");
  
  const { THEMES_activeTheme } = useThemes();

  const handleClick = useClickEvents(events);

  const buttonClassNames = getClassNames(
    THEMES_activeTheme.styles as ThemeStyles[],
    elementName,
    themeVariant
  );

  return (
    <button
      type={options?.type || "button"}
      aria-label={buttonName}
      onClick={onClick ? onClick : handleClick}
      disabled={options?.disabled}
      className={`group ${buttonClassNames} w-[unset]`}
    >
      <Flex align={"center"} gap={2}>
        <span className={`whitespace-nowrap`}>
          {children}
        </span>
        <SVG 
          src={options?.iconImage || "/images/svg/arrow-right.svg"}
          alt={buttonName+"_icon"} 
          width={options?.iconWidth} 
          height={options?.iconWidth} 
          className={`group-hover:translate-x-1 transition-all duration-300`} 
        />
      </Flex>
    </button>
  );
};

export default Button;