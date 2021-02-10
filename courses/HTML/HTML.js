const HtmlIntro = require("./HTMLIntro.js");
const HtmlDocument = require("./HTMLDocument.js");
const HtmlTable = require("./HTMLTable.js");
const HtmlForm = require("./HTMLForm.js");
const HtmlSemantic = require("./HTMLSemantic.js");

module.exports = {
  id: 1,
  title: "Курс по HTML",
  url: "html",
  info: {
    goal: "HTML - основа вэб-страницы. Весь контент, который вы видите на странице - различные HTML элементы",
    result: "Знание основных HTML элементов, структуры страницы, HTML таблиц и форм, семантический HTML",
    prerequisite: "Ничего. C HTML начинается изучение вэб-разработки",
    followup: "Научитесь стилизовать страницу с помощью CSS",
  },
  lessons: {
    "html-intro": HtmlIntro,
    "html-document": HtmlDocument,
    "html-table": HtmlTable,
    "html-form": HtmlForm,
    "html-semantic": HtmlSemantic,
  },
};
