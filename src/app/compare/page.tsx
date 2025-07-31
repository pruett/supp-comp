import { ProductComparison } from "@/components/product-comparison";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ ids?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { ids } = await searchParams;

  if (!ids) {
    redirect("/");
  }

  const productIds = ids.split(",").filter(Boolean);

  if (productIds.length !== 2) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Search
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Product Comparison</h1>
          </div>
        </div>
      </header>
      <ProductComparison productIds={productIds} />
    </div>
  );
}
