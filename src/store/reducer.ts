import * as actionTypes from "./actionTypes";
import { Note, NoteAction, NoteState } from "../models";

const initialState: NoteState = {
  notes: [
    {
      id: Math.random().toString(),
      title: "First Note",
      body: "This is my first note, feel free to edit or delete if you'd like",
    },
    {
      id: Math.random().toString(),
      title: "Second Note",
      body: "And this is a second note, I don't know what to post now",
    },
  ],
};

const noteReducer = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      let edit = false;
      const newNotes: Note[] = state.notes.map((note) => {
        if (note.id === action.note.id) {
          edit = true;
          return action.note;
        }
        return note;
      });
      return {
        ...state,
        notes: edit ? newNotes : newNotes.concat(action.note),
      };
    case actionTypes.DELETE_NOTE:
      const updatedNotes: Note[] = state.notes.filter((note) => {
        return note.id !== action.note.id;
      });
      return {
        ...state,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};

export default noteReducer;
