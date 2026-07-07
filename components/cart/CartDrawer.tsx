"use client";

import { useEffect } from "react";
import {
  ShoppingBag,
  Trash2,
  X,
  Minus,
  Plus,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

import { Button } from "@/components/ui/Button";
import { CartEmptyState } from "./CartEmptyState";

import { formatCurrency } from "@/lib/utils/formatCurrency";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  const {
    items,
    subtotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

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
          ${isOpen
            ? "pointer-events-auto opacity-100"
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
          ${isOpen
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
          <div className="flex items-center gap-3">
            <ShoppingBag size={22} />

            <div>
              <h2
                className="
                  text-xl
                  font-semibold
                  text-text-primary
                "
              >
                Shopping Bag
              </h2>

              <p
                className="
                  text-sm
                  text-text-secondary
                "
              >
                {items.length} item
                {items.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

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

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <CartEmptyState
              onContinueShopping={onClose}
            />
          ) : (
            <div className="space-y-4 p-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="
                    flex
                    items-start
                    justify-between
                    rounded-xl
                    border
                    border-border
                    p-4
                  "
                >
                  <div className="space-y-1">
                    <h3
                      className="
                        font-medium
                        text-text-primary
                      "
                    >
                      {item.product.name}
                    </h3>

                    <div
                      className="
    flex
    items-center
    gap-2
  "
                    >
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() =>
                          decreaseQuantity(item.product.id)
                        }
                        className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-border
                        transition-colors
                        hover:bg-surface-secondary
                        "
                      >
                        <Minus size={16} />
                      </button>

                      <span
                        className="
      w-6
      text-center
      text-sm
      font-medium
      text-text-primary
    "
                      >
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          increaseQuantity(item.product.id)
                        }
                        className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-md
      border
      border-border
      transition-colors
      hover:bg-surface-secondary
    "
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p
                      className="
                        text-sm
                        font-medium
                        text-primary
                      "
                    >
                      {formatCurrency(
                        item.product.price
                      )}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label="Remove item"
                    onClick={() =>
                      removeFromCart(
                        item.product.id
                      )
                    }
                    className="
                      rounded-lg
                      p-2
                      text-error
                      transition-colors
                      hover:bg-error-light
                    "
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="
    space-y-5
    border-t
    border-border
    bg-surface
    p-6
  "
        >
          <div
            className="
      flex
      items-center
      justify-between
    "
          >
            <span
              className="
        text-sm
        font-medium
        text-text-secondary
      "
            >
              Subtotal
            </span>

            <span
              className="
        text-lg
        font-semibold
        text-text-primary
      "
            >
              {formatCurrency(subtotal)}
            </span>
          </div>

          <p
            className="
      text-xs
      leading-5
      text-text-muted
    "
          >
            Shipping and bank transfer details will be calculated during checkout.
          </p>

          <Button className="w-full">
            Proceed to Checkout
          </Button>
        </div>
      </aside>
    </>
  );
}