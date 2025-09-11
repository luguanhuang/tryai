import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { type Dashboard as DashboardType } from "@/types/blocks/dashboard";
import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

export function DashboardLayout({
  children,
  data,
}: {
  children: ReactNode;
  data: DashboardType;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {data.sidebar && (
        <Sidebar
          variant={data.sidebar.variant || "inset"}
          data={data.sidebar}
        />
      )}
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
