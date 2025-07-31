export interface Supplement {
  id: string;
  name: string;
  brand: string;
  category: SupplementCategory;
  primaryIngredient: string;
  trustScore: number; // 0-10
  price: number;
  ingredients: Ingredient[];
  certifications: string[];
  trustScoreBreakdown: TrustScoreBreakdown;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface TrustScoreBreakdown {
  thirdPartyTesting: number; // 0-10
  ingredientTransparency: number; // 0-10
  manufacturingQuality: number; // 0-10
  brandReputation: number; // 0-10
}

export type SupplementCategory =
  | "Creatine"
  | "Fish Oil"
  | "Protein"
  | "Vitamins"
  | "Pre-Workout";

export interface SearchFilters {
  query: string;
  categories: SupplementCategory[];
  priceRange: [number, number];
  trustScoreRange: [number, number];
}

export interface SearchResult {
  supplements: Supplement[];
  total: number;
}

export type SortOption =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "trust-asc"
  | "trust-desc";
