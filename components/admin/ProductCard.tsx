import Image from "next/image";

import type { Product } from "@/lib/data/mockProducts";

import { formatCurrency } from "@/lib/utils/formatCurrency";

import { ProductStatusBadge } from "./ProductStatusBadge";
import { ProductActions } from "./ProductActions";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-4
      "
    >
      <div className="flex gap-4">

        <div
          className="
            relative
            h-24
            w-24
            shrink-0
            overflow-hidden
            rounded-lg
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">

          <h2
            className="
              font-semibold
              text-text-primary
            "
          >
            {product.name}
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-text-secondary
            "
          >
            {product.category}
          </p>

          <p
            className="
              mt-3
              text-lg
              font-semibold
              text-text-primary
            "
          >
            {formatCurrency(product.price)}
          </p>

          <div className="mt-4">
            <ProductStatusBadge
              soldOut={product.soldOut}
            />
          </div>

        </div>

      </div>

      <div className="mt-6">
        <ProductActions
          soldOut={product.soldOut}
        />
      </div>
    </section>
  );
}