import { ICourseLesson } from "../../../types";

export const HtmlDocument: ICourseLesson = {
  id: 2,
  title: "HTML документ",
  url: "html-document",
  excercises: [
    {
      id: 1,
      header: "Объявление HTML документа - доктайп и элемент html",
      url: "html-doctype-html",
      theory: `<p>В прошлом уроке по основам HTML мы отобразили разнообразный контент - текстовые элементы, изображения. Для того, чтобы браузеры правильно работали в разметкой, необходимо структурировать ее в виде HTML документа.</p>
      <p>Каждый HTML документ расположен в отдельном файле с расширением <code>.html</code>. По общепринятому стандарту входной точной вашего сайта (его главной страницей) является файл под названием <code>index.html</code>. Именно в таком файле мы сейчас и работаем.</p>
      <p>HTML документ начинается с объявления типа документа (доктайпа). Вот как это выглядит: </p>
      
<pre><code><span><</span>!DOCTYPE html></code></pre>
  
      <p>Доктайп подсказывает браузеру с документом какого типа ему предстоит иметь дело. Также в нем можно указывать версию стандарта HTML. Мы не будем этого делать, и тогда браузер будет считать, что это документ последнего стандарта (сейчас это <i>HTML5</i>). Всегда указывайте доктайп в первой строке своего документа.</p>
      <p>Сразу под доктайпом следует добавить элемент <code>html</code>. Именно в этом элементе будет содержаться вся ваша разметка:</p>
      
<pre><code><span><</span>!DOCTYPE html>
<span class="tag">&lt;html></span>
      
<span class="tag">&lt;/html></span></code></pre>

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
          testFn: (iframe: HTMLIFrameElement) => {
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
          testFn: (iframe: HTMLIFrameElement) => {
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
    },

    {
      id: 2,
      header: "Служебная информация - элементы head и title",
      url: "html-head",
      theory: `<p>После объявления типа документа и создания элемента <code>html</code> необходимо передать браузеру <em>метаданные</em>, то есть данные о самом документе. Эти данные не отображаются на странице, но нужны браузеру, чтобы работа с вашим документом выполнялась правильно и эффективно.</p>
      <p> Метаданные вложены в элемент <code>head</code>, "голову" вашего документа:</p>
      
<pre><code><span class="tag">&lt;html></span>
  <span class="tag">&lt;head></span>

  <span class="tag">&lt;/head></span>
<span class="tag">&lt;/html></code></pre>

      <p>Как правило, <code>head</code> является первым потомком элемента <code>html</code>. Давайте добавим в него какие-нибудь метаданные. Посмотрите на вкладки вашего браузера. На открытой сейчас вкладке написано "WebGrove", это заголовок сайта и он указывается в элементе <code>title</code>, вот так:</p>
      
<pre><code><span class="tag">&lt;html></span>
  <span class="tag">&lt;head></span>
    <span class="tag">&lt;title></span>WebGrove<span class="tag">&lt;/title></span>
  <span class="tag">&lt;/head></span>
<span class="tag">&lt;/html></code></pre>

      <p>Элемент <code>title</code> должен быть вложен в элемент <code>head</code>.</p>`,
      goal: `Добавьте заголовок в HTML документ.`,
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
          testFn: (iframe: HTMLIFrameElement) => {
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
          failMsg: "Убедитесь, что в html вложен элемент head",
        },
        {
          id: 2,
          label: "Добавьте на страницу заголовок документа с текстом 'Достопримечательности Москвы'.",
          testFn: (iframe: HTMLIFrameElement) => {
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
          failMsg: "Убедитесь, что добавлен элемент title с текстом 'Достопримечательности Москвы'",
        },
      ],
    },

    {
      id: 3,
      header: "Тело документа - элемент body",
      url: "html-body",
      theory: `<p>Итак, служебная метаинформация, не отображаемая на странице, находится в элементе <code>head</code> - "голове" документа. Напротив, вся отображаемая на странице информация находится в "теле" документа - элементе <code>body</code>:</p>
      
<pre><code><span class="tag">&lt;html></span>
  <span class="tag">&lt;head></span>
    &lt;!--Метаинформация<span>-->
  <span class="tag">&lt;/head></span>
  <span class="tag">&lt;body></span>
    &lt;!--Видимый контент<span>-->
  <span class="tag">&lt;/body></span>
<span class="tag">&lt;/html></code></pre>

      <p>Для правильного отображения элемент <code>body</code> должен располагаться ниже <code>head</code>.</p>`,
      goal: `Добавьте тело документа.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>

</html>`,
        css: `
        img {
          max-width: 100%
        }`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Добавьте на страницу элемент <code>body</code>.",
          testFn: (iframe: HTMLIFrameElement) => {
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
    },

    {
      id: 4,
      header: "Ссылки - элемент a",
      url: "html-links",
      theory: `<p>Интернет не был бы Интернетом без возможности переходить на другие страницы. Для навигации между ресурсами используются <em>гиперссылки</em> или просто <em>ссылки</em>. В HTML ссылки реализованы с помощью элемента <code>a</code> (<i>anchor</i>). Текст, расположенный между открывающим и закрывающим тэгами будет отображен как текст ссылки. По клику на текст вы перейдете на другую страницу.</p>
      <p>У ссылки есть обязательный аттрибут <code>href</code>. Значением этого аттрибута является адрес страницы, на которую вы хотите перейти. Вот как выглядит оформленная ссылка:</p>
      
<pre><code><span class="tag">&lt;a <span class="attr-name">href=</span><span class="attr-value">"https://ru.wikipedia.org/"</span>></span>Перейти на Википедию<span class="tag">&lt;/a></span></code></pre>

      <p>Вот эта ссылка в тексте:</p>
      <p><a href="https://ru.wikipedia.org/" style="color: blue; text-decoration: underline">Перейти на Википедию</a></p>
      <p>Кликните по ней, и вы перейдете на Википедию!</p>`,
      goal: `Добавьте ссылку на внешнюю страницу. Мы продолжим работу с сайтом о достопримечательностях Москвы, который вы начали создавать на прошлом уроке.`,
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
        css: `
        img {
          max-width: 100%
        }`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Сразу после параграфа про музеи Москвы добавьте ссылку с текстом 'Политехнический музей Москвы'.",
          testFn: (iframe: HTMLIFrameElement) => {
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
            "Убедитесь, что после параграфа про музеи Москвы расположена ссылка с текстом 'Политехнический музей Москвы'",
        },
        {
          id: 2,
          label: "Задайте ссылке адрес 'https://polymus.ru/ru/'. Не забудьте проверить ссылку кликнув по ней.",
          testFn: (iframe: HTMLIFrameElement) => {
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
    },

    {
      id: 5,
      header: "Ссылки-обертки",
      url: "html-wrapping-links",
      theory: `<p>Ссылки бывают не только текстовые. Вероятно во время серфинга в Интернете вы переходили на другие ресурсы при клике на другой контент, например, картинки. По сути, ссылкой можно сделать практически любой элемент, достаточно обернуть его в элемент <code>a</code>. Давайте, например, сделаем ссылкой изображение:</p>
      
<pre><code><span class="tag">&lt;a <span class="attr-name">href=</span><span class="attr-value">"https://polymus.ru/ru/"</span>></span>
  <span class="tag">&lt;img <span class="attr-name">src=</span><span class="attr-value">"https://cdn-st3.rtr-vesti.ru/vh/pictures/xw/205/344/7.jpg"</span> <span class="attr-name">alt=</span><span class="attr-value">"Политехнический музей"</span> /></span>
<span class="tag">&lt;/a></span></code></pre>

      <p>Вот эта ссылка в тексте:</p>
      <p><a href="https://polymus.ru/ru/" style="color: blue; text-decoration: underline"><img src="https://cdn-st3.rtr-vesti.ru/vh/pictures/xw/205/344/7.jpg" alt="Политехнический музей" /></a></p>
      <p>Теперь при клике по этой картинке вы попадете на сайт Политехнического музея. Не забудьте про правильную вложенность элементов. Контент ссылки должен быть между открывающим и закрывающим тэгами <code>a</code>.</p>`,
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
        css: `
        img {
          max-width: 100%
        }`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Картинку с изображением Большого театра сделайте ссылкой.",
          testFn: (iframe: HTMLIFrameElement) => {
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
          failMsg: "Убедитесь, что элемент img с изображением Большого театра обернут в ссылку",
        },
        {
          id: 2,
          label: "Задайте ссылке адрес 'https://en.wikipedia.org/wiki/Bolshoi_Theatre'.",
          testFn: (iframe: HTMLIFrameElement) => {
            const a = iframe.contentDocument.body.querySelectorAll("a")[1];
            return (
              a &&
              a.href === "https://en.wikipedia.org/wiki/Bolshoi_Theatre" &&
              a.previousElementSibling &&
              a.previousElementSibling.tagName === "P"
            );
          },
          failMsg: "Убедитесь, у ссылки есть аттрибут href с правильным значением",
        },
      ],
    },

    {
      id: 6,
      header: "Относительные ссылки",
      url: "html-relative-links",
      theory: `<p>Ссылки могут вести не только на внешние ресурсы. Когда вы переходите по страницам в пределах сайта, вы тоже пользуйтесь ссылками. Такие ссылки называются <em>относительными</em> и для них надо указывать относительные пути до внутренних страниц сайта. Как именно будет выглядить относительный путь зависит от структуры вашего проекта. Давайте в качестве примера рассмотрим такую структуру:</p>
      
<pre><code>my_project/\n --index.html\n --theaters.html\n --museums.html</code></pre>

      <p>Здесь в корневой папке проекта, которая называется <b>my_project</b>, находятся 3 HTML файла - <b>index.html</b>, <b>theaters.html</b> и  <b>museums.html</b>. HTML файлы, как правило, стараются разместить в одной папке. Как уже упоминалось ранее, входной точкой (главной страницей) вышего сайта является <b>index.html</b>. Тогда, чтобы перейти с главной страницы на страницу с информацией о музеях <b>museums.html</b> вам надо создать ссылку с таким адресом:</p>
      
<pre><code><span class="tag">&lt;a <span class="attr-name">href=</span><span class="attr-value">"./museums.html"</span>></span>Узнать больше о музеях<span class="tag">&lt;/a></span></code></pre>

      <p><a href="./museums.html" style="color: blue; text-decoration: underline">Узнать больше о музеях</a></p>
      <p>Сейчас эта ссылка работать не будет, так как в нашем проекте нет такой страницы, мы добавим ее позднее.</p>
      <p>Обратите внимание на адрес ссылки. Такой адрес называется относительным. Сочетание символов <code>./</code> означает, что файл следует искать в той же папке, что и файл из которого вы переходите по ссылке. Если бы нам требовалось подняться на одну директорию вверх, мы бы написали следующие символы перед названием файла: <code>../</code></p>`,
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
        css: `
        img {
          max-width: 100%
        }`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Сразу под неупорядоченным списком парков добавьте ссылку на страницу <b>parks.html</b> с текстом 'Узнать больше о парках'. Файл расположен в той же папке, что и <b>index.html</b>.",
          testFn: (iframe: HTMLIFrameElement) => {
            const anchor = Array.from(iframe.contentDocument.body.querySelectorAll("a")).find(
              anchor => anchor.textContent === "Узнать больше о парках"
            );
            return (
              anchor &&
              anchor.previousElementSibling &&
              anchor.previousElementSibling.tagName === "UL" &&
              anchor.href === ""
            );
          },
          failMsg:
            "Убедитесь, что после списка ul добавлена ссылка с текстом 'Узнать больше о парках' и адресом './parks.html'",
        },
        {
          id: 2,
          label:
            "Сразу под упорядоченным списком кинотеатров добавьте ссылку на страницу <b>cinemas.html</b> с текстом 'Полный список кинотеатров'. Файл расположен в той же папке, что и остальные 2 файла.",
          testFn: (iframe: HTMLIFrameElement) => {
            const anchor = Array.from(iframe.contentDocument.body.querySelectorAll("a")).find(
              anchor => anchor.textContent === "Полный список кинотеатров"
            );
            return (
              anchor &&
              anchor.previousElementSibling &&
              anchor.previousElementSibling.tagName === "OL" &&
              anchor.href === ""
            );
          },
          failMsg:
            "Убедитесь, что после списка ol добавлена ссылка с текстом 'Полный список кинотеатров' и адресом './cinemas.html'",
        },
      ],
    },

    {
      id: 7,
      header: "Якорные ссылки и ссылки-заглушки",
      url: "html-anchor-links",
      theory: `<p>Еще один вид ссылок, <em>якорные ссылки</em> позволяют перемещаться в пределах одной страницы. Обратите внимание, что на нашей странице уже достаточно много контента и скроллить ее каждый раз вниз, чтобы найти информацию о парках и кинотеатрах может быть неудобно.</p>
      <p>В одном из прошлых упражнений по HTML элементам мы задавали контейнерам <code>div</code> аттрибут <code>id</code>. Пришло время им воспользоваться.</p>
      <p>Якорная ссылка имеет вид:</p>
      
<pre><code><span class="tag">&lt;a <span class="attr-name">href=</span><span class="attr-value">"#culture"</span>></span>Культура<span class="tag">&lt;/a></span></code></pre>

      <p>Она состоит из символа <code>#</code> и id элемента, к которому должен быть выполнен переход. В данном случае при клике на ссылку вы перейдете к</p>
      
<pre><code><span class="tag">&lt;div <span class="attr-name">id=</span><span class="attr-value">"culture"</span>></span><span class="tag">&lt;/div></span></code></pre>

      <p>С помощью якорных ссылок можно создать, своего рода, "меню страницы". Удобнее всего оформлять такие ссылки в виде списка.</p>
      <p>Наконец, последний вид ссылок это <em>ссылки-заглушки</em>. Иногда на странице нужна ссылка, но прямо сейчас она не должна никуда вести, к примеру вы хотите добавить адрес ссылке позже, после разработки соответствующей страницы. Тогда вы добавляете ссылку-заглушку:</p>
      
<pre><code><span class="tag">&lt;a <span class="attr-name">href=</span><span class="attr-value">"#"</span>></span>Это ссылка-заглушка<span class="tag">&lt;/a></span></code></pre>

      <p>Ее аттрибут <code>href</code> состоит только из символа <code>#</code>. При клике на нее ничего не произойдет.</p>
      <p><a href="#" style="color: blue; text-decoration: underline">Это ссылка-заглушка</a></p>`,
      goal: `Добавьте меню с якорными ссылками.`,
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
        css: `
        img {
          max-width: 100%
        }`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Сразу под заголовком <code>h1</code> создайте неупорядоченный список с двумя элементами.",
          testFn: (iframe: HTMLIFrameElement) => {
            const ul = iframe.contentDocument.body.querySelector("h1").nextElementSibling;
            return (
              ul &&
              ul.children &&
              ul.children.length === 2 &&
              ul.children[0].tagName === "LI" &&
              ul.children[1].tagName === "LI"
            );
          },
          failMsg:
            "Убедитесь, что после заголовка h1 с текстом 'Москва' добавлен неупонрядоченный список с двумя членами li",
        },
        {
          id: 2,
          label: `В первый элемент списка поместите якорную ссылку с текстом 'Культура', ведущую к разделу с <code>id="culture"</code>.`,
          testFn: (iframe: HTMLIFrameElement) => {
            const firstLi = iframe.contentDocument.body.querySelectorAll("ul")[0].firstElementChild;
            if (!firstLi || firstLi.tagName !== "LI" || !firstLi.children) {
              return false;
            }
            const anchor = firstLi.children[0] as HTMLAnchorElement;
            return anchor && anchor.tagName === "A" && anchor.textContent === "Культура" && anchor.hash === "#culture";
          },
          failMsg:
            "Убедитесь, что в первом элементе списка находится ссылка a с текстом 'Культура' и аттрибутом href с правльным значением",
        },
        {
          id: 3,
          label: `Во второй элемент списка поместите якорную ссылку с текстом 'Отдых', ведущую к разделу с <code>id="leisure"</code>.`,
          testFn: (iframe: HTMLIFrameElement) => {
            const secondLi = iframe.contentDocument.body.querySelectorAll("ul")[0].lastElementChild;
            if (!secondLi || secondLi.tagName !== "LI" || !secondLi.children) {
              return false;
            }
            const anchor = secondLi.children[0] as HTMLAnchorElement;
            return anchor && anchor.tagName === "A" && anchor.textContent === "Отдых" && anchor.hash === "#leisure";
          },
          failMsg:
            "Убедитесь, что во втором элементе списка находится ссылка a с текстом 'Отдых' и аттрибутом href с правльным значением",
        },
      ],
    },

    {
      id: 8,
      header: "Комментарии",
      url: "html-comments",
      theory: `<p>Вы можете оставлять комментарии в HTML - текст, который не отображается браузером. Комментарий следует поместить между открывающей <code><span><</span>!--</code> и закрывающей <code>--></code> последовательностью символов:</p>
      
<pre><code><span><</span>!--Это комментарий<span>--></span></code></pre>
  
      <p>Есть несколько целей добавления комментариев. Во-первых, вы оставляете самому себе и другим разработчикам, читающим ваш код, подсказки, объясняющие те или иные решения или напоминания, что необходимо сделать с кодом в будущем.</p>
      <pre><code><span><</span>!--Добавить классы всем заголовкам<span>--></span></code></pre>
      <p>Во-вторых, вы можете эксперементировать с кодом, так как закомментировав код, вы "выключаете" его. Если вам необходимо вернуться к этому коду, достаточно его раскомментировать.</p>
      
<pre><code><span><</span>!--<span><<span>a</span> <span>href=</span><span>"#"</span>></span>Эта ссылка не отобразится в браузере, она закомментирована<span><<span>/a</span>></span>--></span></code></pre>`,
      goal: `Поэксперементируйте с комментариями.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Достопримечательности Москвы</title>
  </head>
  <body>
    <!--<h1>Москва</h1>-->
    <ul>
      <li>
        <a href="#culture">Культура</a>
      </li>
      <li>
        <a href="#leisure">Отдых</a>
      </li>
    </ul>
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
        css: `
        img {
          max-width: 100%
        }`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Раскомментируйте заголовок <code>h1</code>.",
          testFn: (iframe: HTMLIFrameElement) => {
            const h1 = iframe.contentDocument.body.querySelector("h1");
            return h1 !== null;
          },
          failMsg: "Убедитесь, что заголовок в текстом 'Москва' раскомментирован (он должен отобразиться в браузере)",
        },
        {
          id: 2,
          label: `Добавьте любой комментарий.`,
          testFn: (iframe: HTMLIFrameElement) => {
            let comments = [];
            let currentNode;
            const iterator = document.createNodeIterator(iframe.contentDocument.body, NodeFilter.SHOW_COMMENT);
            while ((currentNode = iterator.nextNode())) {
              comments.push(currentNode);
            }

            const h1 = iframe.contentDocument.body.querySelector("h1");

            return comments.length !== 0 && h1 !== null;
          },
          failMsg: "Убедитесь, что вы добавили хотя бы один комментарий",
        },
      ],
    },
  ],
};
