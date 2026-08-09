"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import type { Product } from "@/lib/data/products";

import { Button } from "@/components/ui/Button";

import {
  removeFromWishlist,
} from "@/lib/wishlist";

type WishlistCardProps = {
  product: Product;
  onRemove: (id: number) => void;
};

export function WishlistCard({
  product,
  onRemove,
}: WishlistCardProps) {
    const [isRemoving, setIsRemoving] =
  useState(false);
  
  function handleRemove() {
  setIsRemoving(true);

  window.setTimeout(() => {
    removeFromWishlist(product.id);
    onRemove(product.id);
  }, 180);
}

  return (
    <div
  className={`
    overflow-hidden
    rounded-2xl
    border
    border-border
    bg-surface
    transition-all
    duration-200
    ${
      isRemoving
        ? "scale-95 opacity-0"
        : "scale-100 opacity-100"
    }
  `}
>
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">

        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            {product.category}
          </p>

          <h2
            className="
              mt-1
              text-lg
              font-semibold
              text-text-primary
            "
          >
            {product.name}
          </h2>

          <p
            className="
              mt-3
              text-xl
              font-semibold
              text-primary
            "
          >
            ₦{product.price.toLocaleString()}
          </p>
        </div>

        <div className="space-y-3">

          <Link href={`/products/${product.id}`}>
            <Button className="w-full">
              View Product
            </Button>
          </Link>

          <button
  type="button"
  onClick={handleRemove}
  className="
  flex
  w-full
  items-center
  justify-center
  gap-2
  rounded-xl
  border
  border-border
  bg-surface
  px-4
  py-3
  text-sm
  font-medium
  text-primary
  transition-all
  duration-200
  hover:border-primary
  hover:bg-primary/5
  active:scale-95
"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
>
  <Heart
    size={18}
    className="
      fill-primary
      text-primary
    "
  />

  Saved
</button>
        </div>

      </div>
    </div>
  );
}