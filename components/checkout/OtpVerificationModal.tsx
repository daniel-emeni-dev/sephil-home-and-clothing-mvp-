"use client";

import { OtpInput } from "@/components/ui/OtpInput";
import { OtpTimer } from "@/components/ui/OtpTimer";
import { ResendOtpButton } from "@/components/ui/ResendOtpButton";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

type OtpVerificationModalProps = {
  isOpen: boolean;

  title?: string;

  description?: string;

  email: string;

  otp: string[];

  onOtpChange: (value: string[]) => void;

  canResend: boolean;

  onTimerComplete: () => void;

  onResend: () => void;

  onVerify: () => Promise<void>;

  onClose: () => void;
};

export function OtpVerificationModal({
  isOpen,
  title = "Verify your email",
  description = "We've sent a 6-digit verification code to",
  email,
  otp,
  onOtpChange,
  canResend,
  onTimerComplete,
  onResend,
  onVerify,
  onClose,
}: OtpVerificationModalProps) {

  useEffect(() => {
    if (!isOpen) {
      setError("");
      setIsVerifying(false);
    }
  }, [isOpen]);

  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const VERIFY_DELAY = 1000;

  function handleOtpChange(value: string[]) {
    setError("");
    onOtpChange(value);
  }

  async function handleVerify() {
    const code = otp.join("");

    if (code.length !== 6) {
      setError(
        "Please enter the complete verification code."
      );
      return;
    }

    setIsVerifying(true);

    await new Promise((resolve) =>
      setTimeout(resolve, VERIFY_DELAY)
    );

    if (code !== "123456") {
      setError(
        "The verification code is incorrect."
      );

      setIsVerifying(false);

      return;
    }

    await onVerify();

    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    setIsVerifying(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
  fixed
  inset-0
  z-50
  flex
  items-center
  justify-center
  overflow-hidden
  bg-black/35
  backdrop-blur-[2px]
  p-4
"
    >
      <div
        className="
    w-full
    max-w-md
    rounded-xl
    bg-surface
    px-6
    py-8
    shadow-sm
  "
      >
        {/* Header */}

        <div className="text-center">
          <h2
            className="
    text-xl
    sm:text-2xl
    font-semibold
    text-text-primary
  "
          >
            {title}
          </h2>
          <p
            className="
    mt-3
    text-sm
    text-text-secondary
  "
          >
            {description}
          </p>
          <p
            className="
    mt-2
    px-3
    font-medium
    text-text-primary
    break-all
  "
          >
            {email}
          </p>
        </div>

        {/* OTP */}

        <div className="mt-10">
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            disabled={
              isVerifying ||
              otp.join("").length !== 6
            }
          />
        </div>

        {error && (
          <p
            className="
      mt-3
      text-center
      text-sm
      text-status-pending-text
    "
          >
            {error}
          </p>
        )}

        {/* Timer / Resend */}

        <div className="mt-10 text-center">
          {!canResend ? (
            <OtpTimer
              onComplete={onTimerComplete}
            />
          ) : (
            <ResendOtpButton
              canResend={
                canResend && !isVerifying
              }
              onResend={onResend}
            />
          )}
        </div>

        {/* Verify */}

        <div className="mt-10">
          <Button
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full"
          >
            {isVerifying
              ? "Verifying..."
              : "Verify"}
          </Button>
        </div>

        {/* Cancel */}

        <button
          type="button"
          disabled={isVerifying}
          onClick={onClose}
          className="
            mt-6
            w-full
            text-sm
            text-text-secondary
            transition-colors
            hover:text-text-primary
          "
        >
          Cancel
        </button>
      </div>
    </div>
  );
}