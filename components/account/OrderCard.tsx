import type { Order } from "@/lib/orders";

type OrderCardProps = {
  order: Order;
};

export function OrderCard({
  order,
}: OrderCardProps) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-6
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

    <h3
      className="
        mt-1
        text-lg
        font-semibold
        text-text-primary
      "
    >
      {order.id}
    </h3>
  </div>

  <span
    className="
      rounded-full
      border
      border-border
      px-3
      py-1
      text-sm
      text-text-secondary
    "
  >
    {order.orderStatus}
  </span>
</div>

{/* Customers */}
<div className="mt-6 space-y-2">
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
</div>

{/* Footer */}
<div
  className="
    mt-6
    flex
    items-center
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

  <div
    className="
      text-right
      text-sm
      text-text-secondary
    "
  >
    {new Date(
      order.createdAt
    ).toLocaleDateString()}
  </div>
</div>
    </section>
  );
}