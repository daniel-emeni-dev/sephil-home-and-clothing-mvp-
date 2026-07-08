import type { CheckoutFormData } from "@/components/checkout/CheckoutForm";

export type CheckoutErrors = Partial<
  Record<keyof CheckoutFormData, string>
>;

export function validateCheckout(
  formData: CheckoutFormData
): CheckoutErrors {
  const errors: CheckoutErrors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Enter a valid email.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!formData.address.trim()) {
    errors.address = "Street address is required.";
  }

  if (!formData.city.trim()) {
    errors.city = "City is required.";
  }

  if (!formData.state.trim()) {
    errors.state = "State is required.";
  }

  return errors;
}