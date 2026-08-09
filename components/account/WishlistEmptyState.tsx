import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function WishlistEmptyState() {
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
        Your wishlist is empty
      </h2>

      <p
        className="
          mt-3
          text-text-secondary
        "
      >
        Save products you love and come back to them anytime.
      </p>

      <Link
        href="/shop"
        className="mt-8 inline-block"
      >
        <Button>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}