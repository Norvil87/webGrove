import { ICourseLesson } from "../../../types";

export const HtmlSemantic: ICourseLesson = {
  id: 5,
  title: "Семантический HTML",
  url: "html-semantic",
  excercises: [
    {
      id: 1,
      header: "Шапка и навигация - элементы header и nav",
      url: "html-header-nav",
      theory: `<p>В предыдущих уроках мы пользовались HTML элементами в основном как <b>структурными</b> единицами страницы, то есть нас интересовало преимущественно их взаимное расположение, но не смысловое содержание. Например, элемент <code>div</code> представляет собой контейнер для любых других элементов, элемент <code>p</code> - контейнер для блока текста и т. д.</p>
<p>В дополнение к структурному подходу стандарт HTML5 предлагает <b>семантический</b> подход, когда выбор HTML элемента основывается на том, какой вид содержимого он отображает и какой смысл вы вкладывайте в тот или иной раздел.</p>
<p>Например, один из разделов, встречающихся почти на всех сайтах - это его "шапка" (<i>header</i>). Шапка находится сверху и отображается на всех страницах сайта. Шапка, как правило, содержит следующие элементы:</p>
<p><ul><li>Логотип компании</li><li>Навигационные ссылки для перехода на другие страницы сайта</li><li>Кнопки для входа пользователей на сайт и регистрации новых пользователей</li><li>Форма поиска по сайту</li></ul></p>
<p>На сайте, на котором вы сейчас находитесь, шапка имеет серый цвет и содержит все эти элементы, кроме поиска. Для создания шапки следует использовать элемент <code>header</code>:</p>

<pre><code><span class="tag">&lt;body></span>
  <span class="tag">&lt;header></span>

  <span class="tag">&lt;/header></span>
<span class="tag">&lt;/body></span></code></pre>
<p>В шапке сайта почти всегда есть блок с ссылками, для навигации по внутренним страницам сайта. Для создания блока навигации используйте элемент <code>nav</code>:</p>

<pre><code><span class="tag">&lt;body></span>
  <span class="tag">&lt;header></span>
    <span class="tag">&lt;nav></span>
      &lt;!--Список ссылок-->
    <span class="tag">&lt;/nav></span>
  <span class="tag">&lt;/header></span>
<span class="tag">&lt;/body></span></code></pre>

<p>Обратите внимание, что с точки зрения отображения элементов на странице нет разницы, какой именно элемент вы используете - <code>header</code> или <code>div</code>. Но встретив элемент <code>header</code> вы сразу поймете, что речь идет о шапке сайта.</p>
`,
      goal: `Сайт в этом упражнении сверстан без учета семантики. Начните создавать семантическую разметку.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Культура Андалусии</title>
  </head>
  <body>
    <div>
      <div class="logo"></div>
      <div>
        <ul>
          <li><a href="#music">Музыка</a></li>
          <li><a href="#flamenco">Фламенко</a></li>
          <li><a href="#bullfight">Коррида</a></li>
        </ul>
      </div>
      <button type="button">Войти</button>
    </div>
    
    <div>
      <div>
      <h1>Традиционная Андалусия</h1>
        <div id="music">
          <h2>Музыка</h2>
          <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
        </div>
        <div id="flamenco">
          <h2>Фламенко</h2>
          <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
        </div>
        <section id="bullfight">
          <h2>Коррида</h2>
          <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
        </div>
      </div>  
      <div>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </div>
    </div>
    
    <div>
      <div class="logo"></div>
      <p>Наш телефон: +79901002323</p>
    </div>          
  </body>
</html>
`,
        css: `
a:hover {
  opacity: 0.6
}

button {
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  text-align: center
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Ivory;
  height: 50px;
  padding: 0 10px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 10px;
}

ul a {
  color: MediumSlateBlue;
  text-decoration: none;
}

.logo {
  width: 40px;
  height: 40px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg/164px-Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Найдите в текущей верстке элемент <code>div</code>, в который вложены элементы, характерные для шапки сайта, замените его соответствующим семантическим элементом.",
          testFn: (iframe: HTMLIFrameElement) => {
            const header = iframe.contentDocument.body.querySelector("header");
            return (
              header && header.parentElement && header.parentElement.tagName === "BODY" && header.children.length === 3
            );
          },
          failMsg: "Убедитесь, что вы заменили div элементом header",
        },
        {
          id: 2,
          label:
            "В шапке сайта найдите элемент <code>div</code>, который соответствует блоку навигации, замените его соответствующим семантическим элементом.",
          testFn: (iframe: HTMLIFrameElement) => {
            const nav = iframe.contentDocument.body.querySelector("nav");
            return nav && nav.parentElement && nav.parentElement.tagName === "HEADER" && nav.children.length === 1;
          },
          failMsg: "Убедитесь, что вы заменили div элементом nav",
        },
      ],
    },

    {
      id: 2,
      header: "Подвал и основной контент - элементы footer и main",
      url: "html-footer-main",
      theory: `<p>Зачем вообще использовать семантический подход? Вот основные преимущества, которые он дает:</p>
<p><ul>
<li>SEO оптимизация. Поисковые движки в Интернете лучше распознают контент вашего сайта и придают ему больший вес, если он выделен соответствющими семантическими элементами.</li>
<li>Доступность. Семантические элементы лучше обрабатываются экранными читалками и делают ваш сайт дружелюбнее к людям с ограниченными возможностями.</li>
<li>Читаемость. Гораздо легче читать код, размеченный со смыслом, а не десятки вложенных друг в друга <code>div</code></li></ul></p>
<p>Продолжим структурировать нашу страницу семантически. Полной противоположностью "шапки" страницы является ее "подвал" (<i>footer</i>). Подвал расположен внизу страницы, как правило он одинаков для всех страниц сайта и может содержать такую информацию:</p>
<p><ul>
<li>Схему сайта</li>
<li>Контактную информацию</li>
<li>Копирайт и правила пользования сайтом</li>
<li>Логотип сайта</li></ul></p>
<p>Для создания подвала используем элемент <code>footer</code>.</p>

<pre><code><span class="tag">&lt;body></span>
  <span class="tag">&lt;header></span>
    &lt;!--Элементы шапки-->
  <span class="tag">&lt;/header></span>
  <span class="tag">&lt;footer></span>
    &lt;!--Элементы подвала-->
  <span class="tag"><&lt;/footer></span>
<span class="tag">&lt;/body></span></code></pre>

<p>Наконец, не сложно предположить, что основной контент страницы расположен между "шапкой" и "подвалом". Основной контент мы выделим с помощью элемента <code>main</code>:</p>

<pre><code><span class="tag">&lt;body></span>
  <span class="tag">&lt;header></span>
    &lt;!--Элементы шапки-->
  <span class="tag">&lt;/header></span>
  <span class="tag">&lt;main></span>
    &lt;!--Уникальный контент страницы-->
  <span class="tag">&lt;/main></span>
  <span class="tag">&lt;footer></span>
    &lt;!--Элементы подвала-->
  <span class="tag">&lt;/footer></span>
<span class="tag">&lt;/body></span></code></pre>

<p>Обратите внимание, что <code>main</code> содержит уникальный контент страницы, поэтому он на странице может быть только один. Подвалов и шапок может быть несколько в зависимости от структуры вашей страницы.</p>
`,
      goal: `Выделите на странице основное содержание и подвал.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Культура Андалусии</title>
  </head>
  <body>
    <header>
      <div class="logo"></div>
      <nav>
        <ul>
          <li><a href="#music">Музыка</a></li>
          <li><a href="#flamenco">Фламенко</a></li>
          <li><a href="#bullfight">Коррида</a></li>
        </ul>
      </nav>
      <button type="button">Войти</button>
    </header>
    
    <div>
      <div>
      <h1>Традиционная Андалусия</h1>
        <div id="music">
          <h2>Музыка</h2>
          <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
        </div>
        <div id="flamenco">
          <h2>Фламенко</h2>
          <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
        </div>
        <section id="bullfight">
          <h2>Коррида</h2>
          <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
        </div>
      </div>  
      <div>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </div>
    </div>
    
    <div>
      <div class="logo"></div>
      <p>Наш телефон: +79901002323</p>
    </div>          
  </body>
</html>
`,
        css: `
a:hover {
  opacity: 0.6
}

button {
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  text-align: center
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Ivory;
  height: 50px;
  padding: 0 10px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 10px;
}

ul a {
  color: MediumSlateBlue;
  text-decoration: none;
}

.logo {
  width: 40px;
  height: 40px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg/164px-Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Найдите в текущей верстке элемент <code>div</code>, соответствующий подвалу сайта, замените его семантическим элементом.",
          testFn: (iframe: HTMLIFrameElement) => {
            const footer = iframe.contentDocument.body.querySelector("footer");
            return (
              footer && footer.parentElement && footer.parentElement.tagName === "BODY" && footer.children.length === 2
            );
          },
          failMsg: "Убедитесь, что вы заменили div элементом footer",
        },
        {
          id: 2,
          label:
            "Найдите в текущей верстке элемент <code>div</code>, соответствующий основному контенту сайта, замените его семантическим элементом.",
          testFn: (iframe: HTMLIFrameElement) => {
            const main = iframe.contentDocument.body.querySelector("main");
            return (
              main &&
              main.parentElement &&
              main.parentElement.tagName === "BODY" &&
              main.previousElementSibling &&
              main.previousElementSibling.tagName === "HEADER"
            );
          },
          failMsg: "Убедитесь, что вы заменили div элементом main",
        },
      ],
    },

    {
      id: 3,
      header: "Блоки основного контента - элементы article и section",
      url: "html-article-section",
      theory: `<p>Основное содержание страницы также можно разбить на смысловые блоки. К примеру, с помощью элемента <code>article</code> можно выделить контент страницы, который имеет смысл сам по себе, в отрыве от остального контента. Это, прежде всего, статьи, заметки, комментарии, записи в блоге и т. д.</p>

<pre><code><span class="tag">&lt;main></span>
  <span class="tag">&lt;article></span>
    &lt;!--Статья, заметка и т. д.-->
  <span class="tag">&lt;/article></span>
<span class="tag">&lt;/main></span></code></pre>

<p>Когда использовать элемент <code>article</code> в разметке? Главное правило такое: если вы можете содержимое элемента <code>article</code> вставить на другую страницу или другой сайт, и оно не потеряет при этом свой смысл, значит элемент <code>article</code> использован верно.</p>
<p>Еще один семантический блок на странице сайта - элемент <code>section</code>. Элемент <code>section</code> объединяет контент с общей темой.</p>

<pre><code><span class="tag">&lt;main></span>
  <span class="tag">&lt;article></span>
    <span class="tag">&lt;h1></span>Заголовок статьи<span class="tag">&lt;/h1></span>
    <span class="tag">&lt;section></span>
      <span class="tag">&lt;h2></span>Заголовок первого раздела<span class="tag">&lt;/h2></span>
      &lt;!--Контент первого раздела-->
    <span class="tag">&lt;/section></span>
    <span class="tag">&lt;section></span>
      <span class="tag">&lt;h2></span>Заголовок второго раздела<span class="tag">&lt;/h2></span>
      &lt;!--Контент второго раздела-->
    <span class="tag">&lt;/section></span>
  <span class="tag">&lt;/article></span>
<span class="tag">&lt;/main></span></code></pre>

<p>Придерживайтесь следующего правила. Если контенту можно дать заголовок (любого уровня), подумайте над тем, чтобы обернуть этот контент в <code>section</code>.</p>
<p>В примере выше элемент <code>article</code> содержит в себе несколько <code>section</code>. Но вы можете структурировать контент по-другому - выделить несколько <code>article</code> в пределах <code>section</code>, либо вообще не использовать <code>article</code>, если считаете, что контент не имеет смысла за пределами данной страницы. Семантический подход позволяет подходить к вопросу структурирования HTML творчески, пользуйтесь этим.</p>
`,
      goal: `Разбейте основной контент на семантические блоки.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Культура Андалусии</title>
  </head>
  <body>
    <header>
      <div class="logo"></div>
      <nav>
        <ul>
          <li><a href="#music">Музыка</a></li>
          <li><a href="#flamenco">Фламенко</a></li>
          <li><a href="#bullfight">Коррида</a></li>
        </ul>
      </nav>
      <button type="button">Войти</button>
    </header>
    
    <main>
      <div>
      <h1>Традиционная Андалусия</h1>
        <div id="music">
          <h2>Музыка</h2>
          <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
        </div>
        <div id="flamenco">
          <h2>Фламенко</h2>
          <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
        </div>
        <div id="bullfight">
          <h2>Коррида</h2>
          <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
        </div>
      </div>  
      <div>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </div>
    </main>
    
    <footer>
      <div class="logo"></div>
      <p>Наш телефон: +79901002323</p>
    </footer>          
  </body>
</html>
`,
        css: `
a:hover {
  opacity: 0.6
}

button {
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  text-align: center
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Ivory;
  height: 50px;
  padding: 0 10px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 10px;
}

ul a {
  color: MediumSlateBlue;
  text-decoration: none;
}

.logo {
  width: 40px;
  height: 40px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg/164px-Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Замените семантическим элементом <code>div</code>, соответствующий блоку независимого контента.",
          testFn: (iframe: HTMLIFrameElement) => {
            const article = iframe.contentDocument.body.querySelector("article");
            return (
              article &&
              article.parentElement &&
              article.parentElement.tagName === "MAIN" &&
              article.children[0] &&
              article.children[0].tagName === "H1"
            );
          },
          failMsg: "Убедитесь, что вы заменили div элементом article",
        },
        {
          id: 2,
          label:
            "Замените семантическим элементом <code>div</code>, соответствующие отдельным разделам блока независимого контента.",
          testFn: (iframe: HTMLIFrameElement) => {
            const sections = iframe.contentDocument.body.querySelectorAll("section");
            return (
              sections &&
              sections.length === 3 &&
              sections[0].id === "music" &&
              sections[1].id === "flamenco" &&
              sections[2].id === "bullfight"
            );
          },
          failMsg: "Убедитесь, что вы заменили div элементами section",
        },
      ],
    },

    {
      id: 4,
      header: "Второстепенный контент - элемент aside",
      url: "html-aside",
      theory: `<p>Мы разметили семантически блоки основного контента. На странице также может быть дополнительный контент, который не связан напрямую с основным. Такой контент следует семантически выделить с помощью элемента <code>aside</code>:</p>

<pre><code><span class="tag">&lt;main></span>
  <span class="tag">&lt;article></span>
    &lt;!--Здесь находится основной контент страницы-->
  <span class="tag">&lt;/article></span>
  <span class="tag">&lt;aside></span>
    &lt;!--Здесь находится второстепенная информация-->
  <span class="tag">&lt;/aside></span>
<span class="tag">&lt;/main></span></code></pre>

<p>К второстепенному контенту можно отнести, например, такой:</p>
<p><ul><li>Примечания</li><li>Заметки на полях</li><li>Комментарии</li><li>Редакторские колонки</li><li>Место, зарезервированное под рекламные блоки</li></ul> и т. д.</p>
<p>Пользуйтесь элементом <code>aside</code>, если его удаление никак не повлияет на содержание основного контента страницы.</p>
`,
      goal: `Выделите блок второстепенной информации.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Культура Андалусии</title>
  </head>
  <body>
    <header>
      <div class="logo"></div>
      <nav>
        <ul>
          <li><a href="#music">Музыка</a></li>
          <li><a href="#flamenco">Фламенко</a></li>
          <li><a href="#bullfight">Коррида</a></li>
        </ul>
      </nav>
      <button type="button">Войти</button>
    </header>
    
    <main>
      <article>
      <h1>Традиционная Андалусия</h1>
        <section id="music">
          <h2>Музыка</h2>
          <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
        </section>
        <section id="flamenco">
          <h2>Фламенко</h2>
          <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
        </section>
        <section id="bullfight">
          <h2>Коррида</h2>
          <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
        </section>
      </article>  
      <div>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </div>
    </main>
    
    <footer>
      <div class="logo"></div>
      <p>Наш телефон: +79901002323</p>
    </footer>          
  </body>
</html>
`,
        css: `
a:hover {
  opacity: 0.6
}

aside {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5px;
  background-color: Linen;
}

aside ul {
  flex-direction: column;
}

aside ul li {
  margin-bottom: 10px;
  margin-right: 0;
}

aside a {
  color: MediumSlateBlue
}

button {
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  text-align: center
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Ivory;
  height: 50px;
  padding: 0 10px;
}

main {
  display: flex;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 10px;
}

ul a {
  color: MediumSlateBlue;
  text-decoration: none;
}

.logo {
  width: 40px;
  height: 40px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg/164px-Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Замените семантическим элементом <code>div</code>, соответствующий блоку второстепенной информации.",
          testFn: (iframe: HTMLIFrameElement) => {
            const aside = iframe.contentDocument.body.querySelector("aside");
            return (
              aside &&
              aside.parentElement &&
              aside.parentElement.tagName === "MAIN" &&
              aside.previousElementSibling &&
              aside.previousElementSibling.tagName === "ARTICLE"
            );
          },
          failMsg: "Убедитесь, что вы заменили div элементом aside",
        },
      ],
    },

    {
      id: 5,
      header: "Медиаконтент - элементы video и audio",
      url: "html-video-audio",
      theory: `<p>С помощью элемента <code>video</code> мы можем легко добавить видеоизображение на сайт.</p>

<pre><code><span class="tag">&lt;video <span class="attr-name">src=</span><span class="attr-value">"../video/cats_dancing.mpeg"</span> <span class="attr-name">controls</span> <span class="attr-name">autoplay</span>></span>Видеоизображение не найдено<span class="tag">&lt;/video></span></code></pre>

<p>В разметке выше указаны следующие аттрибуты:</p>
<p>
  <ul>
    <li><code>src</code> - путь к вашему видеофайлу. В примере выше файл называется "cats_dancing.mpeg"</li>
    <li><code>controls</code> - в видеоплейере появляется кнопка пуск/пауза для управления видео</li>
    <li><code>autoplay</code> - видео запускается автоматически после загрузки страницы (осторожно, это раздражает многих пользователей, включая автора этого текста:)</li>
  </ul>
</p>
<p>Текст, заключенный между открывающим и закрывающим тэгами <code>video</code> отобразится только если видеоизображение не будет найдено.</p>
<p>Давайте теперь добавим на страницы аудиоконтент с помощью элемента <code>audio</code>. Попробуем применить другой подход к разметке:</p>

<pre><code><span class="tag">&lt;audio <span class="attr-name">controls</span> <span class="attr-name">autoplay</span>></span>
  <span class="tag">&lt;source <span class="attr-name">src=</span><span class="attr-value">"../audio/anthem.mp3"</span> <span class="attr-name">type=</span><span class="attr-value">"audio/mp3"</span>/></span>
  <span class="tag">&lt;source <span class="attr-name">src=</span><span class="attr-value">"../audio/anthem.ogg"</span> <span class="attr-name">type=</span><span class="attr-value">"audio/ogg"</span>/></span>
<span class="tag">&lt;/audio></span></code></pre>

<p>Здесь у элемента <code>audio</code> вы видите уже знакомые аттрибуты <code>controls</code>, отвечающий за кнопку управления аудиовоспроизведением и <code>autoplay</code>, отвечающий за немедленное начало воспроизведения аудиофайла после загрузки страницы.</p>
<p>В этот раз в <code>audio</code> вложены 2 элемента <code>source</code>, которые указывают источники аудиофайлов. У нас указаны 2 источника аудиофайлов разных форматов. Сначала браузер попробует найти файл "anthem.mp3". Если такой файл отсутствует или не поддерживается вашим браузером, он попробует найти файл "anthem.ogg".</p>
<p>Тип аудиофайла каждого источника указан в аттрибуте <code>type</code> элемента <code>source</code>. Данный аттрибут не является обязательным, но желательно его указывать, чтобы облегчить браузеру определение типа файла.</p>
`,
      goal: `Добавьте на страницу медиаконтент.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Культура Андалусии</title>
  </head>
  <body>
    <header>
      <div class="logo"></div>
      <nav>
        <ul>
          <li><a href="#music">Музыка</a></li>
          <li><a href="#flamenco">Фламенко</a></li>
          <li><a href="#bullfight">Коррида</a></li>
        </ul>
      </nav>
      <button type="button">Войти</button>
    </header>
    
    <main>
      <article>
      <h1>Традиционная Андалусия</h1>
        <section id="music">
          <h2>Музыка</h2>
          <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
          <p>Прослушайте фрагмент традиционного болеро за авторством Мориса Равеля:</p>
  
        </section>
        <section id="flamenco">
          <h2>Фламенко</h2>
          <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
          <p>Посмотрети как танцуют Фламенко на улицах Гранады:</p>
  
        </section>
        <section id="bullfight">
          <h2>Коррида</h2>
          <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>     
          </section>
      </article>  
      <aside>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </aside>
    </main>
    
    <footer>
      <div class="logo"></div>
      <p>Наш телефон: +79901002323</p>
    </footer>          
  </body>
</html>
`,
        css: `
a:hover {
  opacity: 0.6
}

aside {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5px;
  background-color: Linen;
}

aside ul {
  flex-direction: column;
}

aside ul li {
  margin-bottom: 10px;
  margin-right: 0;
}

aside a {
  color: MediumSlateBlue
}

button {
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  text-align: center
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Ivory;
  height: 50px;
  padding: 0 10px;
}

main {
  display: flex;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 10px;
}

ul a {
  color: MediumSlateBlue;
  text-decoration: none;
}

.logo {
  width: 40px;
  height: 40px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg/164px-Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "В секции с описанием музыки добавьте аудиоэлемент c аттрибутом controls.",
          testFn: (iframe: HTMLIFrameElement) => {
            const audio = iframe.contentDocument.body.querySelector("audio");
            return audio && audio.controls;
          },
          failMsg: "Убедитесь, что вы добавили элемент audio с правильным аттрибутом",
        },
        {
          id: 2,
          label:
            "В качестве источника аудио укажите файл с адресом 'http://www.openculture.ru/wp-content/uploads/2011/11/Ravel_Bolero.mp3' и типом 'audio/mp3'.",
          testFn: (iframe: HTMLIFrameElement) => {
            const audio = iframe.contentDocument.body.querySelector("audio");
            if (!audio) {
              return false;
            }
            const source = audio.querySelector("source");
            return (
              source &&
              source.src === "http://www.openculture.ru/wp-content/uploads/2011/11/Ravel_Bolero.mp3" &&
              source.type === "audio/mp3"
            );
          },
          failMsg: "Убедитесь, что вы добавили элемент source с правильными аттрибутами",
        },
        {
          id: 3,
          label:
            "В секции с описанием фламенко добавьте видеоэлемент c аттрибутом controls и текстом 'Видео не доступно'. В качестве источника видео укажите файл с адресом 'https://www.youtube.com/watch?v=VdAkQjfUqJU' .",
          testFn: (iframe: HTMLIFrameElement) => {
            const video = iframe.contentDocument.body.querySelector("video");
            return (
              video &&
              video.src === "https://www.youtube.com/watch?v=VdAkQjfUqJU" &&
              video.textContent === "Видео не доступно" &&
              video.controls
            );
          },
          failMsg: "Убедитесь, что вы добавили элемент video с правильными аттрибутами",
        },
      ],
    },

    {
      id: 6,
      header: "Встроенный контент - элемент iframe",
      url: "html-iframe",
      theory: `<p>Существует способ добавить на вашу страницу любой медиаэлемент и даже содержание другой HTML страницы, а в нее - содержание другой HTML страницы... Все это называется встроенным контентом, элементы <code>audio</code> и <code>video</code>, с которыми мы работали в прошлом упражнении, являются частными случаями встроенного контента.</p>
      <p>Познакомимся с элементом <code>iframe</code>. Результат вашей верстки, отображаемый в этом упражнении справа, встроен на страницу именно с помощью этого элемента.</p>

<pre><code><span class="tag">&lt;iframe <span class="attr-name">src=</span><span class="attr-value">"../resource/some_content.gif"</span> <span class="attr-name">title=</span><span class="attr-value">"content_title"</span> <span class="attr-name">width=</span><span class="attr-value">"200"</span> <span class="attr-name">height=</span><span class="attr-value">"150"</span>></span><span class="tag">&lt;/iframe></code></pre>

<p>В разметке выше мы указали следующие аттрибуты:</p>
<p>
  <ul>
    <li><code>src</code> - путь к вашему контенту. В данном случае к изображению в формате ".gif"</li>
    <li><code>title</code> - заголовок встроенного контента. Полезно указывать данный аттрибут для улучшения доступности встроенного контента</li>
    <li><code>width</code>, <code>height</code> - начальные ширина и высота окна встроенного контента</li>
  </ul>
</p>
`,
      goal: `Добавьте на страницу встроенный контент.`,
      initValues: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Культура Андалусии</title>
  </head>
  <body>
    <header>
      <div class="logo"></div>
      <nav>
        <ul>
          <li><a href="#music">Музыка</a></li>
          <li><a href="#flamenco">Фламенко</a></li>
          <li><a href="#bullfight">Коррида</a></li>
        </ul>
      </nav>
      <button type="button">Войти</button>
    </header>
    
    <main>
      <article>
      <h1>Традиционная Андалусия</h1>
        <section id="music">
          <h2>Музыка</h2>
          <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
          <p>Прослушайте фрагмент традиционного болеро за авторством Мориса Равеля:</p>
          <audio controls>
            <source src="http://www.openculture.ru/wp-content/uploads/2011/11/Ravel_Bolero.mp3" type="audio/mp3">
          </audio>
        </section>
        <section id="flamenco">
          <h2>Фламенко</h2>
          <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
          <p>Посмотрети как танцуют Фламенко на улицах Гранады:</p>
          <video src='https://www.youtube.com/watch?v=VdAkQjfUqJU' controls>Видео не доступно</video>
        </section>
        <section id="bullfight">
          <h2>Коррида</h2>
          <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
          <p>Поэтому иногда все заканчивается так:</p>

        </section>
      </article>  
      <aside>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </aside>
    </main>
    
    <footer>
      <div class="logo"></div>
      <p>Наш телефон: +79901002323</p>
    </footer>          
  </body>
</html>
`,
        css: `
a:hover {
  opacity: 0.6
}

aside {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5px;
  background-color: Linen;
}

aside ul {
  flex-direction: column;
}

aside ul li {
  margin-bottom: 10px;
  margin-right: 0;
}

aside a {
  color: MediumSlateBlue
}

button {
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  text-align: center
}

header, footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Ivory;
  height: 50px;
  padding: 0 10px;
}

main {
  display: flex;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 10px;
}

ul a {
  color: MediumSlateBlue;
  text-decoration: none;
}

.logo {
  width: 40px;
  height: 40px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg/164px-Escudo_institucional_de_la_Junta_de_Andaluc%C3%ADa.svg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "В секции с описанием корриды добавьте встроенный контент, укажите адрес файла 'https://gifer.com/embed/7PZg'.",
          testFn: (iframe: HTMLIFrameElement) => {
            const embedIframe = iframe.contentDocument.body.querySelector("iframe");
            return (
              embedIframe &&
              embedIframe.parentElement &&
              embedIframe.parentElement.id === "bullfight" &&
              embedIframe.src === "https://gifer.com/embed/7PZg"
            );
          },
          failMsg: "Убедитесь, что вы добавили элемент iframe с правильным источником данных",
        },
        {
          id: 2,
          label: "Добавьте заголовок контента 'Коррида в Андалусии', ширину элемента 300, высоту - 200.",
          testFn: (iframe: HTMLIFrameElement) => {
            const embedIframe = iframe.contentDocument.body.querySelector("iframe");
            return (
              embedIframe &&
              embedIframe.title === "Коррида в Андалусии" &&
              embedIframe.width === "300" &&
              embedIframe.height === "200"
            );
          },
          failMsg: "Убедитесь, что вы указали правильные аттрибуты",
        },
      ],
    },
  ],
};
