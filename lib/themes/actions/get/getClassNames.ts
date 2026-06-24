import { ThemeStyles } from "../../types/ThemeStyles";

export function getClassNames(
  styles: ThemeStyles[] | undefined,
  elementName: ThemeStyles[keyof ThemeStyles] extends string ? keyof ThemeStyles : never,
  variant?: ThemeStyles[keyof ThemeStyles] extends { variants: infer V } ? keyof V : never
) {
  
  const elementStyles = styles?.[elementName] ?? null;
  if (!variant) {
    return elementStyles;
  }

  if (variant) {
    if(elementStyles && typeof elementStyles === "object" && "variants" in elementStyles) {
      const variantStyles = elementStyles.variants?.[variant];
      return variantStyles;
    }   
 }
  return elementStyles || "";
}