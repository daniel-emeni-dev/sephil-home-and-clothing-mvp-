import type { Address } from "@/lib/account/addresses";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type AddressCardProps = {
  address: Address;
};

export function AddressCard({
  address,
}: AddressCardProps) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
        shadow-sm
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2
            className="
              text-lg
              font-semibold
              text-text-primary
            "
          >
            {address.label}
          </h2>

          {address.isDefault && (
            <div className="mt-2">
              <Badge>Default</Badge>
            </div>
          )}
        </div>
      </div>

      <div
        className="
          mt-5
          space-y-2
          text-sm
          text-text-secondary
        "
      >
        <p>{address.fullName}</p>

        <p>{address.phone}</p>

        <p>{address.address}</p>

        <p>
          {address.city}, {address.state}
        </p>
      </div>

      <div
        className="
          mt-6
          flex
          gap-3
        "
      >
        <Link
  href={`/account/addresses/edit/${address.id}`}
  className="flex-1"
>
  <Button
    variant="secondary"
    className="w-full"
  >
    Edit
  </Button>
</Link>

        <Button
          variant="outline"
          className="flex-1"
        >
          Delete
        </Button>
      </div>
    </article>
  );
}