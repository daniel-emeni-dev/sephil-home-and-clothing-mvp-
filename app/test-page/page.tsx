"use client";

import { useState } from "react";
import { OtpInput } from "@/components/ui/OtpInput";

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
    </div>
  );
}