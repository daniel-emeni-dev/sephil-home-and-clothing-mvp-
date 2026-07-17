import { Button } from "@/components/ui/Button";

type ProductActionsProps = {
  soldOut: boolean;
};

export function ProductActions({
  soldOut,
}: ProductActionsProps) {
  return (
    <div
      className="
        flex
        gap-3
      "
    >
      <Button
        variant="secondary"
        className="flex-1"
      >
        Edit
      </Button>

      <Button
        className="flex-1"
      >
        {soldOut
          ? "Back In Stock"
          : "Mark Sold Out"}
      </Button>
    </div>
  );
}