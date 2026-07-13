import Link from "next/link";
import type { Order } from "@/lib/orders";

type OrderHeaderProps = {
  order: Order;
};

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

export function OrderHeader({
  order,
}: OrderHeaderProps) {
  return (
    <div className="space-y-5">
      {/* Back Link */}
      <Link
        href="/orders"
        className="
          inline-flex
          items-center
          text-sm
          text-text-secondary
          transition-colors
          hover:text-primary
        "
      >
        ← Back to Orders
      </Link>

      {/* Title */}
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
          <p className="text-sm text-text-secondary">
            Order
          </p>

          <h1
            className="
              mt-1
              break-all
              text-2xl
              font-semibold
              text-text-primary
            "
          >
            {order.id}
          </h1>
        </div>

        <span
          className={`
            inline-flex
            w-fit
            rounded-full
            border
            px-3
            py-1
            text-sm
            font-medium
            ${getStatusClasses(order.orderStatus)}
          `}
        >
          {order.orderStatus}
        </span>
      </div>
    </div>
  );
}