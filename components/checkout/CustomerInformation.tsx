"use client";

import { Input } from "@/components/ui/Input";
import type { CheckoutFormData } from "./CheckoutForm";

type CustomerInformationProps = {
  formData: CheckoutFormData;
  updateField: (field: keyof CheckoutFormData, value: string) => void;
};

export function CustomerInformation({
  formData,
  updateField,
}: CustomerInformationProps) {
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
        Customer Information
      </h2>

      <div className="grid gap-5">
        <div className="space-y-2">
          <label>Full Name</label>
          <Input
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label>Email Address</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label>Phone Number</label>
          <Input
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="+234..."
          />
        </div>
      </div>
    </section>
  );
}
