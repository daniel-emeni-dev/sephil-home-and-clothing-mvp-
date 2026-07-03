import Image from "next/image";

import type { Product } from "@/lib/data/products";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({
  product,
}: ProductImageGalleryProps) {
  return (
    <div className="space-y-5">
      <div
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-surface-secondary
        "
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="
            (max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            600px
          "
          className="
            object-cover
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        />
      </div>

      <div
        className="
          flex
          gap-3
        "
      >
        <button
          type="button"
          className="
            relative
            h-24
            w-24
            overflow-hidden
            rounded-xl
            border-2
            border-primary
            bg-surface-secondary
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </button>
      </div>
    </div>
  );
}