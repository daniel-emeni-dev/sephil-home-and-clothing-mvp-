import { CircleCheckBig } from "lucide-react";

type ConfirmationHeroProps = {
  orderId: string;
};

export function ConfirmationHero({
  orderId,
}: ConfirmationHeroProps) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        px-6
        py-8
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-status-success
        "
      >
        <CircleCheckBig
          className="
            h-8
            w-8
            text-status-success-text
          "
        />
      </div>

      <h1
        className="
          mt-6
          text-2xl
          font-semibold
          text-text-primary
          sm:text-3xl
        "
      >
        Order Confirmed
      </h1>

      <p
        className="
          mx-auto
          mt-3
          max-w-md
          text-sm
          leading-6
          text-text-secondary
          sm:text-base
        "
      >
        Thank you for shopping with Sephil Home & Business.
        Your order has been received successfully.

        Please complete your bank transfer using the details below.
        We'll begin processing your order as soon as your payment is confirmed.
      </p>

      <div
        className="
          mt-8
          rounded-xl
          border
          border-border
          bg-background
          px-4
          py-3
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-wide
            text-text-secondary
          "
        >
          Order Number
        </p>

        <p
          className="
            mt-2
            break-all
            font-semibold
            text-text-primary
          "
        >
          {orderId}
        </p>
      </div>
    </section>
  );
}