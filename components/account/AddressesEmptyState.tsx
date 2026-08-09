import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function AddressesEmptyState() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-10
        text-center
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        No Saved Addresses
      </h2>

      <p
        className="
          mt-3
          text-text-secondary
        "
      >
        Add your first delivery address for a faster checkout experience.
      </p>

      <Link
        href="/account/addresses/new"
        className="mt-8 inline-block"
      >
        <Button>
          Add Address
        </Button>
      </Link>
    </div>
  );
}