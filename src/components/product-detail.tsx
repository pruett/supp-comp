"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSupplement } from "@/hooks/use-supplement";
import { useComparison } from "@/context/comparison";
import { Scale, Star } from "lucide-react";
import { notFound } from "next/navigation";

export function ProductDetail({ id }: { id: string }) {
  const { data: supplement, isLoading } = useSupplement(id);
  const { addToComparison, removeFromComparison, isInComparison } =
    useComparison();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="h-120 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!supplement) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Product Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Header */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">
                    {supplement.name}
                  </CardTitle>
                  <p className="text-xl text-muted-foreground font-medium mb-2">
                    {supplement.brand}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {supplement.primaryIngredient}
                  </p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {supplement.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-6">
                {/* Trust Score */}
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">
                    {supplement.trustScore.toFixed(1)}
                  </span>
                  <span className="text-muted-foreground">TrustScore</span>
                </div>

                {/* Price */}
                <div className="text-3xl font-bold text-primary">
                  ${supplement.price.toFixed(2)}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h3 className="font-semibold">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {supplement.certifications.map((cert) => (
                    <Badge key={cert} variant="outline">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ingredients */}
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {supplement.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-muted rounded-lg"
                  >
                    <span className="font-medium">{ingredient.name}</span>
                    <span className="text-muted-foreground">
                      {ingredient.amount} {ingredient.unit}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trust Score Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Trust Score Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(supplement.trustScoreBreakdown).map(
                  ([key, value]) => {
                    const label = key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase());

                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{label}</span>
                          <span className="font-bold">
                            {value.toFixed(1)}/10
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(value / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Actions */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
              <Button
                variant={isInComparison(id) ? "default" : "outline"}
                className="w-full"
                size="lg"
                onClick={() => {
                  if (isInComparison(id)) {
                    removeFromComparison(id);
                  } else {
                    addToComparison(supplement);
                  }
                }}
              >
                <Scale className="h-4 w-4 mr-2" />
                {isInComparison(id) ? "Remove from Compare" : "Add to Compare"}
              </Button>
              <Button variant="ghost" className="w-full" size="lg">
                Save to Wishlist
              </Button>

              {/* Quick Stats */}
              <div className="pt-4 border-t space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Category
                  </span>
                  <span className="text-sm font-medium">
                    {supplement.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Brand</span>
                  <span className="text-sm font-medium">
                    {supplement.brand}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Trust Score
                  </span>
                  <span className="text-sm font-medium">
                    {supplement.trustScore}/10
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Ingredients
                  </span>
                  <span className="text-sm font-medium">
                    {supplement.ingredients.length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
