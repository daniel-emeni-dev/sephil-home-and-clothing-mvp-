import { Container } from "@/components/ui/Container";
import { OrderList } from "@/components/admin/OrderList";

export default function AdminOrdersPage() {
  return (
    <Container>
      <div className="space-y-8 py-8">
        <div>
          <p className="text-sm text-text-secondary">Admin</p>
          <h1 className="mt-1 text-3xl font-semibold text-text-primary">
            Orders Management
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Review incoming orders, delivery status, and payment methods.
          </p>
        </div>

        <OrderList />
      </div>
    </Container>
  );
}
