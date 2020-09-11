export type id = number | string;

export interface IInitEditorValues {
  html: string;
  css: string;
  js: string;
}

export interface ITask {
  id: id;
  label: JSX.Element;
  //passed?: boolean
}

export interface IExcercise {
  id: id;
  header: string;
  theory: JSX.Element;
  goal: JSX.Element;
  tasks: ITask[];
  initValues: IInitEditorValues;
}

export interface ICourse {
  id: id;
  title: string;
  excercises: IExcercise[];
}
