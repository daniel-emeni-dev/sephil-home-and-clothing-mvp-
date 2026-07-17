import { Button } from "@/components/ui/Button";

type ProductActionsProps = {
  soldOut: boolean;
  onEdit: () => void;
};

export function ProductActions({
  soldOut,
  onEdit,
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
  onClick={onEdit}
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