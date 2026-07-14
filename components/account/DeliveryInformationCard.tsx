import type { Order } from "@/lib/orders";

type DeliveryInformationCardProps = {
  order: Order;
};

export function DeliveryInformationCard({
  order,
}: DeliveryInformationCardProps) {
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
        Delivery Information
      </h2>

      <div
        className="
          mt-6
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {/* Address */}
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Address
          </p>

          <p
            className="
              mt-1
              font-medium
              text-text-primary
            "
          >
            {order.delivery.address}
          </p>
        </div>

        {/* City */}
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            City
          </p>

          <p
            className="
              mt-1
              font-medium
              text-text-primary
            "
          >
            {order.delivery.city}
          </p>
        </div>

        {/* State */}
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            State
          </p>

          <p
            className="
              mt-1
              font-medium
              text-text-primary
            "
          >
            {order.delivery.state}
          </p>
        </div>
      </div>
    </section>
  );
}