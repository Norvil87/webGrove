import { ICourseLesson } from "../../shared/types";

export const CssText: ICourseLesson = {
  id: 2,
  title: "Стилизация текста",
  url: "css-text",
  excercises: [
    {
      id: 1,
      header: "Семейства шрифтов - font-family",
      url: "css-font-family",
      theory: `<p>Одна из первых вещей при создании вэб-страницы это стилизация текста и CSS предоставляет для этого много возможностей. Мы рассмотрим два аспекта стилизации текста:</p>
<ul>
 <li>Визуальное отображения текста - семейство и размер шрифта, начертание, декоративные элементы и т. д.</li>
 <li>Расположение текста на странице</li>
</ul>
<p>Следует помнить, что текст в пределах HTML элемента - это единая сущность и нельзя стилизовать отдельные фразы или слова текстового содержимого. Единственный способ сделать это - обернуть нужную фразу или слово в другой HTML элемент, например <code>span</code> и применить стили к нему.</p>
<p>Начнем с отображения шрифтов. Свойство <code>font-family</code> определяет семейство из нескольких шрифтов, с помощью которых текст может быть выведен на экран. Например, такое стилевое правило:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">font-family:</span> cursive;
}</code></pre>

<p style="font-family: cursive">во всех параграфах на странице отобразит текст шрифтом семейства курсивных шрифтов.</p>
<p>В современных браузерах доступны следующие основные семейста шрифтов:</p>
<ul>
 <li><code>serif</code> - <span style="font-family: serif">глифы имеют завершающие штрихи, расширяющиеся или сужающиеся концы. Например, <span style="font-family: 'Lucida Bright'">"Lucida Bright"</span>, <span style="font-family: 'Palatino Linotype'">"Palatino Linotype"</span> и, как шрифт по умолчанию в этом семействе, <span style="font-family: 'Times New Roman'">"Times New Roman"</span></span></li>
 <li><code>sans-serif</code> - <span style="font-family: sans-serif">глифы имеют гладкие окончания. Например, <span style="font-family: 'Lucida Sans'">"Lucida Sans"</span>, <span style="font-family: 'Trebuchet MS'">"Trebuchet MS"</span> и, как шрифт по умолчанию в этом семействе, <span style="font-family: 'Arial'">"Arial"</span></span></li>
 <li><code>cursive</code> - <span style="font-family: cursive">глифы частично или полностью связаны, больше напоминая рукописное перо или кисть, чем печатные буквы. Например, <span style="font-family: 'Lucida Calligraphy'">"Lucida Calligraphy"</span>, <span style="font-family: 'Lucida Handwriting'">"Lucida Handwriting"</span></span></li>
 <li><code>monospace</code> - <span style="font-family: monospace">глифы имеют одинаковую фиксированную ширину. Например, <span style="font-family: 'Consolas'">"Consolas"</span>, <span style="font-family: 'Lucida Console'">"Lucida Console"</span></span></li>
</ul>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/ru/docs/Web/CSS/font-family" target="_blank">font-family</a>.</p>
 `,
      goal: `Задайте тексту семейство шрифтов`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

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
          label: "Абзацу с классом <code>serif</code> задайте начертание семейством шрифтов с засечками.",
          testRegExp: [`\.serif\\s+{\\s*font-family: serif;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное семейство шрифтов элементу с классом serif",
        },
        {
          id: 2,
          label: "Абзацу с классом <code>sans-serif</code> задайте начертание семейством шрифтов без засечек.",
          testRegExp: [`\.sans-serif\\s+{\\s*font-family: sans-serif;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное семейство шрифтов элементу с классом sans-serif",
        },
      ],
    },

    {
      id: 2,
      header: "Перечисление шрифтов",
      url: "css-font-stack",
      theory: `<p>Одного только указания семейства шрифтов, разумеется, недостаточно для полного контроля над ними. Свойство <code>font-family</code> поддерживает указание конкретного шрифта, например <code>font-family: Arial</code>.</p>
<p>Такие распространенные шрифты как Arial, Times New Roman, Verdana доступны в любой системе по умолчанию и не имеют проблем с отображением в браузере, поэтому их называют <b>вэб-безопасными шрифтами</b>. Этих шрифтов несколько десятков, и вы можете пользоваться ими абсолютно свободно. Но этого тоже недостаточно. Что, если вы захотите воспользоваться одним из красивейших вэб-шрифтов, который нашли в Интернете и загрузили себе на компьютер?</p>
<p>В этом случае нельзя гарантировать правильное отображение шрифта в любом браузере на любой системе. Поэтому нам необходимо предусмотреть откат шрифта до вэб-безопасного. Делается это следующим образом:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">font-family:</span> "Crimson Text", Arial, sans-serif;
}</code></pre>

<p>Предположим, вам понравился шрифт "Crimson Text", и вы загрузили его (как загружать и отображать шрифты из Интернета - тема другого урока). Тогда в свойстве <code>font-family</code> вы указывайте сначала название загруженного шрифта (обратите внимание, что если название шрифта состоит из нескольких слов, необходимо заключить его в двойные кавычки), потом через запятую - название вэб-безопасного шрифта и в конце - название семейства шрифтов.</p>
<p>Браузер будет читать это свойство слева-направо. Сначала он попробует найти и отобразить символы вашего шрифта. Если ему это не удастся, он откатится до символов вэб-безопасного шрифта. Семейство шрифтов в данном случае - это последний рубеж обороны, чтобы текст был отображен хоть каким-то шрифтом.</p>
<p>Помните, что если вы не укажете вэб-безопасный шрифт, есть вероятность, что текст на вашей странице вообще не отобразится!</p>
 `,
      goal: `Задайте тексту шрифты через перечисление`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */
        
.serif {
  font-family: serif;
}

.sans-serif {
  font-family: sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Абзацу с классом <code>serif</code> задайте <code>Georgia</code> в качестве основного шрифта, <code>Times New Roman</code> в качестве вэб-безопасного, <code>serif</code> в качестве семейства шрифтов. Не забудьте про двойные кавычки если название шрифта состоит из нескольких слов.",
          testRegExp: [`\.serif\\s+{\\s*font-family: Georgia,\\s*"Times New Roman",\\s*serif;\\s*}`],
          failMsg: "Убедитесь, что вы задали шрифты через перечисление элементу с классом serif",
        },
        {
          id: 2,
          label:
            "Абзацу с классом <code>sans-serif</code> задайте <code>Crimson Text</code> в качестве основного шрифта, <code>Arial</code> в качестве вэб-безопасного, <code>sans-serif</code> в качестве семейства шрифтов. Обратите внимание, что скорее всего в вашей системе не установлен Crimson Text, поэтому произойдет откат до вэб-безопасного Arial.",
          testRegExp: [`\.sans-serif\\s+{\\s*font-family: "Crimson Text",\\s*Arial,\\s*sans-serif;\\s*}`],
          failMsg: "Убедитесь, что вы задали шрифты через перечисление элементу с классом sans-serif",
        },
      ],
    },

    {
      id: 3,
      header: "Размер шрифта - font-size",
      url: "css-font-size",
      theory: `<p>Свойство <code>font-size</code> устанавливает размер шрифта. Значение этого свойства может быть задано в относительных или абсолютных единицах. Более подробную информацию по единицам измерения с CSS можно получить в соответствующем уроке, но чаще всего используются такие:</p>
<ul>
  <li><code>px</code> - размер шрифта в пикселях, например <code>font-size: 18px;</code>. Это абсолютная единица</li>
  <li><code>em</code> - размер шрифта по отношению к размеру шрифта родителя элемента, например <code>font-size: 1.5em;</code>. Если размер шрифта родителя - <code>12px</code>, то <code>1.5em</code> составят <code>18px</code></li>
  <li><code>rem</code> - то же самое, что <code>em</code>, но относительно корня всего документа - элемента <code>html</code>. Если у элемента <code>html</code> установлен <code>font-size: 20px;</code>, то запись <code>font-size: 0.5rem;</code> установит размер шрифта элемента <code>10px</code>. Последние 2 величины являются относительными.</li>
</ul>
<p>Поскольку относительные величины в современной вэб-разработке используются чаще абсолютных, проясним их дополнительно.</p>
<p>Любой браузер устанавливает HTML документу (а именно элементу <code>html</code>) размер шрифта по умолчанию (как правило 16px, но может отличаться в зависимости от браузера). Размер шрифта относится к <em>наследуемым</em> свойствам, то есть если вы не задаете размер шрифта конкретному элементу, он наследует его от своего родителя, который наследует от своего и так далее вплоть до корня документа.</p>
<p>Поэтому хорошей практикой с точки зрения явного контроля за размерами шрифта является установка базового размера шрифта элементу <code>html</code> в пикселях (таким образом мы переопределяем размер шрифта по умолчанию), а отдельным элементам - задавать размер шрифта в <code>rem</code> относительно корневого элемента или в <code>em</code> относительно своего родителя.</p>
<p>Также данное свойство поддерживает значение в процентах и некоторые ключевые слова.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" target="_blank">font-size</a>.</p>
 `,
      goal: `Задайте элементу размер шрифта`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */     
        
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>small-font</code> задайте размер шрифта <code>10px</code>.",
          testRegExp: [`\.small-font\\s+{\\s*font-size: 10px;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильный размер шрифта",
        },
        {
          id: 2,
          label: "Корневому документу задайте размер шрифта <code>14px</code>.",
          testRegExp: [`\html\\s+{\\s*font-size: 14px;\\s*}`],
          failMsg: "Убедитесь, что элементу html вы задали правильный размер шрифта",
        },
        {
          id: 3,
          label:
            "Абзацу с классом <code>large-font</code> задайте размер шрифта в 1.8 раза больше размера шрифта корневого документа.",
          testRegExp: [`\.large-font\\s+{\\s*font-size: 1.8rem;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильный размер шрифта в относительных единицах",
        },
      ],
    },

    {
      id: 4,
      header: "Начертание курсивом - font-style",
      url: "css-font-style",
      theory: `<p>Свойство <code>font-style</code> устанавливает начертание текста курсивом, например <code>font-style: italic</code>. Возможные значения:</p>
<ul>
  <li><code>normal</code> - нормальное начертание</li>
  <li><code>italic</code> - <span style="font-style: italic;">курсивное начертание</span></li>
  <li><code>oblique</code> - <span style="font-style: oblique;">наклонное начертание</span></li>
</ul>
<p>Разница между вторым и третьим вариантом часто незаметна. Курсив - это отдельный набор символов, поставляемый со шрифтом. Если браузер не нашел курсивные символы, он наклоняет нормальный шрифт, чтобы симулировать курсив. Поскольку для шрифта, используемого на странице, курсивные символы есть, браузер использует их в обоих случаях.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style" target="_blank">font-style</a>.</p>
 `,
      goal: `Задайте тексту курсивное начертание`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Курсивное начертание</h2>
      <p class="italic">Отображение текста курсивом</p>
    </div>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */

html {
  font-size: 14px;
}

.small-font {
  font-size: 10px;
}
 
.large-font {
  font-size: 1.8rem;
}
       
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>italic</code> задайте курсивное начертание текста.",
          testRegExp: [`\.italic\\s+{\\s*font-style: italic;\\s*}`],
          failMsg: "Убедитесь, что вы сделали текст курсивным",
        },
      ],
    },

    {
      id: 5,
      header: "Начертание жирным шрифтом - font-weight",
      url: "css-font-weight",
      theory: `<p>Свойство <code>font-weight</code> устанавливает начертание жирного текста, например <code>font-weight: bold;</code>. Возможные значения:</p>
<ul>
  <li><code>normal</code> и <code>bold</code> - нормальное и <span style="font-weight: bold;">жирное</span> начертание соответственно</li>
  <li><code>bolder</code> и <code>lighter</code> - начертание на один шаг жирнее и светлее родительского элемента соответственно</li>
  <li><code>100, 200, 300, 400, 500, 600, 700, 800, 900</code> - чмсловые значения жирности шрифта</li>
</ul>
<p>Числовые значения вы можете использовать, если вам не хватает ключевых слов. Так, число <code>400</code> соответствует жирности <code>normal</code>, а число <code>700</code> - жирности <code><b>bold</b></code>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight" target="_blank">font-weight</a>.</p>
 `,
      goal: `Задайте тексту жирное начертание`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Жирное начертание</h2>
      <p class="bold">Отображение жирного текста</p>
    </div>

    <div>
      <h2>Курсивное начертание</h2>
      <p class="italic">Отображение текста курсивом</p>
    </div>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */

html {
  font-size: 14px;
}

.italic {
  font-style: italic;
}

.small-font {
  font-size: 10px;
 }
 
 .large-font {
  font-size: 1.8rem;
 } 
       
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>bold</code> задайте жирное начертание.",
          testRegExp: [`\.bold\\s+{\\s*font-weight: bold;\\s*}`],
          failMsg: "Убедитесь, что вы сделали текст жирным",
        },
      ],
    },

    {
      id: 6,
      header: "Цвет текста - color",
      url: "css-color",
      theory: `<p>Свойство <code>color</code> устанавливает цвет текста. Вы уже неоднократно обращались к этому свойсту в уроке про селекторы, однако там мы задавали цвет только с помощью именованных цветов. Вообще же возможны такие варианты:</p>
<ul>
  <li>именованные цвета, <span style="color: violet">например</span> <code>color: violet;</code></li>
  <li>цветовая схема hex, <span style="color: #3d7e9a">например</span> <code>color: #3d7e9a;</code></li>
  <li>цветовая схема rgb()/rgba(), <span style="color: rgb(0, 171, 141)">например</span> <code>color: rgb(0, 171, 141);</code></li>
  <li>цветовая схема hsl()/hsla(), <span style="color: hsl(0, 99%, 70%)">например</span> <code>color: hsl(0, 99%, 70%);</code></li>
</ul>
<p>Что конкретно означает та или иная цветовая схема более подробно рассмотрено в отдельном уроке, здесь вам нужно знать о их существовании.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color" target="_blank">color</a>.</p>
 `,
      goal: `Задайте тексту цвет`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Отображение текста разными цветами</h2>
      <p class="color-keyword">Текст именованным цветом</p>
      <p class="color-hex">Текст hex-цветом</p>
      <p class="color-rgb">Текст rgb-цветом</p>
      <p class="color-hsl">Текст hsl-цветом</p>
    </div>

    <div>
      <h2>Жирное начертание</h2>
      <p class="bold">Отображение жирного текста</p>
    </div>

    <div>
      <h2>Курсивное начертание</h2>
      <p class="italic">Отображение текста курсивом</p>
    </div>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */

html {
  font-size: 14px;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-font {
  font-size: 10px;
 }
 
 .large-font {
  font-size: 1.8rem;
 }
       
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>color-keyword</code> задайте цвет <code>tan</code>.",
          testRegExp: [`\.color-keyword\\s+{\\s*color: tan;\\s*}`],
          failMsg: "Убедитесь, что вы задали именованный цвет",
        },
        {
          id: 2,
          label: "Абзацу с классом <code>color-hex</code> задайте цвет <code>#d2b48c</code>.",
          testRegExp: [`\.color-hex\\s+{\\s*color: #d2b48c;\\s*}`],
          failMsg: "Убедитесь, что вы задали цвет в hex формате",
        },
        {
          id: 3,
          label: "Абзацу с классом <code>color-rgb</code> задайте цвет <code>rgb(210, 180, 140)</code>.",
          testRegExp: [`\.color-rgb\\s+{\\s*color: rgb\\(210, 180, 140\\);\\s*}`],
          failMsg: "Убедитесь, что вы задали цвет в rgb формате",
        },
        {
          id: 4,
          label:
            "Абзацу с классом <code>color-hsl</code> задайте цвет <code>hsl(34, 44%, 69%)</code>. Да, это все один и тот же цвет.",
          testRegExp: [`\.color-hsl\\s+{\\s*color: hsl\\(34, 44%, 69%\\);\\s*}`],
          failMsg: "Убедитесь, что вы задали цвет в hsl формате",
        },
      ],
    },

    {
      id: 7,
      header: "Украшение текста - text-decoration",
      url: "css-text-decoration",
      theory: `<p>Свойство <code>text-decoration</code> позволяет задать тексту декоративное подчеркивание. Вот его возможные значения:</p>
<ul>
  <li><code>none</code> - убирает все подчеркивания</li>
  <li><code>underline</code> - задает <span style="text-decoration: underline;">нижнюю черту</span></li>
  <li><code>line-through</code> - <span style="text-decoration: line-through;">перечеркивает текст</span></li>
  <li><code>overline</code> - задает <span style="text-decoration: overline;">верхнюю черту</span></li>
</ul>
<p>Свойство <code>text-decoration: none;</code> часто применяют для того, чтобы сбросить дефолтные стили ссылок, так как браузер по умолчанию устанавливает ссылкам <a href="#" style="text-decoration: underline; color: blue;">нижнее подчеркивание</a>.</p>
<p>Также свойство <code>text-decoration</code> является составным. Это значит, что по факту оно состоит из перечисления таких свойств как <code>text-decoration-line</code>, <code>text-decoration-style</code>, <code>text-decoration-color</code>, <code>text-decoration-thickness</code>, устанавливающие тип, стиль, цвет и толщину декоративной линии соответственно. Но по отдельности они используются редко.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration" target="_blank">text-decoration</a>.</p>
 `,
      goal: `Задайте тексту декоративное подчеркивание`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Декоративное подчеркивание текста</h2>
      <p class="underline">Подчеркнутый текст</p>
      <p class="line-through">Перечеркнутый текст</p>
    </div>
    
    <div>
      <h2>Отображение текста разными цветами</h2>
      <p class="color-keyword">Текст именованным цветом</p>
      <p class="color-hex">Текст hex-цветом</p>
      <p class="color-rgb">Текст rgb-цветом</p>
      <p class="color-hsl">Текст hsl-цветом</p>
    </div>

    <div>
      <h2>Жирное начертание</h2>
      <p class="bold">Отображение жирного текста</p>
    </div>

    <div>
      <h2>Курсивное начертание</h2>
      <p class="italic">Отображение текста курсивом</p>
    </div>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */

html {
  font-size: 14px;
}

.color-keyword {
  color: tan;
}

.color-hex {
  color: #d2b48c;
}

.color-rgb {
  color: rgb(210, 180, 140);
}

.color-hsl {
  color: hsl(34, 44%, 69%);
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-font {
  font-size: 10px;
 }
 
.large-font {
  font-size: 1.8rem;
}
       
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>underline</code> задайте нижнее подчеркивание.",
          testRegExp: [`\.underline\\s+{\\s*text-decoration: underline;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-decoration",
        },
        {
          id: 2,
          label: "В абзаце с классом <code>line-through</code>перечеркните текст.",
          testRegExp: [`\.line-through\\s+{\\s*text-decoration: line-through;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-decoration",
        },
      ],
    },

    {
      id: 8,
      header: "Изменение регистра символов - text-transform",
      url: "css-text-transform",
      theory: `<p>Свойство <code>text-transform</code> позволяет изменить регистр символов текста. Вот его возможные значения:</p>
<ul>
  <li><code>none</code> - убирает все трансформации. Первый символ в предложении - прописной. Это значение по умолчанию</li>
  <li><code>capitalize</code> - <span style="text-transform: capitalize;">каждое слово начинается с прописного символа</span></li>
  <li><code>uppercase</code> - <span style="text-transform: uppercase;">все символы становятся прописными</span></li>
  <li><code>lowercase</code> - <span style="text-transform: lowercase;">все символы становятся строчными</span></li>
</ul>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform" target="_blank">text-transform</a>.</p>
 `,
      goal: `Измените регистр символов текста`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Разный регистр символов текста</h2>
      <p class="capitalize">Первый символ слова прописной</p>
      <p class="uppercase">Все символы прописные</p>
    </div>
    
    <div>
      <h2>Декоративное подчеркивание текста</h2>
      <p class="underline">Подчеркнутый текст</p>
      <p class="line-through">Перечеркнутый текст</p>
    </div>
    
    <div>
      <h2>Отображение текста разными цветами</h2>
      <p class="color-keyword">Текст именованным цветом</p>
      <p class="color-hex">Текст hex-цветом</p>
      <p class="color-rgb">Текст rgb-цветом</p>
      <p class="color-hsl">Текст hsl-цветом</p>
    </div>

    <div>
      <h2>Жирное начертание</h2>
      <p class="bold">Отображение жирного текста</p>
    </div>

    <div>
      <h2>Курсивное начертание</h2>
      <p class="italic">Отображение текста курсивом</p>
    </div>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */

html {
  font-size: 14px;
}

.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.color-keyword {
  color: tan;
}

.color-hex {
  color: #d2b48c;
}

.color-rgb {
  color: rgb(210, 180, 140);
}

.color-hsl {
  color: hsl(34, 44%, 69%);
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-font {
  font-size: 10px;
 }
 
.large-font {
  font-size: 1.8rem;
}
       
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "В абзаце с классом <code>capitalize</code> сделайте первый символ каждого слова прописным.",
          testRegExp: [`\.capitalize\\s+{\\s*text-transform: capitalize;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-transform",
        },
        {
          id: 2,
          label: "В абзаце с классом <code>uppercase</code> сделайте все символы прописными.",
          testRegExp: [`\.uppercase\\s+{\\s*text-transform: uppercase;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-transform",
        },
      ],
    },

    {
      id: 9,
      header: "Текстовая тень - text-shadow",
      url: "css-text-shadow",
      theory: `<p>Свойство <code>text-shadow</code> позволяет тексту отбрасывать тень. Это свойство составное и принимает 4 значения. Вот пример:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">text-shadow:</span> 6px -5px 3px blue;
}</code></pre>

<p style="text-shadow: 6px -5px 3px blue">Вот как будет выглядеть такая тень</p>
<p>Разберем каждое свойство подробнее:</p>
<ul>
  <li><code>6px</code> - смещение тени по горизонтали. Может принимать абсолютные и относительные единицы, чаще всего используют пиксели. Положительное значение сместит тень вправо, отрицательное - влево. Это обязательное свойство</li>
  <li><code>-5px</code> - смещение тени по вертикали. Положительное значение сместит тень вниз, отрицательное - вверх. Это обязательное свойство</li>
  <li><code>3px</code> - размытие тени. Чем больше значение, тем больше радиус размытия. Это необязательное свойство, по умолчанию установлен 0 - без размытия</li>
  <li><code>blue</code> - цвет тени. Может быть использована любая из цветовых схем CSS. Это необязательное свойство, по умолчанию это цвет самого текста</li>
</ul>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow" target="_blank">text-shadow</a>.</p>
 `,
      goal: `Добавьте тексту тени`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Отображение текстовых теней</h2>
      <p class="simple-shadow">Отображение простой тени</p>
      <p class="blurred-shadow">Отображение цветной размытой тени</p>
    </div>
    
    <div>
      <h2>Разный регистр символов текста</h2>
      <p class="capitalize">Первый символ слова прописной</p>
      <p class="uppercase">Все символы прописные</p>
    </div>
    
    <div>
      <h2>Декоративное подчеркивание текста</h2>
      <p class="underline">Подчеркнутый текст</p>
      <p class="line-through">Перечеркнутый текст</p>
    </div>
    
    <div>
      <h2>Отображение текста разными цветами</h2>
      <p class="color-keyword">Текст именованным цветом</p>
      <p class="color-hex">Текст hex-цветом</p>
      <p class="color-rgb">Текст rgb-цветом</p>
      <p class="color-hsl">Текст hsl-цветом</p>
    </div>

    <div>
      <h2>Жирное начертание</h2>
      <p class="bold">Отображение жирного текста</p>
    </div>

    <div>
      <h2>Курсивное начертание</h2>
      <p class="italic">Отображение текста курсивом</p>
    </div>

    <div>
      <h2>Размеры шрифтов</h2>
      <p class="small-font">Отображение текста малым шрифтом</p>
      <p class="large-font">Отображение текста большим шрифтом</p>
    </div>

    <div>
      <h2>Семейства шрифтов</h2>
      <p class="serif">Начертание текста шрифтом с засечками</p>
      <p class="sans-serif">Начертание текста шрифтом без засечек</p>
    </div>

  </body>
</html>
`,
        css: `/* CSS редактор */

html {
  font-size: 14px;
}

.capitalize {
  text-transform: capitalize;
}

.uppercase {
  text-transform: uppercase;
}

.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.color-keyword {
  color: tan;
}

.color-hex {
  color: #d2b48c;
}

.color-rgb {
  color: rgb(210, 180, 140);
}

.color-hsl {
  color: hsl(34, 44%, 69%);
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-font {
  font-size: 10px;
 }
 
.large-font {
  font-size: 1.8rem;
}
       
.serif {
  font-family: Georgia, "Times New Roman", serif;
}

.sans-serif {
  font-family: "Crimson Text", Arial, sans-serif;
}
 `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Абзацу с классом <code>simple-shadow</code> задайте тень со следующими свойствами: <ul><li>смещение справо на 2px</li><li>смещение вниз на 4px</li></ul>.",
          testRegExp: [`\.simple-shadow\\s+{\\s*text-shadow: 2px 4px;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-shadow с двумя свойствами",
        },
        {
          id: 2,
          label:
            "Абзацу с классом <code>blurred-shadow</code> задайте тень со следующими свойствами: <ul><li>смещение влево на 5px</li><li>смещение вверх на 5px</li><li>размытие 2px</li><li>цвет #d55813</li></ul>.",
          testRegExp: [`\.blurred-shadow\\s+{\\s*text-shadow: -5px -5px 2px #d55813;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-shadow с четырьмя свойствами",
        },
      ],
    },

    {
      id: 10,
      header: "Выравнивание текста - text-align",
      url: "css-text-align",
      theory: `<p>Во второй половине урока мы рассмотрим свойста, влияющие на расположение текста на странице и его взаимодействие с соседними текстовыми элементами.</p>
<p>Свойство <code>text-align</code> выравнивает текст относительно контентной области своего контейнера. Если вы не совсем понимаете, что такое контентная область и контейнер, пройдите урок по блочной модели документа, но в целом это просто выравнивание по какому-либо краю, как в любом текстовом редакторе. Свойство может принимать такие значения:</p>
<ul>
  <li><code>left</code> - выравнивание по левому краю. Это значение по умолчанию</li>
  <li><code>right</code> - выравнивание по правому краю.</li>
  <li><code>center</code> - выравнивание по центру.</li>
</ul>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" target="_blank">text-align</a>.</p>
 `,
      goal: `Измените выравнивание текста`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Варианты выравнивания текста</h2>
      <p>Выравнивание по левому краю</p>
      <p class="right">Выравнивание по правому краю</p>
      <p class="center">Выравнивание по центру</p>
    </div>
  
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
          label: "Абзацу с классом <code>right</code> задайте выравнивание текста по правому краю.",
          testRegExp: [`\.right\\s+{\\s*text-align: right;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-align",
        },
        {
          id: 2,
          label: "Абзацу с классом <code>center</code> задайте выравнивание текста по центру.",
          testRegExp: [`\.center\\s+{\\s*text-align: center;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение text-align",
        },
      ],
    },

    {
      id: 11,
      header: "Высота строки - line-height",
      url: "css-line-height",
      theory: `<p>Свойство <code>line-height</code> устанавливает высоту строки текста. Это одно из свойств, которому можно (и даже нужно) задавать безразмерное значение, например:</p>

<pre><code><span class="selector">p</span> {
  <span class="rule">font-size:</span> 12px;
  <span class="rule">line-height:</span> 1.5;
}</code></pre>

<p>В данном коде свойство <code>line-height</code> не имеет единицы измерения и будет коэффициентом для размера шрифта элемента. То есть в данном случае высота строки текста составит 12 * 1,5 = 18px.</p>
<p>Лучше всего смотрится текст, в котором высота строки в 1.5 - 2 раза больше размера шрифта, именно на эти коэффициенты можно ориентироваться при стилизации. Кроме того, можно задавать высоту строки в других привычных единицах - <code>px, %, em, rem</code>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height" target="_blank">line-height</a>.</p>
 `,
      goal: `Установите высоту строки`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Высота строки</h2>
      <p class="line-height-small">Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга.</p>
      <p class="line-height-big">Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть.</p>
    </div>

    <div>
      <h2>Варианты выравнивания текста</h2>
      <p>Выравнивание по левому краю</p>
      <p class="right">Выравнивание по правому краю</p>
      <p class="center">Выравнивание по центру</p>
    </div>
  
  </body>
</html>
`,
        css: `/* CSS редактор */

.right {
  text-align: right;
}

.center {
  text-align: center;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>line-height-small</code> задайте высоту строки <code>9px</code>.",
          testRegExp: [`\.line-height-small\\s+{\\s*line-height: 9px;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение line-height",
        },
        {
          id: 2,
          label: "Абзацу с классом <code>line-height-big</code> задайте высоту строки в 2 раза больше размера шрифта.",
          testRegExp: [`\.line-height-big\\s+{\\s*line-height: 2;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение line-height",
        },
      ],
    },

    {
      id: 12,
      header: "Расстояние между символами/словами - letter/word-spacing",
      url: "css-letter-word-spacing",
      theory: `<p>Два свойства <code>letter-spacing</code> и <code>word-spacing</code> похожи и устанавливают расстояние между символами в словах и самими словами соответственно. Они могут принимать в качестве значений большинство абсолютных и относительных единиц. Также они могут принимать отрицательные значения, тогда символы и слова начинают как бы <span style="letter-spacing: -1px; word-spacing: -0.3rem;">прижиматься друг к другу</span>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" target="_blank">letter-spacing</a>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing" target="_blank">word-spacing</a>.</p>
 `,
      goal: `Установите расстояние между символами и словами.`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div>
      <h2>Расстояние между символами и словами</h2>
      <p class="broad-space">В этом тексте увеличенный интервал между символами в словах.</p>
      <p class="narrow-space">В этом тексте совсем небольшой интервал между самими словами.</p>
    </div>

    <div>
      <h2>Высота строки</h2>
      <p class="line-height-small">Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга.Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга.</p>
      <p class="line-height-big">Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть.</p>
    </div>

    <div>
      <h2>Варианты выравнивания текста</h2>
      <p>Выравнивание по левому краю</p>
      <p class="right">Выравнивание по правому краю</p>
      <p class="center">Выравнивание по центру</p>
    </div>
  
  </body>
</html>
`,
        css: `/* CSS редактор */

.line-height-small {
  line-height: 9px;
}

.line-height-big {
  line-height: 2;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Абзацу с классом <code>broad-space</code> задайте интервал между символами в словах <code>3px</code>.",
          testRegExp: [`\.broad-space\\s+{\\s*letter-spacing: 3px;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение letter-spacing",
        },
        {
          id: 2,
          label: "Абзацу с классом <code>narrow-space</code> задайте интервал между словами <code>-0.15rem</code>.",
          testRegExp: [`\.narrow-space\\s+{\\s*word-spacing: -0.15rem;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение word-spacing",
        },
      ],
    },

    {
      id: 13,
      header: "Перенос текста - overflow-wrap",
      url: "css-overflow-wrap",
      theory: `<p>Свойство <code>overflow-wrap</code> устанавливает, должен ли браузер расставлять переносы строк внутри неразрывной строки или, иными словами, как текст будет переноситься при переполнении блока. Оно может принимать такие значения:</p>
<ul>
  <li><code>normal</code> - перенос осуществляется как в обычном тексте, то есть длинные слова не переносятся. Это значение по умолчанию</li>
  <li><code>break-word</code> - длинная строка символов может быть разбита в любой точке.</li>
</ul>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/ru/docs/Web/CSS/overflow-wrap" target="_blank">overflow-wrap</a>.</p>

 `,
      goal: `Установите перенос текста.`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <div class="overflow-container">
      <h2>Перенос текста</h2>
      <p>В этом тексте содержится однооченьоченьоченьоченьоченьдлинноеслово, которое не помещается в контейнер.</p>
      <p class="overflow-wrapped">В этом тексте содержится однооченьоченьоченьоченьоченьдлинноеслово, которое не помещается в контейнер.</p>
    </div>

    <div>
      <h2>Расстояние между символами и словами</h2>
      <p class="broad-space">В этом тексте увеличенный интервал между символами в словах.</p>
      <p class="narrow-space">В этом тексте совсем небольшой интервал между самими словами.</p>
    </div>

    <div>
      <h2>Высота строки</h2>
      <p class="line-height-small">Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга.Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга. Маленькая высота строки. Такая маленькая, что строки, того и гляди, наползут друг на друга.</p>
      <p class="line-height-big">Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть. Большая высота строки. Как будто между строками целая пропасть.</p>
    </div>

    <div>
      <h2>Варианты выравнивания текста</h2>
      <p>Выравнивание по левому краю</p>
      <p class="right">Выравнивание по правому краю</p>
      <p class="center">Выравнивание по центру</p>
    </div>
  
  </body>
</html>
`,
        css: `/* CSS редактор */

.overflow-container p {
  max-width: 10em;
  border: 2px solid rgb(49, 36, 167);
}

.broad-space {
  letter-spacing: 3px;
}

.narrow-space {
  word-spacing: -0.15rem;
}

.line-height-small {
  line-height: 9px;
}

.line-height-big {
  line-height: 2;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Абзацу с классом <code>overflow-wrapped</code> задайте перенос текста.",
          testRegExp: [`\.overflow-wrapped\\s+{\\s*overflow-wrap: break-word;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение overflow-wrap",
        },
      ],
    },

    {
      id: 14,
      header: "Стилизация списков - list-style",
      url: "css-list-style",
      theory: `<p>Нумерованные и ненумерованные списки <code>ul, ol</code> с точки зрения CSS являются текстовыми элементами. По умолчанию браузер выделяет каждый элемент ненумерованного списка черным маркером, а каждый элемент нумерованного списка - арабской цифрой, начиная от 1. Иногда эти стили хочется изменить и тогда можно использовать свойство <code>list-style</code>. Это свойство является сокращенным и состоит из следующих свойств:</p>
<ul>
  <li><code>list-style-type</code> - определяет тип маркера списка, например, круглый черный маркер можно заменить на квадратный, поменять числа с арабских на римские и т. д.</li>
  <li><code>list-style-position</code> - определяет положение маркера/числа (внутри или снаружи элемента списка).</li>
  <li><code>list-style-image</code> - позволяет задать изображение вместо маркера.</li>
</ul>
<p>В качестве примера поменяем маркер в этом списке:</p>
<h4>Русские покорители Арктики</h4>
<ul>
  <li>Георгий Седов</li>
  <li>Георгий Брусилов</li>
  <li>Владимир Русанов</li>
</ul>

<pre><code><span class="selector">ul</span> {
  <span class="rule">list-style-type:</span> circle;
}</code></pre>

<h4>Русские покорители Арктики</h4>
<ul style="list-style-type: circle;">
  <li>Георгий Седов</li>
  <li>Георгий Брусилов</li>
  <li>Владимир Русанов</li>
</ul>

<p>Еще одна часто встречающаяся задача - сбросить дефолтные маркеры списков. Для этого установим такое значение <code>list-style</code>:</p>

<pre><code><span class="selector">ul</span> {
  <span class="rule">list-style:</span> none;
}</code></pre>

<h4>Русские покорители Арктики</h4>
<ul style="list-style: none;">
  <li>Георгий Седов</li>
  <li>Георгий Брусилов</li>
  <li>Владимир Русанов</li>
</ul>

<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type" target="_blank">list-style-type</a>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position" target="_blank">list-style-position</a>.</p>
<p class="external-resource">Прочитать больше о свойстве <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image" target="_blank">list-style-image</a>.</p>

 `,
      goal: `Стилизуйте списки.`,
      initValues: {
        html: `<!--HTML редактор-->

<!DOCTYPE html>
<html>
  <head>
    <title>Our Typography</title>
  </head>

  <body>
    <h1>Добро пожаловать в типографию "Типо графика"</h1>
    <p>В нашей типографии вы можете заказать текст любого стиля. Ознакомьтесь с нашим каталогом образцов:</p>

    <h3>Мои планы на вечер</h3>
    <ol>
      <li>Приготовить ужин</li>
      <li>Погулять с собакой</li>
      <li>Отправить электронные письма:
        <ul>
          <li>в банк с просьбой пересчитать оплату по кредиту</li>
          <li>в ЖКХ с просьбой отсрочить платеж по квитанции</li>
          <li>коллеге с просьбой отложить возврат долга</li>
        </ul>
      </li>
      <li>Умыться</li>
      <li>Лечь спать</li>
    </ol>

    <h3>Мои планы после получения зарплаты</h3>
    <ul class="done">
      <li>Выплатить кредит в банке</li>
      <li>Оплатить квитанцию по ЖКХ</li>
      <li>Вернуть долг коллеге</li>
    </ul>
  
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
          label:
            "Нумерованному списку задайте тип цифр <code>upper-roman</code> и внутреннее положение маркеров - значение <code>inside</code>.",
          testRegExp: [`\ol\\s+{[\\s\\S]*list-style-type: upper-roman;[\\s\\S]*}`, `\ol\\s+{[\\s\\S]*list-style-position: inside;[\\s\\S]*}`],
          failMsg: "Убедитесь, что вы задали правильное значение list-style-type и list-style-position",
        },
        {
          id: 2,
          label: "Всем ненумерованным спискам на странице сбросьте стили.",
          testRegExp: [`\\ul\\s+{\\s*list-style: none;\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение list-style",
        },
        {
          id: 3,
          label: `После этого ненумерованному списку с классом <code>done</code> задайте тип маркера <code>"\\1F44D"</code> (thumbs up).`,
          testRegExp: [`\.done\\s+{\\s*list-style-type: "\\1F44D";\\s*}`],
          failMsg: "Убедитесь, что вы задали правильное значение list-style-type",
        },
      ],
    },
  ],
};
