//export type id = number | string;

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
  initValues: IInitEditorValues;
  solution?: string;
}

export interface ICourseBlock {
  id: number;
  title: string;
  url: string;
  excercises: IExcercise[];
}

export interface ICourseBlocks {
  [name: string]: ICourseBlock
}

export interface ICourse {
  id: number;
  title: string;
  blocks: ICourseBlocks;
}
