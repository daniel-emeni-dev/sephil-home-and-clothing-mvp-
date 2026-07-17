import { Container } from "@/components/ui/Container";
import { ProductList } from "@/components/admin/ProductList";

export default function AdminProductsPage() {
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
        </div>

        <ProductList />
      </div>
    </Container>
  );
}