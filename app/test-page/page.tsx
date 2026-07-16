"use client";

import { useState } from "react";
import { OtpInput } from "@/components/ui/OtpInput";
import { OtpTimer } from "@/components/checkout/OtpTimer";
import { ResendOtpButton } from "@/components/ui/ResendOtpButton";

export default function TestPage() {
  const [otp, setOtp] = useState(
    Array(6).fill("")
  );
  const [canResend, setCanResend] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <OtpInput
        value={otp}
        onChange={setOtp}
      />
      <OtpTimer
  onComplete={() =>
    setCanResend(true)
  }
/>

<ResendOtpButton
  canResend={canResend}
  onResend={() => {
    // We'll implement this later
  }}
/>
    </div>
  );
}