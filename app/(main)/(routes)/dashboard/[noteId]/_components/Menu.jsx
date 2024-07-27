import { onArchive, onDelete, onRestore } from "@/app/_lib/NotesActions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash, Undo } from "lucide-react";
import { useTransition } from "react";

const Menu = ({ note, user }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end" alignOffset={8}>
        {note.isArchived ? (
          <>
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => onRestore({ id: note.id, startTransition })}
            >
              <Undo className="h-4 w-4 mr-2" />
              <span className="pt-0.5">Restore</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => onDelete({ id: note.id, startTransition })}
            >
              <Trash className="h-4 w-4 mr-2" />
              <span className="pt-0.5">Delete</span>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => onArchive({ id: note.id, startTransition })}
          >
            <Trash className="h-4 w-4 mr-2" />
            <span className="pt-0.5">Delete</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">
          Last edited by: {user?.name}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
