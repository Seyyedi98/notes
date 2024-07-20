import {
  onArchive,
  onCreate,
  onDelete,
  onRestore,
} from "@/app/_lib/NotesActions";
import Spinner from "@/components/Spinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Trash,
  Undo,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const NoteItem = ({
  note,
  icon: Icon,
  documentIcon,
  onExpand,
  isExpanded,
  onClick,
  active,
  setShowSkeleton,
  user,
}) => {
  const [isPending, startTransition] = useTransition();
  const { id, title, level, isArchived } = note;
  const router = useRouter();

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onExpand?.();
  };

  const ChaveronIcon = isExpanded ? ChevronDown : ChevronRight;

  return (
    <div
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        "group min-h-[27px] text-sm py-2 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <>
          <div
            role="button"
            className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1"
            onClick={handleExpand}
          >
            <ChaveronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          </div>
        </>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] mr-2" />
      )}
      <span onClick={onClick} className="truncate">
        {title}
      </span>
      <div className="ml-auto flex items-center gap-x-2">
        {!isPending ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation}>
                <div
                  role="button"
                  className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300
                  dark:hover:bg-neutral-600"
                >
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  <DropdownMenuContent
                    className="w-60"
                    align="start"
                    side="right"
                    forceMoun
                  >
                    {!isArchived ? (
                      <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => onArchive({ id, startTransition })}
                      >
                        <div className="flex items-center">
                          <Trash className="w-4 h-4 mr-2" />
                          <span className="mt-0.5">
                            {isPending ? "Deleting..." : "Delete"}
                          </span>
                        </div>
                      </DropdownMenuItem>
                    ) : (
                      <div>
                        <DropdownMenuItem
                          className="hover:cursor-pointer"
                          onClick={() => onRestore({ id, startTransition })}
                        >
                          <Undo className="w-4 h-4 mr-2" />
                          <span className="mt-0.5">
                            {isPending ? "Restoring..." : "Restore"}
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="hover:cursor-pointer"
                          onClick={() => onDelete({ id, startTransition })}
                        >
                          <Trash className="w-4 h-4 mr-2" />
                          <span className="mt-0.5">Delete</span>
                        </DropdownMenuItem>
                      </div>
                    )}
                    <DropdownMenuSeparator />
                    <div className="text-xs text-muted-foreground p-2">
                      Last edited by: {user.name}
                    </div>
                  </DropdownMenuContent>
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>
            {!isArchived && (
              <div
                onClick={() =>
                  onCreate({
                    setShowSkeleton,
                    level,
                    id,
                    onExpand,
                    isExpanded,
                    router,
                  })
                }
                className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
              >
                <Plus className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </>
        ) : (
          <Spinner width="4" height="4" />
        )}
      </div>
    </div>
  );
};

export default NoteItem;
