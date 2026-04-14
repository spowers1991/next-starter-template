import { useEffect } from "react";
import { FiltersConfig } from "@/lib/filters/types/FiltersConfig";

export const useSetupFilters = (
  itemsToFilter: object[],
  filtersOptions: FiltersConfig[],
  FILTERS_setItemsToFilter: React.Dispatch<React.SetStateAction<object[]>>,
  FILTERS_setFiltersOptions: React.Dispatch<React.SetStateAction<FiltersConfig[]>>
) => {
  useEffect(() => {
    FILTERS_setItemsToFilter(itemsToFilter);
    FILTERS_setFiltersOptions(filtersOptions);
  }, [itemsToFilter, filtersOptions, FILTERS_setItemsToFilter, FILTERS_setFiltersOptions]);
};
