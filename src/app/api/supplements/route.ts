import { NextRequest, NextResponse } from "next/server";
import { parseSearchParams } from "@/app/api/utils";
import { searchSupplements } from "@/app/api/supplements/utils";
import type { Supplement, SearchFilters, SortOption } from "@/lib/types";

export type SupplementsAPIResponse = {
  supplements: Supplement[];
  total: number;
  filters: SearchFilters;
  sortBy: SortOption;
};

export async function GET(
  request: NextRequest,
): Promise<NextResponse<SupplementsAPIResponse>> {
  const { searchParams } = new URL(request.url);

  // Parse query parameters into filters
  const { filters, sortBy, ids } = parseSearchParams(searchParams);

  // Use shared search logic
  const { supplements: results, total } = await searchSupplements(
    filters,
    sortBy,
    ids
  );

  return NextResponse.json({
    supplements: results,
    total: results.length,
    filters,
    sortBy,
  });
}
