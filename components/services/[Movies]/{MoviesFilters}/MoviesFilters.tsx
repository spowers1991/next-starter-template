"use client";

import { useEffect, useRef } from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";

import Filters from "@/components/selectors/{Filters}/Filters";
import FiltersOptions from "@/components/selectors/{Filters}/[FiltersOptions]/FiltersOptions";
import FilteredListing from "@/components/selectors/{Filters}/[FilteredListing]/FilteredListing";
import FiltersCard from "@/components/selectors/{Filters}/[FilteredListing]/{FiltersCard}/FiltersCard";
import Flex from "@/components/layout/flex/{Flex}/Flex";
import Grid from "@/components/layout/grid/{Grid}/Grid";

import ContentCard from "@/components/content/{ContentCard}/ContentCard";

import { useAnimations } from "@/lib/animations/state/AnimationContext"

interface MovieProps {
  movies: Movie[];
}

export default function MoviesFilters({ movies }: MovieProps) {

  const { ANIMATIONS_register } = useAnimations();
  const animationsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ANIMATIONS_register(
      'Movies.MoviesFilters.fadeUp',
      animationsRef.current, [
      { name: "fade-up-children", config: { delay: 0.2 } },
    ]
  );
  }, [ANIMATIONS_register]);

  return (
    <Filters
      itemsToFilter={movies}
      filtersOptions={[
        {
          type: "checkbox",
          label: "Cast Members",
          propertyToSearch: "castMembers.characterName",
        },
      ]}
    >
      <Flex>
        <FiltersOptions />

          <Grid ref={animationsRef} cols={3} gap={4}>
            <FilteredListing>
              {(movie) => (
                <FiltersCard key={movie._id} filteredItem={movie}>
                  <ContentCard content={movie} />
                </FiltersCard>
              )}
            </FilteredListing>
          </Grid>

      </Flex>
    </Filters>
  );
}
