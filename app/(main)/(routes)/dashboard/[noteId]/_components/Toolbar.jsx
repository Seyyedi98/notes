"use client";
import { removeIcon, updateDashboard, updateNote } from "@/app/_lib/actions";
import IconPicker from "@/components/iconPicker";
import { Button } from "@/components/ui/button";
import { useCoverImage } from "@/hooks/useCoverImage";
import { ImageIcon, Smile, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const Toolbar = ({ note, preview, icon, setIcon, title, setTitle }) => {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const coverImage = useCoverImage();

  useEffect(() => {
    const handleUpdateTitle = async () => {
      if (title !== note.title)
        await updateNote({ id: note.id, newTitle: title });
      updateDashboard();
    };
    handleUpdateTitle();
  }, [title]);

  useEffect(() => {
    const handleUpdateIcon = async () => {
      if (icon !== note.icon) await updateNote({ id: note.id, newIcon: icon });
      updateDashboard();
    };
    handleUpdateIcon();
  }, [icon]);

  const enableInput = () => {
    if (preview) return;
    setIsEditing(true);
    setTimeout(() => {
      setTitle(note.title);
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const disableInput = () => setIsEditing(false);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      disableInput();
    }
  };

  const onSelectIcon = (icon) => {
    setIcon(icon);
  };

  return (
    <div className="pl-[54px] group relative poin">
      {!!note.icon && !preview && (
        <div className="fex items-center gap-x-2 group/icon pt-6">
          <IconPicker onChange={onSelectIcon}>
            <p className="text-6xl hover:opacity-75 transition">{note.icon}</p>
          </IconPicker>
          <Button
            onClick={async () => {
              await removeIcon({ id: note.id });
              setIcon(null);
            }}
            className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs "
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* If guest is looking */}
      {!!note.icon && preview && <p className="text-6xl pt-6">{note.icon}</p>}

      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4 duration-150 ">
        {!note.icon && !preview && (
          <IconPicker asChild onChange={onSelectIcon}>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <Smile className="h-4 w-4 mr-2" />
              Add Icon
            </Button>
          </IconPicker>
        )}
        {!note.coverImage && !preview && (
          <Button
            onClick={coverImage.onOpen}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Add cover
          </Button>
        )}
      </div>
      {isEditing && !preview ? (
        <TextareaAutosize
          ref={inputRef}
          onBlur={disableInput}
          onKeyDown={onKeyDown}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // onChange={(e) => onInput(e.target.value)}
          className="text-5xl bg-transparent font-bold break-words outline-none text-[#3f3f3f]
          dark:text-[#CFCFCF] resize-none"
        ></TextareaAutosize>
      ) : (
        <div
          onClick={enableInput}
          className="pb-[11.5px] text-5xl font-bold break-words text-[#3f3f3f] dark:text-[#CFCFCF] "
        >
          {note.title}
        </div>
      )}
    </div>
  );
};

export default Toolbar;
