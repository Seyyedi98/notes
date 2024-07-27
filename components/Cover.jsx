import { cn } from "@/app/_lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ImageIcon, X } from "lucide-react";
import { useCoverImage } from "@/hooks/useCoverImage";
import { removeCoverImage, updateDashboard } from "@/app/_lib/actions";
import { useParams } from "next/navigation";

const Cover = ({ url, preview }) => {
  const coverImage = useCoverImage();
  const params = useParams();

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && (
        <Image
          src={url}
          fill="Cover"
          className="object-cover"
          alt="cover image"
        />
      )}
      {url && !preview && (
        <div
          className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex transition duration-150
        items-center gap-x-2"
        >
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={coverImage.onOpen}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={() => {
              removeCoverImage({ id: Number(params.noteId) });
              updateDashboard();
            }}
          >
            <X className="h-4 w-4 mr-2" />
            Remove cover
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;
