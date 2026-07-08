"use client";

import { CustomerInformation } from "./CustomerInformation";
import { DeliveryAddress } from "./DeliveryAddress";

type CheckoutFormProps = {
  formData: CheckoutFormData;
  updateField: (
    field: keyof CheckoutFormData,
    value: string
  ) => void;
};

export type CheckoutFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
};

export function CheckoutForm({
  formData,
  updateField,
}: CheckoutFormProps) {

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