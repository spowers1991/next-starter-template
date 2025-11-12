export function updateFilters<T extends object>(
  itemsToFilter: T[],
  filters: Record<string, string | string[]>,
  setFilteredItems: (items: T[]) => void
): void {
  const getNestedValues = (obj: unknown, pathParts: string[]): unknown[] => {
    if (!obj || typeof obj !== "object") return [];

    const [current, ...rest] = pathParts;
    const value = (obj as Record<string, unknown>)[current];

    if (value === undefined || value === null) return [];

    if (rest.length === 0) return Array.isArray(value) ? value : [value];
    if (Array.isArray(value)) return value.flatMap(v => getNestedValues(v, rest));

    return getNestedValues(value, rest);
  };

  const filteredItems = itemsToFilter.filter(item => {
    return Object.keys(filters).every(propertyPath => {
      const filterValue = filters[propertyPath];
      const pathParts = propertyPath.split(".");
      const itemValues = getNestedValues(item, pathParts);

      if (Array.isArray(filterValue)) {
        const valuesAsStrings = itemValues.map(v => {
          if (typeof v === "string") return v;
          if (v && typeof v === "object" && "title" in v)
            return String((v as { title: string }).title);
          return String(v);
        });

        if (filterValue.length === 0) return true;
        return filterValue.every(val => valuesAsStrings.includes(val));
      }

      if (typeof filterValue === "string") {
        const fv = filterValue.toLowerCase();
        return itemValues.some(v => {
          if (typeof v === "string") return v.toLowerCase().includes(fv);
          if (v && typeof v === "object" && "title" in v)
            return String((v as { title: string }).title)
              .toLowerCase()
              .includes(fv);
          return false;
        });
      }

      return true;
    });
  });

  setFilteredItems(filteredItems);
}
