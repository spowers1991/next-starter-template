import { AnimationTarget } from "@/lib/animations/types/AnimationTarget";

export function handleCheckboxChange(
  value: string,
  isChecked: boolean,
  propertyPath: string,
  FILTERS_filtersValues: Record<string, string[]>,
  FILTERS_setFiltersValues: React.Dispatch<React.SetStateAction<Record<string, string[]>>>, 
  FILTERS_filtersOptionsHandler: (propertyPath: string, selectedOptions: string[]) => void,
  ANIMATIONS_update: (targets: AnimationTarget[]) => void
) {
 
  ANIMATIONS_update([
    { 
      id: 'ANIMATION_[Movies]_<H1/>', 
      config: { status: "restart"}
    },
    { 
      id: 'ANIMATION_[Movies]/{MoviesFilters}/MoviesFilters/<FilteredListing/>', 
      config: { status: "restart"}
    }
  ])

  // Update selected options from global state
  const currentOptions = FILTERS_filtersValues[propertyPath] ?? [];
  const updatedOptions = isChecked
    ? [...currentOptions, value]
    : currentOptions.filter((option) => option !== value);

  // Update global filters state
  FILTERS_setFiltersValues({
    ...FILTERS_filtersValues,
    [propertyPath]: updatedOptions,
  });

  // Trigger filtersOptionsHandler
  FILTERS_filtersOptionsHandler(propertyPath, updatedOptions);
}