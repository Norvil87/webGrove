import { IRootState } from "./types";
import { useReducer } from "react";

const initialState: IRootState = {
  editorValues: {
    html: "",
    css: "",
    js: "",
  },
  currentExercise: {
    id: null,
    header: null,
    theory: null,
    goal: null,
    url: null,
    passed: undefined,
    message: ["Тесты не запущены"],
    tasks: [],
    initValues: null,
  },
  currentLesson: null,
  courseStructure: null,
  user: {
    id: null,
    email: null,
    username: null,
    progress: {},
  },
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
    case "SET_COURSE_STRUCTURE":
      return { ...state, courseStructure: { ...action.payload.courseStructure } };
    case "SET_CURRENT_LESSON":
      return { ...state, currentLesson: action.payload.lesson };
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "UPDATE_USER_PROGRESS":
      const [currentLessonUrl, currentExerciseUrl] = action.payload.urls;
      const progress = JSON.parse(JSON.stringify(state.user.progress));
      const lesson = progress[currentLessonUrl];
      if (lesson) {
        lesson[currentExerciseUrl] = true;
      } else {
        progress[currentLessonUrl] = { [currentExerciseUrl]: true };
      }

      const user = { ...state.user, progress };

      localStorage.setItem("webgroveUser", JSON.stringify(user)); // have to move this somewhere

      return { ...state, user: user };
    default:
      return state;
  }
};
