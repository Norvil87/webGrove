import { ICourseLesson } from "../../shared/types";

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
        js: "console.log('How', true, new Date())",
      },
      tasks: [],
    },
  ],
};


         
            /* var old = console.log;
            var logger = document.getElementById('console');
            console.log = function (message) {
                if (typeof message == 'object') {
                    logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
                } else {
                    logger.innerHTML += message + '<br />';
                }
            } */
        