"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

import {
  CheckoutForm,
  type CheckoutFormData,
} from "@/components/checkout/CheckoutForm";
import { BankTransfer } from "@/components/checkout/BankTransfer";
import { OrderSummary } from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  function updateField(field: keyof CheckoutFormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

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
          <CheckoutForm formData={formData} updateField={updateField} />

          <aside
            className="
    space-y-6
    lg:sticky
    lg:top-24
    lg:self-start
  "
          >
            <OrderSummary />

            <BankTransfer />
          </aside>
        </div>
      </div>
    </Container>
  );
}
