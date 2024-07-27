"use client";
import { onDelete, onRestore } from "@/app/_lib/NotesActions";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

const Banner = ({ note }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center
    gap-x-2 justify-center"
    >
      <p>This page is in trash</p>
      <form action={() => onRestore({ id: note.id, startTransition })}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white
        p-1 px-2 h-auto font-normal"
        >
          Restore page
        </Button>
      </form>
      <form
        action={() => {
          onDelete({ id: note.id, startTransition });
        }}
      >
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white
        p-1 px-2 h-auto font-normal"
        >
          Delete forever
        </Button>
      </form>
    </div>
  );
};

export default Banner;
