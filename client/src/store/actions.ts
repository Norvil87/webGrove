import { ICurrentExercise, ICurrentTask, IActionType, IEditorValues, IUser } from "./types";
import { ICourse, ICourseLesson } from "../../../shared/types";

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

export const setCourseStructure = (courseStructure: ICourse): IActionType => {
  return {
    type: "SET_COURSE_STRUCTURE",
    payload: {
      courseStructure,
    },
  };
};

export const setCurrentLesson = (lesson: ICourseLesson): IActionType => {
  return {
    type: "SET_CURRENT_LESSON",
    payload: {
      lesson,
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

export const updateUserProgress = (urls: string[]): IActionType => {
  return {
    type: "UPDATE_USER_PROGRESS",
    payload: {
      urls,
    },
  };
};
