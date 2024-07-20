import {
  getCurrentUserArchivedNotes,
  getCurrentUserNotes,
} from "@/app/_lib/actions";
import { getCurrentUser } from "@/app/_lib/getCurrentUser";
import { PlusCircle, PlusIcon } from "lucide-react";
import AddPage from "./AddPage";
import NoteGroup from "./NoteGroup";
import SearchItem from "./SearchItem";
import SettingsItem from "./SettingsItem";
import Sidebar from "./Sidebar";
import TrashBox from "./TrashBox";
import UserItem from "./UserItem";

const LeftPannel = async () => {
  const user = await getCurrentUser();
  const notes = await getCurrentUserNotes();
  const archivedNotes = await getCurrentUserArchivedNotes();

  return (
    <Sidebar>
      <div>
        <UserItem user={user} />
        <SearchItem />
        <SettingsItem />
      </div>
      <div>
        <AddPage>
          <PlusCircle className="shrink-0 h-[18px] mr-2" />
          <span className="truncate">Create new Note</span>
        </AddPage>
      </div>

      <div className="mt-2 w-full">
        {notes.length > 0 && <NoteGroup user={user} notes={notes} />}
      </div>

      <AddPage>
        <PlusIcon className="shrink-0 h-[18px] mr-2" />
        <span className="truncate"> Add a page</span>
      </AddPage>
      <TrashBox archivedNotes={archivedNotes} user={user} />
    </Sidebar>
  );
};

export default LeftPannel;
