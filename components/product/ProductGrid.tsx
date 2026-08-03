import { ProductCard } from "./ProductCard";
import { Product } from "@/lib/data/products";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({
  products,
}: ProductGridProps) {
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
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}