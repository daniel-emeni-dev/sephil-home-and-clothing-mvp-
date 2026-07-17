"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils/formatCurrency";

import { Button } from "@/components/ui/Button";

type OrderSummaryProps = {
  deliveryMethod:
    | "standard"
    | "express"
    | "pickup";
};

export function OrderSummary({
  deliveryMethod,
}: OrderSummaryProps) {

  const { items, subtotal, cartCount } = useCart();

  function getDeliveryLabel() {
  switch (deliveryMethod) {
    case "express":
      return "Express Delivery";

    case "pickup":
      return "Store Pickup";

    default:
      return "Standard Delivery";
  }
}

  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="
              flex
              items-center
              justify-between
              text-sm
            "
          >
            <span className="text-text-secondary">
              {item.product.name} × {item.quantity}
            </span>

            <span className="font-medium text-text-primary">
              {formatCurrency(item.product.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div
        className="
          mt-6
          border-t
          border-border
          pt-6
        "
      >
        <div
  className="
    mt-6
    border-t
    border-border
    pt-6
    space-y-4
  "
>
  <div className="flex justify-between">
    <span className="text-text-secondary">
      Items
    </span>

    <span className="font-medium">
      {cartCount}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-text-secondary">
      Delivery
    </span>

    <span
      className="
        text-right
        font-medium
      "
    >
      {getDeliveryLabel()}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-text-secondary">
      Shipping
    </span>

    <span
      className="
        text-right
        text-sm
        text-text-secondary
      "
    >
      {deliveryMethod === "pickup"
        ? "Free"
        : "From ₦2,500"}
    </span>
  </div>

  <div className="flex justify-between border-t border-border pt-4">
    <span className="font-semibold">
      Subtotal
    </span>

    <span className="text-lg font-semibold">
      {formatCurrency(subtotal)}
    </span>
  </div>
</div>

        <p
          className="
            mt-3
            text-xs
            leading-5
            text-text-muted
          "
        >
          Final delivery charges depend on your location and will be confirmed before dispatch.
        </p>
      </div>
    </section>
  );
}
