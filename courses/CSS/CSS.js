"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSSSelector_1 = require("./CSSSelector");
const CSSText_1 = require("./CSSText");
const CSSUnits_1 = require("./CSSUnits");
const CSSBoxModel_1 = require("./CSSBoxModel");
const Css = {
    id: 1,
    title: "Курс по CSS",
    url: "css",
    info: {
        goal: "CSS отвечает за внешний вид вэб-страницы. Все правила оформления и раскладка блоков страницы - различные CSS стили",
        result: "Умение стилизовать текст, фоновые изображения, управление раскладкой страницы",
        prerequisite: "Пройдите курс по HTML. Все стилевые правила применяются к HTML элементам",
        followup: "Сделайте страницу динамичной с помощью JavaScript. Для начала научитесь программировать на JS.",
    },
    lessons: {
        "css-selectors": CSSSelector_1.CssSelectors,
        "css-text": CSSText_1.CssText,
        "css-units": CSSUnits_1.CssUnits,
        "css-box-model": CSSBoxModel_1.CssBoxModel,
    },
};
exports.default = Css;
