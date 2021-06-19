import { NoteAction, NoteDispatch } from "../models";

export const simulateHttpRequest = (action: NoteAction) => {
  return (dispatch: NoteDispatch) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
};
