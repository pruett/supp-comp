"use client";

import { SupplementCard } from "@/components/supplement-card";
import { useSearchFilters } from "@/context/search-filters";
import { useSupplements } from "@/hooks/use-supplements";

export function SupplementsGrid() {
  const { filters, sortBy } = useSearchFilters();
  const { data } = useSupplements({ filters, sortBy });

  if (data?.supplements?.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-muted-foreground">
          No supplements found
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Try adjusting your search criteria or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 @container">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {data?.supplements.length} supplements
        </p>
      </div>

      <div className="grid grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3 gap-6">
        {data?.supplements?.map((supplement) => (
          <SupplementCard key={supplement.id} supplement={supplement} />
        ))}
      </div>
    </div>
  );
}
