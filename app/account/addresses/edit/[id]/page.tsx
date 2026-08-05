"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/Container";

import { AccountCard } from "@/components/account/AccountCard";
import { AccountHeader } from "@/components/account/AccountHeader";

import {
  AddressForm,
  type AddressFormData,
} from "@/components/account/AddressForm";

export default function EditAddressPage() {
  const [formData, setFormData] =
    useState<AddressFormData>({
      label: "Home",
      fullName: "Daniel Emeni",
      phone: "+234 XXX XXX XXXX",
      address: "12 Ada George Road",
      city: "Port Harcourt",
      state: "Rivers",
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
    // Update address in Supabase later.

    console.log(formData);
  }

  return (
    <Container>
      <div className="mx-auto max-w-2xl py-10 lg:py-14">

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

        <AccountCard>
          <AccountHeader
            title="Edit Address"
            description="Update your saved delivery address."
          />

          <div className="mt-8">
            <AddressForm
              formData={formData}
              updateField={updateField}
              onSubmit={handleSubmit}
              submitLabel="Update Address"
            />
          </div>
        </AccountCard>

      </div>
    </Container>
  );
}