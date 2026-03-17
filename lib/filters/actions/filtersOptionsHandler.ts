// filtersOptionsHandler.ts

export const filtersOptionsHandler = (
  propertyPath: string,
  selectedOptions: string[],
  setFiltersOptions: React.Dispatch<React.SetStateAction<Record<string, string[]>>>
) => {
  setFiltersOptions(prev => {
    const newFiltersOptions = { ...prev };

    if (selectedOptions.length === 0) {
      // remove key if no options selected
      delete newFiltersOptions[propertyPath];
    } else {
      newFiltersOptions[propertyPath] = selectedOptions;
    }

    return newFiltersOptions;
  });
};
