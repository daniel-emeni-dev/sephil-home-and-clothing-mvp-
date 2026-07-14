import type { Order } from "@/lib/orders";

type CustomerInformationCardProps = {
  order: Order;
};

export function CustomerInformationCard({
  order,
}: CustomerInformationCardProps) {
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
        Customer Information
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
        {/* Full Name */}
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Full Name
          </p>

          <p
            className="
              mt-1
              font-medium
              text-text-primary
            "
          >
            {order.customer.fullName}
          </p>
        </div>

        {/* Email */}
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Email
          </p>

          <p
            className="
              mt-1
              break-all
              font-medium
              text-text-primary
            "
          >
            {order.customer.email}
          </p>
        </div>

        {/* Phone */}
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            Phone
          </p>

          <p
            className="
              mt-1
              font-medium
              text-text-primary
            "
          >
            {order.customer.phone}
          </p>
        </div>
      </div>
    </section>
  );
}