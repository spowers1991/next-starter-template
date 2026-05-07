"use client"

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface PProps {
  children: ReactNode;
  functions?: ((pathName: string) => void)[];
}

export default function P({ children, functions }: PProps) {
  const pathName = usePathname() as string;
  const { THEMES_activeTheme, THEMES_setThemeStyles } = useThemes();

  useEffect(() => {
    if (pathName === "/movies/the-dark-tower") {
      THEMES_setThemeStyles({ p: "text-red-500" }, "materialTheme");
    } else {
      THEMES_setThemeStyles({ p: "text-black" }, "materialTheme");
    }
  }, [pathName]);

  console.log(functions)

  return (
    <p className={THEMES_activeTheme.styles.p}>
      {children}
    </p>
  );
}
