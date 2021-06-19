export type Note = {
  id: string;
  title: string;
  body: string;
};

export type NoteState = {
  notes: Note[];
};

export type NoteAction = {
  type: string;
  note: Note;
};

export type NoteDispatch = (action: NoteAction) => NoteAction;
