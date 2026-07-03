import Link from "next/link";

import { EmptyState } from "@/components/ui/EmptyState";

type Product = {
  id: number;
  name: string;
  category: string;
};

type SearchResultsProps = {
  results: Product[];
};

export function SearchResults({
  results,
}: SearchResultsProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        shadow-sm
      "
    >
      {results.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try searching for another product or category."
        />
      ) : (
        <ul>
          {results.map((product) => (
            <li key={product.id}>
              <Link
                href="#"
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-border
                  px-5
                  py-4
                  transition-colors
                  duration-200
                  hover:bg-surface-secondary
                  last:border-b-0
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-text-primary
                    "
                  >
                    {product.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-text-secondary
                    "
                  >
                    {product.category}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}