import { ProductCard } from "./ProductCard";
import { mockProducts } from "./mockProducts";

export function ProductGrid() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
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