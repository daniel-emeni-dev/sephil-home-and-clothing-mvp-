"use client";

import { useEffect, useState } from "react";
import { CustomerInformationCard } from "./CustomerInformationCard";
import { DeliveryInformationCard } from "./DeliveryInformationCard";
import { OrderSummaryCard } from "./OrderSummaryCard";

import {
  getOrders,
  type Order,
} from "@/lib/orders";
import { OrderHeader } from "./OrderHeader";

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

  return <>
  <OrderHeader order={order} />

  <div className="mt-6 space-y-6">
    <CustomerInformationCard order={order} />

    <DeliveryInformationCard order={order} />

    <OrderSummaryCard order={order} />
  </div>
</>
}