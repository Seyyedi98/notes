const { Skeleton } = require("@/components/ui/skeleton");

export default function ItemSkeleton({ level, showSkeleton }) {
  if (showSkeleton)
    return (
      <div
        style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
        className="flex gap-x-2 py-[3px]"
      >
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-[30%]" />
      </div>
    );
  return null;
}
