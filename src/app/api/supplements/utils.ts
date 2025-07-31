import "server-only";

import { mockSupplements } from "@/db/mock-data";
import type { Supplement, SearchFilters, SortOption } from "@/lib/types";

/**
 * Get all supplements from the data source
 */
export async function getAllSupplements(): Promise<Supplement[]> {
  // In a real app, this would fetch from a database
  return [...mockSupplements];
}

/**
 * Get a single supplement by ID
 */
export async function getSupplementById(
  id: string,
): Promise<Supplement | null> {
  const supplements = await getAllSupplements();
  return supplements.find((supplement) => supplement.id === id) || null;
}

/**
 * Get multiple supplements by IDs
 */
export async function getSupplementsByIds(
  ids: string[],
): Promise<Supplement[]> {
  const supplements = await getAllSupplements();
  return supplements.filter((supplement) => ids.includes(supplement.id));
}

/**
 * Search supplements with filters and sorting
 */
export async function searchSupplements(
  filters: Partial<SearchFilters> = {},
  sort: SortOption = "name-asc",
  ids?: string[],
): Promise<{ supplements: Supplement[] }> {
  const supplements = await getAllSupplements();
  let results = [...supplements];

  // If specific IDs are requested, filter by them first
  if (ids && ids.length > 0) {
    results = results.filter((supplement) => ids.includes(supplement.id));
  }

  // Apply text search filter
  if (filters.query && filters.query.length > 0) {
    const query = filters.query.toLowerCase();
    results = results.filter(
      (supplement) =>
        supplement.name.toLowerCase().includes(query) ||
        supplement.brand.toLowerCase().includes(query) ||
        supplement.primaryIngredient.toLowerCase().includes(query) ||
        supplement.ingredients.some((ingredient) =>
          ingredient.name.toLowerCase().includes(query),
        ),
    );
  }

  // Apply category filter
  if (filters.categories && filters.categories.length > 0) {
    results = results.filter((supplement) =>
      filters.categories!.includes(supplement.category),
    );
  }

  // Apply price range filter
  if (filters.priceRange) {
    const [minPrice, maxPrice] = filters.priceRange;
    results = results.filter(
      (supplement) =>
        supplement.price >= minPrice && supplement.price <= maxPrice,
    );
  }

  // Apply trust score range filter
  if (filters.trustScoreRange) {
    const [minTrust, maxTrust] = filters.trustScoreRange;
    results = results.filter(
      (supplement) =>
        supplement.trustScore >= minTrust && supplement.trustScore <= maxTrust,
    );
  }

  // Apply sorting
  results = sortSupplements(results, sort);

  return {
    supplements: results,
  };
}

/**
 * Sort supplements by the given sort option
 */
export function sortSupplements(
  supplements: Supplement[],
  sort: SortOption,
): Supplement[] {
  const sorted = [...supplements];

  switch (sort) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "trust-asc":
      return sorted.sort((a, b) => a.trustScore - b.trustScore);
    case "trust-desc":
      return sorted.sort((a, b) => b.trustScore - a.trustScore);
    default:
      return sorted;
  }
}
