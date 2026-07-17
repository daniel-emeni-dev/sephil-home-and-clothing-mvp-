import Link from "next/link";

import { ProductTable } from "@/components/admin/ProductTable";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function AdminProductsPage() {
  return (
    <Container className="py-8">
      <div className="space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm text-text-secondary">Admin / Products</p>
            <h1 className="mt-1 text-3xl font-semibold text-text-primary">
              Product Management
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
              Review inventory, update stock levels, and preview the upcoming product moderation workflow.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-text-primary transition hover:bg-surface-secondary"
            >
              Back to Dashboard
            </Link>
            <Button variant="primary">Add Product</Button>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-text-secondary">Total Products</p>
            <h2 className="mt-2 text-2xl font-semibold text-text-primary">32</h2>
          </article>

          <article className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-text-secondary">In Stock</p>
            <h2 className="mt-2 text-2xl font-semibold text-text-primary">24</h2>
          </article>

          <article className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-text-secondary">Low Stock</p>
            <h2 className="mt-2 text-2xl font-semibold text-text-primary">5</h2>
          </article>
        </section>

        <ProductTable />
      </div>
    </Container>
  );
}
