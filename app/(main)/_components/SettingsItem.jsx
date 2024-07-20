"use client";

import { cn } from "@/lib/utils";
import { SettingsIcon } from "lucide-react";
import ItemSkeleton from "./SidebarItemSkeleton";
import { useSetting } from "@/hooks/useSettings";

const SettingsItem = ({ active }) => {
  const settings = useSetting();

  return (
    <div
      onClick={settings.onOpen}
      role="button"
      className={cn(
        "group min-h-[27px] pl-3 text-sm py-2 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      <SettingsIcon className="shrink-0 h-[18px] mr-2" />
      <span className="truncate">Settings</span>{" "}
    </div>
  );
};

export default SettingsItem;

<ItemSkeleton />;
