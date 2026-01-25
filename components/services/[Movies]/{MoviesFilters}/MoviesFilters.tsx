"use client";

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";

import Filters from "@/components/selectors/{Filters}/Filters";
import FiltersOptions from "@/components/selectors/{Filters}/[FiltersOptions]/FiltersOptions";
import FilteredListing from "@/components/selectors/{Filters}/[FilteredListing]/FilteredListing";
import FiltersCard from "@/components/selectors/{Filters}/[FilteredListing]/{FiltersCard}/FiltersCard";
import Flex from "@/components/layout/flex/{Flex}/Flex";
import Grid from "@/components/layout/grid/{Grid}/Grid";

import ContentCard from "@/components/content/{ContentCard}/ContentCard";

interface MovieProps {
  movies: Movie[];
}

export default function MoviesFilters({ movies }: MovieProps) {
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

        <Grid cols={3} gap={4}>
          <FilteredListing>
            {(movie, index) => (
              <FiltersCard 
                key={movie._id} 
                filteredItem={movie} 
                animations={
                  [
                    { 
                      name: "fade-up", 
                      config: { index, delay: 0.2 }
                    }
                  ]
                }
                >
                <ContentCard 
                  content={movie} 
                />
              </FiltersCard>
            )}
          </FilteredListing>
        </Grid>

      </Flex>
    </Filters>
  );
}
