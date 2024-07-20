"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";
import ItemSkeleton from "./SidebarItemSkeleton";
import { useSearch } from "@/hooks/useSearch";

const SearchItem = ({ active }) => {
  const onOpen = useSearch((store) => store.onOpen);

  return (
    <div
      onClick={onOpen}
      role="button"
      className={cn(
        "group min-h-[27px] pl-3 text-sm py-2 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      <SearchIcon className="shrink-0 h-[18px] mr-2" />
      <span className="truncate">Search</span>{" "}
      <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center ga px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">CTRL </span>+ K
      </kbd>
    </div>
  );
};

export default SearchItem;

<ItemSkeleton />;
