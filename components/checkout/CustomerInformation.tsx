"use client";

import { Input } from "@/components/ui/Input";
import type { CheckoutFormData } from "./CheckoutForm";

type CustomerInformationProps = {
  formData: CheckoutFormData;
  updateField: (field: keyof CheckoutFormData, value: string) => void;

  errors: Partial<Record<keyof CheckoutFormData, string>>;
};

export function CustomerInformation({
  formData,
  updateField,
  errors,
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
          {errors.fullName && (
            <p className="text-sm text-error">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label>Email Address</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-error">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label>Phone Number</label>
          <Input
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="+234..."
          />
          {errors.phone && <p className="text-sm text-error">{errors.phone}</p>}
        </div>
      </div>
    </section>
  );
}
