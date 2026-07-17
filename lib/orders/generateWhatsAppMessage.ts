import type { Order } from "@/lib/orders";

function getDeliveryLabel(
  method: Order["delivery"]["method"]
) {
  switch (method) {
    case "express":
      return "Express Delivery";

    case "pickup":
      return "Store Pickup";

    default:
      return "Standard Delivery";
  }
}

export function generateWhatsAppMessage(
  order: Order
) {
  const items = order.items
    .map(
      (item) =>
        `• ${item.product.name} × ${item.quantity}`
    )
    .join("\n");

  return `Hello Sephil Home & Business,

I have successfully placed an order.

Order ID:
${order.id}

Customer:
${order.customer.fullName}

Phone:
${order.customer.phone}

Delivery Method:
${getDeliveryLabel(
    order.delivery.method
  )}

Delivery Address:
${order.delivery.address},
${order.delivery.city},
${order.delivery.state}

Items:
${items}

Total:
₦${order.total.toLocaleString()}

Thank you.`;
}