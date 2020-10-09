import { IframeHTMLAttributes, AnchorHTMLAttributes } from "react";
import { IIframe } from "react-iframe/types";

export const HtmlDocument = {
  id: 2,
  title: "HTML документ",
  url: "html-document",
  excercises: [
    {
      id: 1,
      header: "Объявление HTML документа - доктайп и тэг html",
      url: "html-declaration",
      theory: `<p>В прошлом уроке по основам HTML мы вывели на экран различные элементы, отображающие текст, изображения и другой контент. Но чтобы браузеры правильно работали в вашей разметкой, необходимо организавть ее в виде HTML документа. HTML файлы имеют расширение <code>.html</code>. По общепринятому стандарту входной точной вашего сайта (главной страницей) является файл под названием <code>index.html</code>. Именно в таком файле мы сейчас и будем работать.</p>
      <p> HTML документ начинается с объявления типа документа (доктайпа). Вот как это выглядит: </p>
      <pre><code><span><</span>!DOCTYPE html></code></pre>
      <p>Доктайп говорит браузеру с каким именно докумнтом ему предстоит иметь дело. Также в нем можно указывать версию стандарта HTML. Мы не будем этого делать, тогда браузер будет считать, что это документ последнего стандарта (сейчас это HTML5). Всегда указывайте доктайп в первой строке своего документа.</p>
      <p>Сразу под доктайпом следует добавить элемент <code>html</code>. Именно в этом элементе будет содержаться вся ваша разметка:</p>
      <pre><code><span><</span>!DOCTYPE html>\n<span class="tag"><<span>html</span>></span>\n\n<span class="tag"><<span>/html</span>></span></code></pre>
      <p>Без этого элемента браузер может некорректно интерпретировать ваш HTML код.</p>`,
      goal: `Объявите HTML документ.`,
      initValues: {
        html: ``,
        css: "",
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Объявите тип документа.",
          test: (iframe: HTMLIFrameElement) => {
            const spans = iframe.ownerDocument.querySelector(".monaco-editor").querySelectorAll("span");
            const doctype = Array.from(spans).filter(span => span.textContent === "<!DOCTYPE")[0];
            return (
              doctype &&
              doctype.nextElementSibling &&
              doctype.nextElementSibling.textContent === " html" &&
              doctype.nextElementSibling.nextElementSibling &&
              doctype.nextElementSibling.nextElementSibling.textContent === ">"
            );
          },
          failMsg: "Убедитесь, что на первой строке находится инструкция DOCTYPE",
        },
        {
          id: 2,
          label: "Под доктайпом добавьте элемент <code>html</code>.",
          test: (iframe: HTMLIFrameElement) => {
            const spans = iframe.ownerDocument.querySelector(".monaco-editor").querySelectorAll("span");
            const html = Array.from(spans).filter(span => span.textContent === "html");
            return (
              html &&
              html.length === 2 &&
              html[1].previousElementSibling &&
              (html[1].previousElementSibling.textContent === "</" ||
                html[1].previousElementSibling.textContent === "></")
            );
          },
          failMsg: "Убедитесь, что на страницу добавлен элемент html",
        },
      ],
      solution: `<!DOCTYPE html>
<html>
</html>`,
    },

    {
      id: 2,
      header: "Служебная информация - тэги head и title",
      url: "html-head",
      theory: `<p>После объявления типа документа и создания элемента <code>html</code> необходимо передать браузеру <em>метаданные</em>, то есть данные о самом документе. Эти данные не отображаются на странице, но нужны браузеру, чтобы работа с вашим документам выполнялась правильно и эффективно.</p>
      <p> Метаданные находятся в элементе <code>head</code>, "голове" вашего документа:</p>
      <pre><code><span class="tag"><<span>html</span>></span>\n  <span class="tag"><<span>head</span>></span>\n\n  <span class="tag"><<span>/head</span>></span>\n<span class="tag"><<span>/html</span>></code></pre>
      <p>Как правило <code>head</code> является первым потомком элемента <code>html</code>. Давайте добавим в него какие-нибудь метаданные. Посмотрите на вкладки вашего браузера. На открытой сейчас вкладке написано "WebGrove", это заголовок сайта и он указывается в элементе <code>title</code>, вот так:</p>
      <pre><code><span class="tag"><<span>html</span>></span>\n  <span class="tag"><<span>head</span>></span>\n    <span class="tag"><<span>title</span>></span>WebGrove<span class="tag"><<span>/title</span>></span>\n  <span class="tag"><<span>/head</span>></span>\n<span class="tag"><<span>/html</span>></code></pre>
      <p>Элемент <code>title</code> должен быть потомком <code>head</code>.</p>`,
      goal: `Добавьте метаинформацию в HTML документ.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>

</html>`,
        css: "",
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Добавьте на страницу элемент <code>head</code>.",
          test: (iframe: HTMLIFrameElement) => {
            const spans = iframe.ownerDocument.querySelector(".monaco-editor").querySelectorAll("span");
            const head = Array.from(spans).filter(span => span.textContent === "head");
            return (
              head &&
              head.length >= 2 &&
              head[1].previousElementSibling &&
              (head[1].previousElementSibling.textContent === "</" ||
                head[1].previousElementSibling.textContent === "></")
            );
          },
          failMsg: "Убедитесь, что элемент head является потомком html",
        },
        {
          id: 2,
          label: "Добавьте на страницу заголовок документа с текстом 'Достопримечательности Москвы'.",
          test: (iframe: HTMLIFrameElement) => {
            const spans = iframe.ownerDocument.querySelector(".monaco-editor").querySelectorAll("span");
            const title = Array.from(spans).filter(span => span.textContent === "title");
            return (
              title &&
              title.length >= 2 &&
              title[1].previousElementSibling &&
              title[1].previousElementSibling.textContent === "</" &&
              title[1].previousElementSibling.previousElementSibling &&
              title[1].previousElementSibling.previousElementSibling.textContent === "Достопримечательности Москвы"
            );
          },
          failMsg: "Убедитесь, что элемент title с текстом 'Достопримечательности Москвы' является потомком head",
        },
      ],
      solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
</html>`,
    },

    {
      id: 3,
      header: "Тело документа - тэг body",
      url: "html-body",
      theory: `<p>Итак, метаинформация доступная браузеру, но не отображаемая на странице находится в элементе <code>head</code> - "голове документа". Вся отображаемая на странице информация находится в "теле" документа - элементе <code>body</code>:</p>
      <pre><code><span class="tag"><<span>html</span>></span>\n  <span class="tag"><<span>head</span>></span>\n\n  <span class="tag"><<span>/head</span>></span>\n  <span class="tag"><<span>body</span>></span>\n\n  <span class="tag"><<span>/body</span>></span>\n<span class="tag"><<span>/html</span>></code></pre>
      <p>Для правильного отображения элемент <code>body</code> должен располагаться ниже <code>head</code>.</p>`,
      goal: `Добавьте тело документа.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
</html>`,
        css: "",
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Добавьте на страницу элемент <code>body</code>.",
          test: (iframe: HTMLIFrameElement) => {
            const spans = iframe.ownerDocument.querySelector(".monaco-editor").querySelectorAll("span");
            const body = Array.from(spans).filter(span => span.textContent === "body");
            return (
              body &&
              body.length === 2 &&
              body[1].previousElementSibling &&
              (body[1].previousElementSibling.textContent === "</" ||
                body[1].previousElementSibling.textContent === "></")
            );
          },
          failMsg: "Убедитесь, что после элемента head расположен элемент body",
        },
      ],
      solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body></body>
</html>`,
    },

    {
      id: 4,
      header: "Ссылки на внешние страницы - тэг a",
      url: "html-external-links",
      theory: `<p>Интернет не был бы Интернетом без возможности переходить на другие страницы. Для этого используются <em>гиперссылки</em> или просто <em>ссылки</em>. В HTML ссылки реализованы с помощью элемента <code>a</code>. Текст, расположенный между открывающим и закрывающим тэгом будет текстом ссылки. По клику на текст вы перейдете на другю страницу.</p>
      <p>У ссылки есть обязательный аттрибут <code>href</code>. Значением этого аттрибута является адрес страницы, на которую вы хотите перейти. Вот как выглядит правильно оформленная ссылка:</p>
      <pre><code><span class="tag"><<span>a</span> <span class="attr-name">href=</span><span class="attr-value">"https://ru.wikipedia.org/"</span>></span>Перейти на Википедию<span class="tag"><<span>/a</span>></span></code></pre>
      <p>Вот эта ссылка в тексте:</p>
      <p><a href="https://ru.wikipedia.org/" style="color: blue; text-decoration: underline">Перейти на Википедию</a></p>
      <p>Кликните по ней, и вы перейдете на Википедию!</p>`,
      goal: `Добавьте ссылку на внешнюю страницу. Мы продолжим работу с сайтом о достопримечательностях Москвы, работу с которым мы начали в прошлом уроке по основам HTML.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <h1>Москва</h1>
    <div id="culture">
      <h2>Культура</h2> 
      <h3 class="small-header">Музеи</h3>
      <p>В Москве <strong>огромное</strong> количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить <em>хотя бы один раз в жизни</em>.</p>
      <h3 class="small-header">Театры</h3>
      <p>Москва славится своими театрами <span style="color: orange">не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>
      <p>Самым узнаваемым театром столицы безусловно является Большой театр.</p>
      <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" /><hr>
    </div>
    <div id="leisure">
      <h2 class="big-header">Отдых</h2>
      <h3>Парки</h3>
      <p>Среди самых красивых парков Москвы:</p>
      <ul style="color: darkorchid">
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>
      <p>Вот как выглядит Парк Горького:</p>
      <img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />
      <h3>Кинотеатры</h3>
      <p>К любимым кинотеатрам москвичей относятся:</p>
      <ol style="background-color: burlywood">
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>
    </div>
  </body>
</html>`,
        css: "",
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Сразу после параграфа про музеи Москвы добавьте ссылку с текстом 'Политехнический музей Москвы'.",
          test: (iframe: HTMLIFrameElement) => {
            const a = iframe.contentDocument.body.querySelector("a");
            return (
              a &&
              a.textContent === "Политехнический музей Москвы" &&
              a.previousElementSibling &&
              a.previousElementSibling.tagName === "P" &&
              a.nextElementSibling &&
              a.nextElementSibling.tagName === "H3"
            );
          },
          failMsg:
            "Убедитесь, что после параграфа про музеи Москвы расположен элемент a с текстом 'Политехнический музей Москвы'",
        },
        {
          id: 2,
          label: "Задайте ссылке адрес 'https://polymus.ru/ru/'. Не забудьте проверить ссылку кликнув по ней.",
          test: (iframe: HTMLIFrameElement) => {
            const a = iframe.contentDocument.body.querySelector("a");
            return (
              a &&
              a.href &&
              a.href === "https://polymus.ru/ru/" &&
              a.previousElementSibling &&
              a.previousElementSibling.tagName === "P" &&
              a.nextElementSibling &&
              a.nextElementSibling.tagName === "H3"
            );
          },
          failMsg: "Убедитесь, у ссылки есть аттрибут href со значением https://polymus.ru/ru/",
        },
      ],
      solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <h1>Москва</h1>
    <div id="culture">
      <h2>Культура</h2> 
      <h3 class="small-header">Музеи</h3>
      <p>В Москве <strong>огромное</strong> количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить <em>хотя бы один раз в жизни</em>.</p>
      <a href="https://polymus.ru/ru/">Политехнический музей Москвы</a>
      <h3 class="small-header">Театры</h3>
      <p>Москва славится своими театрами <span style="color: orange">не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>
      <p>Самым узнаваемым театром столицы безусловно является Большой театр.</p>
      <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" /><hr>
    </div>
    <div id="leisure">
      <h2 class="big-header">Отдых</h2>
      <h3>Парки</h3>
      <p>Среди самых красивых парков Москвы:</p>
      <ul style="color: darkorchid">
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>
      <p>Вот как выглядит Парк Горького:</p>
      <img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />
      <h3>Кинотеатры</h3>
      <p>К любимым кинотеатрам москвичей относятся:</p>
      <ol style="background-color: burlywood">
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>
    </div>
  </body>
</html>`,
    },

    {
      id: 5,
      header: "Ссылки-обертки",
      url: "html-external-links",
      theory: `<p>Ссылки бывают не только текстовые. Вероятно во время серфинга в Интернете вы переходили на другие ресурсы при клике на другой контент, например, изображения. По сути, ссылкой можно сделать практически любой контент, достаточно обернуть его в элемент <code>a</code>. Давайте, например, сделаем ссылкой изображение.</p>
      <pre><code><span class="tag"><<span>a</span> <span class="attr-name">href=</span><span class="attr-value">"https://polymus.ru/ru/"</span>></span>\n  <span class="tag"><<span>img</span> <span class="attr-name">src=</span><span class="attr-value">"https://cdn-st3.rtr-vesti.ru/vh/pictures/xw/205/344/7.jpg"</span> <span class="attr-name">alt=</span><span class="attr-value">"Политехнический музей"</span> /></span> \n<span class="tag"><<span>/a</span>></span></code></pre>
      <p>Вот эта ссылка в тексте:</p>
      <p><a href="https://polymus.ru/ru/" style="color: blue; text-decoration: underline"><img src="https://cdn-st3.rtr-vesti.ru/vh/pictures/xw/205/344/7.jpg" alt="Политехнический музей" /></a></p>
      <p>Теперь при клике по этой картинке вы попадете на сайт Политехнического музея. Не забудьте про правильную вложенность тэгов. Контент ссылки должен быть между открывающим и закрывающим тэгами.</p>`,
      goal: `Оберните изображение ссылкой.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <h1>Москва</h1>
    <div id="culture">
      <h2>Культура</h2> 
      <h3 class="small-header">Музеи</h3>
      <p>В Москве <strong>огромное</strong> количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить <em>хотя бы один раз в жизни</em>.</p>
      <a href="https://polymus.ru/ru/">Политехнический музей Москвы</a>
      <h3 class="small-header">Театры</h3>
      <p>Москва славится своими театрами <span style="color: orange">не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>
      <p>Самым узнаваемым театром столицы безусловно является Большой театр.</p>
      <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" /><hr>
    </div>
    <div id="leisure">
      <h2 class="big-header">Отдых</h2>
      <h3>Парки</h3>
      <p>Среди самых красивых парков Москвы:</p>
      <ul style="color: darkorchid">
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>
      <p>Вот как выглядит Парк Горького:</p>
      <img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />
      <h3>Кинотеатры</h3>
      <p>К любимым кинотеатрам москвичей относятся:</p>
      <ol style="background-color: burlywood">
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>
    </div>
  </body>
</html>`,
        css: "",
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Картинку с изображением Большого театра сделайте ссылкой.",
          test: (iframe: HTMLIFrameElement) => {
            const a = iframe.contentDocument.body.querySelectorAll("a")[1];
            return (
              a &&
              a.children &&
              a.children.length === 1 &&
              a.children[0].tagName === "IMG" &&
              a.previousElementSibling &&
              a.previousElementSibling.tagName === "P"
            );
          },
          failMsg: "Убедитесь, что элемент img с изображением Большого театра обернут в ссылку a",
        },
        {
          id: 2,
          label: "Задайте ссылке адрес 'https://en.wikipedia.org/wiki/Bolshoi_Theatre'.",
          test: (iframe: HTMLIFrameElement) => {
            const a = iframe.contentDocument.body.querySelectorAll("a")[1];
            return (
              a &&
              a.href &&
              a.href === "https://en.wikipedia.org/wiki/Bolshoi_Theatre" &&
              a.previousElementSibling &&
              a.previousElementSibling.tagName === "P"
            );
          },
          failMsg: "Убедитесь, у ссылки есть аттрибут href со значением https://en.wikipedia.org/wiki/Bolshoi_Theatre",
        },
      ],
      solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <h1>Москва</h1>
    <div id="culture">
      <h2>Культура</h2> 
      <h3 class="small-header">Музеи</h3>
      <p>В Москве <strong>огромное</strong> количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить <em>хотя бы один раз в жизни</em>.</p>
      <a href="https://polymus.ru/ru/">Политехнический музей Москвы</a>
      <h3 class="small-header">Театры</h3>
      <p>Москва славится своими театрами <span style="color: orange">не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>
      <p>Самым узнаваемым театром столицы безусловно является Большой театр.</p>
      <a href="https://en.wikipedia.org/wiki/Bolshoi_Theatre">
        <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" />
      </a><hr>
    </div>
    <div id="leisure">
      <h2 class="big-header">Отдых</h2>
      <h3>Парки</h3>
      <p>Среди самых красивых парков Москвы:</p>
      <ul style="color: darkorchid">
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>
      <p>Вот как выглядит Парк Горького:</p>
      <img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />
      <h3>Кинотеатры</h3>
      <p>К любимым кинотеатрам москвичей относятся:</p>
      <ol style="background-color: burlywood">
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>
    </div>
  </body>
</html>`,
    },

    {
      id: 6,
      header: "Относительные ссылки",
      url: "html-relative-links",
      theory: `<p>Ссылки могут вести не только на внешние ресурсы. Когда вы переходите по страницам в пределах одного сайта, вы тоже пользуйтесь ссылками. Такие ссылки называются <em>относительными</em> и для них надо указывать относительные пути. Как именно будет выглядить относительный путь зависит от структуры вашего проекта. Давайте в качестве примера рассмотрим такую структуру:</p>
      <pre><code>my_project/\n --index.html\n --theaters.html\n --museums.html</code></pre>
      <p>Здесь в корневой папке вашего проекта, которая называется <b>my_project</b>, находятся 3 HTML файла - <b>index.html</b>, <b>theaters.html</b> и  <b>museums.html</b>. HTML файлы, как правило, стараются разместить в одной папке. Как уже упоминалось ранее, входной точкой (главной страницей) вышего сайта является <b>index.html</b>. Тогда чтобы перейти с главной страницы на страницу с информацией о музеях <b>museums.html</b> вам надо создать такую ссылку:</p>
      <pre><code><span class="tag"><<span>a</span> <span class="attr-name">href=</span><span class="attr-value">"./museums.html"</span>></span>Узнать больше о музеях<span class="tag"><<span>/a</span>></span></code></pre>
      <p><a href="./museums.html" style="color: blue; text-decoration: underline">Узнать больше о музеях</a></p>
      <p>Сейчас эта ссылка работать не будет, так как в нашем проекте нет такой страницы, мы добавим ее позднее.</p>
      <p>Обратите внимание на адрес ссылки. Такой адрес называется относительным. Сочетание символов <code>./</code> означает, что файл следует искать в той же папке, что и файл из которого вы переходите по ссылке. Если бы нас требовалось подняться на одну директорию вверх, мы бы написали следующие символы перед названием файла: <code>../</code></p>`,
      goal: `Добавьте относительные ссылки.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <h1>Москва</h1>
    <div id="culture">
      <h2>Культура</h2> 
      <h3 class="small-header">Музеи</h3>
      <p>В Москве <strong>огромное</strong> количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить <em>хотя бы один раз в жизни</em>.</p>
      <a href="https://polymus.ru/ru/">Политехнический музей Москвы</a>
      <h3 class="small-header">Театры</h3>
      <p>Москва славится своими театрами <span style="color: orange">не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>
      <p>Самым узнаваемым театром столицы безусловно является Большой театр.</p>
      <a href="https://en.wikipedia.org/wiki/Bolshoi_Theatre">
        <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" />
      </a><hr>
    </div>
    <div id="leisure">
      <h2 class="big-header">Отдых</h2>
      <h3>Парки</h3>
      <p>Среди самых красивых парков Москвы:</p>
      <ul style="color: darkorchid">
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>
      <p>Вот как выглядит Парк Горького:</p>
      <img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />
      <h3>Кинотеатры</h3>
      <p>К любимым кинотеатрам москвичей относятся:</p>
      <ol style="background-color: burlywood">
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>
    </div>
  </body>
</html>`,
        css: "",
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Сразу под неупорядоченным списком парков добавьте ссылку на страницу <b>parks.html</b> с текстом 'Узнать больше о парках'. Файл расположен в той же папке, что и <b>index.html</b>.",
          test: (iframe: HTMLIFrameElement) => {
            const a = Array.from(iframe.contentDocument.body.querySelectorAll("a")).find(
              anchor => anchor.textContent === "Узнать больше о парках"
            );
            return a && a.previousElementSibling && a.previousElementSibling.tagName === "UL" && a.href === "";
          },
          failMsg:
            "Убедитесь, что после списка ul добавлен элемент a с текстом 'Узнать больше о парках' и адресом './parks.html'",
        },
        {
          id: 2,
          label:
            "Сразу под упорядоченным списком кинотеатров добавьте ссылку на страницу <b>cinemas.html</b> с текстом 'Полный список кинотеатров'. Файл расположен в той же папке, что и остальные 2 файла.",
          test: (iframe: HTMLIFrameElement) => {
            const a = Array.from(iframe.contentDocument.body.querySelectorAll("a")).find(
              anchor => anchor.textContent === "Полный список кинотеатров"
            );
            return a && a.previousElementSibling && a.previousElementSibling.tagName === "OL" && a.href === "";
          },
          failMsg: "Убедитесь, что после списка ol добавлен элемент a с текстом 'Полный список кинотеатров' и адресом './cinemas.html'",
        },
      ],
      solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <h1>Москва</h1>
    <div id="culture">
      <h2>Культура</h2> 
      <h3 class="small-header">Музеи</h3>
      <p>В Москве <strong>огромное</strong> количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить <em>хотя бы один раз в жизни</em>.</p>
      <a href="https://polymus.ru/ru/">Политехнический музей Москвы</a>
      <h3 class="small-header">Театры</h3>
      <p>Москва славится своими театрами <span style="color: orange">не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>
      <p>Самым узнаваемым театром столицы безусловно является Большой театр.</p>
      <a href="https://en.wikipedia.org/wiki/Bolshoi_Theatre">
        <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" />
      </a><hr>
    </div>
    <div id="leisure">
      <h2 class="big-header">Отдых</h2>
      <h3>Парки</h3>
      <p>Среди самых красивых парков Москвы:</p>
      <ul style="color: darkorchid">
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>
      <a href="./parks.html">Узнать больше о парках</a>
      <p>Вот как выглядит Парк Горького:</p>
      <img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />
      <h3>Кинотеатры</h3>
      <p>К любимым кинотеатрам москвичей относятся:</p>
      <ol style="background-color: burlywood">
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>
      <a href="./cinemas.html">Полный список кинотеатров</a>
    </div>
  </body>
</html>`,
    },
  ],
};
