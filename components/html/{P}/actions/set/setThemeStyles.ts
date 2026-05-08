
export function setThemeStyles(pathName: string, pathNameToMatch: string, THEMES_setThemeStyles: (styles: { p: string }, theme: string) => void) {
  if (pathNameToMatch === pathName) {
    THEMES_setThemeStyles({ p: "text-red-500" }, "materialTheme");
  } else {
    THEMES_setThemeStyles({ p: "text-black" }, "materialTheme");
  }
}