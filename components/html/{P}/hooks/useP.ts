
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useThemes } from "@/lib/themes/state/ThemeContext";;
import { setThemeStyles } from "../actions/set/setThemeStyles";

export function useP(functions?: { name?: string | undefined; type?: string | undefined; handler?: (() => unknown) | undefined; }[]) {
  const pathName = usePathname() as string;
  const { THEMES_setThemeStyles } = useThemes();

  const pathNameToMatch = "/movies/the-dark-tower";
  const newPClass = "text-red";

  console.log(pathName , pathNameToMatch, newPClass);

  useEffect(() => {
    setThemeStyles(pathNameToMatch, pathName, THEMES_setThemeStyles);
  }, [pathName, pathNameToMatch, newPClass]);
}