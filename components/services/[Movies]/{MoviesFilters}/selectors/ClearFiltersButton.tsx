"use client" 
import React from "react";
import Button from "@/components/html/{Button}/Button";
import { useFilters } from "@/lib/filters/state/FiltersContext";

export default function ClearFiltersButton() {
    const { FILTERS_filtersValues } = useFilters();   

    const hasActiveFilters = Object.values(FILTERS_filtersValues).some(values => values.length > 0);

    return (
        hasActiveFilters && (
            <Button     
                name={"services/[Movies]/{MoviesFilters}/MoviesFilters/<Button/>:clearFilters"}
                events={[
                    { name: "clearFilters", type: "onClick" },
                    { name: "restartAnimations", type: "onClick" },
                ]}
                options={{ iconWidth: 30, iconImage: "/images/svg/arrow-right.svg" }}>
                Clear Filters
            </Button>
        )
    );
}
