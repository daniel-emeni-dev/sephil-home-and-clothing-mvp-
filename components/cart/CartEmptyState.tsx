import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/Button";

type CartEmptyStateProps = {
  onContinueShopping: () => void;
};

export function CartEmptyState({
  onContinueShopping,
}: CartEmptyStateProps) {
  return (
    <div
      className="
        flex
        flex-1
        flex-col
        items-center
        justify-center
        px-8
        text-center
      "
    >
      <ShoppingBag
        size={56}
        strokeWidth={1.5}
        className="text-text-muted"
      />

      <h2
        className="
          mt-6
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Your cart is empty
      </h2>

      <p
        className="
          mt-3
          max-w-xs
          text-sm
          leading-7
          text-text-secondary
        "
      >
        Browse our boutique collection and add your
        favourite products to your cart.
      </p>

      <Button
        className="mt-8"
        onClick={onContinueShopping}
      >
        Continue Shopping
      </Button>
    </div>
  );
}