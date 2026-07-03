import { ProductCard } from "./ProductCard";

import type { Product } from "@/lib/data/products";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2
          className="
            text-3xl
            font-semibold
            text-text-primary
          "
        >
          You may also like
        </h2>

        <p
          className="
            mt-2
            text-text-secondary
          "
        >
          Explore more carefully selected products from this collection.
        </p>
      </div>

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}