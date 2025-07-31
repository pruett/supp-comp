import useSWR from "swr";
import type { CategoriesAPIResponse } from "@/app/api/categories/route";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useCategories() {
  const { data, error, isLoading } = useSWR<CategoriesAPIResponse>(
    "/api/categories",
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
