import type { Order } from "@/lib/orders";
import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

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
};

export function OrderCard({
  order,
}: OrderCardProps) {

  const totalItems = order.items.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
    <Link
  href={`/orders/${order.id}`}
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
    flex-col
    gap-4
    sm:flex-row
    sm:items-start
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
            Order ID
          </p>

          <p
            className="
              mt-1
              break-all
              font-semibold
              text-text-primary
            "
          >
            {order.id}
          </p>
        </div>

        <StatusBadge status={order.orderStatus} />
      </div>

      {/* Customer */}
      <div
        className="
          mt-8
          grid
          gap-2
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
        <p className="pt-2 text-sm text-text-secondary">
  {totalItems} {totalItems === 1 ? "item" : "items"}
</p>
      </div>

      {/* Footer */}
      <div
  className="
    mt-6
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
              text-xl
              font-semibold
              text-text-primary
            "
          >
            ₦{order.total.toLocaleString()}
          </p>
        </div>

        <div className="text left sm:text-right">
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
              mt-1
              text-sm
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