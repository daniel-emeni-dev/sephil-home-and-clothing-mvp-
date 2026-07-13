import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Order } from "@/lib/orders";

type OrderHeaderProps = {
  order: Order;
};

export function OrderHeader({
  order,
}: OrderHeaderProps) {
  return (
    <section className="mb-8">
      <Link
        href="/orders"
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          text-sm
          text-text-secondary
          transition-colors
          hover:text-primary
        "
      >
        <ArrowLeft size={18} />
        Back to Orders
      </Link>

      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-start
          md:justify-between
        "
      >
        <div>
          <h1 className="text-3xl font-semibold">
            Order Details
          </h1>

          <p className="mt-2 text-text-secondary">
            {order.id}
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-medium">
            {order.orderStatus}
          </p>

          <p className="mt-1 text-sm text-text-secondary">
            Placed{" "}
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