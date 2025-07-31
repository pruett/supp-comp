"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Supplement } from "@/lib/types";
import { useSupplements } from "@/hooks/use-supplements";
import React from "react";

export function ProductComparison({ productIds }: { productIds: string[] }) {
  const { data, isLoading, isError } = useSupplements({ ids: productIds });

  const product1 = data?.supplements?.[0];
  const product2 = data?.supplements?.[1];

  // Helper to determine if values are different for highlighting
  const isDifferent = (val1: unknown, val2: unknown) => val1 !== val2;

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Error fetching product data</p>
      </div>
    );
  }

  if (isLoading || !product1 || !product2) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading product data...</p>
      </div>
    );
  }

  // Helper function to get all unique ingredients for comparison
  const getAllIngredients = () => {
    const allIngredientNames = new Set([
      ...product1.ingredients.map((i) => i.name),
      ...product2.ingredients.map((i) => i.name),
    ]);
    return Array.from(allIngredientNames).sort();
  };

  // Helper function to get all unique trust score breakdown keys
  const getTrustScoreKeys = () => {
    const allKeys = new Set([
      ...Object.keys(product1.trustScoreBreakdown),
      ...Object.keys(product2.trustScoreBreakdown),
    ]);
    return Array.from(allKeys).sort();
  };

  // Helper to get ingredient by name
  const getIngredient = (supplement: Supplement, ingredientName: string) => {
    return supplement.ingredients.find((i) => i.name === ingredientName);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Product Comparison</h1>
      </div>

      <div className="space-y-8">
        {/* Product Headers */}
        <div className="sticky top-0 z-10 grid grid-cols-3 gap-4 bg-card rounded-lg border p-6 shadow-sm">
          <div className="font-medium text-muted-foreground">Product</div>
          <div>
            <div className="space-y-2">
              <div className="font-semibold text-lg">{product1.name}</div>
              <div className="text-sm text-muted-foreground font-medium">
                {product1.brand}
              </div>
              <Badge variant="secondary" className="text-xs">
                {product1.category}
              </Badge>
              <div>
                <Link
                  href={`/supplements/${product1.id}`}
                  className="text-xs text-primary underline-offset-4 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <div className="font-semibold text-lg">{product2.name}</div>
              <div className="text-sm text-muted-foreground font-medium">
                {product2.brand}
              </div>
              <Badge variant="secondary" className="text-xs">
                {product2.category}
              </Badge>
              <div>
                <Link
                  href={`/supplements/${product2.id}`}
                  className="text-xs text-primary underline-offset-4 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <ComparisonGrid
          title="Basic Information"
          rows={[
            {
              label: "Primary Ingredient",
              value1: product1.primaryIngredient,
              value2: product2.primaryIngredient,
            },
            {
              label: "Price",
              value1: `$${product1.price.toFixed(2)}`,
              value2: `$${product2.price.toFixed(2)}`,
            },
            {
              label: "Trust Score",
              value1: (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {product1.trustScore.toFixed(1)}
                </div>
              ),
              value2: (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {product2.trustScore.toFixed(1)}
                </div>
              ),
            },
          ]}
        />

        {/* Ingredients */}
        <ComparisonGrid
          title="Ingredients"
          rows={getAllIngredients().map((ingredientName) => {
            const ingredient1 = getIngredient(product1, ingredientName);
            const ingredient2 = getIngredient(product2, ingredientName);

            return {
              label: ingredientName,
              value1: ingredient1
                ? `${ingredient1.amount} ${ingredient1.unit}`
                : "—",
              value2: ingredient2
                ? `${ingredient2.amount} ${ingredient2.unit}`
                : "—",
            };
          })}
        />

        {/* Certifications */}
        <ComparisonGrid
          title="Certifications"
          rows={[
            {
              label: "Certifications",
              value1: (
                <div className="flex flex-wrap gap-1">
                  {product1.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              ),
              value2: (
                <div className="flex flex-wrap gap-1">
                  {product2.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              ),
            },
          ]}
        />

        {/* Trust Score Breakdown */}
        <ComparisonGrid
          title="Trust Score Breakdown"
          rows={getTrustScoreKeys().map((key) => {
            const value1 =
              product1.trustScoreBreakdown[
                key as keyof typeof product1.trustScoreBreakdown
              ];
            const value2 =
              product2.trustScoreBreakdown[
                key as keyof typeof product2.trustScoreBreakdown
              ];
            const label = key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase());

            return {
              label,
              value1: (
                <div className="space-y-1">
                  <div className="text-sm font-bold">
                    {value1?.toFixed(1)}/10
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((value1 || 0) / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ),
              value2: (
                <div className="space-y-1">
                  <div className="text-sm font-bold">
                    {value2?.toFixed(1)}/10
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((value2 || 0) / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
}

interface ComparisonRow {
  label: string;
  value1: React.ReactNode;
  value2: React.ReactNode;
}

interface ComparisonGridProps {
  title: string;
  rows: ComparisonRow[];
}

function ComparisonGrid({ title, rows }: ComparisonGridProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="bg-card rounded-lg border overflow-hidden">
        <div className="grid grid-cols-3 gap-0 text-sm">
          {rows.map((row, index) => (
            <React.Fragment key={`row-${index}`}>
              <div
                key={`label-${index}`}
                className="font-medium p-4 border-b border-r bg-background odd:bg-muted/20"
              >
                {row.label}
              </div>
              <div
                key={`value1-${index}`}
                className="p-4 border-b border-r bg-background odd:bg-muted/20"
              >
                {row.value1}
              </div>
              <div
                key={`value2-${index}`}
                className="p-4 border-b bg-background odd:bg-muted/20"
              >
                {row.value2}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
