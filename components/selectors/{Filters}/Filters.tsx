"use client";

import React from "react";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import type { FiltersConfig } from "@/lib/filters/types/FiltersConfig";

interface FilterProps {
  itemsToFilter: object[];
  filtersOptions: FiltersConfig[];
  children?: React.ReactNode;
}

function Filters({ itemsToFilter, filtersOptions, children }: FilterProps) {
  const {
    STATE_setupFilters,
  } = useFilters();

 
  STATE_setupFilters(itemsToFilter, filtersOptions);


  return <>{children}</>;
}

export default Filters;
