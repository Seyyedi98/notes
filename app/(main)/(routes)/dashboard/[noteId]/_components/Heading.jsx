"use client";
import { useState } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Toolbar from "./Toolbar";
import Cover from "../../../../../../components/Cover";

const Heading = ({ note }) => {
  const [title, setTitle] = useState(note.title);
  const [icon, setIcon] = useState(note.icon);

  return (
    <>
      <Navbar title={title} setTitle={setTitle} icon={icon} setIcon={setIcon} />
      {note.isArchived && (
        <div>
          <Banner note={note} />
        </div>
      )}
      <div className="pb-10">
        <Cover url={note.coverImage} />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-[-10px]">
          <Toolbar
            note={note}
            title={title}
            setTitle={setTitle}
            icon={icon}
            setIcon={setIcon}
          />
        </div>
      </div>
    </>
  );
};

export default Heading;
