"use client";

import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import { getChildNotes, getNoteById } from "@/app/_lib/actions";

const NoteGroup = ({ parentDocumentId, level, note, isChild }) => {
  const params = useParams();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getChildNotes(note.id);
        setData(result);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // if (parentDocumentId) note = getNoteById(parentDocumentId);

  const onExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const onRedirect = (noteId) => {
    router.push(`/documents/${noteId}`);
  };

  return (
    <div className="mb-0.5">
      {true && (
        <NoteItem
          note={note}
          onClick={() => onRedirect(note.id)}
          icon={FileIcon}
          documentIcon={note.icon}
          // active={params.noteId === note.id}
          level={level}
          onExpand={() => onExpand()}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      )}

      {/* TODO:  Check if document has a child note. */}
      {/* {isExpanded && <NoteGroup note={note} level={level + 1} />} */}
      {isExpanded &&
        data.map((child) => (
          <NoteGroup
            key={child.id}
            note={child}
            level={level + 1}
            isChild={true}
          />
        ))}
      {isExpanded && (
        <p
          style={{ paddingLeft: level ? `${level * 12 + 25}px` : "45px" }}
          className={cn(
            "text-sm font-medium text-muted-foreground/80",
            isExpanded && "last:block",
            level === 0 && "hidden"
          )}
        >
          No pages inside
        </p>
      )}
    </div>
  );
};

export default NoteGroup;
