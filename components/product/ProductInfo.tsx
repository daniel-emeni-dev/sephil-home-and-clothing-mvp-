"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { useCart } from "@/context/CartContext";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

import { formatCurrency } from "@/lib/utils/formatCurrency";

import type { Product } from "@/lib/data/products";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({
  product,
}: ProductInfoProps) {

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };


  return (
    <div
      className="
        flex
        flex-col
        justify-center
        space-y-6
      "
    >
      <Badge variant="featured">
        {product.category}
      </Badge>

      <h1
        className="
          text-4xl
          font-semibold
          tracking-tight
          text-text-primary
        "
      >
        {product.name}
      </h1>

      <p
        className="
          text-3xl
          font-semibold
          text-primary
        "
      >
        {formatCurrency(product.price)}
      </p>

      <p
        className="
          leading-8
          text-text-secondary
        "
      >
        {product.description}
      </p>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            text-sm
            font-medium
            text-text-primary
          "
        >
          Quantity
        </span>

        <div
          className="
            flex
            items-center
            overflow-hidden
            rounded-xl
            border
            border-border
          "
        >
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            className="
              px-4
              py-2
              transition-colors
              hover:bg-surface-secondary
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            −
          </button>

          <span
            className="
              border-x
              border-border
              px-5
              py-2
              font-medium
              text-text-primary
            "
          >
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            className="
              px-4
              py-2
              transition-colors
              hover:bg-surface-secondary
            "
          >
            +
          </button>
        </div>
      </div>

      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
        "
      >
        <Button
          className="flex-1"
          onClick={() => addToCart(product, quantity)}        >
          Add to Cart
        </Button>
        <Button
          variant="whatsapp"
          className="
            flex-1
            gap-2
          "
        >
          <MessageCircle
            size={18}
            strokeWidth={1.8}
          />

          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
}