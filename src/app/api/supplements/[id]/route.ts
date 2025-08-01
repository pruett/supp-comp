import { NextRequest, NextResponse } from "next/server";
import { getSupplementById } from "@/app/api/supplements/utils";
import type { Supplement } from "@/lib/types";

export type SupplementDetailAPIResponse = Supplement;

export type SupplementDetailErrorAPIResponse = {
  error: string;
  code: string;
};

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteContext,
): Promise<
  NextResponse<SupplementDetailAPIResponse | SupplementDetailErrorAPIResponse>
> {
  const { id } = await params;

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

  return NextResponse.json(supplement);
}
