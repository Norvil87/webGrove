import React from "react";

export const HtmlCourse = {
  id: 1,
  title: "Базовый HTML",
  excercises: [
    {
      id: 1,
      header: "Давайте поздороваемся с HTML элементами",
      theory: (
        <>
          <p>
            Добро пожаловать в Ваше первое испытание. Шаг за шагом мы пройдем через весь тернистый путь вэб-разработки
          </p>
          <p>
            Давайте начнем с построения простой страницы с использованием HTML. Редактируйте код прямо во встроенном
            редакторе кода справа от Вас.
          </p>
          <p>
            Сейчас код в редакторе просто говорит <code>{"<h2>Привет</h2>"}</code>. <code>{"<h2>"}</code> это HTML
            элемент.
          </p>
          <p>HTML элементы Вы можете узнать по открывающим и закрывающим тэгам.</p>
          <p>Вот так выглядит открывающий тэг:</p>
          <p>
            <code>{"<h2>"}</code>
          </p>
          <p>А вот так закрывающий:</p>
          <p>
            <code>{"</h2>"}</code>
          </p>
          <p>В закрывающем тэге после открывающей скобки стоит прямой слэш, вот и вся разница между ними.</p>
          <p>
            После выполнения каждого задания вы можете проверить решение, нажав на кнопку "Запустить код". Когда все
            задания будут выполнены смело переходите к следующему заданию.
          </p>
        </>
      ),
      goal: (
        <>
          Чтобы пройти это задание сделайте так, чтобы элемент <code>{"<h2>"}</code> отображал текст "Привет HTML".
        </>
      ),
      tasks: [
        {
          id: 1,
          label: (
            <>
              - Ваш элемент <code>{"<h2>"}</code> должен содержать текст "Привет HTML".
            </>
          ),
        },
      ],
      initValues: {
        html: "<h2>Привет</h2>",
        css: "",
        js: "",
      },
    },
  ],
};
