import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { ThemeStyles } from "@/lib/themes/types/ThemeStyles";



export function useSwapStylesforPathName({pathNameToMatch, styles, themeName}: {pathNameToMatch: string, styles: { p: string }, themeName?: string}) {
  const pathName = usePathname() as string;
  const { THEMES_setThemeStyles } = useThemes();

  useEffect(() => {
    if (pathNameToMatch === pathName) {
      THEMES_setThemeStyles({ p: styles.p } as ThemeStyles, themeName || "materialTheme")
    } else {
      THEMES_setThemeStyles({ p: "text-black"} as ThemeStyles, themeName || "materialTheme");
    }
  }, [pathName, pathNameToMatch]);
}