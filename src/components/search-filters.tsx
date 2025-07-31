"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useSearchFilters } from "@/context/search-filters";
import { useCategories } from "@/hooks/use-categories";
import type {
  SearchFilters,
  SortOption,
  SupplementCategory,
} from "@/lib/types";
import { Search, X } from "lucide-react";
export function SearchFiltersGrid() {
  const { filters, setFilters, sortBy, setSortBy } = useSearchFilters();

  const { data: categories } = useCategories();

  const handleCategoryToggle = (category: SupplementCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    const newFilters = { ...filters, priceRange: range };
    setFilters(newFilters);
  };

  const handleTrustScoreRangeChange = (range: [number, number]) => {
    const newFilters = { ...filters, trustScoreRange: range };
    setFilters(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      query: "",
      categories: [],
      priceRange: [0, 100],
      trustScoreRange: [0, 10],
    };
    setFilters(clearedFilters);
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Search Input */}
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search supplements, brands, ingredients..."
              value={filters.query}
              onChange={(e) =>
                setFilters({ ...filters, query: e.target.value })
              }
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select
          value={sortBy}
          onValueChange={(value: SortOption) => setSortBy(value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            <SelectItem value="trust-asc">Trust Score (Low to High)</SelectItem>
            <SelectItem value="trust-desc">
              Trust Score (High to Low)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <Label>Categories</Label>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <Badge
              key={category}
              variant={
                filters.categories.includes(category) ? "default" : "outline"
              }
              className="cursor-pointer hover:bg-primary/80 hover:text-primary-foreground"
              onClick={() => handleCategoryToggle(category)}
            >
              {category}
              {filters.categories.includes(category) && (
                <X className="ml-1 h-3 w-3" />
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label>Price Range</Label>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) =>
              handlePriceRangeChange(value as [number, number])
            }
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Trust Score Range */}
      <div className="space-y-3">
        <Label>Trust Score Range</Label>
        <div className="px-2">
          <Slider
            value={filters.trustScoreRange}
            onValueChange={(value) =>
              handleTrustScoreRangeChange(value as [number, number])
            }
            max={10}
            min={0}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{filters.trustScoreRange[0].toFixed(1)}</span>
            <span>{filters.trustScoreRange[1].toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
