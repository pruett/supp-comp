import useSWR from "swr";
import type { SupplementsAPIResponse } from "@/app/api/supplements/route";
import { filtersToSearchParams } from "@/app/api/utils";
import { SearchFilters, SortOption } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useSupplements({
  filters,
  sortBy,
  ids,
}: {
  filters?: SearchFilters;
  sortBy?: SortOption;
  ids?: string[];
}) {
  const params = filtersToSearchParams(
    filters || {
      query: "",
      categories: [],
      priceRange: [0, 1000],
      trustScoreRange: [0, 10],
    },
    sortBy || "name-asc",
  );

  // Add ids parameter if provided
  if (ids && ids.length > 0) {
    params.set("ids", ids.join(","));
  }

  const { data, error, isLoading } = useSWR<SupplementsAPIResponse>(
    `/api/supplements?${params}`,
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
