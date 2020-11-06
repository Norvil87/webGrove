import { ITask } from "../types";

export interface IEditorValues {
  html: string;
  css: string;
  js: string;
}

export interface ICurrentTask extends ITask {
  passed?: boolean;
}

export interface ICurrentExercise {
  excersiceUrl: string;
  excersiceId: number;
  lessonUrl: string;
  passed: boolean;
  message: string[];
}

export interface IRootState {
  editorValues: IEditorValues;
  currentExercise: ICurrentExercise;
  currentTasks: ICurrentTask[];
}

interface ISetEditorValues {
  type: string;
  payload: { values: IEditorValues };
}

interface ISetCurrentEcsercise {
  type: string;
  payload: { excercise: ICurrentExercise };
}

interface ISetCurrentTasks {
  type: string;
  payload: { tasks: ICurrentTask[] };
}

export type IActionType = ISetEditorValues | ISetCurrentEcsercise | ISetCurrentTasks;
