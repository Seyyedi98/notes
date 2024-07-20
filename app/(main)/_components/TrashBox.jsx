"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import TrashItem from "./TrashItem";
import NoteGroup from "./NoteGroup";
import UseIsMobile from "@/hooks/useIsMobile";

const TrashBox = ({ archivedNotes, user }) => {
  const isMobile = UseIsMobile();

  return (
    <div>
      <Popover>
        <PopoverTrigger className="w-full mt-4">
          <TrashItem />
        </PopoverTrigger>
        <PopoverContent
          side={isMobile ? "bottom" : "right"}
          align="start"
          className="p-0 w-72"
        >
          {archivedNotes.length > 0 ? (
            <NoteGroup user={user} notes={archivedNotes} isTrash={true} />
          ) : (
            <p className="text-sm font-medium text-muted-foreground/80 p-2">
              Trash box is empty
            </p>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TrashBox;
