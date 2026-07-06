"use client";

import { CartProvider } from "@/context/CartContext";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}