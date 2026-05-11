import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useStyles } from "./useStyles";



export function matchPathNames({pathNameToMatch, styles, themeName}: {pathNameToMatch: string, styles: { p: string }, themeName?: string}) {
  const pathName = usePathname() as string;

  useEffect(() => {
    if (pathNameToMatch === pathName) {
      useStyles({ p: styles.p }, themeName || "materialTheme");
    } else {
      useStyles({ p: "text-black" }, themeName || "materialTheme");
    }
  }, [pathName, pathNameToMatch]);
}