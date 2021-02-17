"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUnits = void 0;
exports.CssUnits = {
    id: 3,
    title: "Единицы измерения и цвета CSS",
    url: "css-units",
    excercises: [
        {
            id: 1,
            header: "Абсолютные - пиксел (px)",
            url: "css-unit-pixel",
            theory: `<p>Единицы измерения в CSS - это числовые значения, которые задают свойству. Единиц измерения в CSS много, но не все они активно применяются, некоторые имеют скорее историческое значение. Мы можем выделить 3 группы единиц измерения - абсолютные, относительные и единицы вьюпорта.</p>
<p>В этом упражнении рассмотрим абсолютные единицы измерния. Единственной по настоящему часто применяемой абсолютной единицей измерения является пиксель - <code>px</code>. Это базовая единица отображения информации на экране и самая простая для понимания. Хотя в CSS понятие пикселя несколько отличается от пикселя в компьютерных науках в целом, нам это различие не важно. Главное - пиксель закрепляет размер элемента на экране.</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">font-size:</span> 24px;
}</code></pre>

<p style="font-size: 24px">этому тексту мы установли размер шрифта <code>24px</code>.</p>
<p>Есть и другие абсолютные единицы измерения:</p>
<ul>
 <li><code>in</code> - дюйм. <code>1in = 2.54cm</code></li>
 <li><code>pt</code> - точка. <code>1pt = 1/72in</code></li>
 <li><code>cm, mm</code> - сантиметр и миллиметр соответственно. <code>1cm = 96px/2.54</code>, <code>1mm = 1/10cm</code></li>
</ul>
<p>Когда использовать абсолютные единицы измерения? В основном когда размер элемента статичен и точно известен. Например, вы собираетесь вставить на страницу логотип компании и точно знаете, что он имеет размеры 30*20 px. В этом случае размер контейнера под логотип следует задать в пикселях. Сантиметры и миллиметры также могут использоваться при выводе документа на печать, так как лист бумаги имеет вполне определенные размеры. Но вообще в эпоху адаптивных вэб-страниц абсолютные единицы измерения используются редко.</p>
 `,
            goal: `Задайте элементу размер в абсолютных единицах`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать отображение элемента в любых единицах измерения. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Абсолютные единицы</h2>
      <div class="unit-px">Этот контейнер имеет ширину 200px</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */
 
section div {
  min-height: 100px;
  border: 2px dashed green;
 }
        `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Контенейру с классом <code>unit-px</code> установите ширину <code>width</code> со значением <code>200px</code>.",
                    testRegExp: [`\.unit-px\\s+{\\s*width: 200px;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение width",
                },
            ],
        },
        {
            id: 2,
            header: "Относительные - em и rem",
            url: "css-unit-em-rem",
            theory: `<p>Гораздо чаще абсолютных используются <em>относительные</em> единицы измерения, то есть те, которые зависят от параметров других элементов. Чаще всего в современной вэб-разработке используются единицы <code>em</code> и <code>rem</code>. Рассмотрим их подробнее.</p>
<p>Пусть у нас есть такая разметка:</p>

<pre><code><span class="tag">&lt;html></span> 
  <span class="tag">&lt;div></span>
    <span class="tag">&lt;p></span>Какой-то текст<span class="tag">&lt;/p></span>
  <span class="tag">&lt;/div></span>
<span class="tag">&lt;/html></span></code></pre>

<p>И такой набор CSS правил:</p>

<pre><code><span class="selector">html</span> {
  <span class="rule">font-size:</span> 20px;
}

<span class="selector">div</span> {
  <span class="rule">font-size:</span> 12px;
}

<span class="selector">p</span> {
  <span class="rule">width:</span> 1.5em;
}</code></pre>

<p>Размеры шрифта для корневого элемента <code>html</code> и контейнера <code>div</code> мы задали в пикселях, а ширину параграфа с текстом в относительных единицах <code>em</code>. Какая в итоге будет ширина у параграфа? <b>1 em - это величина размера шрифта родительского элемента.</b> Родителем параграфа является элемент <code>div</code> с размером шрифта <code>12px</code>. Нетрудно посчитать, что итоговая ширина параграфа составит <code>12 * 1.5 = 18px.</code></p>
<p>Теперь изменим единицу измерения с <code>em</code> на <code>rem</code>:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">width:</span> 1.5rem;
}</code></pre>

<p>Ширина параграфа при этом изменится, потому что <b>1 rem - это величина размера шрифта корневого элемента документа.</b> Корнем любого HTML документа является элемент <code>html</code> с размером шрифта <code>20px</code> в данном случае. Обновим расчет - <code>20 * 1.5 = 30px.</code></p>
<p>С помощью относительных единиц измерения можно контролировать размеры большого количества элементов сразу. Если размеры заданы в абсолютных единицах, то менять их в случае необходимости сложно - необходимо вручную изменить стили всех элемнтов. Если же их размеры будут зависеть только от размера шрифта корневого элемента через единицу <code>rem</code>, то все, что вам надо сделать - поменять размер шрифта у элемента <code>html</code> и размеры вложенных элементов автоматически изменятся пропорционально.</p>
<p><code>em</code> - тоже удобная единица, но с ней надо быть осторожнее. Если у вас высокий уровень вложенности элементов, в какой-то момент можно забыть, какому из родителей вы задавали размер шрифта, а какой унаследовал его у своего родителя (напоминаем, что размер шрифта относится к наследуемым свойствам), в результате теряется контроль над текущим значением 1em, в то время как значение 1rem известно всегда.</p>
 `,
            goal: `Задайте элементам размеры в относительных единицах`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать отображение элемента в любых единицах измерения. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Относительные единицы - em, rem</h2>
      <ul class="unit-em">
        <li>я в 1.2 раза больше своего родителя</li>
        <li>я в 1.2 раза больше своего родителя</li>
        <li>я в 1.2 раза больше своего родителя
          <ul>
            <li>я в 1.2 раза больше своего родителя</li>
            <li>я в 1.2 раза больше своего родителя
              <ul>
                <li>я в 1.2 раза больше своего родителя</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="unit-rem">
        <li>я в 1.2 раза больше корня</li>
        <li>я в 1.2 раза больше корня</li>
        <li>я в 1.2 раза больше корня
          <ul>
            <li>я в 1.2 раза больше корня</li>
            <li>я в 1.2 раза больше корня
              <ul>
                <li>я в 1.2 раза больше корня</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Абсолютные единицы</h2>
      <div class="unit-px">Этот контейнер имеет ширину 200px</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */

section div {
  min-height: 100px;
  border: 2px dashed green;
}

.unit-px {
  width: 200px;
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Корневому элементу документа задайте размер шрифта <code>18px</code>.",
                    testRegExp: [`\html\\s+{\\s*font-size: 18px;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильный размер шрифта элементу html",
                },
                {
                    id: 2,
                    label: "Элементам списка, вложенным в список с классом <code>unit-em</code> задайте размер шрифта в <code>1.2</code> раза больше размера шрифта родительского элемента.",
                    testRegExp: [`\.unit-em li\\s+{\\s*font-size: 1.2em;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильный размер шрифта элементам li списка",
                },
                {
                    id: 3,
                    label: "Элементам списка, вложенным в список с классом <code>unit-rem</code> задайте размер шрифта в <code>1.2</code> раза больше размера шрифта корневого элемента документа. После этого немного поэксперементируйте с размером шрифта <code>html</code> и самих элементов списка, постарайтесь уловить закономерности работы относительных единиц.",
                    testRegExp: [`\.unit-rem li\\s+{\\s*font-size: 1.2rem;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильный размер шрифта элементам li списка",
                },
            ],
        },
        {
            id: 3,
            header: "Относительные - проценты, %",
            url: "css-unit-percent",
            theory: `<p>Еще одна относительная единица измерения - процент. Ее использование интуитивно понятно. Процент высчитывается от соответствующего значения родительского элемента:</p>
      <p>Пусть у нас есть такая разметка:</p>

<pre><code><span class="tag">&lt;div></span>
  <span class="tag">&lt;p></span>Какой-то текст<span class="tag">&lt;/p></span>
<span class="tag">&lt;/div></span></code></pre>

<pre><code><span class="selector">div</span> {
  <span class="rule">width:</span> 200px;
}

<span class="selector">p</span> {
  <span class="rule">width:</span> 50%;
}</code></pre>

<p>Ширина параграфа будет рассчитана как 50% ширины родительского элемента <code>div</code>. Нетрудно посчитать, что итоговая ширина параграфа составит <code>200px * 0.5 = 100px.</code></p>
<p>Проценты можно использовать в различных целях - для указания смещения элементов, размеров шрифтов и т. д. Но особенно часто они используются для указания размеров элементов - ширины и высоты.</p>
<p>Есть и другие относительные единицы измерения:</p>
<ul>
 <li><code>ex</code> - рассчитывается относительно высоты буквы x текущего шрифта документа</li>
 <li><code>ch</code> - рассчитывается относительно ширины цифры 0 текущего шрифта документа. Обе единицы используются крайне редко</li>
</ul>
 `,
            goal: `Задайте элементам размеры в процентах`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать отображение элемента в любых единицах измерения. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Относительные единицы - проценты</h2>
      <p class="unit-px">Этот параграф имеет ширину 200px</p>
      <p class="unit-percent">Этот параграф имеет ширину 60% ширины родителя</p>
      <div class="wrapper">
        <p class="unit-px">Этот параграф имеет ширину 200px</p>
        <p class="unit-percent">Этот параграф имеет ширину 80% ширины родителя</p>
      </div>
    </section>
    
    <section>
      <h2>Относительные единицы - em, rem</h2>
      <ul class="unit-em">
        <li>я в 1.2 раза больше своего родителя</li>
        <li>я в 1.2 раза больше своего родителя</li>
        <li>я в 1.2 раза больше своего родителя
          <ul>
            <li>я в 1.2 раза больше своего родителя</li>
            <li>я в 1.2 раза больше своего родителя
              <ul>
                <li>я в 1.2 раза больше своего родителя</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="unit-rem">
        <li>я в 1.2 раза больше корня</li>
        <li>я в 1.2 раза больше корня</li>
        <li>я в 1.2 раза больше корня
          <ul>
            <li>я в 1.2 раза больше корня</li>
            <li>я в 1.2 раза больше корня
              <ul>
                <li>я в 1.2 раза больше корня</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Абсолютные единицы</h2>
      <div class="unit-px">Этот контейнер имеет ширину 200px</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */

html {
  font-size: 18px;
 }

section div {
  min-height: 100px;
  border: 2px dashed green;
}

section p {
  border: 2px solid orange;
}

.wrapper {
  width: 50%;
}

.unit-px {
  width: 200px;
}

.unit-rem li {
  font-size: 1.2rem;
}

.unit-em li {
  font-size: 1.2em;
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>unit-percent</code> задайте ширину <code>60%</code> ширины родительского элемента.",
                    testRegExp: [`\.unit-percent\\s+{\\s*width: 60%;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение width",
                },
                {
                    id: 2,
                    label: "Обертке, элементу с классом <code>wrapper</code> измените ширину на <code>80%</code> ширины родительского элемента. Посмотрите, как изменится при этом ширина вложенных элементов",
                    testRegExp: [`\.wrapper\\s+{\\s*width: 80%;\\s*}`],
                    failMsg: "Убедитесь, что вы изменили значение width элемента wrapper",
                },
            ],
        },
        {
            id: 4,
            header: "Единицы вьюпорта - vw, vh",
            url: "css-unit-viewport",
            theory: `<p>Иногда бывает удобно задавать элементам размеры, зависящие от размеров вьюпорта, иными словами, размеров окна браузера. Для этого используются такие единицы как <code>vw</code> (<i>viewport width</i>) и <code>vh</code> (<i>viewport height</i>):</p>

<pre><code><span class="selector">div</span> {
  <span class="rule">width:</span> 50vw;
  <span class="rule">height:</span> 20vh;
}</code></pre>

<p>Один <code>vw</code> рассчитывается как <b>1% от текущей ширины вьюпорта</b>. А один <code>vh</code>, соответственно, как <b>1% от текущей высоты вьюпорта</b>. Размеры элемента <code>div</code> составят, таким образом, 50% ширины и 20% высоты текущего окна браузера.</p>
<p>Единицы измерения вьюпорта можно использовать при необходимости часто менять размеры окна устройства - например, при переходе между режимом смартфона, планшета и десктопа. Правда, чаще для этого используют другой инструмент - медиавыражения.</p>
<p>Есть и другие единицы измерения, связанные с вьюпортом:</p>
<ul>
 <li><code>vmin</code> - рассчитывается как 1/100 от высоты или ширины окна браузера в зависимости от того, какая из величин в данный момент меньше</li>
 <li><code>vmax</code> - рассчитывается как 1/100 от высоты или ширины окна браузера в зависимости от того, какая из величин в данный момент больше</li>
</ul>
 `,
            goal: `Задайте элементам размеры относительно вьюпорта`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать отображение элемента в любых единицах измерения. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Единицы вьюпорта</h2>
      <div class="unit-vw">Моя ширина составляет 70% ширины вьюпорта</div>
      <div class="unit-vh">Моя высота составляет 20% высоты вьюпорта</div>
    </section>
    
    <section>
      <h2>Относительные единицы - проценты</h2>
      <p class="unit-px">Этот параграф имеет ширину 200px</p>
      <p class="unit-percent">Этот параграф имеет ширину 60% ширины родителя</p>
      <div class="wrapper">
        <p class="unit-px">Этот параграф имеет ширину 200px</p>
        <p class="unit-percent">Этот параграф имеет ширину 80% ширины родителя</p>
      </div>
    </section>
    
    <section>
      <h2>Относительные единицы - em, rem</h2>
      <ul class="unit-em">
        <li>я в 1.2 раза больше своего родителя</li>
        <li>я в 1.2 раза больше своего родителя</li>
        <li>я в 1.2 раза больше своего родителя
          <ul>
            <li>я в 1.2 раза больше своего родителя</li>
            <li>я в 1.2 раза больше своего родителя
              <ul>
                <li>я в 1.2 раза больше своего родителя</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="unit-rem">
        <li>я в 1.2 раза больше корня</li>
        <li>я в 1.2 раза больше корня</li>
        <li>я в 1.2 раза больше корня
          <ul>
            <li>я в 1.2 раза больше корня</li>
            <li>я в 1.2 раза больше корня
              <ul>
                <li>я в 1.2 раза больше корня</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Абсолютные единицы</h2>
      <div class="unit-px">Этот контейнер имеет ширину 200px</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */
html {
  font-size: 18px;
 }

section div {
  min-height: 100px;
  border: 2px dashed green;
}

section p {
  border: 2px solid orange;
}

.wrapper {
  width: 80%;
}

.unit-px {
  width: 200px;
}

.unit-rem li {
  font-size: 1.2rem;
}

.unit-em li {
  font-size: 1.2em;
}

.unit-percent {
  width: 60%;
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>unit-vw</code> задайте ширину <code>70%</code> ширины вьюпорта. Обратите внимание, что элемент занял 70% не от всего окна вышего браузера, а только от ширины окна с результатами задания. Это связано с тем, что вывод результатов задания осуществляется в элемент <code>iframe</code>, который технически является отдельным окном со своим вьюпортом.",
                    testRegExp: [`\.unit-vw\\s+{\\s*width: 70vw;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение width",
                },
                {
                    id: 2,
                    label: "Элементу с классом <code>unit-vh</code> задайте высоту <code>20%</code> высоты вьюпорта.",
                    testRegExp: [`\.unit-vh\\s+{\\s*height: 20vh;\\s*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение height",
                },
            ],
        },
        {
            id: 5,
            header: "Цвета - именованные цвета",
            url: "css-color-named",
            theory: `<p>Задавать цвет при стилизации страницы с помощью CSS приходится достаточно часто. Это цвет шрифта, фона и рамки. Современные компьютеры используют 24-х битную цветовую схему, это значит, что у вас 16.7 миллионов цветов на выбор. Есть где развернуться!</p>
<p>В предыдущих уроках по CSS вы уже узнали свойство <code>color</code>, с помощью которого можно задать цвет тексту. Цвет фону и рамке можно задать с помощью свойств <code>background-color</code> и <code>border-color</code> соответственно.</p>
<p>Само значение цвета можно задать несколькими способами и однин из них вы уже неоднакратно использовали в предыдущтх упражнениях - с помощью ключевого слова. Вот как это выглядит:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">color:</span> chocolate;
}</code></pre>

<p style="color: chocolate;">В результате получим параграф с текстом цвета шоколада.</p>
<p class="external-resource">Посмотреть все именованные цвета, доступные в HTML можно, например, <a href="https://html5css.ru/colors/colors_hex.php" target="_blank">здесь</a>.</p>
<p>Также следует знать о ключевом слове <code>transparent</code>, которое сделает текст прозрачным.</p>
 `,
            goal: `Задайте элементам именованные цвета`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете отображать элементы с помощью любых цветовых схем. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Именованные цвета</h2>
      <div class="demo named-color">Мне задан фон цвета mistyrose и прозрачный текст</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */

html {
  background-color: mintcream;
  background-image: url('https://funart.pro/uploads/posts/2020-02/1582403640_7-p-nastoyashchie-burevestniki-16.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  color: white;
}

.demo {
  min-height: 50px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>named-color</code> задайте цвет фона 'туманная роза' (<code>mistyrose</code>).",
                    testRegExp: [`\.named-color\\s+{[\\s\\S]*background-color: mistyrose;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение background-color",
                },
                {
                    id: 2,
                    label: "Этому же элементу задайте прозрачный текст.",
                    testRegExp: [`\.named-color\\s+{[\\s\\S]*color: transparent;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение color",
                },
            ],
        },
        {
            id: 6,
            header: "Цвета - шестнадцатиричные значения",
            url: "css-color-hex",
            theory: `<p>Очень часто можно встретить цвета, заданные в шестнадцатиричном формате (hex-colors):</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">color:</span> #02798b;
}</code></pre>

<p style="color: #02798b;">В результате получим параграф с текстом такого цвета.</p>
<p>Запись в шестнадцатиричном формате начинается с хэш-символа <code>#</code>, за которым следуют 6 символов - цифровых в диапазоне 0-9 либо буквенных в диапазоне a-f. Вот полный набор возможных символов: <code>0123456789abcdef</code>. Символы регистронезависимы, то есть <code>b</code> и <code>B</code> - это одно и то же. Но принято записывать маленькими строчными символами.</p>
<p>Каждая пара значений кодирует один канал - красный, зеленый и синий. 3 пары значений - 3 канала. Для каждого канала может быть 16*16=256 возможных значений.</p>
<p>Вот самые распространенные цвета в шестнадцатиричном формате:</p>
<ul>
  <li><code>#ff0000</code> - <span style="color: #ff0000">Красный</span></li>
  <li><code>#00ff00</code> - <span style="color: #00ff00">Зеленый</span></li>
  <li><code>#0000ff</code> - <span style="color: #0000ff">Синий</span></li>
  <li><code>#000000</code> - <span style="color: #000000">Черный</span></li>
  <li><code>#ffffff</code> - <span style="color: #ffffff; background-color: #000000">Белый</span></li>
</ul>
<p>Цвета в этом формате обладают полноценной гибкостью - вы можете задать любой цвет, в отличие от ограниченного набора именованных цветов, но их очень сложно читать. Взглянув на запись в шестнадцатиричном формате, почти никогда нельзя сказать, какой примерно цвет получится на выходе.</p>
 `,
            goal: `Задайте элементам цвета в шестнадцатиричном формате`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете отображать элементы с помощью любых цветовых схем. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Именованные цвета</h2>
      <div class="demo named-color">Мне задан фон цвета mistyrose и прозрачный текст</div>
    </section>

    <section>
      <h2>Цвета в шестнадцатиричном формате</h2>
      <div class="demo hex-color">Мне задан фон цвета #66cdaa и синий текст</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */

html {
  background-color: mintcream;
  background-image: url('https://funart.pro/uploads/posts/2020-02/1582403640_7-p-nastoyashchie-burevestniki-16.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  color: white;
}

.demo {
  min-height: 50px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.named-color {
  background-color: mistyrose;
  color: transparent; 
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>hex-color</code> задайте цвет фона <code>#66cdaa</code>.",
                    testRegExp: [[`\.hex-color\\s+{[\\s\\S]*background-color: #66cdaa;[\\s\\S]*}`, "i"]],
                    failMsg: "Убедитесь, что вы задали правильное значение background-color",
                },
                {
                    id: 2,
                    label: "Этому же элементу задайте синий текст в шестнадцатиричном формате.",
                    testRegExp: [[`\.hex-color\\s+{[\\s\\S]*color: #0000ff;[\\s\\S]*}`, "i"]],
                    failMsg: "Убедитесь, что вы задали значение color в нужном формате",
                },
            ],
        },
        {
            id: 7,
            header: "Цвета - rgb()/rgba()",
            url: "css-color-rgb",
            theory: `<p>Более продвинутый способ записать цвет - использовать CSS функцию. Например, функция <code>rgb()</code> принимает 3 аргумента:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">color:</span> rgb(180, 10, 30);
}</code></pre>

<p style="color: rgb(180, 10, 30);">В результате получим параграф с текстом такого цвета.</p>
<p>3 аргумента функции - это 3 числа в диапазоне 0 - 255. Числа также описывают 3 канала - красный, зеленый, синий (это отражено в названии функции <i>red-green-blue</i>).</p>
<p>Вот самые распространенные цвета в rgb формате:</p>
<ul>
  <li><code>rgb(255, 0, 0)</code> - <span style="color:rgb(255, 0, 0)">Красный</span></li>
  <li><code>rgb(0, 255, 0)</code> - <span style="color: rgb(0, 255, 0)">Зеленый</span></li>
  <li><code>rgb(0, 0, 255)</code> - <span style="color: rgb(0, 0, 255)">Синий</span></li>
  <li><code>rgb(0, 0, 0)</code> - <span style="color: rgb(0, 0, 0)">Черный</span></li>
  <li><code>rgb(255, 255, 255)</code> - <span style="color: rgb(255, 255, 255); background-color: rgb(0, 0, 0)">Белый</span></li>
</ul>
<p>Есть родственная функция <code>rgba()</code>, которая принимает четвертый аргумент: <code>rgba(12, 138, 33, 0.5)</code>, который кодирует альфа-канал, устанавливая степень прозрачности цвета. Четвертый аргумент принимает значения от <code>0</code> - полностью прозрачный до <code>1</code> - полностью непрозрачный. В остальных отношениях эта функция работает как и <code>rgb()</code>.</p>
<p>Несмотря на то, что функции <code>rgb()/rgba()</code> в основе действуют как и hex цвета, кодируя 3 цветовые канала, понять значения чисел от 0 до 255 гораздо легче, чем запись в шестнадцатиричном формате. Кроме того, наличие альфа-канала позволяет управлять прозрачностью цвета.</p>
 `,
            goal: `Задайте элементам цвета в rgb()/rgba() формате`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете отображать элементы с помощью любых цветовых схем. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Именованные цвета</h2>
      <div class="demo named-color">Мне задан фон цвета mistyrose и прозрачный текст</div>
    </section>

    <section>
      <h2>Цвета в шестнадцатиричном формате</h2>
      <div class="demo hex-color">Мне задан фон цвета #66cdaa и синий текст</div>
    </section>

    <section>
      <h2>Цвета в формате rgb/rgba</h2>
      <div class="demo rgb-color">Мне задан фон цвета rgb(136, 94, 160) и черный текст</div>
      <div class="demo rgba-color">Мне задан фон с прозрачностью</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */

html {
  background-color: mintcream;
  background-image: url('https://funart.pro/uploads/posts/2020-02/1582403640_7-p-nastoyashchie-burevestniki-16.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  color: white;
}

.demo {
  min-height: 50px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.named-color {
  background-color: mistyrose;
  color: transparent; 
}

.hex-color {
  background-color: #66cdaa;
  color: #0000fF;
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>rgb-color</code> задайте цвет фона <code>rgb(136, 94, 160)</code>.",
                    testRegExp: [`\.rgb-color\\s+{[\\s\\S]*background-color: rgb\\(136, 94, 160\\);[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение background-color",
                },
                {
                    id: 2,
                    label: "Этому же элементу задайте черный текст в rgb формате.",
                    testRegExp: [[`\.rgb-color\\s+{[\\s\\S]*color: rgb\\(0, 0, 0\\);[\\s\\S]*}`, "i"]],
                    failMsg: "Убедитесь, что вы задали значение color в нужном формате",
                },
                {
                    id: 3,
                    label: "Элементу с классом <code>rgba-color</code> задайте цвет фона со следующими характеристиками: <ul><li>красный канал - <code>103</code></li><li>зеленый канал - <code>75</code></li><li>синий канал - <code>60</code></li><li>непрозрачность - <code>70%</code></li></ul>.",
                    testRegExp: [`\.rgba-color\\s+{[\\s\\S]*background-color: rgba\\(103, 75, 60, 0.7\\);[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали значение background-color в нужном формате",
                },
            ],
        },
        {
            id: 8,
            header: "Цвета - hsl()/hsla()",
            url: "css-color-hsl",
            theory: `<p>Наконец, есть одна CSS функция <code>hsl()</code>, которая также принимает 3 аргумента:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">color:</span> hsl(50, 70%, 40%);
}</code></pre>

<p style="color: hsl(50, 70%, 40%);">В результате получим параграф с текстом такого цвета.</p>
<p>Несмотря на то, что количество аргументов такое же, означают они совершенно другие вещи, а именно тон, насыщенность и осветленность (это отражено в названии функции <i>hue-saturation-lightness</i>).</p>
<ul>
  <li><code>hue</code> - тон, это основной оттенок цвета. Принимает числовое значение в диапазоне 0-360, что соответствует углу поворота на цветовом колесе</li>
  <li><code>saturation</code> - насыщенность, показывает насколько цвет насыщен. Принимает процентное значение в диапазоне 0-100, если значение равно 0, то это нулевая насыщенность - серый цвет, а 100 - это полная насыщенность цвета</li>
  <li><code>lightness</code> - осветленность, показывает насколько осветлен цвет. Принимает процентное значение в диапазоне 0-100, если значение равно 0, то это нулевая осветленность - черный цвет, а 100 - это абсолютная осветленность - белый цвет</li>
</ul>
<p>Вот самые распространенные цвета в hsl формате:</p>
<ul>
  <li><code>hsl(0, 100%, 50%)</code> - <span style="color: hsl(0, 100%, 50%)">Красный</span></li>
  <li><code>hsl(120, 100%, 50%)</code> - <span style="color: hsl(120, 100%, 50%)">Зеленый</span></li>
  <li><code>hsl(240, 100%, 50%)</code> - <span style="color: hsl(240, 100%, 50%)">Синий</span></li>
  <li><code>hsl(0, 0%, 0%)</code> - <span style="color: hsl(0, 0%, 0%)">Черный</span></li>
  <li><code>hsl(0, 0%, 100%)</code> - <span style="color: hsl(0, 0%, 100%); background-color: hsl(0, 0%, 0%)">Белый</span></li>
</ul>
<p>Также существует родственная функция <code>hsla()</code>, которая принимает четвертый аргумент для кодирования альфа-канала в диапазоне 0-1, как в функции <code>rgba()</code>.</p>
<p>Функции <code>hsl()/hsla()</code>, пожалуй, сложнее для восприятия людьми, которые мало работают с цветами, чем <code>rgb()/rgba()</code>, их аргументы не настолько очевидны. Однако именно эти функции предоставляют самые мощные возможности для дизайнера, позволяя осуществлять полный контроль над цветом.</p>
 `,
            goal: `Задайте элементам цвета в hsl()/hsla() формате`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете отображать элементы с помощью любых цветовых схем. Ознакомьтесь с нашим каталогом образцов:</p>

    <section>
      <h2>Именованные цвета</h2>
      <div class="demo named-color">Мне задан фон цвета mistyrose и прозрачный текст</div>
    </section>

    <section>
      <h2>Цвета в шестнадцатиричном формате</h2>
      <div class="demo hex-color">Мне задан фон цвета #66cdaa и синий текст</div>
    </section>

    <section>
      <h2>Цвета в формате rgb/rgba</h2>
      <div class="demo rgb-color">Мне задан фон цвета rgb(136, 94, 160) и черный текст</div>
      <div class="demo rgba-color">Мне задан фон с прозрачностью</div>
    </section>

    <section>
      <h2>Цвета в формате hsl/hsla</h2>
      <div class="demo hsl-color">Мне задан фон цвета hsl(249, 80%, 67%) и зеленый текст</div>
      <div class="demo hsla-color">Мне задан фон с прозрачностью</div>
    </section>

  </body>
</html>
`,
                css: `/* CSS редактор */

html {
  background-color: mintcream;
  background-image: url('https://funart.pro/uploads/posts/2020-02/1582403640_7-p-nastoyashchie-burevestniki-16.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  color: white;
}

.demo {
  min-height: 50px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.named-color {
  background-color: mistyrose;
  color: transparent; 
}

.hex-color {
  background-color: #66cdaa;
  color: #0000fF;
}

.rgb-color {
  background-color: rgb(136, 94, 160);
  color: rgb(0, 0, 0);
}

.rgba-color {
  background-color: rgba(103, 75, 60, 0.7);
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Элементу с классом <code>hsl-color</code> задайте цвет фона <code>hsl(249, 80%, 67%)</code>.",
                    testRegExp: [`\.hsl-color\\s+{[\\s\\S]*background-color: hsl\\(249, 80%, 67%\\);[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали правильное значение background-color",
                },
                {
                    id: 2,
                    label: "Этому же элементу задайте зеленый текст в hsl формате.",
                    testRegExp: [[`\.hsl-color\\s+{[\\s\\S]*color: hsl\\(120, 100%, 50%\\);[\\s\\S]*}`, "i"]],
                    failMsg: "Убедитесь, что вы задали значение color в нужном формате",
                },
                {
                    id: 3,
                    label: "Элементу с классом <code>hsla-color</code> задайте цвет фона со следующими характеристиками: <ul><li>основной оттенок - <code>220</code></li><li>насыщенность - <code>85%</code></li><li>осветленность - <code>50%</code></li><li>непрозрачность - <code>40%</code></li></ul>.",
                    testRegExp: [`\.hsla-color\\s+{[\\s\\S]*background-color: hsla\\(220, 85%, 50%, 0.4\\);[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы задали значение background-color в нужном формате",
                },
            ],
        },
        {
            id: 9,
            header: "Шрифты - подключение в HTML через link",
            url: "css-font-link",
            theory: `<p>В уроке по стилизации текста мы указывали, каким именно шрифтом должен быть отображен текст с помощью правила <code>font-family</code>. Мы могли выбрать семейство шрифтов либо один из вэб-безопасных шрифтов, установленных в системе по умолчанию.</p>
<p>В случае, если возникает необходимость использовать сторонний шрифт, его надо предварительно скачать (или получить URL-адрес, по которому он размещен в Интернете), а затем подключить его к странице.</p>
<p>Один из способов подключить шрифт к странице - использовать уже знакомый вам HTML-элемент <code>link</code>, расположенный в шапке страницы <code>head</code>. Вот как это будет выглядить в коде:</p>

<pre><code><span class="tag">&lt;head></span>
  <span class="tag">&lt;link <span class="attr-name">href=</span><span class="attr-value">"/fonts/Roboto.woff2"</span> <span class="attr-name">rel=</span><span class="attr-value">"stylesheet"</span>></span>
<span class="tag">&lt;/head></span></code></pre>

<p>Путь к шрифтам может быть как относительным путем к файлам, расположенным на вашем компьютере, так и URL-адресом, указывающим на файлы шрифта в Интернете. После этого шрифтом можно пользоваться:</p>

<pre><code><span class="selector">body</span> {
  <span class="rule">font-family:</span> Roboto, Arial, sans-serif;
}</code></pre>

<p>Не забывайте про перечисление шрифтов. После нестандартного шрифта через запятую указывается вэб-безопасный, а затем - семейство шрифтов.</p>
<p>Отличный сервис для поиска шрифтов - Google Fonts. Там вы можете выбрать любой понравившийся шрифт, выбрать его начертание, жирность и сразу же получить ссылку, готовую к вставке на страницу.</p>
<p class="external-resource">Посмотрите сами <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>.
 `,
            goal: `Подключите нестандартный шрифт в HTML`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>

    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете подключать и отображать любые шрифты. Результат вы увидите прямо здесь.</p>

  </body>
</html>
`,
                css: `/* CSS редактор */
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "В шапке страницы создайте элемент link, который загрузит шрифт 'Lato' со следующего адреса: <i>'https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap'</i>.",
                    testFn: `const link = iframe.contentDocument.querySelector("link");
            return (
              link &&
              link.href === "https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" &&
              link.rel === "stylesheet"
            );`,
                    failMsg: "Убедитесь, что в шапке сайта вы создали элемент link с правильными значениями аттрибутов",
                },
                {
                    id: 2,
                    label: `Элементу <code>body</code> задайте шрифт со следующими значениями: <ul><li>Основной шрифт - <code>Lato</code></li><li>Вэб-безопасный шрифт - <code>Arial</code></li><li>Семейство шрифтов без засечек</li></ul>`,
                    testRegExp: [`\body\\s+{[\\s\\S]*font-family: Lato,\\s+Arial,\s+sans-serif;[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы перечислили все шрифты в font-family",
                },
            ],
        },
        {
            id: 10,
            header: "Шрифты - подключение в CSS через @font-face",
            url: "css-font-face",
            theory: `<p>В реальных проектах файлы со шрифтами хранятся с остальными ресурсами сайта (обычно в папке <i>fonts</i>). В таком случае шрифты удобнее подключать в CSS файле с помощью директивы <code>@font-face</code>. Вот как в коде выглядит подключение шрифта с помощью директивы:</p>

<pre><code><span class="selector">@font-face</span> {
  <span class="rule">font-family:</span> Roboto;
  <span class="rule">font-weight:</span> 400;
  <span class="rule">font-style:</span> normal;
  <span class="rule">src:</span> url("/fonts/roboto.woff2") format("woff2"),
       url("/fonts/roboto.woff") format("woff");
}</code></pre>

<p>По синтаксису это CSS правило с несколькими свойствами, большинство из которых уже понятны вам к этому моменту:</p>
<ul>
  <li><code>font-family</code> - название шрифта</li>
  <li><code>font-weight</code> - жирность шрифта. В данном случае вместо ключевых слов принято использовать цифровые значения</li>
  <li><code>font-style</code> - обычное либо курсивное начертание</li>
  <li><code>src</code> - адрес, где искать файлы шрифта, в <code>url()</code> непосредственно передается строка адреса, а в <code>format()</code> - формат шрифта. Обратите внимание, что шрифты принято хранить хотя бы в двух форматах и перечислять их в <code>src</code> через запятую. Сначала браузер попробует найти файл шрифта формата <code>woff2</code> (это наиболее современный формат, поддерживаемый современными браузерами), в случае неудачи попробует найти файл <code>woff</code> (поддерживается более старыми браузерами), а потом уже откатится к вэб-безопасному шрифту.</li>
</ul>
<p>Директиву <code>@font-face</code> нужно создавать для каждого типа шрифта. Например, если вы скачали шрифт <code>Roboto</code>, включающий три жирности начертания - <code>200, 400, 700</code>, то директив <code>@font-face</code> у вас будет три.</p>
<p>Также директивы <code>@font-face</code> нужно указывать в самом начале CSS файла, до фактического использования шрифтов. Обычно для подключения шрифтов вообще выделяют отдельный файл <code>fonts.css</code>.</p>
<p class="external-resource">Узнайте больше о <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face" target="_blank">@font-face</a></p>.
 `,
            goal: `Подключите нестандартный шрифт в CSS`,
            initValues: {
                html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet">
  </head>

  <body>

    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете подключать и отображать любые шрифты. Результат вы увидите прямо здесь.</p>

  </body>
</html>
`,
                css: `/* CSS редактор */

body {
  font-family: Lato, Arial, sans-serif;
}
 `,
                js: "",
            },
            tasks: [
                {
                    id: 1,
                    label: "Удалите из шапки элемент <code>link</code>.",
                    testFn: `const link = iframe.contentDocument.querySelector("link");
            return link === null;`,
                    failMsg: "Убедитесь, что элемент link отсутствует на странице",
                },
                {
                    id: 2,
                    label: `В начале CSS файла создайте пустую директиву <code>@font-face</code>.`,
                    testRegExp: [`\@font-face\\s+{[\\s\\S]*}`],
                    failMsg: "Убедитесь, что вы создали @font-face без значений",
                },
                {
                    id: 3,
                    label: `В директиву передайте следующие свойства шрифта: <ul><li>Название шрифта - <code>Lato</code></li><li>жирность - <code>700</code></li><li>начертание - <code>курсивное</code></li><li>адреса - шрифт формата <code>woff2</code> по адресу <code>./fonts/Lato-italic-bold.woff2</code> и шрифт формата <code>woff</code> по адресу <code>./fonts/Lato-italic-bold.woff</code></li></ul>`,
                    testRegExp: [
                        `\@font-face\\s+{[\\s\\S]*font-family:\\s*Lato;[\\s\\S]*}`,
                        `\@font-face\\s+{[\\s\\S]*font-weight:\\s*700;[\\s\\S]*}`,
                        `\@font-face\\s+{[\\s\\S]*font-style:\\s*italic;[\\s\\S]*}`,
                        `\@font-face\\s+{[\\s\\S]*src:\\s*url\\(['|"]\\.\\/fonts\\/Lato-italic-bold.woff2['|"]\\)\\s*format\\(['|"]woff2['|"]\\),\\s*url\\(['|"]\\.\\/fonts\\/Lato-italic-bold.woff['|"]\\)\\s*format\\(['|"]woff['|"]\\);[\\s\\S]*}`,
                    ],
                    failMsg: "Убедитесь, что вы перечислили все свойства в @font-face. Также обратите внимание на порядок перечисления форматов шрифтов",
                },
            ],
        },
    ],
};
