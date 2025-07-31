import { SearchFiltersGrid } from "@/components/search-filters";
import { SupplementsGrid } from "@/components/supplement-grid";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">SuppComp</h1>
            <p className="text-sm text-muted-foreground">
              Search, inspect, and compare your favorite supplements 💊
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SearchFiltersGrid />
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            <SupplementsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
