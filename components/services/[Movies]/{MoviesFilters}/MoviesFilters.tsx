"use client";

import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";

import Filters from "@/components/selectors/{Filters}/Filters";
import FiltersOptions from "@/components/selectors/{Filters}/[FiltersOptions]/FiltersOptions";
import FilteredListing from "@/components/selectors/{Filters}/[FilteredListing]/FilteredListing";
import FiltersCard from "@/components/selectors/{Filters}/[FilteredListing]/{FiltersCard}/FiltersCard";
import Flex from "@/components/layout/flex/{Flex}/Flex";
import ContentCard from "@/components/content/{ContentCard}/ContentCard";
import Button from "@/components/html/{Button}/Button";


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
      
      <Button 
        name={"services/[Movies]/{MoviesFilters}/MoviesFilters/<Button/>:clearFilters"}
        events={[
          { name: "clearFilters", type: "onClick" },
          { name: "restartAnimations", type: "onClick" },
        ]} 
        options={{ iconWidth: 30, iconImage: "/images/svg/arrow-right.svg" }}>
          Clear Filters
      </Button>

      <Flex cols={2} gap={4}>
        <FiltersOptions />
          <FilteredListing
            id={`services/[Movies]/{MoviesFilters}/MoviesFilters/<FilteredListing/>`}
            classNames="grid grid-cols-1 md:grid-cols-3 gap-4"
            animations={
              [{
                name: 'fadeUpChildren',
                config: { delay: 0.1, duration: 0.4, stagger: 0.1, status: 'play' }
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