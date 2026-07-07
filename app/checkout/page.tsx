"use client";

import { Container } from "@/components/ui/Container";

import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <Container>
      <div className="py-10 lg:py-14">
        <div className="mb-10">
          <h1
            className="
              text-3xl
              font-semibold
              text-text-primary
            "
          >
            Checkout
          </h1>

          <p
            className="
              mt-2
              text-text-secondary
            "
          >
            Complete your order details.
          </p>
        </div>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[2fr_1fr]
          "
        >
          <CheckoutForm />

          <aside>
            Order summary coming next...
          </aside>
        </div>
      </div>
    </Container>
  );
}