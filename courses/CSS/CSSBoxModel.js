"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssBoxModel = void 0;
exports.CssBoxModel = {
    id: 4,
    title: "Блочная модель CSS",
    url: "css-box-model",
    excercises: [
        {
            id: 1,
            header: "Ширина и высота - width и height",
            url: "css-width-height",
            theory: `<p>Каждый HTML элемент занимает определенное место на странице и имеет размеры - ширину и высоту. Это интуитивно понятно, но надо разобраться, откуда берется и из чего складывается ширина и высота элемента.</p>
<p>В уроке по единицам измерения CSS мы задавали цвет фону параграфа, и тогда соответствующим цветом окрашивалась не только область непосредственно под текстом, а гораздо большая. Становится понятно, сам текст - не единственная составляющая размера параграфа.</p>
<p>Текст образует собой только контент (<i>content</i>) параграфа, его содержимое. Мы можем представить себе параграф (или другой HTML элемент) как прямоугольную коробку (<i>box</i>), в которой живет контент. Именно коробке (иначе - блоку) и задаются размеры - щирина и высота:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
}</code></pre>

<p style="color: red; width: 250px; height: 100px; background-color: #9abfe2;">Текст - это контент элемента</p>
<p>Мы задали "коробке" параграфа ширину 250px и высоту 100px, а текст "Текст - это контент элемента" - это контент параграфа. Размеры можно задавать с помощью большинства абсолютных и относительных единиц из урока про единицы измерения CSS, мы для простоты будем использовать пиксели.</p>
<p>Такой подход к HTML элементам как к "коробкам" (или блокам), в которых живет контент называется "блочной моделью" (<i>box model</i>) и это одна из важнейших концепций в вэб-разработке. Позже мы узнаем, что еще есть в блоке кроме контента.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width" target="_blank">width</a>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height" target="_blank">height</a>.</p>
 `,
            goal: `Задайте элементу ширину и высоту`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
}

.content {
  text-align: center;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>header-wrapper</code> установите высоту <code>400px</code>.",
                    testRegExp: [`\.header-wrapper\\s+{[\\s\\S]*height: 400px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение height элементу",
                },
                {
                    id: 2,
                    label: "Заголовку первого уровня, вложенному в <code>header-wrapper</code> установите ширину <code>400px</code>.",
                    testRegExp: [`\.header-wrapper h1\\s+{[\\s\\S]*width: 400px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение width заголовку",
                },
                {
                    id: 3,
                    label: "Контенту страницы <code>content</code> установите ширину <code>70%</code>.",
                    testRegExp: [`\.content\\s+{[\\s\\S]*width: 70%;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение width контенту",
                },
            ],
        },
        {
            id: 2,
            header: "Рамка - border",
            url: "css-border",
            theory: `<p>Рассмотрим остальные составляющие блока:</p>
<div><img src="https://sabe.io/classes/css/css-box-model-padding-border-margin/css-box-model.png" alt="Схема блочной модели CSS"></div>
<p>Кроме контента в блочной модели есть еще 3 составляющие - рамка, а также внутренние отступы - паддинги и внешние отступы - маргины. Рамка - это то, что отделяет контент элемента от внешнего содержимого страницы. По-умолчанию она у элемента отсутствует (точнее ее толщина равна 0), но ее можно создать с помощью свойства <code>border</code>:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
}</code></pre>

<p style="color: red; width: 250px; height: 100px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px</p>
<p>Мы создали рамку шириной 5px, отображаемую сплошной линией цвета #fff4c3. Рамку можно стилизовать, но это тема отдельного урока, сейчас главное, что рамка - часть блочной модели. Взгляните еще раз на схему, толщина рамки не входит в ширину и высоту элемента, эти свойства задаются для контента.</p>
<p>Для того, чтобы рассчитать пространство, которое элемент занимает на странице по ширине, сложим 250px(ширина контента) + 2*5px(рамка слева и справа) = 260px.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank">border</a>.</p>
 `,
            goal: `Задайте элементу рамку`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
}

.content {
  text-align: center;
  width: 70%;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Блоку с классом <code>share</code> задайте рамку сплошной линией толщиной 3px цвета rgb(0, 188, 212).",
                    testRegExp: [`\.share\\s+{[\\s\\S]*border: 3px solid rgb\\(0, 188, 212\\);[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение border с тремя значениями перечисленными через пробел",
                },
                {
                    id: 2,
                    label: "Заголовку первого уровня, вложенному в <code>header-wrapper</code> задайте любую рамку",
                    testRegExp: [`\.header-wrapper h1\\s+{[\\s\\S]*border:[\\s\\S]*;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали не пустое значение для border",
                },
            ],
        },
        {
            id: 3,
            header: "Внутренние отступы - padding",
            url: "css-padding",
            theory: `<p>Расстояние между контентом и рамкой называется внутренним отступом или паддингом (<em>padding</em>):</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
  <span class="rule">padding-top:</span> 10px;
  <span class="rule">padding-bottom:</span> 10px;
  <span class="rule">padding-right:</span> 30px;
  <span class="rule">padding-left:</span> 30px;
}</code></pre>

<p style="padding: 10px 30px; color: red; width: 250px; height: 100px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px + внутренний отступ 60px</p>
<p>Мы задали паддинг сверху и снизу по 10px, а справа и слева по 30px. Обратите внимание, как сместился текст.</p>
<p>Паддинги тоже не входят в ширину и высоту элемента, поэтому придется продолжить расчет места, которое занимает элемент по горизонтали: 250px(ширина контента) + 2*5px(рамка слева и справа) + 2*30px(паддинг слева и справа) = 320px.</p>
<p>Если станете забывать, что именно входит в блочную модель элемента, не стесняйтесь вернуться назад и посмотреть схему.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding" target="_blank">padding</a>.</p>
 `,
            goal: `Задайте элементу внутренние отступы.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
}

.content {
  text-align: center;
  width: 70%;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Блоку с классом <code>share</code> задайте верхний и нижний внутренние отступы по 15px, левый и правый - по 5px.",
                    testRegExp: [
                        `\.share\\s+{[\\s\\S]*padding-top: 15px;[\\s\\S]*}`,
                        `\.share\\s+{[\\s\\S]*padding-bottom: 15px;[\\s\\S]*}`,
                        `\.share\\s+{[\\s\\S]*padding-left: 5px;[\\s\\S]*}`,
                        `\.share\\s+{[\\s\\S]*padding-right: 5px;[\\s\\S]*}`,
                    ],
                    failMsg: "Убедитесь, что вы задали 4 внутренних отступа блоку",
                },
                {
                    id: 2,
                    label: "Заголовку первого уровня, вложенному в <code>header-wrapper</code> задайте все паддинги 25px.",
                    testRegExp: [
                        `\.header-wrapper h1\\s+{[\\s\\S]*padding-top: 25px;[\\s\\S]*}`,
                        `\.header-wrapper h1\\s+{[\\s\\S]*padding-bottom: 25px;[\\s\\S]*}`,
                        `\.header-wrapper h1\\s+{[\\s\\S]*padding-left: 25px;[\\s\\S]*}`,
                        `\.header-wrapper h1\\s+{[\\s\\S]*padding-right: 25px;[\\s\\S]*}`,
                    ],
                    failMsg: "Убедитесь, что вы задали 4 внутренних отступа заголовку",
                },
            ],
        },
        {
            id: 4,
            header: "Внутренние отступы - padding (альтернативная запись)",
            url: "css-padding-alt",
            theory: `<p>Задавать отступы элементам приходится так часто, что прописывать каждый раз 4 значения отдельно очень утомительно. К счастью, есть альтернативная форма записи. Такой код:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">padding-top:</span> 10px;
  <span class="rule">padding-bottom:</span> 10px;
  <span class="rule">padding-right:</span> 30px;
  <span class="rule">padding-left:</span> 30px;
}</code></pre>

<p>аналогичен такому:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">padding:</span> 10px 30px 10px 30px;
}</code></pre>

<p>В сокращенной форме записи паддинги идут <b>начиная с верхнего и по часовой стрелке</b>. Верхний паддинг - 10px, правый паддинг - 30px, нижний паддинг - 10px, левый паддинг - 30px.</p>
<p>Мы сократили код с 4 строк до одной, очень удобно! Но можно сократить его еще больше:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">padding:</span> 10px 30px;
}</code></pre>

<p>В такой форме записи первое значение определяет <b>верхний и нижний</b> паддинги, а второе -  <b>левый и правый</b>. В данном случае верхний и нижний отступы у нас равны 10px, левый и правый - 30px. Может звучать слегка путанно поначалу, но используются такие формы записи настолько часто, что вы быстро привыкнете. Наконец:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">padding:</span> 10px;
}</code></pre>

<p>Форма записи, состоящая из одного значения говорит о том, что все 4 паддинга равны 10px.</p>
 `,
            goal: `Оптимизируйте код записи внутренних отступов.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
}

.content {
  text-align: center;
  width: 70%;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Блоку с классом <code>share</code> задайте паддинги в сокращенной форме.",
                    testRegExp: [`\.share\\s+{[\\s\\S]*padding: 15px 5px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы записали паддинги с наименьшим количеством значений",
                },
                {
                    id: 2,
                    label: "Заголовку первого уровня, вложенному в <code>header-wrapper</code> задайте паддинги в сокращенной форме.",
                    testRegExp: [`\.header-wrapper h1\\s+{[\\s\\S]*padding: 25px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы записали паддинги с наименьшим количеством значений",
                },
            ],
        },
        {
            id: 5,
            header: "Внешние отступы - margin",
            url: "css-margin",
            theory: `<p>Четвертый и последний компонент блочной модели - внешние отступы или маргины. Внешний отступ начинается от рамки элемента, это то, насколько элемент отталкивает от себя другие элементы.</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
  <span class="rule">padding:</span> 10px 30px;
  <span class="rule">margin-top:</span> 25px;
  <span class="rule">margin-bottom:</span> 25px;
  <span class="rule">margin-right:</span> 10px;
  <span class="rule">margin-left:</span> 10px;
}</code></pre>

<p style="margin: 25px 10px; padding: 10px 30px; color: red; width: 250px; height: 100px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px + внутренний отступ 60px</p>
<p>В данном случае параграф оттолкнет от себя другие HTML элементы на 25px сверху и снизу, и на 10px слева и справа.</p>
<p>Для маргинов действительны те же формы сокращенной записи, что и для паддингов:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">margin:</span> 15px 10px 15px 10px;
}</code></pre>

<pre><code><span class="selector">p</span> {
  <span class="rule">margin:</span> 15px 10px;
}</code></pre>

<p>Плюс запись одним значением если внешние отступы одинаковы со всех сторон.</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">margin:</span> 1.5rem;
}</code></pre>

<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin" target="_blank">margin</a>.</p>
 `,
            goal: `Задайте элементам внешние отступы.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding: 25px;
}

.content {
  text-align: center;
  width: 70%;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding: 15px 5px;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементам списка <code>li</code>, вложенным в блок с классом <code>navigation</code> задайте внешний отступ снизу <code>10px</code>. Посмотрите, как меняется вертикальное расстояние между элементами",
                    testRegExp: [`\.navigation li\\s+{[\\s\\S]*margin-bottom: 10px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали маргин снизу правильному элементу",
                },
                {
                    id: 2,
                    label: "Блоку с классом <code>share</code> задайте внешний отступ <code>1rem</code> сверху и снизу и <code>2rem</code> справа и слева.",
                    testRegExp: [`\.share\\s+{[\\s\\S]*margin: 1rem 2rem;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы записали маргины оптимальным способом",
                },
            ],
        },
        {
            id: 6,
            header: "Центрирование элемента - margin: 0 auto",
            url: "css-margin-auto",
            theory: `<p>margin позволяют решить одну из самых частых задач верстки - расположить один элемент точно по центру своего родителя. Вот как мы это сделаем:/p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
  <span class="rule">padding:</span> 10px 30px;
  <span class="rule">margin:</span> 0 auto;
  <span class="rule">margin-bottom:</span> 25px;
}</code></pre>

<p style="margin: 0 auto; margin-bottom: 25px; padding: 10px 30px; color: red; width: 250px; height: 100px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px + внутренний отступ 60px</p>
<p>Мы обнулили верхний и нижний маргин, а левому и правому задали значение с помощью ключевого слова <code>auto</code>. Это ключевое слово говорит браузеру, чтобы он рассчитал левый и правый маргин автоматически и задал им равные значения, таким образом наш элемент будет расположен по центру своего родителя.</p>
<p>Важным моментом является то, что элементу, которому задано свойство <code>margin: 0 auto;</code> также обязательно нужно указывать ширину. Что произойдет, если ширина не будет задана?</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
  <span class="rule">padding:</span> 10px 30px;
  <span class="rule">margin:</span> 0 auto;
  <span class="rule">margin-bottom:</span> 25px;
}</code></pre>

<p style="margin: 0 auto; margin-bottom: 25px; padding: 10px 30px; color: red; height: 100px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px + внутренний отступ 60px</p>
<p>Делаем вывод: <b>Если ширина не задана явно, дочерний элемент растягивается на всю ширину своего родителя</b>. По этой причине центрирование просто не имеет смысла. Дочерний и родительский элемент имеют одинаковую ширину.</p>
 `,
            goal: `Центрируйте элемент с помощью маргинов.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding: 25px;
}

.content {
  text-align: center;
  width: 70%;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding: 15px 5px;
  margin: 1rem 2rem;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Центрируйте заголовок первого уровня, вложенный в блок с классом <code>header-wrapper</code>. Убедитесь, что заголовку задана ширина.",
                    testRegExp: [`\.header-wrapper h1\\s+{[\\s\\S]*margin: 0 auto;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что блоку задана ширина",
                },
                {
                    id: 2,
                    label: "Центрируйте блок с классом <code>content</code>.",
                    testRegExp: [`\.content\\s+{[\\s\\S]*margin: 0 auto;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что блоку задана ширина",
                },
            ],
        },
        {
            id: 7,
            header: "Сброс отступов по умолчанию",
            url: "css-reset-default",
            theory: `<p>Большинство браузеров имеют собственные стилевые листы т. н. <em>user agent stylesheets</em>. Правила из них применяются к элементам на странице и только потом переопределяются стилями из внешнего стилевого листа при его наличии. Отступы не исключение.</p>
<p>Для разработчика данный факт не удобнен, поскольку осложняет контроль за отступами - надо держать в голове, какие отступы есть у элементов по умолчанию (к тому же у разных браузеров они могут быть разные). Хорошей практикой является обнуление отступов, заданных по умолчанию:</p>

<pre><code><span class="selector">body</span> {
  <span class="rule">padding:</span> 0;
  <span class="rule">margin:</span> 0;
}</code></pre>

<p>Мы обнулили все отступы у элемента <code>body</code>, соответственно, они также обнулились у всех вложенных в него элементов, после этого гораздо удобнее задавать конкретные отступы конкретным элементам.</p>
 `,
            goal: `Сбросьте отступы по умолчанию.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding: 25px;
  margin: 0 auto;
}

.content {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding: 15px 5px;
  margin: 1rem 2rem;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "У элемента <code>body</code> сбросьте все отступы.",
                    testRegExp: [`\body\\s+{[\\s\\S]*margin: 0;[\\s\\S]*}`, `\body\\s+{[\\s\\S]*padding: 0;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали значения для margin и padding",
                },
            ],
        },
        {
            id: 8,
            header: "Минимальные высота и ширина - min-height, min-width",
            url: "css-min-height-width",
            theory: `<p>Вашу страницу могут просматривать на различных устройствах с разной высотой и шириной экрана, поэтому есть дополнительные свойства для более полного контроля ширина/высоты элементов. Свойства <code>min-width</code> и <code>min-height</code> зададут минимальную ширину и высоту элемента соответственно:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">min-height:</span> 200px;
  <span class="rule">min-width:</span> 100px;
}</code></pre>

<p>Давайте посмотрим, как работают эти свойства. При изменении ширины экрана меняется ширина параграфа (помним, что по умолчанию элемент занимает 100% ширины своего родителя), но ни при каких обстоятельствах она не станет меньше 100px (страховка от того, что параграф станет слишком узким, а текст в нем - нечитаемым). Высота параграфа по умолчанию равна высоте контента, а в данном случае она не станет меньше 200px.</p>
<p>Вообще, элементам, содержащим текстовый контент, лучше вместо фиксированной высоты задавать минимальную высоту. Так вы реже столкнетесь с "переполнением" элемента контентом.</p>

<pre><code><span class="selector">.box1</span> {
  <span class="rule">min-height:</span> 50px;
  <span class="rule">border:</span> 2px dotted green;
}

<span class="selector">.box2</span> {
  <span class="rule">height:</span> 50px;
  <span class="rule">border:</span> 2px dotted red;
}</code></pre>

<h4>Мало контента, у обоих контейнеров высота 50px</h4>
<div style="display: flex; justify-content: space-between; width: 300px; margin: 0 auto;">
  <div style="border: 2px dotted green; width: 150px; min-height: 50px;">Мало контента</div>
  <div style="border: 2px dotted red; width: 150px; height: 50px;">Мало контента</div>
</div>
<h4>Много контента, контент вываливается из элемента с фиксированной высотой</h4>
<div style="display: flex; justify-content: space-between; width: 300px; margin: 0 auto; margin-bottom: 20px;">
  <div style="border: 2px dotted green; width: 150px; min-height: 50px;">При увеличении количества контента элемент с заданной минимальной высотой адаптирует свою высоту под контент</div>
  <div style="border: 2px dotted red; width: 150px; height: 50px;">При увеличении количества контента он выпадет из элемента с фиксированной высотой</div>
</div>

<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/min-height" target="_blank">min-height</a>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/min-width" target="_blank">min-width</a>.</p>

`,
            goal: `Задайте элементам минимальную ширину и высоту.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
  outline: 1px dotted green;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding: 25px;
  margin: 0 auto;
}

.content {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding: 15px 5px;
  margin: 1rem 2rem;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Всем параграфам на странице установите минимальную ширину <code>350px</code>. Измените ширину окна браузера и убедитесь, что ширина параграфов не становится меньше этого значения. Зеленая рамка задана для визуального удобства.",
                    testRegExp: [`\p\\s+{[\\s\\S]*min-width: 350px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение min-width",
                },
                {
                    id: 2,
                    label: "Всем параграфам на странице установите минимальную высоту <code>100px</code>. В HTML редакторе создайте еще один параграф с любым текстом и убедитесь, что минимальная высота работает.",
                    testRegExp: [`\p\\s+{[\\s\\S]*min-height: 100px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение min-height",
                },
            ],
        },
        {
            id: 9,
            header: "Максимальные высота и ширина - max-height, max-width",
            url: "css-max-height-width",
            theory: `<p>Похожие свойства <code>max-width</code> и <code>max-height</code> позволяют установить максимальную ширину и высоту элемента:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">max-height:</span> 500px;
  <span class="rule">max-width:</span> 80%;
}</code></pre>

<p>Этот код не позволит параграфу стать выше 500px и шире 80% своего родительского элемента.</p>
<p>Свойства code>max-width</code> и <code>max-height</code> являются страховкой от слишком большого количества контента, когда требуется, например, чтобы элемент всегда целиком находился в области видимости, вне зависимости от количества контента, которое его наполняет.</p>
<p>Если элементу заданы все 3 свойства, определяющие его высоту или ширину, то они взаимодействуют друг с другом таким образом: свойство <code>min-width</code> перезаписывает <code>max-width</code>, которое в свою очередь перезаписывает <code>width</code>. К примеру, если у вас минимальная ширина элемента равна 100px, а максимальная - 50px, фактически элемент не будет уже 100px. Аналогично и для высоты.</p>
<p>Также в случае необходимости вы можете сбросить свойства <code>max-width</code>, <code>max-height</code>, <code>min-width</code>, <code>min-height</code> с помощью ключевого слова <code>none</code>.</p>

<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/max-height" target="_blank">max-height</a>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/max-width" target="_blank">max-width</a>.</p>
`,
            goal: `Установите элементам максимальную ширину и высоту.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
  min-width: 350px;
  min-height: 100px;
  outline: 1px dotted green;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding: 25px;
  margin: 0 auto;
}

.content {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding: 15px 5px;
  margin: 1rem 2rem;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Всем параграфам на странице установите максимальную ширину <code>600px</code>. Измените ширину окна браузера и убедитесь, что ширина параграфов не превышает это значение.",
                    testRegExp: [`\p\\s+{[\\s\\S]*max-width: 600px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение max-width",
                },
                {
                    id: 2,
                    label: "Всем параграфам на странице установите максимальную высоту <code>700px</code>. В HTML редакторе в любом параграфе увеличьте количество текста (скопируйте и вставьте текст несколько раз) и убедитесь, что текст начинает вываливаться из параграфа.",
                    testRegExp: [`\p\\s+{[\\s\\S]*max-height: 700px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение max-height",
                },
            ],
        },
        {
            id: 10,
            header: "Переполнение - overflow",
            url: "css-overflow",
            theory: `<p>В прошлом упражнении мы увидели, что если контент не помещается в свой блок, он вываливается за его пределы. Это называется переполнением (overflow). Переполнение контентом может случиться как по ширине (если контента становится больше, чем вмещает контейнер по ширине), так и по высоте.</p>
<p>Свойство <code>overflow</code> позволяет контролировать то, как именно ведет себя элемент при переполнении контентом. Простое вываливание контента из контейнера редко является желаемым поведением:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">overflow:</span> scroll;
}</code></pre>

<p>Вот возможные значения свойства <code>overflow</code>:</p>
<ul>
  <li><code>visible</code> - контент не обрезается и может вываливаться за пределы вмещающего блока. Это поведение по умолчанию.</li>
  <li><code>hidden</code> - контент обрезается, часть контента, не вмещающаяся в свой блок, становится невидимой.</li>
  <li><code>scroll</code> - контент обрезается, справа всегда присутствует полоса прокрутки.</li>
  <li><code>auto</code> - контент обрезается, полоса прокрутки появляется только при переполнении блока контентом. Разные браузеры могут интерпретировать это значение по разному.</li>
</ul>
<p>Также вы можете управлять переполнением по горизонтали и вертикали отдельно с помощью свойств <code>overflow-x</code> и <code>overflow-y</code>.</p>

<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" target="_blank">overflow</a>.</p>
`,
            goal: `Измените поведение элемента при переполнении контентом.`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Mordovia Eco</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class="navigation">
      <ul>
        <li>Проекты</li>
        <li>Сервисы</li>
        <li>Компетенции</li>
        <li>О нас говорят</li>
        <li>Контакты</li>
      </ul>
    </nav>

    <div class="header-wrapper">
      <h1>Экопарк в Заповедной Мордовии</h1>
    </div>

    <article class="content">
      <h2>Экопарк как продолжение экотуристического кластера</h2>
      <span class="narrator">Рассказывает Виктор Емельянов</span>
      <p>В разработке концепции мы опирались на идентичность территории и особенности ландшафта. Было разработано два десятка объектов, сценарии посещения, зонирование пространства с делением по типу активности — от спокойного отдыха до шумных игр.</p>
      <p class="quote">"Мы выделили несколько простых форм, повсеместно присутствующих в живой природе: спираль, волна, круг."</p>
      <p>В дизайне арт-объектов и интерактивов мы отразили специфику территории: палеонтологические артефакты нескольких геологических эпох; экосистемы хвойного леса; разнообразие флоры и фауны.</p>
    </article>

    <div class="share">
      <a href="#">Поделиться</a>
      <a href="#">Избранное</a>
      <a href="#">Узнать больше</a>
    </div>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
body {
  background-color: white;
  font-family: "Noto Sans", "Arial", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

h2 {
  color: rgb(0, 188, 212);
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  color: grey;
  line-height: 2rem;
  min-width: 350px;
  min-height: 100px;
  max-width: 600px;
  max-height: 700px;
  outline: 1px dotted green;
}

.header-wrapper {
  background-image: url("https://zaprirodu.com/wp-content/uploads/2020/10/Roga-olenya-1.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}

.header-wrapper h1 {
  position: relative;
  top: 50px;
  width: 400px;
  border: 2px dotted white;
  padding: 25px;
  margin: 0 auto;
}

.content {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}

.navigation ul {
  list-style: none;
  text-align: center;
}

.navigation li {
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.narrator {
  border-bottom: 1px solid LightGrey;
  font-size: 0.8rem;
  font-weight: 200;
}

.quote {
  color:  rgb(0, 188, 212);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.share {
  position: relative;
  text-align: center;
  border: 3px solid rgb(0, 188, 212);
  padding: 15px 5px;
  margin: 1rem 2rem;
}

.share a {
  background: rgb(0, 188, 212);
  color: white;
  display: inline-block;
  text-decoration: none;
}

.share a:hover {
  background: white;
  color: rgb(0, 188, 212);
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>content</code> задайте фиксированную высоту <code>400px</code>. Обратите внимание, что верстка сломалась, так как произошло переполнение контентом.",
                    testRegExp: [`\.content\\s+{[\\s\\S]*height: 400px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали элементу фиксированную высоту",
                },
                {
                    id: 2,
                    label: "Задайте этому блоку поведение, чтобы при переполнении контентом появлялась полоса прокрутки.",
                    testRegExp: [`\.content\\s+{[\\s\\S]*overflow: auto;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение overflow",
                },
            ],
        },
        {
            id: 11,
            header: "Блочные элементы - block",
            url: "css-block",
            theory: `<p>В этом уроке мы до сих пор имели дело только с <em>блочными</em> элементами. Давайте повторим и закрепим основные свойства блочных элементов:</p>
<ul>
  <li>Каждый блочный элемент отображается на новой строке</li>
  <li>Блочный элемент растягивается по ширине и занимает 100% ширины родительского элемента если не указано иное стилевое правило</li>
  <li>Блочный элемент имеет ширину и высоту</li>
  <li>Граница, а также внутренние и внешние отступы отталкивают другие элементы от блочного элемента</li>
</ul>
<p>Блочными элементами по умолчанию являются заголовки <code>h1-h6</code>, параграфы <code>p</code>, элементы списков <code>li</code>, все элементы, создающие структуру страницы - <code>div</code>, <code>section</code>, <code>article</code>, <code>aside</code>, <code>header</code> и т.д.</p>
<p>Вы также можете явно задать элементу отображение в виде блока с помощью свойства <code>display</code>:</p>

<pre><code><span class="selector">span</span> {
  <span class="rule">display:</span> block;
}</code></pre>
`,
            goal: `Задайте элементу блочное отображение.`,
            initValues: {
                html: `<!--HTML редактор-->
<ul>
  <li>Несколько</li>
  <li>элементов</li>
  <li>списка</li>
</ul>
<p>Параграф является блочным элементом</p>
<p>по умолчанию</p>
<p>В этом параграфе некоторые <span class="block">слова</span> обернуты в <span>элемент span</span>.</p>
`,
                css: `/* CSS редактор */
 
p, 
ul {
  border: 2px solid #673ab7;
  padding: .5em;
}

span {
  color: #f44336;
}

.block,
li {
  border: 2px solid #009688;
  padding: .5em;
}

ul {
  list-style: none;
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>block</code> задайте фиксированную высоту <code>50px</code>. Обратите внимание, что ничего не произошло, поскольку элемент <code>span</code> не является блочным по умолчанию.",
                    testRegExp: [`\.block\\s+{[\\s\\S]*height: 50px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали элементу фиксированную высоту",
                },
                {
                    id: 2,
                    label: "Теперь задайте этому элементу блочное отображение.",
                    testRegExp: [`\.block\\s+{[\\s\\S]*display: block;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение display",
                },
                {
                    id: 3,
                    label: "Далее задайте этому элементу внутренний отступ сверху <code>30px</code>.",
                    testRegExp: [`\.block\\s+{[\\s\\S]*padding-top: 30px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение padding-top",
                },
            ],
        },
        {
            id: 12,
            header: "Строчные элементы - inline",
            url: "css-inline",
            theory: `<p>В противоположность блочным элементам есть строчные (<em>inline</em>) элементы. Вот их основные свойства:</p>
<ul>
  <li>Строчный элемент не переносится на новую строку</li>
  <li>Строчный элемент не растягивается на всю ширину родителя</li>
  <li>Строчный элемент не имеет ширины и высоты (точнее они не учитываются)</li>
  <li>Вертикальные границы, а также вертикальные внешние и внутренние отступы учитываются, но не отталкивают другие строчные элементы</li>
  <li>Горизонтальные границы, а также горизонтальные внешние и внутренние отступы учитываются и отталкивают другие строчные элементы</li>
</ul>
<p>Строчными элементами по умолчанию являются ссылки <code>a</code>, текстовые элементы <code>span</code>, элементы форм <code>input</code>, элементы выделения в тексте <code>strong</code>, <code>em</code>, <code>i</code>, <code>b</code>, <code>small</code> и т.д.</p>
<p>Вы можете также явно задать элементу отображение в строчном виде:</p>

<pre><code><span class="selector">div</span> {
  <span class="rule">display:</span> inline;
}</code></pre>
`,
            goal: `Задайте элементу строчное отображение.`,
            initValues: {
                html: `<!--HTML редактор-->

<ul>
  <li>Несколько</li>
  <li>элементов</li>
  <li>списка</li>
</ul>
<p class="inline">Параграф является блочным элементом</p>
<p class="inline">по умолчанию</p>
<p>В этом параграфе некоторые <span class="block">слова</span> обернуты в <span>элемент span</span>.</p>
`,
                css: `/* CSS редактор */

p, 
ul {
  border: 2px solid #673ab7;
  padding: .5em;
}

span {
  color: #f44336;
}

.block,
li {
  border: 2px solid #009688;
  padding: .5em;
}

ul {
  list-style: none;
}

.block {
  height: 50px;
  padding-top: 30px;
  display: block;
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Параграфам с классом <code>inline</code> задайте фиксированную высоту <code>40px</code>.",
                    testRegExp: [`\.inline\\s+{[\\s\\S]*height: 40px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали элементам фиксированную высоту",
                },
                {
                    id: 2,
                    label: "Теперь задайте этим элементам строчное отображение. Обратите внимание, что значение высоты теперь игнорируется.",
                    testRegExp: [`\.inline\\s+{[\\s\\S]*display: inline;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение display",
                },
                {
                    id: 3,
                    label: "Наконец, задайте этим элементам внешний отступ <code>3rem</code> со всех сторон. Убедитесь, что горизонтальный отступ действует, но соседние элементы игнорируют вертикальный отступ.",
                    testRegExp: [`\.inline\\s+{[\\s\\S]*margin: 3rem;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение margin",
                },
            ],
        },
        {
            id: 13,
            header: "Блочно-строчные элементы - inline-block",
            url: "css-inline-block",
            theory: `<p>Наконец, есть способ расположить элементы в ряд как строчные, но и в то же время заставить их учитывать все свойства коробочной модели - ширину, высоту, границу и все отступы. Для этого элемент необходимо сделать блочно-строчным (<em>inline-block</em>):</p>
<ul>
  <li>Блочно-строчный элемент не переносится на новую строку и не растягивается на всю ширину родителя</li>
  <li>Блочно-строчный элемент учитывает ширину и высоту</li>
  <li>Границы, а также внешние и внутренние отступы учитываются и отталкивают другие элементы</li>
</ul>
<p>Нет элементов, которые являются блочно-строчными по умолчанию, поэтому такое отображение надо явно задать:</p>

<pre><code><span class="selector">a</span> {
  <span class="rule">display:</span> inline-block;
}</code></pre>
`,
            goal: `Задайте элементу блочно-строчное отображение.`,
            initValues: {
                html: `<!--HTML редактор-->

<ul>
  <li>Несколько</li>
  <li>элементов</li>
  <li>списка</li>
</ul>
<p class="inline">Параграф является блочным элементом</p>
<p class="inline">по умолчанию</p>
<p>В этом параграфе некоторые <span class="block">слова</span> обернуты в <span>элемент span</span>.</p>
`,
                css: `/* CSS редактор */

p, 
ul {
  border: 2px solid #673ab7;
  padding: .5em;
}

span {
  color: #f44336;
}

.block,
li {
  border: 2px solid #009688;
  padding: .5em;
}

ul {
  list-style: none;
}

.block {
  height: 50px;
  padding-top: 30px;
  display: block;
}

.inline {
  height: 40px;
  display: inline;
  margin: 3rem;
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементам списка задайте фиксированную высоту <code>45px</code>.",
                    testRegExp: [`\li\\s+{[\\s\\S]*height: 45px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали элементам фиксированную высоту",
                },
                {
                    id: 2,
                    label: "Теперь задайте этим элементам блочно-строчное отображение. Обратите внимание, что высота по прежнему учитывается.",
                    testRegExp: [`\li\\s+{[\\s\\S]*display: inline-block;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение display",
                },
                {
                    id: 3,
                    label: "Наконец, задайте этим элементам внешний отступ <code>2rem</code> со всех сторон. Убедитесь, что в этот раз все отступы учитываются.",
                    testRegExp: [`\li\\s+{[\\s\\S]*margin: 2rem;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение margin",
                },
            ],
        },
        {
            id: 14,
            header: "Контентная модель - content-box",
            url: "css-content-box",
            theory: `<p>Последний важный аспект блочной модели - как именно расчитывается место, которое элемент занимает на странице. Вернемся к примеру из предыдущих упражнений:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
  <span class="rule">padding:</span> 10px 30px;
  <span class="rule">margin:</span> 25px 10px;
}</code></pre>
      
<p style="box-sizing: content-box; margin: 25px 10px; padding: 10px 30px; color: red; width: 250px; height: 120px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px + внутренний отступ 60px + внешний отступ 20px</p>
<p>Свойство <code>width</code> задает ширину только <em>контентной области</em>, а все остальные элементы блока - границы и отступы, надо считать отдельно. Таким образом, общее место, которое займет на странице элемент составит 250px + 60px (паддинги) + 10px (рамка) + 20px (маргины) = 340px.</p>
<p>Не слишком удобно, не правда ли? Каждый раз для управления размерами элемента нужно держать в уме кучу чисел. А если нужно, чтобы элемент занимал, к примеру, 80% ширины родителя, то подобный расчет вообще становится затруднительным.</p>
<p>Такой тип блочной модели называется <code>content-box</code>. Тип блочной модели устанавливается свойством <code>box-sizing</code>:</p>

<pre><code><span class="selector">div</span> {
  <span class="rule">box-sizing:</span> content-box;
}</code></pre>

<p>Значение <code>content-box</code> является значением по умолчанию.</p>
`,
            goal: `Задайте элементу размеры с учетом типа коробочной модели.`,
            initValues: {
                html: `<!--HTML редактор-->

<div class="parent">
  <div class="child">Немного текста</div>
</div>
`,
                css: `/* CSS редактор */

.parent {
  border: 20px solid #bbe2c6;
}

.child {
  width: 100%;
  border: 10px solid #9cc0f9;
  padding: 20px;
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>parent</code> установите фиксированную ширину <code>500px</code>.",
                    testRegExp: [`\.parent\\s+{[\\s\\S]*width: 500px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали элементу фиксированную ширину",
                },
                {
                    id: 2,
                    label: "Элементу с классом <code>child</code> самостоятельно рассчитайте и установите фиксированную ширину таким образом, чтобы он не выходил за пределы родителя с учетом контентной модели.",
                    testRegExp: [`\.child\\s+{[\\s\\S]*width: 440px;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы подобрали правильное значение width. Не забывайте, что у элемента есть border и padding",
                },
            ],
        },
        {
            id: 15,
            header: "Рамочная модель - border-box",
            url: "css-border-box",
            theory: `<p>К счастью, есть вариант проще. Достаточно в качестве значения <code>box-sizing</code> указать <code>border-box</code>:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 250px;
  <span class="rule">height:</span> 100px;
  <span class="rule">border:</span> 5px solid #fff4c3;
  <span class="rule">padding:</span> 10px 30px;
  <span class="rule">margin:</span> 25px 10px;
  <span class="rule">box-sizing:</span> border-box;
}</code></pre>
      
<p style="margin: 25px 10px; padding: 10px 30px; color: red; width: 250px; height: 120px; background-color: #9abfe2; border: 5px solid #fff4c3;">Текст - это контент элемента шириной 250px + рамка 10px + внутренний отступ 60px + внешний отступ 20px</p>
<p>Теперь свойство <code>width</code> задает общую ширину элемента, включая границы и внутренние отступы, дополнительно считаются только внешние отступы элемента.</p>
<p>Давайте рассчитаем, какую ширину теперь занимает контентная область элемента. Итак, общая ширина 250px - 10px (рамка) - 60px (паддинги) = 180px.</p>
<p>Можно возразить, что если в рамках контентной модели мы, зная ширину контента, должны были арифметически рассчитывать общую ширину элемента, то теперь наоборот, зная общую ширину элемента, должны вычесть рамку и паддинги, чтобы добраться до ширины контента. Это так, но по факту ширина контента в отрыве от остальных составляющих блочной модели мало когда бывает необходима.</p>
<p>В реальных проектах идет работа только с рамочной моделью <code>border-box</code>. Обычно ее сразу устанавливают всем элементам с помощью такого кода:</p>

<pre><code><span class="selector">*</span> {
  <span class="rule">box-sizing:</span> border-box;
}</code></pre>

<p>где символ <code>*</code> означает вообще все элементы на странице. Это очень удобно, но помните, что это не поведение по умолчанию.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing" target="_blank">box-sizing</a>.</p>
`,
            goal: `Измените тип блочной модели.`,
            initValues: {
                html: `<!--HTML редактор-->

<div class="parent">
  <div class="child">Немного текста</div>
</div>
`,
                css: `/* CSS редактор */

.parent {
  border: 20px solid #bbe2c6;
  width: 500px;
}

.child {
  width: 440px;
  border: 10px solid #9cc0f9;
  padding: 20px;
}
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Установите всем элементам на странице рамочную блочную модель.",
                    testRegExp: [`\\*\\s+{[\\s\\S]*box-sizing: border-box;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильный box-sizing всем элементам",
                },
                {
                    id: 2,
                    label: "Элементу с классом <code>child</code> измените ширину таким образом, чтобы он всегда занимал 100% своего родителя.",
                    testRegExp: [`\.child\\s+{[\\s\\S]*width: 100%;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы подобрали правильное значение width.",
                },
            ],
        },
    ],
};
