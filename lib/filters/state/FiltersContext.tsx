"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FiltersConfig } from "../types/FiltersConfig";
import { useSetupFilters } from "../hooks/useSetupFilters";
import { updateFilters } from "../actions/updateFilters";
import { filtersOptionsHandler as handleFiltersOptions } from "../actions/filtersHandler"; 

interface FiltersContextType {
  STATE_setupFilters:  (itemsToFilter: object[], filtersOptions: FiltersConfig[]) => void;
  STATE_itemsToFilter: object[];
  STATE_setItemsToFilter: React.Dispatch<React.SetStateAction<object[]>>;
  STATE_filtersOptions: FiltersConfig[];
  STATE_setFiltersOptions: React.Dispatch<React.SetStateAction<FiltersConfig[]>>;
  STATE_filtersValues: Record<string, string[]>;
  STATE_setFiltersValues: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  STATE_filtersOptionsHandler: (propertyPath: string, selectedOptions: string[]) => void;
  STATE_filteredItems: object[];
  STATE_setFilteredItems: React.Dispatch<React.SetStateAction<object[]>>;
  STATE_clearFilters: () => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [STATE_itemsToFilter, STATE_setItemsToFilter] = useState<object[]>([]);
  const [STATE_filtersOptions, STATE_setFiltersOptions] = useState<FiltersConfig[]>([]);
  const [STATE_filtersValues, STATE_setFiltersValues] = useState<Record<string, string[]>>({});
  const [STATE_filteredItems, STATE_setFilteredItems] = useState<object[]>([]);

  const STATE_setupFilters = ( itemsToFilter: object[], filtersOptions: FiltersConfig[]) => {
    useSetupFilters(itemsToFilter, filtersOptions, STATE_setItemsToFilter, STATE_setFiltersOptions);
  };

  const STATE_filtersOptionsHandler = ( propertyPath: string, selectedOptions: string[]) => {
    handleFiltersOptions(propertyPath, selectedOptions, STATE_setFiltersValues);
  };

  const STATE_clearFilters = () => {
    STATE_setFiltersValues({});
  };

  useEffect(() => {
    updateFilters(STATE_itemsToFilter, STATE_filtersValues, STATE_setFilteredItems);
  }, [STATE_itemsToFilter, STATE_filtersValues]);

  return (
    <FiltersContext.Provider
      value={{
        STATE_setupFilters,
        STATE_itemsToFilter,
        STATE_setItemsToFilter,
        STATE_filtersOptions,
        STATE_setFiltersOptions,
        STATE_filtersValues,
        STATE_setFiltersValues,
        STATE_filtersOptionsHandler,
        STATE_filteredItems,
        STATE_setFilteredItems,
        STATE_clearFilters,
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
