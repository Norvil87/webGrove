export type id = number | string;

export enum ResultMessage {
  SUCCESS = "Поздравляем! Все тесты пройдены",
  FAIL = `Без паники! Внимательно просмотрите код и попробуйте еще раз`,
}

export interface IInitEditorValues {
  html: string;
  css: string;
  js: string;
}

export interface ITask {
  id: id;
  label: string;
  failMsg: string;
  test: (iframe: HTMLElement) => boolean;
}

export interface IExcercise {
  id: id;
  header: string;
  theory: string;
  goal: string;
  tasks: ITask[];
  initValues: IInitEditorValues;
  solution?: string;
}

export interface ICourse {
  id: id;
  title: string;
  excercises: IExcercise[];
}
