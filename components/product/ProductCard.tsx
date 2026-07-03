import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import type { Product } from "@/lib/data/mockProducts";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block"
    >
      <article
        className="
          group
          h-full
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-surface
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-md
        "
      >
        <div className="relative aspect-square overflow-hidden bg-surface-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div className="absolute left-4 top-4">
            <Badge variant="featured">
              Featured
            </Badge>
          </div>
        </div>

        <div className="space-y-4 p-6">
          <p
            className="
              text-sm
              text-text-muted
            "
          >
            {product.category}
          </p>

          <h3
            className="
              line-clamp-2
              text-lg
              font-semibold
              leading-7
              text-text-primary
            "
          >
            {product.name}
          </h3>

          <p
            className="
              text-2xl
              font-semibold
              text-text-primary
            "
          >
            {formatCurrency(product.price)}
          </p>

          <Button
            className="w-full"
            tabIndex={-1}
          >
            Add to Cart
          </Button>
        </div>
      </article>
    </Link>
  );
}