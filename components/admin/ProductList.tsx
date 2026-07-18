import {
  mockProducts,
  type Product,
} from "@/lib/data/mockProducts";
import { ProductCard } from "./ProductCard";

type ProductListProps = {
  onEdit: (product: Product) => void;
};

export function ProductList({
  onEdit,
}: ProductListProps) {
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
  onEdit={onEdit}
/>
      ))}
    </div>
  );
}