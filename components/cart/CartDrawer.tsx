"use client";

import { useEffect } from "react";

import { ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { CartEmptyState } from "./CartEmptyState";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          transition-opacity
          duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          flex
          h-screen
          w-full
          max-w-md
          flex-col
          bg-surface
          shadow-lg
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-border
            px-6
            py-5
          "
        >
          <h2
            className="
              text-xl
              font-semibold
              text-text-primary
            "
          >
            Shopping Bag
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="
              rounded-lg
              p-2
              transition-colors
              hover:bg-surface-secondary
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Placeholder Body */}
        <CartEmptyState
  onContinueShopping={onClose}
/>
      </aside>
    </>
  );
}