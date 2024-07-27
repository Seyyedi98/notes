"use clinet";

import { updateNote } from "@/app/_lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

const Title = ({ note, icon, title, setTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleUpdateTitle = async () => {
      if (title !== note.title)
        await updateNote({ id: note.id, newTitle: title });
    };
    handleUpdateTitle();
  }, [title]);

  const activeEditingMode = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  return (
    <div className="flex items-center gap-x-1">
      {!!icon && <p>{icon}</p>}
      {isEditing ? (
        <form
          action={async () => {
            await updateNote({ id: note.id, newTitle: title });
            setIsEditing(false);
          }}
        >
          <Input
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditing(false)}
            className="h-7 px-2 focus-visible:ring-transparent"
          />
        </form>
      ) : (
        <Button
          onClick={activeEditingMode}
          variant="ghost"
          size="md"
          className="font-normal h-auto p-1"
        >
          <span className="truncate">{title}</span>
        </Button>
      )}
    </div>
  );
};

export default Title;
