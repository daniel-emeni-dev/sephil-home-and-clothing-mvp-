import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

export function BankTransfer() {
  const { items } = useCart();
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Bank Transfer
      </h2>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-text-secondary
        "
      >
        After placing your order, you'll receive the business bank account
        details for payment. Your order will remain pending until payment is
        confirmed.
      </p>

      <Button disabled={items.length === 0} className="mt-6 w-full">
        Place Order
      </Button>
    </section>
  );
}
