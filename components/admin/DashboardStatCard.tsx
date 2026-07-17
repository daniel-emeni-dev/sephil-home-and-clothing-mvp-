type DashboardStatCardProps = {
  title: string;
  value: string;
};

export function DashboardStatCard({
  title,
  value,
}: DashboardStatCardProps) {
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
      <p
        className="
          text-sm
          text-text-secondary
        "
      >
        {title}
      </p>

      <h2
        className="
          mt-2
          text-2xl
          font-semibold
          text-text-primary
        "
      >
        {value}
      </h2>
    </article>
  );
}