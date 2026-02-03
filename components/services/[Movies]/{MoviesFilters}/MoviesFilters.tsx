"use client";

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
          <FilteredListing
            id={`{FilteredListing}_[Movies]`}
            animations={
              [{
                name: 'fadeUpChildren',
                config: { delay: 0.1, duration: 0.1, stagger: 0.1, status: 'play' }
              }]
            }
            >
            {(movie) => {
              const item = movie as Movie;
              return (
                <FiltersCard 
                  key={item._id} 
                  filteredItem={item}
                >
                  <ContentCard content={item} />
                </FiltersCard>
              );
            }}
          </FilteredListing>
      </Flex>
    </Filters>
  );
}