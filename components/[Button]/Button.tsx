"use client";

import React from "react";
import Image from "next/image";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface ButtonProps {
  children: React.ReactNode; // allows text or JSX
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {

  const { THEMES_activeTheme } = useThemes();

  return (
    <button
      onClick={onClick}
      className={`${THEMES_activeTheme.styles.button}`}
    >
      {children}
      <Image 
        src="/images/svg/arrow-right.svg" 
        alt="Arrow" 
        className="relative group-hover:left-1 transition duration-1000"
        width={20} 
        height={20} 
      />
    </button>
  );
};

export default Button;
