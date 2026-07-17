import { DashboardStatCard } from "./DashboardStatCard";

export function DashboardStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
      "
    >
      <DashboardStatCard
        title="Products"
        value="32"
      />

      <DashboardStatCard
        title="Orders"
        value="8"
      />

      <DashboardStatCard
        title="Pending"
        value="5"
      />

      <DashboardStatCard
        title="Revenue"
        value="₦245,000"
      />
    </section>
  );
}