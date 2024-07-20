"use client";

import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import ItemSkeleton from "./SidebarItemSkeleton";

const TrashItem = ({ active }) => {
  return (
    <div
      onClick={() => {}}
      role="button"
      className={cn(
        "group min-h-[27px] pl-3 text-sm py-2 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      <Trash2 className="shrink-0 h-[18px] mr-2" />
      <span className="truncate">Trash box</span>{" "}
      {/* <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center ga px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">CTRL </span>+ K
      </kbd> */}
    </div>
  );
};

export default TrashItem;

<ItemSkeleton />;
