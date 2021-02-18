import { ITask, ICourse, ICourseLesson, IExcercise } from "../../../shared/types";

export interface IEditorValues {
  [key: string]: string;
}

export interface ICurrentTask extends ITask {
  passed?: boolean;
}

export interface ICurrentExercise extends IExcercise {
  passed: boolean;
  message: string[];
}

export interface IUser {
  id: string;
  email: string;
  username: string;
}

export interface IRootState {
  courseStructure: ICourse;
  currentLesson: ICourseLesson;
  currentExercise: ICurrentExercise;
  editorValues: IEditorValues;
  user: IUser;
}

interface ISetEditorValue {
  type: string;
  payload: { key: string; value: string };
}

interface ISetEditorValues {
  type: string;
  payload: { [index: string]: IEditorValues };
}
interface ISetCurrentExercise {
  type: string;
  payload: { exercise: ICurrentExercise };
}

interface ISetCurrentTasks {
  type: string;
  payload: { tasks: ICurrentTask[] };
}

interface ISetUser {
  type: string;
  payload: { user: IUser };
}

export type IActionType =
  | ISetEditorValues
  | ISetCurrentExercise
  | ISetCurrentTasks
  | ISetEditorValue
  | ISetEditorValues
  | ISetUser;
