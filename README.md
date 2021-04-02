Текучка:

1. Разобраться с типизацией actions
2. Проверки на закрытые тэги в разделе "Знакомство с HTML" (возможно первые упражнения перевести на регулярки)
3. При переходе со страницы курса на главную страницу происходит "прыжок элементов"
4. При закрытии модалок переход должен быть на последнюю страницу а не на главную
5. Нестабильно работает ввод информации в поля форм из-за кастомной валидации
6. Попробовать псевдоселектор :is где есть перечисление CSS классов
7. Использовать scroll-margin-top: 4ex и scroll-behavior: smooth; при перемещении к заголовкам
8. Изменить цвет выделяемого текста
9. Неправильно работает прогресс

Workflow:
1. найти хост для размещения node.js приложения
2. Все сторонние изображения переместить на свой сайт
3. Подключить статистику гугл и яндекс
4. Найти favicon, разработать окончательный вариант логотипа
5. Переработать симулятор с учетом редактора JS
6. Разработать курс "Базовый Javascript"
6.3 Разработать урок "Условия"
- правдивые, ложные
- Truthy and Falsy Assignment // ??
- тернарный оператор
- множественные if...else
- switch
6.4 Разработать урок "Циклы"
6.5 Разработать урок "Массивы"
7. Проверить курс "Базовый Javascript"
7.1 Проверить урок "Основы"
7.2 Проверить урок "Переменные"
7.3 Проверить урок "Условия"
7.4 Проверить урок "Циклы"
7.5 Проверить урок "Массивы"
8. Разработать Урок "Фоны и рамки"

Правки по отдельным урокам:

1. Что делать с HTML за пределами body? (исправить 1.2.1.1, 1.2.1.2, 1.2.2.1, 1.2.2.2, 1.2.3.1, 2.1.2.1)
2. после перевода структуры проекта на code basics исправить проверку href относительных ссылок (исправить 1.2.6, 2.1.3.1)
3. Не проходит проверка на tbody в таблице, так как этот тэг создается автоматически (исправить 1.3.5.2)
4. Не воспроизводится видео с youtube (1.5.5.3)
5. Не удалось выполнить проверки с помощью регулярных выражений (исправить 2.1.7.1 2.1.7.2, 2.1.7.3)
6. Когда шрифты в задании можно будет подключать локально исправить 2.3.10
7. Может неверно проходить проверка регулярныими выражениями, так как двум классам задано 1 свойство с тем же значением (2.4.2.2, 2.4.3)
8. Исправить регулярные выражения после переезда на сервер (2.2.14.3)

Будущие задачи:
1. Оптимизауция SEO
  разработать sitemap
  разработать robots.txt
2. Создание раздела со статьями
 перевести не менее 15 статей
 3. оптимизация производительности
 - добиться LCP < 2.5s
 - FID M 100 ms
 - CLS < 0.1
 - используется ли компрессия текста (Gzip, Brotly)
 - расьровые изображение перевести в WEBP + AVIF, предусмотреть их адаптивность в разметке
 4. Изменить структуру проекта. Статичная посадочная страница + страницы курсов рендеринг на сервере + сам симулятор на клиенте

new webpack.HotModuleReplacementPlugin() ?? для ускорения сборки,
https://github.com/taniarascia/webpack-boilerplate - примеры сборки webpack для developmant и production

https://www.joshwcomeau.com/tutorials/ - оформление страницы со статьями и вообще классные стили сайта

https://htmllessons.ru - пример проекта начального уровня + метатеги + юр инф

проситать побробнее про CDN и надо ли мне их использовать


//////////////////////////////////

article :is(h1, h2) {
  text-decoration: underline;
  text-decoration-color: #cf6a87;
  text-decoration-thickness: 0.5rem;
} для заголовков статей

///////////////////////////

.smol-card-component {
  --img-ratio: 3/2;

  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
  border-radius: 0.5rem;
}

/* Soon we can replace this with: gap: 1rem; */
.smol-card-component > * + * {
  margin-top: 1rem;
}

.smol-card-component > img {
  aspect-ratio: var(--img-ratio);
  object-fit: cover;
  width: 100%;
}

@supports not (aspect-ratio: 1/1) {
  .smol-card-component > img {
    height: max(18vh, 12rem);
  }
}

.smol-card-component > img:first-child {
  border-radius: 0.5rem 0.5rem 0 0;
}

.smol-card-component > img:last-child {
  border-radius: 0 0 0.5rem 0.5rem;
  margin-top: auto;
}

.smol-card-component > *:not(img) {
  margin-left: 1rem;
  margin-right: 1rem;
}

.smol-card-component > :not(img):first-child {
  margin-top: 1rem;
}

.smol-card-component > :last-of-type:not(img):not(:is(h2, h3, h4)) {
  margin-bottom: 1rem;
}

/* Include webkit rule for best current support */
.smol-card-component > :not(:-webkit-any(h2,h3,h4)) {
  font-size: 0.9rem;
}

/* Preferred `:is()` selector for most modern browsers */
.smol-card-component > :not(:is(h2,h3,h4)) {
  font-size: 0.9rem;
}

.smol-card-component > a {
  align-self: start;
} для карточек курсов