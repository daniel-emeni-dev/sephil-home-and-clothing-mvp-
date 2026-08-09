"use client";

import { Button } from "@/components/ui/Button";
import { AccountInput } from "@/components/account/AccountInput";

export type AddressFormData = {
  label: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
};

type AddressFormProps = {
  formData: AddressFormData;
  updateField: (
    field: keyof AddressFormData,
    value: string
  ) => void;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => void;
  submitLabel: string;
};

export function AddressForm({
  formData,
  updateField,
  onSubmit,
  submitLabel,
}: AddressFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <AccountInput
        id="label"
        label="Address Label"
        placeholder="Home"
        value={formData.label}
        onChange={(e) =>
          updateField("label", e.target.value)
        }
        required
      />

      <AccountInput
        id="fullName"
        label="Full Name"
        value={formData.fullName}
        onChange={(e) =>
          updateField("fullName", e.target.value)
        }
        required
      />

      <AccountInput
        id="phone"
        label="Phone Number"
        value={formData.phone}
        onChange={(e) =>
          updateField("phone", e.target.value)
        }
        required
      />

      <AccountInput
        id="address"
        label="Street Address"
        value={formData.address}
        onChange={(e) =>
          updateField("address", e.target.value)
        }
        required
      />

      <AccountInput
        id="city"
        label="City"
        value={formData.city}
        onChange={(e) =>
          updateField("city", e.target.value)
        }
        required
      />

      <AccountInput
        id="state"
        label="State"
        value={formData.state}
        onChange={(e) =>
          updateField("state", e.target.value)
        }
        required
      />

      <Button
        type="submit"
        className="w-full"
      >
        {submitLabel}
      </Button>
    </form>
  );
}