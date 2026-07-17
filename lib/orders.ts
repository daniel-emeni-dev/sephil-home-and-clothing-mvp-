import type { CartItem } from "@/context/CartContext";

const STORAGE_KEY = "sephil-orders";

export function getOrders(): Order[] {
  if (typeof window === "undefined") {
    return [];
  }

  const saved =
    localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

export function saveOrder(
  order: Order
) {
  const orders = getOrders();

  orders.unshift(order);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(orders)
  );
}

export type Order = {
  id: string;

  customer: {
    fullName: string;
    email: string;
    phone: string;
  };

  delivery: {
    address: string;
    city: string;
    state: string;
  };

  items: CartItem[];

  total: number;

  createdAt: string;

  paymentStatus:
    | "Pending"
    | "Paid";

  orderStatus:
    | "Pending"
    | "Processing"
    | "Completed";
};
    
export function generateOrderId() {
  return `SPH-${Date.now()}`;
}