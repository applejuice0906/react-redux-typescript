import { Note, NoteAction } from "../models";
import { simulateHttpRequest } from "../utils";
import * as actionTypes from "./actionTypes";

export const addNote = (note: Note) => {
  const action: NoteAction = {
    type: actionTypes.ADD_NOTE,
    note,
  };

  return simulateHttpRequest(action);
};

export const deleteNote = (note: Note) => {
  const action: NoteAction = {
    type: actionTypes.DELETE_NOTE,
    note,
  };

  return simulateHttpRequest(action);
};
