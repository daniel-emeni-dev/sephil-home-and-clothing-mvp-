"use client";

import { useEffect, useState } from "react";

import {
  getOrders,
  type Order,
} from "@/lib/orders";

type OrderDetailsClientProps = {
  id: string;
};

export function OrderDetailsClient({
  id,
}: OrderDetailsClientProps) {
  const [order, setOrder] =
    useState<Order | null>(null);

  useEffect(() => {
    const foundOrder = getOrders().find(
      (order) => order.id === id
    );

    if (foundOrder) {
      setOrder(foundOrder);
    }
  }, [id]);

  if (!order) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Order not found
        </h2>

        <p className="mt-2 text-text-secondary">
          We couldn't find this order.
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-semibold">
        Order Details
      </h1>

      <p className="mt-2 text-text-secondary">
        {order.id}
      </p>
    </>
  );
}