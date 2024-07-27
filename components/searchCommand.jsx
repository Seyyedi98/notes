"use client";

import { useSearch } from "@/hooks/useSearch";
import { File } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

const SearchCommand = ({ user, notes }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  // To prevent from hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);
  //   if (!isMounted) return null;

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id) => {
    router.push(`/dashboard/${id}`);
    onClose();
  };

  if (!isMounted) return null;

  return (
    <Command>
      <CommandDialog open={isOpen} onOpenChange={onClose}>
        <CommandInput placeholder={`Search ${user?.name}'s notes...`} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documents">
            {notes?.map((note) => (
              <CommandItem
                key={note.id}
                value={`${note.title}`}
                title={note.title}
                onSelect={() => onSelect(note.id)}
                className="cursor-pointer"
              >
                {note.icon ? (
                  <p className="mr-2 text-[18px]">{note.icon}</p>
                ) : (
                  <File className="mr-2 w-4 h-4" />
                )}
                <span className={`${note.isArchived && "text-red-500"} `}>
                  {note.title}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Command>
  );
};

export default SearchCommand;
