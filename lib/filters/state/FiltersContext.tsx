"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FiltersConfig } from "../types/FiltersConfig";
import { useSetupFilters } from "../hooks/useSetupFilters";
import { updateFilters } from "../actions/updateFilters";
import { filtersOptionsHandler as handleFiltersOptions } from "../actions/filtersOptionsHandler"; 

interface FiltersContextType {
  FILTERS_setupFilters:  (itemsToFilter: object[], filtersOptions: FiltersConfig[]) => void;
  FILTERS_itemsToFilter: object[];
  FILTERS_setItemsToFilter: React.Dispatch<React.SetStateAction<object[]>>;
  FILTERS_filtersOptions: FiltersConfig[];
  FILTERS_setFiltersOptions: React.Dispatch<React.SetStateAction<FiltersConfig[]>>;
  FILTERS_filtersValues: Record<string, string[]>;
  FILTERS_setFiltersValues: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  FILTERS_filtersOptionsHandler: (propertyPath: string, selectedOptions: string[]) => void;
  FILTERS_filteredItems: object[];
  FILTERS_setFilteredItems: React.Dispatch<React.SetStateAction<object[]>>;
  FILTERS_clearFilters: () => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [FILTERS_itemsToFilter, FILTERS_setItemsToFilter] = useState<object[]>([]);
  const [FILTERS_filtersOptions, FILTERS_setFiltersOptions] = useState<FiltersConfig[]>([]);
  const [FILTERS_filtersValues, FILTERS_setFiltersValues] = useState<Record<string, string[]>>({});
  const [FILTERS_filteredItems, FILTERS_setFilteredItems] = useState<object[]>([]);

  const FILTERS_setupFilters = ( itemsToFilter: object[], filtersOptions: FiltersConfig[]) => {
    useSetupFilters(itemsToFilter, filtersOptions, FILTERS_setItemsToFilter, FILTERS_setFiltersOptions);
  };

  const FILTERS_filtersOptionsHandler = ( propertyPath: string, selectedOptions: string[]) => {
    handleFiltersOptions(propertyPath, selectedOptions, FILTERS_setFiltersValues);
  };

  const FILTERS_clearFilters = () => {
    FILTERS_setFiltersValues({});
  };

  useEffect(() => {
    updateFilters(FILTERS_itemsToFilter, FILTERS_filtersValues, FILTERS_setFilteredItems);
  }, [FILTERS_itemsToFilter, FILTERS_filtersValues]);

  return (
    <FiltersContext.Provider
      value={{
        FILTERS_setupFilters,
        FILTERS_itemsToFilter,
        FILTERS_setItemsToFilter,
        FILTERS_filtersOptions,
        FILTERS_setFiltersOptions,
        FILTERS_filtersValues,
        FILTERS_setFiltersValues,
        FILTERS_filtersOptionsHandler,
        FILTERS_filteredItems,
        FILTERS_setFilteredItems,
        FILTERS_clearFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) throw new Error("useFilters must be used within a FiltersProvider");
  return context;
};
