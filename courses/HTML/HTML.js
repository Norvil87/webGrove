"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLIntro_1 = require("./HTMLIntro");
const HTMLDocument_1 = require("./HTMLDocument");
const HTMLTable_1 = require("./HTMLTable");
const HTMLForm_1 = require("./HTMLForm");
const HTMLSemantic_1 = require("./HTMLSemantic");
const Html = {
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
        "html-intro": HTMLIntro_1.HtmlIntro,
        "html-document": HTMLDocument_1.HtmlDocument,
        "html-table": HTMLTable_1.HtmlTable,
        "html-form": HTMLForm_1.HtmlForm,
        "html-semantic": HTMLSemantic_1.HtmlSemantic,
    },
};
exports.default = Html;
