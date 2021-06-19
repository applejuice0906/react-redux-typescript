import React, { useEffect, useState } from "react";
import { Note } from "../models";

type Props = {
  saveNote: (note: Note | any) => void;
  selectedNote: Note | null;
  setSelectedNote: (note: Note | null) => void;
};

const AddNote: React.VFC<Props> = ({
  saveNote,
  selectedNote,
  setSelectedNote,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setTitle(selectedNote?.title || "");
    setBody(selectedNote?.body || "");
  }, [selectedNote]);

  const handleSaveNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveNote({
      id: selectedNote?.id || Math.random().toString(),
      title: title.trim(),
      body: body.trim(),
    });
    setSelectedNote(null);
    setTitle("");
    setBody("");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  return (
    <form className="add-note" onSubmit={handleSaveNote}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleTitleChange}
        value={title}
        required
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleBodyChange}
        value={body}
        required
      />
      <button>Save Note</button>
    </form>
  );
};

export default AddNote;
