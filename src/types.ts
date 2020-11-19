//export type id = number | string;

export enum ResultMessage {
  SUCCESS = "Поздравляем! Все тесты пройдены",
  FAIL = `Без паники! Внимательно просмотрите код и попробуйте еще раз`,
}

export interface IEditorValues {
  [key: string]: string;
}

export interface ITask {
  id: number;
  label: string;
  failMsg: string;
  test: (iframe: HTMLElement) => boolean;
}

export interface IExcercise {
  id: number;
  header: string;
  url: string;
  theory: string;
  goal: string;
  tasks: ITask[];
  initValues: IEditorValues;
  solution?: string;
}

export interface ICourseLesson {
  id: number;
  title: string;
  url: string;
  excercises: IExcercise[];
}

export interface ICourseLessons {
  [name: string]: ICourseLesson;
}

export interface ICourseInfo {
  goal?: string;
  result?: string;
  prerequisite?: string;
  followup?: string;
}

export interface ICourse {
  id: number;
  title: string;
  url: string;
  info: ICourseInfo;
  lessons: ICourseLessons;
}
