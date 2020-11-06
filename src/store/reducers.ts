import { IRootState, IActionType } from "./types";

const initialState: IRootState = {
  editorValues: {
    html: "",
    css: "",
    js: "",
  },
  currentExercise: {
    lessonUrl: null,
    excersiceId: null,
    excersiceUrl: null,
    passed: undefined,
    message: ["Тесты не запущены"],
  },
  currentTasks: [],
};

export const reducer = (state: IRootState = initialState, action: any) => {
  switch (action.type) {
    case "SET_EDITOR_VALUE":
      return { ...state, editorValues: { ...action.payload.values } };
    case "SET_CURRENT_EXERCISE":
      return { ...state, currentExercise: action.payload.excercise };
    case "SET_CURRENT_TASKS":
      return { ...state, currentTasks: action.payload.tasks };
    default:
      return state;
  }
};
