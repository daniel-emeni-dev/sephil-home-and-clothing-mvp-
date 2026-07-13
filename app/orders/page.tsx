"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";

import {
  getOrders,
  type Order,
} from "@/lib/orders";
import { OrderCard } from "@/components/account/OrderCard";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  return (
    <Container>
      <div className="py-10 lg:py-14">
        <div className="mb-10">
          <h1
            className="
              text-3xl
              font-semibold
              text-text-primary
            "
          >
            My Orders
          </h1>

          <p
            className="
              mt-2
              text-text-secondary
            "
          >
            View the status of your previous orders.
          </p>
        </div>

        <div className="mt-8 space-y-5">
  {orders.length === 0 ? (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-8
        text-center
      "
    >
      <p className="text-text-secondary">
        You haven't placed any orders yet.
      </p>
    </div>
  ) : (
    orders.map((order) => (
      <OrderCard
        key={order.id}
        order={order}
      />
    ))
  )}
</div>
      </div>
    </Container>
  );
}