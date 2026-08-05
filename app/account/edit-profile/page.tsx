"use client";

import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

import { AccountHeader } from "@/components/account/AccountHeader";
import { AccountNavigation } from "@/components/account/AccountNavigation";
import { AccountCard } from "@/components/account/AccountCard";
import { AccountInput } from "@/components/account/AccountInput";
import { useState } from "react";

const customer = {
    fullName: "Daniel Emeni",
    email: "daniel@example.com",
    phone: "+234 800 000 0000",
    address: "12 Boutique Avenue",
    city: "Port Harcourt",
    state: "Rivers",
};

export default function EditProfilePage() {

    const [fullName, setFullName] = useState(customer.fullName);
    const [phone, setPhone] = useState(customer.phone);
    const [address, setAddress] = useState(customer.address);
    const [city, setCity] = useState(customer.city);
    const [state, setState] = useState(customer.state);

    async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
        event.preventDefault();

        // TODO:
        // Update customer profile in Supabase.
// TODO:
// Update customer profile in Supabase.
// This will be implemented during the backend integration phase.

console.log({
  fullName,
  phone,
  address,
  city,
  state,
});
}

    return (
        <Section>
            <div className="mx-auto w-full max-w-2xl">
                <AccountHeader
                    title="Edit Profile"
                    description="Update your personal information."
                />

                <div className="mt-8">
                    <AccountNavigation />
                </div>

                <div className="mt-8">
                    <AccountCard>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >


                            <AccountInput
                                id="fullName"
                                label="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />

                            {/* Read-only Email */}

                            <div className="space-y-2">
                                <label
                                    className="
                    text-sm
                    font-medium
                    text-text-primary
                  "
                                >
                                    Email Address
                                </label>

                                <div
                                    className="
                    rounded-xl
                    border
                    border-border
                    bg-surface-secondary
                    p-4
                  "
                                >
                                    <p className="font-medium text-text-primary">
                                        {customer.email}
                                    </p>

                                    <p
                                        className="
                      mt-2
                      text-sm
                      text-text-secondary
                    "
                                    >
                                        Your email is managed through your account security settings.
                                    </p>
                                </div>
                            </div>

                            <AccountInput
                                id="phone"
                                label="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <AccountInput
                                id="address"
                                label="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}

                            />

                            <AccountInput
                                id="city"
                                label="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />

                            <AccountInput
                                id="state"
                                label="State"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />

                            <div
                                className="
                  flex
                  flex-col-reverse
                  gap-3
                  pt-4
                  sm:flex-row
                  sm:justify-end
                "
                            >
                                <Link href="/account/profile">
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="w-full sm:w-auto"
                                    >
                                        Cancel
                                    </Button>
                                </Link>

                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto"
                                >
                                    Save Changes
                                </Button>
                            </div>

                        </form>
                    </AccountCard>
                </div>
            </div>
        </Section>
    );
}