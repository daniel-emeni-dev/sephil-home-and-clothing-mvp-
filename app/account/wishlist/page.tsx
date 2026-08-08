"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";

import type { Product } from "@/lib/data/products";
import { getWishlist } from "@/lib/wishlist";

import { WishlistGrid } from "@/components/account/WishlistGrid";
import { WishlistEmptyState } from "@/components/account/WishlistEmptyState";

export default function WishlistPage() {
  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    setProducts(getWishlist());
  }, []);

  return (
    <Container>
      <div className="py-10 lg:py-14">

        <div className="mb-10">
          <h1
            className="
              text-3xl
              font-semibold
              text-text-primary
            "
          >
            Wishlist
          </h1>

          <p
            className="
              mt-2
              text-text-secondary
            "
          >
            Products you've saved for later.
          </p>
        </div>

        {products.length === 0 ? (
          <WishlistEmptyState />
        ) : (
          <WishlistGrid
            initialProducts={products}
          />
        )}
      </div>
    </Container>
  );
}