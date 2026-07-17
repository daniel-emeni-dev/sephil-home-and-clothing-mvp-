type ProductStatusBadgeProps = {
  soldOut: boolean;
};

export function ProductStatusBadge({
  soldOut,
}: ProductStatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        ${
          soldOut
            ? `
              border-status-pending-border
              bg-status-pending
              text-status-pending-text
            `
            : `
              border-status-success-border
              bg-status-success
              text-status-success-text
            `
        }
      `}
    >
      {soldOut ? "Sold Out" : "In Stock"}
    </span>
  );
}