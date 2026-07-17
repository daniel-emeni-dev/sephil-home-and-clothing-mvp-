import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type ProductStatus = "In Stock" | "Low Stock" | "Sold Out";

type ProductRow = {
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: ProductStatus;
};

const products: ProductRow[] = [
  {
    name: "Velvet Lounge Chair",
    sku: "VEL-001",
    category: "Furniture",
    price: "₦180,000",
    stock: 12,
    status: "In Stock",
  },
  {
    name: "Marble Side Table",
    sku: "MAR-002",
    category: "Home Decor",
    price: "₦94,000",
    stock: 3,
    status: "Low Stock",
  },
  {
    name: "Satin Throw Blanket",
    sku: "SAT-003",
    category: "Textiles",
    price: "₦36,500",
    stock: 0,
    status: "Sold Out",
  },
];

function getBadgeVariant(status: ProductStatus) {
  switch (status) {
    case "In Stock":
      return "success" as const;
    case "Low Stock":
      return "warning" as const;
    default:
      return "muted" as const;
  }
}

export function ProductTable() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            Product Inventory
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Mock product management UI for the upcoming admin workflow.
          </p>
        </div>

        <Button variant="primary" className="w-full sm:w-auto">
          Add Product
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-text-secondary">
              <th className="px-3 py-2 font-medium">Product</th>
              <th className="px-3 py-2 font-medium">SKU</th>
              <th className="px-3 py-2 font-medium">Category</th>
              <th className="px-3 py-2 font-medium">Price</th>
              <th className="px-3 py-2 font-medium">Stock</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.sku} className="rounded-xl bg-background/70">
                <td className="rounded-l-xl px-3 py-4">
                  <p className="font-medium text-text-primary">{product.name}</p>
                </td>
                <td className="px-3 py-4 text-sm text-text-secondary">{product.sku}</td>
                <td className="px-3 py-4 text-sm text-text-secondary">{product.category}</td>
                <td className="px-3 py-4 text-sm text-text-primary">{product.price}</td>
                <td className="px-3 py-4 text-sm text-text-secondary">{product.stock}</td>
                <td className="px-3 py-4">
                  <Badge variant={getBadgeVariant(product.status)}>{product.status}</Badge>
                </td>
                <td className="rounded-r-xl px-3 py-4">
                  <button className="text-sm font-medium text-primary transition hover:opacity-80">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
