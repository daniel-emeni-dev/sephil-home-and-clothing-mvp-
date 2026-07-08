"use client";

import { CustomerInformation } from "./CustomerInformation";
import { DeliveryAddress } from "./DeliveryAddress";

type CheckoutFormProps = {
  formData: CheckoutFormData;
  updateField: (
    field: keyof CheckoutFormData,
    value: string
  ) => void;

  errors: Partial<
    Record<keyof CheckoutFormData, string>
  >;
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
  errors,
}: CheckoutFormProps) {

  return (
    <div className="space-y-6">
      <CustomerInformation
  formData={formData}
  updateField={updateField}
  errors={errors}
/>

<DeliveryAddress
  formData={formData}
  updateField={updateField}
  errors={errors}
/>
    </div>
  );
}