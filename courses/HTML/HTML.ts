import { ICourse } from "../../types";
import { HtmlIntro } from "./HTMLIntro";
import { HtmlDocument } from "./HTMLDocument";
import { HtmlTable } from "./HTMLTable";
import { HtmlForm } from "./HTMLForm";
import { HtmlSemantic } from "./HTMLSemantic";

const Html: ICourse = {
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

export default Html;
