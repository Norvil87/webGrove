import { ICurrentExercise, ICurrentTask, IActionType, IEditorValues, IUser } from "./types";
import { ICourse } from "../types";

export const setEditorValue = (key: string, value: string): IActionType => {
  return {
    type: "SET_EDITOR_VALUE",
    payload: {
      key,
      value,
    },
  };
};

export const setEditorValues = (values: IEditorValues): IActionType => {
  return {
    type: "SET_EDITOR_VALUES",
    payload: {
      values,
    },
  };
};

export const setCurrentExercise = (exercise: ICurrentExercise): IActionType => {
  return {
    type: "SET_CURRENT_EXERCISE",
    payload: {
      exercise,
    },
  };
};

export const setCurrentTasks = (tasks: ICurrentTask[]): IActionType => {
  return {
    type: "SET_CURRENT_TASKS",
    payload: {
      tasks,
    },
  };
};

export const setCourse = (course: ICourse): IActionType => {
  return {
    type: "SET_COURSE",
    payload: {
      course,
    },
  };
};

export const setLessonUrl = (url: string): IActionType => {
  return {
    type: "SET_LESSON_URL",
    payload: {
      url,
    },
  };
};

export const setUser = (user: IUser): IActionType => {
  return {
    type: "SET_USER",
    payload: {
      user,
    },
  };
};
