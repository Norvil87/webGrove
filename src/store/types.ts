import { ITask, id } from "../types";

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
  blockUrl: string;
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
  payload: any;
}

interface ISetCurrentEcsercise {
  type: string;
  payload: any;
}

interface ISetCurrentTasks {
  type: string;
  payload: any;
}

export type IActionType = ISetEditorValues | ISetCurrentEcsercise | ISetCurrentTasks;
