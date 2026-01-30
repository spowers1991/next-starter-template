import type { AnimationConfig } from "@/lib/animations/types/AnimationConfig";

export function handleCheckboxChange(
  value: string,
  isChecked: boolean,
  propertyPath: string,
  STATE_filtersValues: Record<string, string[]>,
  STATE_setFiltersValues: React.Dispatch<React.SetStateAction<Record<string, string[]>>>, 
  STATE_filtersOptionsHandler: (propertyPath: string, selectedOptions: string[]) => void,
  ANIMATIONS_update: (targets: { name: string; config?: AnimationConfig }[]) => void
) {
  
  ANIMATIONS_update([
    { 
      name: 'h1_movies', 
      config: { status: "restart"}
    },
    { 
      name: 'grid_movies', 
      config: { status: "restart"}
    }
  ])
  
  // Update selected options from global state
  const currentOptions = STATE_filtersValues[propertyPath] ?? [];
  const updatedOptions = isChecked
    ? [...currentOptions, value]
    : currentOptions.filter((option) => option !== value);

  // Update global filters state
  STATE_setFiltersValues({
    ...STATE_filtersValues,
    [propertyPath]: updatedOptions,
  });

  // Trigger filtersOptionsHandler
  STATE_filtersOptionsHandler(propertyPath, updatedOptions);
}