"use client";

import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <CartProvider>
      {children}

      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    </CartProvider>
  );
}