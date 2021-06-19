import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import noteReducer from "./store/reducer";
import { NoteAction, NoteDispatch, NoteState } from "./models";

const store: Store<NoteState, NoteAction> & {
  dispatch: NoteDispatch;
} = createStore(noteReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
