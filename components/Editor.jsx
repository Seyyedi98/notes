"use client";
import { updateNote } from "@/app/_lib/actions";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { S3 } from "aws-sdk";
import { useTheme } from "next-themes";
import { Suspense, useState } from "react";
import Spinner from "./Spinner";
import uploadFile from "@/app/_lib/uploadFile";

// Our <Editor> component we can reuse later
export default function Editor({ initialContent }) {
  const { resolvedTheme } = useTheme();

  const editor = useCreateBlockNote({
    initialContent: JSON.parse(initialContent.content),
    uploadFile: uploadFile,
  });

  // Renders the editor instance using a React component.
  return (
    <Suspense fallback={<Spinner width="10" height="10" />}>
      <BlockNoteView
        editor={editor}
        onChange={async () =>
          await updateNote({
            id: initialContent.id,
            newContent: JSON.stringify(editor.document),
          })
        }
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </Suspense>
  );
}
