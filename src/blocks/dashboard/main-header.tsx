"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Nav, NavItem } from "@/types/blocks/base";
import { Link } from "@/core/i18n/navigation";

export function MainHeader({
  title,
  description,
  tabs,
}: {
  title?: string;
  description?: string;
  tabs?: NavItem[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold tracking-tight">{title || ""}</h2>
      <p className="text-muted-foreground">{description || ""}</p>
      <div className="relative mt-4">
        <ScrollArea className="w-full lg:max-w-none">
          <div className="space-x-2 flex items-center">
            {tabs?.map((tab) => (
              <div
                key={tab.name || tab.title}
                className={cn(
                  "px-4 py-1 rounded-full border text-sm text-muted-foreground block duration-150",
                  tab.is_active
                    ? "bg-primary text-primary-foreground font-bold"
                    : "hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <Link href={tab.url || ""}>{tab.title}</Link>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>
    </div>
  );
}
