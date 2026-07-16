"use client";

import { OtpInput } from "@/components/ui/OtpInput";
import { OtpTimer } from "@/components/ui/OtpTimer";
import { ResendOtpButton } from "@/components/ui/ResendOtpButton";
import { Button } from "@/components/ui/Button";

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

  onVerify: () => void;

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

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        overflow-hidden
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        p-4
        sm:p-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-xl
          bg-surface
          p-5
          sm:p-6
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
            onChange={onOtpChange}
          />
        </div>

        {/* Timer / Resend */}

        <div className="mt-6 text-center">
          {!canResend ? (
            <OtpTimer
              onComplete={onTimerComplete}
            />
          ) : (
            <ResendOtpButton
              canResend={canResend}
              onResend={onResend}
            />
          )}
        </div>

        {/* Verify */}

        <div className="mt-8">
          <Button
            className="w-full"
            onClick={onVerify}
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