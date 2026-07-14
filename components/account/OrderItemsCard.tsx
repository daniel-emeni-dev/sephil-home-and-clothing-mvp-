import Image from "next/image";

import type { Order } from "@/lib/orders";

type OrderItemsCardProps = {
  order: Order;
};

export function OrderItemsCard({
  order,
}: OrderItemsCardProps) {
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
          text-lg
          font-semibold
          text-text-primary
        "
      >
        Order Items
      </h2>

      <div className="mt-6 space-y-5">
        {order.items.map((item) => {
              const { product } = item;
    return (
          <div
            key={item.product.id}
            className="
              flex
              gap-4
              border-b
              border-border
              pb-5
              last:border-b-0
              last:pb-0
            "
          >
            {/* Product Image */}

            <div
              className="
                relative
                h-24
                w-24
                overflow-hidden
                rounded-lg
                border
                border-border
                bg-background
                shrink-0
              "
            >
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}

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
    mt-2
    inline-flex
    w-fit
    rounded-full
    bg-surface-secondary
    px-2
    py-1
    text-xs
    font-medium
    text-text-secondary
  "
>
  Qty {item.quantity}
</p>
              <p
                className="
                  mt-1
                  text-sm
                  text-text-secondary
                "
              >
                ₦{item.product.price.toLocaleString()} each
              </p>
            </div>

            {/* Item Total */}

            <div
              className="
                 flex
                 flex-col
                 items-end
                 justify-start
              "
            >
              <p
                className="
                  font-semibold
                  text-text-primary
                "
              >
                ₦
                {(
                  item.product.price *
                  item.quantity
                ).toLocaleString()}
              </p>
            </div>
          </div>
        );
})}
      </div>
    </section>
  );
}