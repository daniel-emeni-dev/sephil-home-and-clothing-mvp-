"use client";

import { OtpInput } from "@/components/ui/OtpInput";
import { OtpTimer } from "@/components/ui/OtpTimer";
import { ResendOtpButton } from "@/components/ui/ResendOtpButton";
import { Button } from "@/components/ui/Button";

import { useState } from "react";

type OtpVerificationModalProps = {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  onVerify: (code: string) => void;
  onResend: () => void;
};

export function OtpVerificationModal({
  isOpen,
  email,
  onClose,
  onVerify,
  onResend,
}: OtpVerificationModalProps) {
  const [otp, setOtp] = useState(
    Array(6).fill("")
  );

  const [canResend, setCanResend] =
    useState(false);

  if (!isOpen) {
    return null;
  }

  function handleVerify() {
    onVerify(otp.join(""));
  }

  function handleResend() {
    setCanResend(false);
    setOtp(Array(6).fill(""));
    onResend();
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
        bg-black/40
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-[420px]
          rounded-2xl
          bg-surface
          p-6
          shadow-sm
        "
      >
        {/* Header */}

        <div className="text-center">
          <h2
            className="
              text-2xl
              font-semibold
              text-text-primary
            "
          >
            Verify your email
          </h2>

          <p
            className="
              mt-3
              text-sm
              text-text-secondary
            "
          >
            We've sent a 6-digit verification
            code to
          </p>

          <p
            className="
              mt-1
              font-medium
              text-text-primary
              break-all
            "
          >
            {email}
          </p>
        </div>

        {/* OTP */}

        <div className="mt-8">
          <OtpInput
            value={otp}
            onChange={setOtp}
          />
        </div>

        {/* Timer / Resend */}

        <div className="mt-6 text-center">
          {!canResend ? (
            <OtpTimer
              onComplete={() =>
                setCanResend(true)
              }
            />
          ) : (
            <ResendOtpButton
              canResend={canResend}
              onResend={handleResend}
            />
          )}
        </div>

        {/* Verify */}

        <div className="mt-8">
          <Button
            className="w-full"
            onClick={handleVerify}
          >
            Verify
          </Button>
        </div>

        {/* Cancel */}

        <button
          type="button"
          onClick={onClose}
          className="
            mt-4
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