import { Container } from "@/components/ui/Container";

import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { QuickActions } from "@/components/admin/QuickActions";
import { RecentOrders } from "@/components/admin/RecentOrders";

export default function AdminDashboardPage() {
  return (
    <Container>
      <div
        className="
          py-8
          space-y-8
        "
      >
        <DashboardHeader />

        <DashboardStats />

        <QuickActions />

        <RecentOrders />
      </div>
    </Container>
  );
}