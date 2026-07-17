"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CreateAccountPrompt() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Save your details
      </h2>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-text-secondary
        "
      >
        Want a faster checkout next time?
        Create a free account and we'll remember your
        delivery information, order history and wishlist.
      </p>

      <Link
        href="/account/register"
        className="block mt-6"
      >
        <Button className="w-full">
          Create Free Account
        </Button>
      </Link>

      <p
        className="
          mt-4
          text-center
          text-xs
          text-text-muted
        "
      >
        Your checkout information will already be filled in.
        You'll only need to choose a password.
      </p>
    </section>
  );
}