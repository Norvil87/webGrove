"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSIntro_1 = require("./JSIntro");
const Js = {
    id: 1,
    title: "Курс по JavaScript (в разработке)",
    url: "js",
    info: {
        goal: "Умение программировать на Javascript - первый шаг к тому, что бы сделать вашу страницку динамичной",
        result: "Умение работать с базовыми структурами языка - переменными, строками, числами, функциями, объектами",
        prerequisite: "Ничего. Этот курс для приобритения начальных навыков программирования",
        followup: "Научитесь оживлять страницу с помощью JavaScript",
    },
    lessons: {
        "js-intro": JSIntro_1.JsIntro,
    },
};
exports.default = Js;
