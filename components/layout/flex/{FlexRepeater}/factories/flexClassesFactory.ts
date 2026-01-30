export function getFlexBasisClass(cols?: number): string {
  if (!cols || cols <= 0) return "";
  switch (cols) {
    case 1:
      return "w-full";
    case 2:
      return "w-1/2";
    case 3:
      return "w-1/3";
    case 4:
      return "w-1/4";
    case 5:
      return "w-1/5";
    case 6:
      return "w-1/6";
    default:
      return "w-1/2"; // fallback
  }
}