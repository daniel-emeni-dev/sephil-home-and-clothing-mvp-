"use client";

import { useState } from "react";

import type { Product } from "@/lib/data/products";

import { WishlistCard } from "./WishlistCard";
import { WishlistEmptyState } from "./WishlistEmptyState";

type WishlistGridProps = {
  initialProducts: Product[];
};

export function WishlistGrid({
  initialProducts,
}: WishlistGridProps) {
  const [products, setProducts] =
    useState(initialProducts);

  function handleRemove(id: number) {
    setProducts((current) =>
      current.filter(
        (product) => product.id !== id
      )
    );
  }

  if (products.length === 0) {
    return <WishlistEmptyState />;
  }

  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {products.map((product) => (
        <WishlistCard
          key={product.id}
          product={product}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
}