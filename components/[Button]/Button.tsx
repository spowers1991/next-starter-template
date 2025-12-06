"use client";

import React from "react";
import SVG from "@/components/[SVG]/SVG";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface ButtonProps {
  children: React.ReactNode; // allows text or JSX
  onClick: () => void;
}

function Button( { children, onClick } : ButtonProps ) {

  const { THEMES_activeTheme } = useThemes();

  return (
    <button
      onClick={onClick}
      className={`${THEMES_activeTheme.styles.button}`}
    >
      {children}
      <SVG 
        src="/images/svg/arrow-right.svg"
        alt="Cart" 
        width={30} 
        height={30} 
        className="text-blue-500" 
      />
    </button>
  );
};

export default Button;
