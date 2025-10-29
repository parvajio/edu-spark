import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const WorkspaceProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
        <SidebarTrigger />
      <div>{children}</div>;
    </SidebarProvider>
  );
};

export default WorkspaceProvider;
