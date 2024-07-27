"use client";

import { getNoteById } from "@/app/_lib/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import { getCurrentUser } from "@/app/_lib/getCurrentUser";

const Navbar = ({ icon, setIcon, title, setTitle }) => {
  const params = useParams();
  const [note, setNote] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function getNote() {
      const note = await getNoteById(params.noteId);
      const user = await getCurrentUser();
      setNote(note);
      setUser(user);
    }
    getNote();
  }, [params.noteId]);

  if (!note) return <Skeleton className="rounded-lg h-8 w-[100px]" />;

  return (
    <>
      <nav className="bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full pl-10 flex items-center gap-x-4">
        <div className="flex items-center justify-between w-full">
          <Title note={note} title={title} setTitle={setTitle} icon={icon} />
          <div className="flex items-center gap-x-2">
            <Menu note={note} user={user} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
