import type { Order } from "@/lib/orders";

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
      <div className="flex items-start justify-between">
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
              font-semibold
              text-text-primary
            "
          >
            {order.id}
          </p>
        </div>

        <span
  className={`
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
          items-end
          justify-between
          border-t
          border-border
          pt-4
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

        <div className="text-right">
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
  );
}