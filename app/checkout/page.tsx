"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";

import {
  CheckoutForm,
  type CheckoutFormData,
} from "@/components/checkout/CheckoutForm";
import { BankTransfer } from "@/components/checkout/BankTransfer";
import { OrderSummary } from "@/components/checkout/OrderSummary";

import { validateCheckout } from "@/lib/utils/validateCheckout";
import { OtpVerificationModal } from "@/components/checkout/OtpVerificationModal";

export default function CheckoutPage() {

  const [isOtpOpen, setIsOtpOpen] =
    useState(false);

    const [otp, setOtp] = useState<string[]>(
  Array(6).fill("")
);

const [canResend, setCanResend] =
  useState(false); 

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutFormData, string>>
  >({});

  useEffect(() => {
    if (isOtpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOtpOpen]);


  const { items } = useCart();
  function handlePlaceOrder() {
    const validationErrors = validateCheckout(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (items.length === 0) {
      return;
    }

    setIsOtpOpen(true);

  }
  function updateField(field: keyof CheckoutFormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }
  return (
    <Container>
      <OtpVerificationModal
  isOpen={isOtpOpen}
  email={formData.email}
  otp={otp}
  onOtpChange={setOtp}
  canResend={canResend}
  onTimerComplete={() =>
    setCanResend(true)
  }
  onResend={() => {
    setCanResend(false);
    setOtp(Array(6).fill(""));
    console.log("Resend OTP");
  }}
  onVerify={() => {
    console.log(
      "OTP:",
      otp.join("")
    );
  }}
  onClose={() => {
  setIsOtpOpen(false);
  setOtp(Array(6).fill(""));
  setCanResend(false);
}}
/>
      <div
  className="
    py-8
    pb-24
    lg:py-14
  "
>
        <div className="mb-10">
          <h1
            className="
              text-3xl
              font-semibold
              text-text-primary
            "
          >
            Checkout
          </h1>

          <p
            className="
              mt-2
              text-text-secondary
            "
          >
            Complete your order details.
          </p>
        </div>

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[2fr_1fr]
          "
        >
          <CheckoutForm
            formData={formData}
            updateField={updateField}
            errors={errors}
          />

          <aside
            className="
    space-y-6
    lg:sticky
    lg:top-24
    lg:self-start
  "
          >
            <OrderSummary />

            <BankTransfer onPlaceOrder={handlePlaceOrder} />
          </aside>
        </div>
      </div>
    </Container>

  );
}
