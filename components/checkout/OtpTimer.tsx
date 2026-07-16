"use client";

import { useEffect, useState } from "react";

type OtpTimerProps = {
  duration?: number;
  onComplete?: () => void;
};

export function OtpTimer({
  duration = 30,
  onComplete,
}: OtpTimerProps) {
  const [timeLeft, setTimeLeft] =
    useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [timeLeft, onComplete]);

  return (
    <p
      className="
        text-sm
        text-text-secondary
      "
    >
      Resend code in{" "}
      <span
        className="
          font-medium
          text-text-primary
        "
      >
        {timeLeft}s
      </span>
    </p>
  );
}