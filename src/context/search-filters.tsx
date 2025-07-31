"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { SearchFilters, SortOption } from "@/lib/types";

type SearchFiltersContextValue = {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
};

const SearchFiltersContext = createContext<SearchFiltersContextValue | null>(
  null,
);

export function SearchFiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    categories: [],
    priceRange: [0, 100],
    trustScoreRange: [0, 10],
  });

  const [sortBy, setSortBy] = useState<SortOption>("name-asc");

  return (
    <SearchFiltersContext.Provider
      value={{
        filters,
        setFilters,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SearchFiltersContext.Provider>
  );
}

export function useSearchFilters() {
  const context = useContext(SearchFiltersContext);
  if (!context) {
    throw new Error(
      "useSearchFilters() must be used within a SearchFiltersProvider",
    );
  }
  return context;
}
