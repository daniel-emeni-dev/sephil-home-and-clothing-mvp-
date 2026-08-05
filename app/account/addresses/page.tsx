import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import { AddressCard } from "@/components/account/AddressCard";

import { mockAddresses } from "@/lib/account/addresses";
import { AddressesEmptyState } from "@/components/account/AddressesEmptyState";

export default function AddressesPage() {
  return (
    <Container>
      <div className="py-10 lg:py-14">
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div>
            <h1
              className="
                text-3xl
                font-semibold
                text-text-primary
              "
            >
              My Addresses
            </h1>

            <p
              className="
                mt-2
                text-text-secondary
              "
            >
              Manage your saved delivery addresses.
            </p>
          </div>

          <Link href="/account/addresses/new">
            <Button>
              Add Address
            </Button>
          </Link>
        </div>

        <div
          className="
            mt-10
            grid
            gap-6
          "
        >
          {mockAddresses.length === 0 ? (
            <AddressesEmptyState />
          ) : (
            mockAddresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}