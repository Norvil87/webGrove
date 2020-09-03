import { IRootState } from "./types";

import { ReducerAction } from "react";
import { ActionFromReducer } from "redux";

const initialState: IRootState = {
  editorValue: "",
};

export const reducer = (state: IRootState = initialState, action: any) => {
  switch (action.type) {
    case "SET_EDITOR_VALUE":
      return { ...state, editorValue: action.payload.value };
    default:
      return state;
  }
};
