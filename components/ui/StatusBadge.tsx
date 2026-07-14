type Status =
  | "Pending"
  | "Processing"
  | "Completed"
  | "Paid";

type StatusBadgeProps = {
  status: Status;
};

function getStatusClasses(status: Status) {
  switch (status) {
    case "Completed":
    case "Paid":
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