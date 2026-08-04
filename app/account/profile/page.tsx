import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

import { AccountHeader } from "@/components/account/AccountHeader";
import { AccountNavigation } from "@/components/account/AccountNavigation";
import { AccountSection } from "@/components/account/AccountSection";

const customer = {
  fullName: "Daniel Emeni",
  email: "daniel@example.com",
  phone: "+234 800 000 0000",
  address: "12 Boutique Avenue",
  city: "Port Harcourt",
  state: "Rivers",
};

export default function ProfilePage() {
  return (
    <Section>
      <div className="mx-auto w-full max-w-5xl">

        <AccountHeader
          title="Profile"
          description="Manage your Sephil account."
        />

        <div className="mt-6">
          <AccountNavigation />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

          <AccountSection
            title="Personal Information"
            description="Your account details."
          >
            <div className="space-y-1">
              <p className="font-semibold text-text-primary">
                {customer.fullName}
              </p>
              <p className="text-sm text-text-secondary">
                {customer.email}
              </p>
              <p className="text-sm text-text-secondary">
                {customer.phone}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/account/edit-profile"
                className="text-sm font-medium text-primary hover:underline"
              >
                Edit Profile →
              </Link>
            </div>
          </AccountSection>

          <AccountSection
            title="Default Delivery Address"
            description="Used during checkout."
          >
            <div className="space-y-1">
              <p className="font-medium text-text-primary">
                {customer.address}
              </p>
              <p className="text-sm text-text-secondary">
                {customer.city}
              </p>
              <p className="text-sm text-text-secondary">
                {customer.state}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/account/addresses"
                className="text-sm font-medium text-primary hover:underline"
              >
                Manage Addresses →
              </Link>
            </div>
          </AccountSection>

          <div className="md:col-span-2">
            <AccountSection
              title="Account"
              description="Security and sign out."
            >
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  className="w-full sm:w-fit"
                >
                  Change Password
                </Button>

                <Button className="w-full sm:w-fit">
                  Log Out
                </Button>
              </div>
            </AccountSection>
          </div>

        </div>

      </div>
    </Section>
  );
}