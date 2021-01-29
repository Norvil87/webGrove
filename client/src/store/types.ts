import { ITask, ICourse } from "../types";

export interface IEditorValues {
  [key: string]: string;
}

export interface ICurrentTask extends ITask {
  passed?: boolean;
}

export interface ICurrentExercise {
  exerciseUrl: string;
  exerciseId: number;
  passed: boolean;
  message: string[];
  tasks: ICurrentTask[];
}

export interface IUser {
  id: string;
  email: string;
  username: string;
}

export interface IRootState {
  course: ICourse;
  lessonUrl: string;
  editorValues: IEditorValues;
  currentExercise: ICurrentExercise;
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

interface ISetCourse {
  type: string;
  payload: { course: ICourse };
}

interface ISetLessonUrl {
  type: string;
  payload: { url: string };
}

interface ISetUser {
  type: string;
  payload: { user: IUser };
}

export type IActionType =
  | ISetEditorValues
  | ISetCurrentExercise
  | ISetCurrentTasks
  | ISetCourse
  | ISetEditorValue
  | ISetEditorValues
  | ISetLessonUrl
  | ISetUser;
