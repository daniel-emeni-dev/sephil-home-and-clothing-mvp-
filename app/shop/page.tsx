import { getProducts } from "@/lib/data/products";

import { ShopContent } from "@/components/shop/ShopContent";

export default function ShopPage() {
  const products = getProducts();

  return (
    <ShopContent
      products={products}
    />
  );
}