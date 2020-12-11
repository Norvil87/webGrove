import { ICourse } from "../../../types";
import { CssSelectors } from "./CSSSelector";
import { CssText } from "./CSSText";
import { CssUnits } from "./CSSUnits";

export const Css: ICourse = {
  id: 1,
  title: "Курс по CSS (в разработке)",
  url: "css",
  info: {
    goal:
      "CSS отвечает за внешний вид вэб-страницы. Все правила оформления и раскладка блоков страницы - различные CSS стили",
    result: "Умение стилизовать текст, фоновые изображения, управление раскладкой страницы",
    prerequisite: "Пройдите курс по HTML. Все стилевые правила применяются к HTML элементам",
    followup: "Сделайте страницу динамичной с помощью JavaScript. Для начала научитесь программировать на JS.",
  },
  lessons: {
    "css-selectors": CssSelectors,
    "css-text": CssText,
    "css-units": CssUnits,
  },
};
