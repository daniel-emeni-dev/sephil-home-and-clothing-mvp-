import type { Order } from "@/lib/orders";
import Link from "next/link";
import { StatusBadge } from "../ui/StatusBadge";

function getStatusClasses(
  status: Order["orderStatus"]
) {
  switch (status) {
    case "Completed":
      return "bg-status-success text-status-success-text border-status-success-border";

    case "Processing":
      return "bg-status-processing text-status-processing-text border-status-processing-border";

    default:
      return "bg-status-pending text-status-pending-text border-status-pending-border";
  }
}
type OrderCardProps = {
  order: Order;
  href?: string;
};

export function OrderCard({
  order,
  href,
}: OrderCardProps) {

  const totalItems = order.items.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
    <Link
  href={href ?? `/orders/${order.id}`}
  className="block"
>
  <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-sm
      "
    >
      {/* Header */}
      <div
  className="
    flex
    items-start
    justify-between
    gap-4
  "
>
        <div className="min-w-0 flex-1">
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Order ID
          </p>

          <p
            className="
              mt-1
              break-words
              font-semibold
              text-text-primary
            "
          >
            {order.id}
          </p>
        </div>

        <div className="shrink-0">
  <StatusBadge status={order.orderStatus} />
</div>
      </div>

      {/* Customer */}
      <div
  className="
    mt-6
    space-y-3
    text-sm
  "
>
        <p>
          <span className="font-medium">
            Customer:
          </span>{" "}
          {order.customer.fullName}
        </p>

        <p>
          <span className="font-medium">
            Phone:
          </span>{" "}
          {order.customer.phone}
        </p>
        <p className="pt-1 text-sm text-text-secondary">
  {totalItems} {totalItems === 1 ? "item" : "items"}
</p>
      </div>

      {/* Footer */}
      <div
  className="
    mt-8
    flex
    flex-col
    gap-4
    border-t
    border-border
    pt-4
    sm:flex-row
    sm:items-end
    sm:justify-between
  "
> 
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Total
          </p>

          <p
            className="
              mt-1
              text-2xl
              font-semibold
              text-text-primary
            "
          >
            ₦{order.total.toLocaleString()}
          </p>
        </div>

        <div className="text-left sm:text-right">
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Placed on
          </p>

          <p
            className="
              text-sm
              font-medium
              text-text-primary
            "
          >
            {new Date(order.createdAt).toLocaleDateString(
              "en-NG",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </p>
        </div>
      </div>
    </section>
</Link>
  );
}