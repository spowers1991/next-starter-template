"use client";

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";

import Filters from "@/components/selectors/{Filters}/Filters";
import FiltersOptions from "@/components/selectors/{Filters}/[FiltersOptions]/FiltersOptions";
import FilteredListing from "@/components/selectors/{Filters}/[FilteredListing]/FilteredListing";

interface MovieProps {
  movies: Movie[]; 
}

export default function MoviesFilters({ movies }: MovieProps) {

  return (
    <Filters itemsToFilter={movies} filtersOptions={[
      {
        type: "checkbox",
        label: "Cast Members",
        propertyToSearch: "castMembers.characterName",
      }
    ]} >
      <FiltersOptions />
      <FilteredListing />
    </Filters>
  );
}
