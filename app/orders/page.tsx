"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";

import {
  getOrders,
  type Order,
} from "@/lib/orders";

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

        {orders.length === 0 ? (
          <p className="text-text-secondary">
            You haven't placed any orders yet.
          </p>
        ) : (
          <p>
  {orders.length} {orders.length === 1 ? "order" : "orders"} found.
</p>
        )}
      </div>
    </Container>
  );
}