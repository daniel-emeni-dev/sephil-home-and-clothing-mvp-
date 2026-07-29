import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";

type OrderStatus = "Pending" | "Processing" | "Completed" | "Paid";

type AdminOrder = {
  id: string;
  customer: string;
  total: string;
  status: OrderStatus;
  createdAt: string;
  method: string;
};

const orders: AdminOrder[] = [
  {
    id: "SPH-1784221164641",
    customer: "Daniel Emeni",
    total: "₦48,500",
    status: "Pending",
    createdAt: "Today • 10:45 AM",
    method: "Bank Transfer",
  },
  {
    id: "SPH-1784221192018",
    customer: "Sarah Johnson",
    total: "₦92,000",
    status: "Processing",
    createdAt: "Today • 09:20 AM",
    method: "Card",
  },
  {
    id: "SPH-1784221204567",
    customer: "Michael James",
    total: "₦31,500",
    status: "Completed",
    createdAt: "Yesterday",
    method: "Cash on Delivery",
  },
];

export function OrderList() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-text-primary">
          Recent Orders
        </h2>

        <Badge variant="muted">3 in queue</Badge>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <article
            key={order.id}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-text-primary">{order.id}</p>
                  <Badge variant="new">{order.method}</Badge>
                </div>

                <p className="mt-2 text-sm text-text-secondary">
                  {order.customer}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {order.createdAt}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <StatusBadge status={order.status} />
                <p className="text-base font-semibold text-text-primary">
                  {order.total}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
