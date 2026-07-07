"use client";

import { useState } from "react";
import { CustomerInformation } from "./CustomerInformation";
import { DeliveryAddress } from "./DeliveryAddress";

export type CheckoutFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
};

export function CheckoutForm() {
  const [formData, setFormData] =
    useState<CheckoutFormData>({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    });

  function updateField(
    field: keyof CheckoutFormData,
    value: string
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <div className="space-y-6">
      <CustomerInformation
        formData={formData}
        updateField={updateField}
      />

      <DeliveryAddress
        formData={formData}
        updateField={updateField}
      />
    </div>
  );
}