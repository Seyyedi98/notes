import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full h-full mt-12 px-4">
      <div className="flex flex-col space-y-3">
        <div className="space-y-2 w-full">
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-96 w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
