"use client";

import { useEffect, useState } from "react";

import {
  getOrders,
  type Order,
} from "@/lib/orders";
import { ConfirmationSummary } from "./ConfirmationSummary";
import { ConfirmationHero } from "../../app/order-confirmation/ConfirmationHero";
import { ConfirmationActions } from "./ConfirmationActions";

type OrderConfirmationClientProps = {
  orderId?: string;
};

export function OrderConfirmationClient({
  orderId,
}: OrderConfirmationClientProps) {
  const [order, setOrder] =
    useState<Order | null>(null);

  useEffect(() => {
    if (!orderId) return;

    const found = getOrders().find(
      (order) => order.id === orderId
    );

    if (found) {
      setOrder(found);
    }
  }, [orderId]);

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
  <div
    className="
      space-y-8
      lg:space-y-10
      pb-20
      lg:space-y-8
      lg:pb-20
    "
  >
    <ConfirmationHero
      orderId={order.id}
    />
    <ConfirmationSummary order={order} />
    <ConfirmationActions />
  </div>
);
}