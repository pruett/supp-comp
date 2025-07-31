"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Supplement } from "@/lib/types";
import { useComparison } from "@/context/comparison";

type SupplementCardProps = {
  supplement: Supplement;
};

export function SupplementCard({ supplement }: SupplementCardProps) {
  const { addToComparison, isInComparison } = useComparison();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {supplement.name}
          </h3>
          <Badge variant="secondary" className="text-xs shrink-0">
            {supplement.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          {supplement.brand}
        </p>
        <p className="text-sm text-muted-foreground">
          {supplement.primaryIngredient}
        </p>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <div className="space-y-3">
          {/* Trust Score */}
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">
              {supplement.trustScore.toFixed(1)}
            </span>
            <span className="text-sm text-muted-foreground">TrustScore</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold">
            ${supplement.price.toFixed(2)}
          </div>

          {/* Certifications */}
          {supplement.certifications.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {supplement.certifications.slice(0, 2).map((cert) => (
                <Badge key={cert} variant="outline" className="text-xs">
                  {cert}
                </Badge>
              ))}
              {supplement.certifications.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{supplement.certifications.length - 2} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/supplements/${supplement.id}`}>View Details</Link>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => addToComparison(supplement)}
          disabled={isInComparison(supplement.id)}
        >
          {isInComparison(supplement.id) ? "Added" : "Compare"}
        </Button>
      </CardFooter>
    </Card>
  );
}
