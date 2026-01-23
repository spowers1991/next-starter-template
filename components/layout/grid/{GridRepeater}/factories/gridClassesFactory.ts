export function getGridColsClass(cols?: number): string {
  if (!cols || cols <= 0) return "";
  switch (cols) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
    default:
      return "grid-cols-2"; // fallback
  }
}