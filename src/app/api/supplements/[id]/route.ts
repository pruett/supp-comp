import { NextRequest, NextResponse } from "next/server";
import { getSupplementById } from "@/app/api/supplements/utils";
import type { Supplement } from "@/lib/types";

// Define the API response type for individual supplement
export type SupplementDetailAPIResponse = Supplement;

// Define error response type
export type SupplementDetailErrorAPIResponse = {
  error: string;
  code: string;
};

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteContext,
): Promise<
  NextResponse<SupplementDetailAPIResponse | SupplementDetailErrorAPIResponse>
> {
  const { id } = params;

  // Validate ID parameter
  if (!id || typeof id !== "string") {
    return NextResponse.json(
      {
        error: "Invalid supplement ID provided",
        code: "INVALID_ID",
      },
      {
        status: 400,
      },
    );
  }

  // Use shared logic to get supplement by ID
  const supplement = await getSupplementById(id);

  if (!supplement) {
    return NextResponse.json(
      {
        error: "Supplement not found",
        code: "NOT_FOUND",
      },
      {
        status: 404,
      },
    );
  }

  // Return the supplement
  return NextResponse.json(supplement);
}
