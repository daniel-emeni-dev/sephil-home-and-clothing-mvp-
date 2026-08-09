"use client";

import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

import { AccountHeader } from "@/components/account/AccountHeader";
import { AccountCard } from "@/components/account/AccountCard";
import { AccountInput } from "@/components/account/AccountInput";
import { AccountFooter } from "@/components/account/AccountFooter";
import { AccountDivider } from "@/components/account/AccountDivider";
import { AccountSocialLogin } from "@/components/account/AccountSocialLogin";

export default function LoginPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Authentication will be wired to Supabase later.
  }

  return (
    <Section>
        <div className="mx-auto max-w-md">
          <AccountHeader
            title="Welcome Back"
            description="Sign in to continue shopping, track your orders, and manage your account."
          />

          <div className="mt-10">
            <AccountCard>
              <AccountSocialLogin />
            
              <AccountDivider text="or" />

              <form
                onSubmit={handleSubmit}
                className="
    space-y-6
  "
              >
                <AccountInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

                <AccountInput
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <div className="flex justify-end">
                  <Link
                    href="/account/forgot-password"
                    className="
                      text-sm
                      font-medium
                      text-primary
                      transition-colors
                      hover:underline
                    "
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                >
                  Sign In
                </Button>
              </form>
            </AccountCard>

            <div className="mt-8">
              <AccountFooter
                text="Don't have an account?"
                linkText="Create Account"
                href="/account/register"
              />
            </div>
          </div>
        </div>
    </Section>
  );
}