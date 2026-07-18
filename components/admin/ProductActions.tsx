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
    sm:justify-end
  "
>
      <Button
  variant="secondary"
  onClick={onEdit}
  className="
    flex-1
    sm:flex-none
    sm:w-auto
    sm:min-w-28
  "
>
  Edit
</Button>

      <Button
  className="
    flex-1
    sm:flex-none
    sm:w-auto
    sm:min-w-44
  "
>
  {soldOut ? "Mark In Stock" : "Mark Sold Out"}
</Button>
    </div>
  );
}