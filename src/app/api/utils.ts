import type { SearchFilters, SortOption, SupplementCategory } from "@/lib/types";

/**
 * Parses URL search parameters into a SearchFilters object
 */
export function parseSearchParams(searchParams: URLSearchParams): {
  filters: SearchFilters;
  sortBy: SortOption;
  ids?: string[];
} {
  const query = searchParams.get("query") || "";
  const categoriesParam = searchParams.get("categories");
  const idsParam = searchParams.get("ids");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");
  const trustMin = searchParams.get("trustMin");
  const trustMax = searchParams.get("trustMax");
  const sortBy = (searchParams.get("sortBy") as SortOption) || "name-asc";

  // Parse categories from comma-separated string
  const categories: SupplementCategory[] = categoriesParam
    ? (categoriesParam.split(",").filter(Boolean) as SupplementCategory[])
    : [];

  // Parse ids from comma-separated string
  const ids: string[] | undefined = idsParam
    ? idsParam.split(",").filter(Boolean).map(id => id.trim())
    : undefined;

  // Build SearchFilters object
  const filters: SearchFilters = {
    query,
    categories,
    priceRange: [
      priceMin ? parseFloat(priceMin) : 0,
      priceMax ? parseFloat(priceMax) : 1000,
    ],
    trustScoreRange: [
      trustMin ? parseFloat(trustMin) : 0,
      trustMax ? parseFloat(trustMax) : 10,
    ],
  };

  return { filters, sortBy, ids };
}

/**
 * Converts SearchFilters object to URL search parameters
 */
export function filtersToSearchParams(
  filters: SearchFilters,
  sortBy: SortOption,
): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.query) {
    params.set("query", filters.query);
  }

  if (filters.categories && filters.categories.length > 0) {
    params.set("categories", filters.categories.join(","));
  }

  if (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000)) {
    if (filters.priceRange[0] > 0) {
      params.set("priceMin", filters.priceRange[0].toString());
    }
    if (filters.priceRange[1] < 1000) {
      params.set("priceMax", filters.priceRange[1].toString());
    }
  }

  if (filters.trustScoreRange && (filters.trustScoreRange[0] > 0 || filters.trustScoreRange[1] < 10)) {
    if (filters.trustScoreRange[0] > 0) {
      params.set("trustMin", filters.trustScoreRange[0].toString());
    }
    if (filters.trustScoreRange[1] < 10) {
      params.set("trustMax", filters.trustScoreRange[1].toString());
    }
  }

  if (sortBy !== "name-asc") {
    params.set("sortBy", sortBy);
  }

  return params;
}