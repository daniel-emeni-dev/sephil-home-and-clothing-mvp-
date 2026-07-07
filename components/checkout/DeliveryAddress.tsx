"use client";

import { Textarea } from "@/components/ui/Textarea";
import { Input } from "@/components/ui/Input";
import type { CheckoutFormData } from "./CheckoutForm";

type DeliveryAddressProps = {
  formData: CheckoutFormData;
  updateField: (
    field: keyof CheckoutFormData,
    value: string
  ) => void;
};

export function DeliveryAddress({
  formData,
  updateField,
}: DeliveryAddressProps) {
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
          mb-6
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Delivery Address
      </h2>

      <div className="grid gap-5">
        <div className="space-y-2">
          <label>Street Address</label>
          <Input
            value={formData.address}
            onChange={(e) => updateField("address", e.target.value)}
            placeholder="House number, street..."
          />
        </div>

        <div className="space-y-2">
          <label>City</label>
          <Input
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="Lagos"
          />
        </div>

        <div className="space-y-2">
          <label>State</label>
          <Input
            value={formData.state}
            onChange={(e) => updateField("state", e.target.value)}
            placeholder="Lagos State"
          />
        </div>
      </div>
    </section>
  );
}
