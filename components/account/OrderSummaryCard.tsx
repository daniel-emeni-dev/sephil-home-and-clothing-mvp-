import type { Order } from "@/lib/orders";
import { StatusBadge } from "../ui/StatusBadge";

type OrderSummaryCardProps = {
  order: Order;
};

export function OrderSummaryCard({
  order,
}: OrderSummaryCardProps) {
  const totalItems = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2
        className="
          text-lg
          font-semibold
          text-text-primary
        "
      >
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">
            Items
          </span>

          <span className="font-medium text-text-primary">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-text-secondary">
            Payment Status
          </span>

          <StatusBadge
  status={order.paymentStatus}
/>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-text-secondary">
            Order Status
          </span>

          <StatusBadge
  status={order.orderStatus}
/>
        </div>

        <div
          className="
            border-t
            border-border
            pt-4
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-lg
                font-semibold
                text-text-primary
              "
            >
              Total
            </span>

            <span
              className="
                text-xl
                font-semibold
                text-text-primary
              "
            >
              ₦{order.total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}