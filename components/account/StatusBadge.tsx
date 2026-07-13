import type { Order } from "@/lib/orders";

type StatusBadgeProps = {
  status: Order["orderStatus"];
};

function getStatusClasses(
  status: Order["orderStatus"]
) {
  switch (status) {
    case "Completed":
      return `
        bg-status-success
        text-status-success-text
        border-status-success-border
      `;

    case "Processing":
      return `
        bg-status-processing
        text-status-processing-text
        border-status-processing-border
      `;

    default:
      return `
        bg-status-pending
        text-status-pending-text
        border-status-pending-border
      `;
  }
}

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        w-fit
        items-center
        rounded-full
        border
        px-3
        py-1
        text-sm
        font-medium
        ${getStatusClasses(status)}
      `}
    >
      {status}
    </span>
  );
}