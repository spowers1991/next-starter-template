import React from "react";
import { useFilters } from "@/lib/filters/state/FiltersContext";

interface FilteredListingProps {
  children: (item: any, index: number) => React.ReactNode;
}

export default function FilteredListing({
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
    <>
      {STATE_filteredItems.map((item, index) =>
        children(item, index)
      )}
    </>
  );
}
