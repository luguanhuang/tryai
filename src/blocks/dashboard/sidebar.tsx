"use client";

import * as React from "react";
import { IconInnerShadowTop } from "@tabler/icons-react";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@/core/i18n/navigation";
import { type Sidebar as SidebarType } from "@/types/blocks/dashboard";
import { SidebarNav } from "./sidebar-nav";
import { SignUser } from "./sign-user";

export function Sidebar({
  data,
  ...props
}: React.ComponentProps<typeof SidebarComponent> & {
  data: SidebarType;
}) {
  return (
    <SidebarComponent collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              {data.brand && (
                <Link href={data.brand.url as string}>
                  <IconInnerShadowTop className="!size-5" />
                  <span className="text-base font-semibold">
                    {data.brand.title}
                  </span>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.main_nav && <SidebarNav data={data.main_nav} />}
        {data.bottom_nav && (
          <SidebarNav data={data.bottom_nav} className="mt-auto" />
        )}
        {/* <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <SignUser nav={data.user_nav || { items: [] }} />
      </SidebarFooter>
    </SidebarComponent>
  );
}
