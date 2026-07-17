"use client";

import { CustomerInformation } from "./CustomerInformation";
import { DeliveryAddress } from "./DeliveryAddress";
import { DeliveryMethod } from "./DeliveryMethod";

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

  deliveryMethod:
  | "standard"
  | "express"
  | "pickup";
  
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

      <DeliveryMethod
        value={formData.deliveryMethod}
        onChange={(value) =>
          updateField(
            "deliveryMethod",
            value
          )
        }
      />

      <DeliveryAddress
        formData={formData}
        updateField={updateField}
        errors={errors}
      />

    </div>
  );
}