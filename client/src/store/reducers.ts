import { IRootState, IActionType } from "./types";
import { Html } from "../data/courses/HTML/HTML";

const initialState: IRootState = {
  editorValues: {
    html: "",
    css: "",
    js: "",
  },
  currentExercise: {
    exerciseId: null,
    exerciseUrl: null,
    passed: undefined,
    message: ["Тесты не запущены"],
    tasks: [],
  },
  lessonUrl: null,
  course: null,
};

export const reducer = (state: IRootState = initialState, action: any) => {
  switch (action.type) {
    case "SET_EDITOR_VALUE":
      const { key, value } = action.payload;
      const newEditorValues = { ...state.editorValues };
      newEditorValues[key] = value;
      return { ...state, editorValues: newEditorValues };
    case "SET_EDITOR_VALUES":
      return { ...state, editorValues: { ...action.payload.values } };
    case "SET_CURRENT_EXERCISE":
      return { ...state, currentExercise: action.payload.exercise };
    case "SET_CURRENT_TASKS":
      return { ...state, currentExercise: { ...state.currentExercise, tasks: action.payload.tasks } };
    case "SET_COURSE":
      return { ...state, course: action.payload.course };
      case "SET_LESSON_URL":
      return { ...state, lessonUrl: action.payload.url };
    default:
      return state;
  }
};
