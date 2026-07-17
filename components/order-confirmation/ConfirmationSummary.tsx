import Image from "next/image";

import { formatCurrency } from "@/lib/utils/formatCurrency";
import type { Order } from "@/lib/orders";

type ConfirmationSummaryProps = {
  order: Order;
};

export function ConfirmationSummary({
  order,
}: ConfirmationSummaryProps) {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-5
        sm:p-6
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

      <div className="mt-6 space-y-5">
        {order.items.map((item) => (
          <div
            key={item.product.id}
            className="
              flex
              items-center
              gap-4
            "
          >
            <Image
              src={item.product.image}
              alt={item.product.name}
              width={72}
              height={72}
              className="
                h-[72px]
                w-[72px]
                rounded-lg
                border
                border-border
                object-cover
              "
            />

            <div className="flex-1">
              <h3
                className="
                  font-medium
                  text-text-primary
                "
              >
                {item.product.name}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-text-secondary
                "
              >
                Qty: {item.quantity}
              </p>
            </div>

            <p
              className="
                font-semibold
                text-text-primary
              "
            >
              {formatCurrency(
                item.product.price * item.quantity
              )}
            </p>
          </div>
        ))}
      </div>

      <div
        className="
          mt-6
          border-t
          border-border
          pt-6
          flex
          justify-between
        "
      >
        <span className="font-medium">
          Total
        </span>

        <span
          className="
            text-lg
            font-semibold
            text-primary
          "
        >
          {formatCurrency(order.total)}
        </span>
      </div>
    </section>
  );
}