import { useFilters } from "@/lib/filters/state/FiltersContext";

export function useFiltersClear() {
  const { FILTERS_clearFilters } = useFilters();
  return FILTERS_clearFilters;
}
