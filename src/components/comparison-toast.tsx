"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useComparison } from "@/context/comparison";
import { Scale, X, Trash2 } from "lucide-react";

export function ComparisonToast() {
  const pathname = usePathname();
  const {
    comparisonIds,
    comparisonItems,
    removeFromComparison,
    clearComparison,
  } = useComparison();

  if (comparisonIds.length === 0 || pathname === "/compare") {
    return null;
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 shadow-lg max-w-lg min-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scale className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">Compare Products</span>
          <Badge variant="secondary" className="text-xs">
            {comparisonIds.length}/2
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-2">
          {comparisonItems.map((supplement) => (
            <div
              key={supplement.id}
              className="flex items-center justify-between p-2 bg-muted rounded-md"
            >
              <span className="text-sm font-medium">{supplement.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromComparison(supplement.id)}
                className="h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {/* Compare Button */}
        <Button
          asChild
          className="flex-1"
          size="sm"
          disabled={comparisonIds.length < 2}
        >
          <Link
            href={
              comparisonIds.length < 2
                ? "#"
                : `/compare?ids=${comparisonIds.join(",")}`
            }
            className={
              comparisonIds.length < 2 ? "pointer-events-none opacity-50" : ""
            }
            onClick={(e) => comparisonIds.length < 2 && e.preventDefault()}
          >
            Compare Now
          </Link>
        </Button>

        {/* Clear All Button */}
        <Button
          variant="destructive"
          size="sm"
          onClick={clearComparison}
          className="px-3"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
