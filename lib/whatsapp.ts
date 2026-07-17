import type { Order } from "./orders";

const WHATSAPP_NUMBER = "09139690181"; // Replace with Sephil's business number

export function generateWhatsAppMessage(
  order: Order
) {
  const items = order.items
    .map(
      (item) =>
        `• ${item.product.name} × ${
          item.quantity
        } — ₦${(
          item.product.price *
          item.quantity
        ).toLocaleString()}`
    )
    .join("\n");

  return `Hello Sephil Home & Business 👋

I have completed my order.

Order ID:
${order.id}

Customer:
${order.customer.fullName}

Delivery Method:
${order.delivery.method}

Items:
${items}

Total:
₦${order.total.toLocaleString()}

Payment Status:
Pending Bank Transfer

Thank you.`;
}

export function openWhatsApp(
  order: Order
) {
  const message =
    generateWhatsAppMessage(order);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}