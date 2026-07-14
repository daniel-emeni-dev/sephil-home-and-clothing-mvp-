import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Order } from "@/lib/orders";
import { StatusBadge } from "../ui/StatusBadge";

type OrderHeaderProps = {
  order: Order;
};

export function OrderHeader({ order }: OrderHeaderProps) {
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
        <div className="flex items-start justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Order Details</h1>

            <p className="mt-2 text-sm text-text-muted">{order.id}</p>
          </div>
          <div className="shrink-0 pt-1">
            <StatusBadge status={order.orderStatus} />
          </div>
        </div>
        <p className="mt-1 text-sm text-text-secondary">
          Placed{" "}
          {new Date(order.createdAt).toLocaleDateString("en-NG", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
