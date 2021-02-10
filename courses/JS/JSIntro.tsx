import { ICourseLesson } from "../../../types";

export const JsIntro: ICourseLesson = {
  id: 1,
  title: "Язык программирования Javascript",
  url: "js-intro",
  excercises: [
    {
      id: 1,
      header: "header-js",
      url: "url-js",
      theory: ` <p>Theory JS</p>`,
      goal: `goal-js`,
      initValues: {
        html: "",
        css: "",
        js: "",
      },
      tasks: [],
    },
  ],
};
