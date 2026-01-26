"use client";

import React from "react";
import { extractPropertiesNames } from "@/lib/filters/helpers/extractPropertiesNames";
import { handleCheckboxChange } from "@/components/selectors/{Filters}/[FiltersOptions]/[Checkboxes]/actions/handleCheckboxChange";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import Checkbox from "@/components/selectors/{Filters}/[FiltersOptions]/[Checkboxes]/{Checkbox}/Checkbox";
import { useAnimations } from "@/lib/animations/state/AnimationContext";

interface CheckboxProps {
  label: string;
  propertyToSearch: string;
}

function Checkboxes({ label, propertyToSearch }: CheckboxProps) {
  const { 
    STATE_itemsToFilter, 
    STATE_filtersValues, 
    STATE_setFiltersValues,  
    STATE_filtersOptionsHandler 
  } = useFilters();

  const { ANIMATIONS_reset } = useAnimations();
  
  const options = extractPropertiesNames(STATE_itemsToFilter, propertyToSearch);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold uppercase text-[11px] sm:text-xs tracking-[1px]">
        {label}
      </h3>
      <div className="grid grid-cols-2 w-fit gap-x-6 gap-y-3">
        {options.map((option: string, index: number) => (
          <Checkbox
            key={index}
            option={option}
            checked={STATE_filtersValues?.[propertyToSearch]?.includes(option) ?? false}
            onChange={(checked) =>
              handleCheckboxChange(
                option,
                checked,
                propertyToSearch,
                STATE_filtersValues,
                STATE_setFiltersValues,
                STATE_filtersOptionsHandler,
                ANIMATIONS_reset,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Checkboxes;
