"use client";

import React from "react";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import type { FiltersConfig } from "@/lib/filters/types/FiltersConfig";

import FilteredListing from "./[FilteredListing]/FilteredListing";
import FiltersOptions from "./[FiltersOptions]/FiltersOptions";
import Button from "@/components/[Button]/Button";

interface FilterProps {
  itemsToFilter: object[];
  filtersOptions: FiltersConfig[];
}

function Filters({ itemsToFilter, filtersOptions }: FilterProps) {
  const {
    STATE_setupFilters,
    STATE_filtersValues,
    STATE_setShowAnimation,
    STATE_clearFilters,
  } = useFilters();

  STATE_setupFilters(itemsToFilter, filtersOptions);

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-6 bg-white p-6">
          {Object.keys(STATE_filtersValues).length > 0 && (
            <Button
              onClick={() => {
                STATE_clearFilters();
                STATE_setShowAnimation(true);
              }}
            >
              Clear Filters  
            </Button>
          )}

          <FiltersOptions />
        </div>

        <div className="w-full">
          <FilteredListing />
        </div>
      </div>
    </div>
  );
}

export default Filters;
