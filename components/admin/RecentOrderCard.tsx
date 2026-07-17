import { StatusBadge } from "@/components/ui/StatusBadge";

type RecentOrderCardProps = {
  id: string;
  customer: string;
  total: string;
  status: "Pending" | "Processing" | "Completed";
};

export function RecentOrderCard({
  id,
  customer,
  total,
  status,
}: RecentOrderCardProps) {
  return (
    <article
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <p
            className="
              text-sm
              text-text-secondary
            "
          >
            {id}
          </p>

          <h3
            className="
              mt-1
              font-medium
              text-text-primary
            "
          >
            {customer}
          </h3>
        </div>

        <StatusBadge status={status} />
      </div>

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-border
          pt-4
        "
      >
        <span className="text-text-secondary">
          Total
        </span>

        <span
          className="
            font-semibold
            text-text-primary
          "
        >
          {total}
        </span>
      </div>
    </article>
  );
}