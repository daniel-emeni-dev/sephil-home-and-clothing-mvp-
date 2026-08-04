import Link from "next/link";

import { AccountCard } from "@/components/account/AccountCard";
import { AccountHeader } from "@/components/account/AccountHeader";
import { AccountInput } from "@/components/account/AccountInput";
import { Button } from "@/components/ui/Button";
import { AccountDivider } from "@/components/account/AccountDivider";
import { AccountSocialLogin } from "@/components/account/AccountSocialLogin";

export default function RegisterPage() {
  return (
      <AccountCard>
        <AccountHeader
          title="Create Account"
          description="Create your Sephil account to save your details, wishlist and orders."
        />

        <form className="space-y-5">
          <AccountInput
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />

          <AccountInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
          />

          <AccountInput
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <AccountInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <AccountDivider />

        <AccountSocialLogin />

        <p
          className="
            mt-6
            text-center
            text-sm
            text-text-secondary
          "
        >
          Already have an account?{" "}
          <Link
            href="/account/login"
            className="
              font-medium
              text-primary
              hover:underline
            "
          >
            Sign in
          </Link>
        </p>
      </AccountCard>
  );
}