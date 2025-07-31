import useSWR from "swr";
import type {
  SupplementDetailAPIResponse,
  SupplementDetailErrorAPIResponse,
} from "@/app/api/supplements/[id]/route";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
export function useSupplement(id: string | null) {
  const { data, error, isLoading } = useSWR<SupplementDetailAPIResponse>(
    id ? `/api/supplements/${id}` : null,
    fetcher,
  );

  return {
    data,
    isLoading,
    isError: !!error,
    error: error as SupplementDetailErrorAPIResponse,
  };
}
