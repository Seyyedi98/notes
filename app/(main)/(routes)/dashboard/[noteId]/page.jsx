import { getNoteById } from "@/app/_lib/actions";
import Editor from "@/components/Editor";
import Heading from "./_components/Heading";

const NotePage = async ({ params }) => {
  const id = params.noteId;
  const note = await getNoteById(id);

  return (
    <div>
      <Heading note={note} />
      <Editor initialContent={note} />
    </div>
  );
};

export default NotePage;
