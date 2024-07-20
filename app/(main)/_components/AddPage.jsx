"use client";

import { createNote } from "@/app/_lib/actions";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";

const AddPage = ({ active, children }) => {
  const { toast } = useToast();

  const handleCreateNote = function () {
    try {
      toast({
        description: "Creating a new note...",
      });

      createNote({ level: 1, isChild: false });

      toast({
        variant: "success",
        description: "New Note has been created.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to create a new note.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction onClick={handleCreateNote} altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }
  };

  return (
    <div
      onClick={handleCreateNote}
      role="button"
      className={cn(
        "group min-h-[27px] pl-3 text-sm py-2 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {children}
    </div>
  );
};

export default AddPage;
