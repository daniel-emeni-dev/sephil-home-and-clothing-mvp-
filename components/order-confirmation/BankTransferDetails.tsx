"use client";

import { Button } from "@/components/ui/Button";

import type { Order } from "@/lib/orders";
import { generateWhatsAppMessage } from "@/lib/orders/generateWhatsAppMessage";

type BankTransferDetailsProps = {
  order: Order;
};



export function BankTransferDetails({
  order,
}: BankTransferDetailsProps) {

  function handleWhatsApp() {
  const message =
    generateWhatsAppMessage(order);

  const url =
    `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;

  window.open(url, "_blank");
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
        Bank Transfer Details
      </h2>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-text-secondary
        "
      >
        Kindly complete your payment using the account below.
        Your order will be processed once payment has been confirmed.
      </p>

      <div
        className="
          mt-6
          space-y-4
          rounded-lg
          border
          border-border
          bg-background
          p-4
        "
      >
        <div>
          <p className="text-xs text-text-muted">
            Bank
          </p>

          <p className="mt-1 font-medium">
            Zenith Bank
          </p>
        </div>

        <div>
          <p className="text-xs text-text-muted">
            Account Name
          </p>

          <p className="mt-1 font-medium">
            Sephil Home & Business
          </p>
        </div>

        <div>
          <p className="text-xs text-text-muted">
            Account Number
          </p>

          <p
            className="
              mt-1
              text-lg
              font-semibold
              tracking-wider
            "
          >
            0123456789
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        className="mt-5 w-full"
      >
        Copy Account Number
      </Button>

      <Button
  variant="whatsapp"
  className="mt-3 w-full"
  onClick={handleWhatsApp}
>
  Send Order via WhatsApp
</Button>
    </section>
  );
}