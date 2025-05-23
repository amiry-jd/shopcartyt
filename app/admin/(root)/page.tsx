import DemographicCard from "@/app/admin/components/ecommerce/DemographicCard";
import { EcommerceMetrics } from "@/app/admin/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/app/admin/components/ecommerce/MonthlySalesChart";
import MonthlyTarget from "@/app/admin/components/ecommerce/MonthlyTarget";
import RecentOrders from "@/app/admin/components/ecommerce/RecentOrders";
import StatisticsChart from "@/app/admin/components/ecommerce/StatisticsChart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
