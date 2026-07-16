"use client";

import { useState } from "react";
import { OtpInput } from "@/components/ui/OtpInput";
import { OtpTimer } from "@/components/checkout/OtpTimer";

export default function TestPage() {
  const [otp, setOtp] = useState(
    Array(6).fill("")
  );

  return (
    <div className="flex min-h-screen items-center justify-center">
      <OtpInput
        value={otp}
        onChange={setOtp}
      />
      <OtpTimer />
    </div>
  );
}