import { AnimationTarget } from "@/lib/animations/types/AnimationTarget";

export function handleCheckboxChange(
  value: string,
  isChecked: boolean,
  propertyPath: string,
  STATE_filtersValues: Record<string, string[]>,
  STATE_setFiltersValues: React.Dispatch<React.SetStateAction<Record<string, string[]>>>, 
  STATE_filtersOptionsHandler: (propertyPath: string, selectedOptions: string[]) => void,
  ANIMATIONS_update: (targets: AnimationTarget[]) => void
) {
 
  ANIMATIONS_update([
    { 
      id: 'ANIMATION_[Movies]_<H1/>', 
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