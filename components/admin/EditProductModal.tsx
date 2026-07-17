"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

import type { Product } from "@/lib/data/mockProducts";

type EditProductModalProps = {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
};

export function EditProductModal({
  isOpen,
  product,
  onClose,
}: EditProductModalProps) {
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-black/35
        backdrop-blur-[2px]
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-xl
          bg-surface
          shadow-sm
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-border
            px-6
            py-5
          "
        >
          <h2
            className="
              text-xl
              font-semibold
              text-text-primary
            "
          >
            Edit Product
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="
              text-text-secondary
              transition-colors
              hover:text-text-primary
            "
          >
            ✕
          </button>
        </div>

        {/* Body */}

        <div
          className="
            max-h-[70vh]
            overflow-y-auto
            px-6
            py-6
            space-y-6
          "
        >
          <div
            className="
              relative
              mx-auto
              h-44
              w-44
              overflow-hidden
              rounded-xl
              border
              border-border
            "
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <Input
            defaultValue={product.name}
            placeholder="Product name"
          />

          <Input
            defaultValue={product.category}
            placeholder="Category"
          />

          <Input
            defaultValue={product.price.toString()}
            placeholder="Price"
          />

          <Textarea
            defaultValue={product.description}
            rows={5}
          />
        </div>

        {/* Footer */}

        <div
          className="
            border-t
            border-border
            px-6
            py-5
          "
        >
          <div
            className="
              flex
              flex-col-reverse
              gap-3
              sm:flex-row
              sm:justify-end
            "
          >
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              className="w-full sm:w-auto"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}