import { NextRequest, NextResponse } from "next/server";
import { categories } from "@/db/mock-data";
import type { SupplementCategory } from "@/lib/types";

export type CategoriesAPIResponse = SupplementCategory[];

export async function GET(
  request: NextRequest,
): Promise<NextResponse<CategoriesAPIResponse>> {
  return NextResponse.json(categories);
}
