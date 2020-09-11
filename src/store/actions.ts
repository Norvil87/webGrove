import { IEditorValues, ICurrentExercise, ICurrentTask, IActionType } from "./types";

export const setEditorValue = (values: IEditorValues): IActionType => {
  return {
    type: "SET_EDITOR_VALUE",
    payload: {
      values,
    },
  };
};

export const setCurrentExercise = (excercise: ICurrentExercise): IActionType => {
  return {
    type: "SET_CURRENT_EXERCISE",
    payload: {
      excercise,
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
