"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AccountCard } from "@/components/account/AccountCard";
import { AccountHeader } from "@/components/account/AccountHeader";

import {
  AddressForm,
  type AddressFormData,
} from "@/components/account/AddressForm";

export default function NewAddressPage() {
  const [formData, setFormData] =
    useState<AddressFormData>({
      label: "",
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    });

  function updateField(
    field: keyof AddressFormData,
    value: string
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    // TODO:
    // Save address to Supabase later.

    console.log(formData);
  }

  return (
    <Container>
      <div className="mx-auto max-w-2xl py-10 lg:py-14">
        <AccountCard>
          <AccountHeader
            title="Add Address"
            description="Save a delivery address for faster checkout."
          />

          <div className="mt-8">
            <AddressForm
              formData={formData}
              updateField={updateField}
              onSubmit={handleSubmit}
              submitLabel="Save Address"
            />
          </div>
          <Link
  href="/account/addresses"
  className="
    mb-6
    inline-flex
    items-center
    gap-2
    text-sm
    font-medium
    text-text-secondary
    transition-colors
    hover:text-primary
  "
>
  <ArrowLeft size={18} />
  Back to Addresses
</Link>
        </AccountCard>
      </div>
    </Container>
  );
}