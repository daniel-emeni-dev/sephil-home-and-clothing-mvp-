"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import type { Product } from "@/lib/data/products";
import {
  isInWishlist,
  toggleWishlist,
} from "@/lib/wishlist";

type WishlistButtonProps = {
  product: Product;
};

export function WishlistButton({
  product,
}: WishlistButtonProps) {
  const [saved, setSaved] =
    useState(false);

  useEffect(() => {
    setSaved(
      isInWishlist(product.id)
    );
  }, [product.id]);

  function handleToggle() {
    const result =
      toggleWishlist(product);

    setSaved(result);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={
        saved
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      className="
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-border
        bg-surface
        p-3
        transition-all
        duration-200
        hover:border-primary
        hover:bg-surface-secondary
      "
    >
      <Heart
        size={20}
        className={
          saved
            ? "fill-primary text-primary"
            : "text-text-secondary"
        }
      />
    </button>
  );
}