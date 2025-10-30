import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./_components/AppSidebar";
import DashboardHeader from "./_components/DashboardHeader";

const WorkspaceProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="w-full">
        <DashboardHeader></DashboardHeader>
        <div className="p-10">

        {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default WorkspaceProvider;
