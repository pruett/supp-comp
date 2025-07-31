"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Supplement } from "@/lib/types";

interface ComparisonContextValue {
  comparisonIds: string[];
  comparisonItems: Supplement[];
  addToComparison: (supplement: Supplement) => void;
  removeFromComparison: (id: string) => void;
  clearComparison: () => void;
  isInComparison: (id: string) => boolean;
  canAddMore: boolean;
}

const ComparisonContext = createContext<ComparisonContextValue | null>(null);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparisonItems, setComparisonItems] = useState<Supplement[]>([]);

  // Maintain backward compatibility by deriving IDs from items
  const comparisonIds = comparisonItems.map(item => item.id);

  const addToComparison = (supplement: Supplement) => {
    if (comparisonItems.length >= 2) {
      alert("You can only compare 2 products at a time");
      return;
    }

    if (!comparisonItems.some(item => item.id === supplement.id)) {
      setComparisonItems([...comparisonItems, supplement]);
    }
  };

  const removeFromComparison = (id: string) => {
    setComparisonItems(comparisonItems.filter((item) => item.id !== id));
  };

  const clearComparison = () => {
    setComparisonItems([]);
  };

  const isInComparison = (id: string) => {
    return comparisonItems.some(item => item.id === id);
  };

  const canAddMore = comparisonItems.length < 2;

  return (
    <ComparisonContext.Provider
      value={{
        comparisonIds,
        comparisonItems,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isInComparison,
        canAddMore,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison() must be used within a ComparisonProvider");
  }
  return context;
}