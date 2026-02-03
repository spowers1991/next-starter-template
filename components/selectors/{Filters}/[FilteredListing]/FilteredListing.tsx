"use client";

import React from "react";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import Animator from "@/components/animations/Animator";
import { Animation } from "@/lib/animations/types/Animation";

interface FilteredListingProps {
  id: string | null,
  animations: Animation[]
  children: (item: unknown, index: number) => React.ReactNode;
}

export default function FilteredListing({
  id,
  animations,
  children,
}: FilteredListingProps) {

  const { STATE_filteredItems } = useFilters();

  if (!STATE_filteredItems.length) {
    return (
      <div className="text-center text-lg">
        No project available for these filters...
      </div>
    );
  }

  return (
    <Animator
      id={id}
      animations={animations}>
      {STATE_filteredItems.map((item, index) =>
        children(item, index)
      )}
    </Animator>
  );
}
