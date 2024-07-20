"use client";

import { createNote } from "@/app/_lib/actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { PlusCircle } from "lucide-react";
import React from "react";

const CreateNoteButton = () => {
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
    <Button onClick={handleCreateNote}>
      <PlusCircle className="h-4 w-4 mr-2" />
      Create Note
    </Button>
  );
};

export default CreateNoteButton;
