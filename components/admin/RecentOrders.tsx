import { RecentOrderCard } from "./RecentOrderCard";

const recentOrders = [
  {
    id: "SPH-1784221164641",
    customer: "Daniel Emeni",
    total: "₦48,500",
    status: "Pending",
  },
  {
    id: "SPH-1784221192018",
    customer: "Sarah Johnson",
    total: "₦92,000",
    status: "Processing",
  },
  {
    id: "SPH-1784221204567",
    customer: "Michael James",
    total: "₦31,500",
    status: "Completed",
  },
] as const;

export function RecentOrders() {
  return (
    <section className="space-y-4">
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Recent Orders
      </h2>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <RecentOrderCard
            key={order.id}
            id={order.id}
            customer={order.customer}
            total={order.total}
            status={order.status}
          />
        ))}
      </div>
    </section>
  );
}