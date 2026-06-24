import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { ThemeStyles } from "@/lib/themes/types/ThemeStyles";



export function useSwapStylesforPathName({pathNameToMatch, styles, themeName}: {pathNameToMatch: string | undefined, styles: { p: string }, themeName?: string}) {
  const pathName = usePathname() as string;
  const { THEMES_setThemeStyles } = useThemes();

  const [style, setStyle] = useState(styles.p);
  const [theme, setTheme] = useState(themeName || "materialTheme");

    const setThemeStylesRef = useRef(THEMES_setThemeStyles);
    setThemeStylesRef.current = THEMES_setThemeStyles;

    useEffect(() => {
      setStyle(pathNameToMatch === pathName ? styles.p : "text-black");
      setTheme(pathNameToMatch === pathName ? themeName || "materialTheme" : "materialTheme");
      if(pathNameToMatch === undefined) return;
      if (pathNameToMatch === pathName) {
        setThemeStylesRef.current({ p: styles.p } as ThemeStyles, theme || "materialTheme")
      } else {
        setThemeStylesRef.current({ p: "text-black"} as ThemeStyles, theme || "materialTheme");
      }
    }, [pathName, pathNameToMatch, style, theme, styles.p, themeName, setStyle, setTheme]);
}