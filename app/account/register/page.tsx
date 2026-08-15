"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase/client";

import { AccountCard } from "@/components/account/AccountCard";
import { AccountHeader } from "@/components/account/AccountHeader";
import { AccountInput } from "@/components/account/AccountInput";
import { Button } from "@/components/ui/Button";
import { AccountDivider } from "@/components/account/AccountDivider";
import { AccountSocialLogin } from "@/components/account/AccountSocialLogin";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Your passwords do not match.");
      return;
    }

    if (password.length < 6) {
      toast.error(
        "Your password must be at least 6 characters."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } =
  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/callback`,
      data: {
        full_name: fullName,
      },
    },
  });
      if (error) {
        console.error(
          "[register]",
          error
        );

        toast.error(
          "Unable to create your account. Please try again."
        );

        return;
      }

      if (!data.session) {
        toast.success(
          "Account created. Please check your email to confirm your account."
        );

        return;
      }

      toast.success(
        "Your account has been created."
      );

      router.push("/account");
      router.refresh();
    } catch (error) {
      console.error(
        "[register]",
        error
      );

      toast.error(
        "Something went wrong while creating your account."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AccountCard>
      <AccountHeader
        title="Create Account"
        description="Create your Sephil account to save your details, wishlist and orders."
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <AccountInput
          id="fullName"
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          autoComplete="name"
          value={fullName}
          onChange={(event) =>
            setFullName(event.target.value)
          }
          required
        />

        <AccountInput
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
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
          label="Password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          required
        />

        <AccountInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(event) =>
            setConfirmPassword(
              event.target.value
            )
          }
          required
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Creating Account..."
            : "Create Account"}
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