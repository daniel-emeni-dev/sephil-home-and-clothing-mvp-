import { Suspense } from "react";

import { getProducts } from "@/lib/data/products";

import { ShopContent } from "@/components/shop/ShopContent";

export default function ShopPage() {
  const products = getProducts();

  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopContent products={products} />
    </Suspense>
  );
}