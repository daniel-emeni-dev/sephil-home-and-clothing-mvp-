"use client";

import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function ConfirmationActions() {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        sm:flex-row
      "
    >
      <Link
        href="/shop"
        className="flex-1"
      >
        <Button
          className="w-full"
        >
          Continue Shopping
        </Button>
      </Link>

      <Link
        href="/orders"
        className="flex-1"
      >
        <Button
          variant="secondary"
          className="w-full"
        >
          View My Orders
        </Button>
      </Link>
    </div>
  );
}