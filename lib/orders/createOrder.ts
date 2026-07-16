import {
  generateOrderId,
  saveOrder,
} from "@/lib/orders";

import type { CartItem } from "@/context/CartContext";
import type { CheckoutFormData } from "@/components/checkout/CheckoutForm";

type CreateOrderParams = {
  customer: CheckoutFormData;
  items: CartItem[];
  total: number;
};

export function createOrder({
  customer,
  items,
  total,
}: CreateOrderParams) {
  const order = {
    id: generateOrderId(),

    customer: {
      fullName: customer.fullName,
      email: customer.email,
      phone: customer.phone,
    },

    delivery: {
      address: customer.address,
      city: customer.city,
      state: customer.state,
    },

    items,

    total,

    createdAt: new Date().toISOString(),

    paymentStatus: "Pending" as const,

    orderStatus: "Pending" as const,
  };

  saveOrder(order);

  return order;
}