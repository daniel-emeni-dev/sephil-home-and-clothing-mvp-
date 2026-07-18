"use client";

import { useState } from "react";

import { EditProductModal } from "@/components/admin/EditProductModal";
import type { Product } from "@/lib/data/mockProducts";
import { Container } from "@/components/ui/Container";
import { ProductList } from "@/components/admin/ProductList";
import { Button } from "@/components/ui/Button";

export default function AdminProductsPage() {

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <Container>
      <div
        className="
          py-8
          space-y-8
        "
      >
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Admin
          </p>

          <h1
            className="
              mt-1
              text-3xl
              font-semibold
              text-text-primary
            "
          >
            Products
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-text-secondary
            "
          >
            Manage your products and stock availability.
          </p>
          <div
  className="
    mt-6
    flex
    justify-end
  "
>
  <Button>
    Add Product
  </Button>
</div>
        </div>

        <ProductList
          onEdit={setSelectedProduct}
        />
      </div>
      <EditProductModal
        isOpen={selectedProduct !== null}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Container>
  );
}