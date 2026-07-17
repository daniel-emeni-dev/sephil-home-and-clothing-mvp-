import { mockProducts } from "@/lib/data/mockProducts";

import { ProductCard } from "./ProductCard";

export function ProductList() {
  return (
    <div
      className="
        mt-6
        space-y-4
      "
    >
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}