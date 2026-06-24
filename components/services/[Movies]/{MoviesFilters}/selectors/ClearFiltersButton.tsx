"use client" 

import React from "react";
import Button from "@/components/html/{Button}/Button";
import { useFilters } from "@/lib/filters/state/FiltersContext";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";

export default function ClearFiltersButton() {
    const { ANIMATIONS_update } = useAnimations();
    const { FILTERS_filtersValues, FILTERS_clearFilters } = useFilters();   

    const hasActiveFilters = Object.values(FILTERS_filtersValues).some(values => values.length > 0);

    return (
        hasActiveFilters && (
            <Button     
                name={"services/[Movies]/{MoviesFilters}/MoviesFilters/<Button/>:clearFilters"}
                events={[
                    { name: "clearFilters", type: "onClick", handler: () => {
                      FILTERS_clearFilters();  
                    } },
                    { name: "restartAnimations", type: "onClick", handler: () => {
                      ANIMATIONS_update([{ id: 'ANIMATION_[Movies]_<H1/>',
                        config: { status: "restart" }
                        }]);
                    } },
                ]}
                options={{ iconWidth: 30, iconImage: "/images/svg/arrow-right.svg" }}>
                Clear Filters
            </Button>
        )
    );
}
