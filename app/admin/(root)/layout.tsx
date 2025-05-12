"use client";

import { useSidebar } from "@/app/admin/context/SidebarContext";
import AppHeader from "@/app/admin/layout/AppHeader";
import AppSidebar from "@/app/admin/layout/AppSidebar";
import Backdrop from "@/app/admin/layout/Backdrop";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen ? "ml-0" : isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
