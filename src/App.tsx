import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import IndividualNote from "./components/IndividualNote";
import AddNote from "./components/AddNote";
import { addNote, deleteNote } from "./store/actionCreators";
import { NoteState, Note } from "./models";

function App() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const notes: readonly Note[] = useSelector((state: NoteState) => state.notes);
  const dispatch: Dispatch<any> = useDispatch();

  const saveNote = useCallback(
    (note: Note) => {
      dispatch(addNote(note));
    },
    [dispatch]
  );

  const editNote = (note: Note) => {
    setSelectedNote(note);
  };

  return (
    <main>
      <h1>Take a Note</h1>
      <AddNote
        saveNote={saveNote}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
      {notes.map((note: Note) => (
        <IndividualNote
          editNote={editNote}
          deleteNote={deleteNote}
          key={note.id}
          note={note}
        />
      ))}
    </main>
  );
}

export default App;
