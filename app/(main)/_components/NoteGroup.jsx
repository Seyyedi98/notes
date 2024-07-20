"use client";

import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import { getChildNotes } from "@/app/_lib/actions";
import ItemSkeleton from "./SidebarItemSkeleton";

const NoteGroup = ({ parentDocumentId, level = 1, notes, user, isTrash }) => {
  const params = useParams();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await getChildNotes(parentDocumentId);
        if (isTrash) {
          result = result.filter((note) => note.isArchived === true);
        } else {
          result = result.filter((note) => note.isArchived === false);
        }
        setData(result);
        return notes;
      } catch (error) {
        console.log("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!loading && data && parentDocumentId) notes = data;

  const onExpand = (noteId) => {
    setIsExpanded((prevExpanded) => ({
      ...prevExpanded,
      [noteId]: !prevExpanded[noteId],
    }));
  };

  const onRedirect = (noteId) => {
    router.push(`/dashboard/${noteId}`);
  };

  return (
    <>
      {!loading && (
        <p
          style={{ paddingLeft: level ? `${level * 12 + 25}px` : "50px" }}
          className={cn(
            "hidden text-sm font-medium text-muted-foreground/80",
            isExpanded && "last:block", // show only when this is an only item in this fragment
            level === 0 && "hidden"
          )}
        >
          No pages inside
        </p>
      )}
      {!loading ? (
        notes?.map((note) => (
          <div key={note.id}>
            <NoteItem
              user={user}
              note={note}
              onClick={() => onRedirect(note.id)}
              icon={FileIcon}
              documentIcon={note.icon}
              // active={params.noteId === note.id}
              level={note.level}
              onExpand={() => onExpand(note.id)}
              isExpanded={isExpanded[note.id]}
              setIsExpanded={setIsExpanded}
              setShowSkeleton={setShowSkeleton}
            />

            {isExpanded[note.id] && (
              <NoteGroup
                parentDocumentId={note.id}
                level={note.level + 1}
                user={user}
                isTrash={isTrash}
              />
            )}
          </div>
        ))
      ) : (
        <ItemSkeleton showSkeleton={true} level={level + 1} />
      )}
    </>
  );
};

export default NoteGroup;
