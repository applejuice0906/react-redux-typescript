import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Note } from "../models";

type Props = {
  note: Note;
  editNote: (note: Note) => void;
  deleteNote: (note: Note) => void;
};

const IndividualNote: React.VFC<Props> = ({ note, editNote, deleteNote }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleDeleteNote = useCallback(
    (note: Note) => dispatch(deleteNote(note)),
    [dispatch, deleteNote]
  );

  return (
    <div className="note">
      <div>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
      </div>
      <div className="button-wrapper">
        <button className="button-edit" onClick={() => editNote(note)}>
          Edit
        </button>
        <button
          className="button-delete"
          onClick={() => handleDeleteNote(note)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IndividualNote;
