"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase/client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

import { AccountHeader } from "@/components/account/AccountHeader";
import { AccountCard } from "@/components/account/AccountCard";
import { AccountInput } from "@/components/account/AccountInput";
import { AccountFooter } from "@/components/account/AccountFooter";
import { AccountDivider } from "@/components/account/AccountDivider";
import { AccountSocialLogin } from "@/components/account/AccountSocialLogin";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        toast.error(
          "Unable to sign in. Please check your email and password."
        );

        return;
      }

      toast.success("Welcome back to Sephil.");

      router.push("/account");
      router.refresh();
    } catch (error) {
      console.error("[login]", error);

      toast.error(
        "Something went wrong while signing in. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section>
      <div className="mx-auto max-w-md">
        <AccountHeader
          title="Welcome Back"
          description="Sign in to your Sephil account."
        />

        <div className="mt-10">
          <AccountCard>
            <AccountSocialLogin />

            <AccountDivider text="or" />

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <AccountInput
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

              <AccountInput
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
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
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting
                  ? "Signing In..."
                  : "Sign In"}
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