import React from "react";
import { ICourse } from "../../../types";

import { HtmlIntro } from "./IntroToHtml";
import { HtmlDocument } from "./HtmlDocument";
import { HtmlTable } from "./HTMLTable";
import { HtmlForm } from "./HTMLForm";
import { HtmlSemantic } from "./HTMLSemantic";

export const Html: ICourse = {
  id: 1,
  title: "Курс по HTML",
  info: {
    goal: "HTML - основа вэб-страницы. Весь контент, который вы видите на странице - различные HTML элементы",
    result: "Знание основных HTML элементов, структуры страницы, HTML таблиц и форм, семантический HTML",
    prerequisite: "Ничего. C HTML начинается изучение вэб-рпазработки",
    followup: "Научитесь стилизовать страницу с помощью CSS",
  },
  lessons: {
    "html-intro": HtmlIntro,
    "html-document": HtmlDocument,
    "html-table": HtmlTable,
    "html-forms": HtmlForm,
    "html-semantic": HtmlSemantic,
  },
};
