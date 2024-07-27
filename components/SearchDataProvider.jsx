import React from "react";
import SearchCommand from "./searchCommand";
import { getCurrentUser } from "@/app/_lib/getCurrentUser";
import { getAllNotes } from "@/app/_lib/actions";

const SearchDataProvider = async () => {
  const user = await getCurrentUser();
  const notes = await getAllNotes(user.id);

  return (
    <div>
      <SearchCommand user={user} notes={notes} />
    </div>
  );
};

export default SearchDataProvider;
