"use client";

import { ReactNode } from "react";
import { useTheme } from "@/lib/themes/state/ThemeContext";

interface BodyWrapperProps {
  children: ReactNode;
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  const { theme } = useTheme();

  return (
    <div className={theme.styles.body}>
      {children}
    </div>
  );
}
