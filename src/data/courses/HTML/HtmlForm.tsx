export const HtmlForm = {
  id: 4,
  title: "Формы в HTML",
  url: "html-forms",
  excercises: [
    {
      id: 1,
      header: "Создание HTML формы - элемент form",
      url: "html-form-creation",
      theory: `<p>Как и формы в реальной жизни, HTML формы необходимы, чтобы собрать информацию от пользователя и передать ее на дальнейшую обработку (в случае HTML это вэб-сервер). Формы регистрации и входа на сайт, сервисы заказов и бронирования, форм в Интернете очень много. Например, поисковая строка Google - это тоже часть формы, поскольку она принимает информацию от пользователя (текстовый поисковый запрос) и передает ее на дальнейшую обработку (на сервера Google).</p>
<p>Форма создается с помощью элемента <code>form</code> и имеет несколько обязательных аттрибутов. Приведем пример формы в разметке:</p>
      
<pre><code><span class="tag"><<span>form</span> <span class="attr-name">action=<span><span class="attr-value">"http://destination"<span> <span class="attr-name">method=<span><span class="attr-value">"POST"<span>></span>
      
<span class="tag"><<span>/form</span>></span></code></pre>
<p>Аттрибут <code>action</code> определяет адрес отправки данных формы. Это то, <em>куда</em> отправляются данные.</p>
<p>Аттрибут <code>method</code> определяет метод отправки формы. Это то, <em>как</em> отправляются данные.</p>
<p>Форма в примере выше отправит данные на адрес "http://destination" методом "POST".</p>
<p>Методы запроса - это то, как именно желаемое действие выполнится для данного ресурса, их несколько, но чаще всего используются следующие два: <ul><li>GET</li><li>POST</li></ul> Подробное описание методов отправки данных выходит за рамки данного урока, более подробную информацию можно почитать, например, <a style="color: blue" href="https://developer.mozilla.org/ru/docs/Web/HTTP/Methods">в этой документации</a>.</p>
<p>Написание метода отправки заглавными буквами - это пример соглашения о наименовании, вариант написания строчными буквами <code>post</code> тоже будет работать.</p>
`,
      goal: `Создайте пустую форму.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>
<!--Начните создавать форму ниже этой линии-->
`,
        css: `
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Создайте пустую форму.",
          test: (iframe: HTMLIFrameElement) => {
            const form = iframe.contentDocument.body.querySelector("form");
            return form !== null;
          },
          failMsg: "Убедитесь, что вы создали элемент form",
        },
        {
          id: 2,
          label: "Укажите адрес для отправки данных 'http://webgrove/server'.",
          test: (iframe: HTMLIFrameElement) => {
            const form = iframe.contentDocument.body.querySelector("form");
            return form && form.action === "http://webgrove/server";
          },
          failMsg: "Убедитесь, что вы правильно задали аттрибут action",
        },
        {
          id: 3,
          label: "Укажите метод отправки данных 'POST'.",
          test: (iframe: HTMLIFrameElement) => {
            const form = iframe.contentDocument.body.querySelector("form");
            return form && form.method === "post";
          },
          failMsg: "Убедитесь, что вы правильно задали аттрибут method",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">

</form>`,
    },

    {
      id: 2,
      header: "Текстовое поле - input[type='text']",
      url: "html-text-input",
      theory: `<p>Формы содержат в себе интерактивные элементы <code>input</code>, в которые пользователи могут вводить данные различных типов. То, какого типа данные можно вводить а поле  <code>input</code> определяется аттрибутом <code>type</code>. Для начала рассмотрим поле для ввода текстовой информации. Вот как оно может выглядить в разметке:</p>
      
<pre><code><span class="tag"><<span>input</span> <span class="attr-name">type=</span><span class="attr-value">"text"</span> <span class="attr-name">name=</span><span class="attr-value">"school"</span> <span class="attr-name">placeholder=</span><span class="attr-value">"Введите название школы"</span>></span></code></pre>
      
<p>Обратите внимания, что элемент <code>input</code> одиночный, он не требует закрывающего тэга. Вот как он будет выглядить на странице. Поробуйте ввести какой-нибудь текст.</p>
<p><input type="text" name="school" placeholder="Введите название школы"></p>
<p>В данном случае в поле просят ввести название школы. Давайте разберемся с аттрибутами элемента <code>input</code>:</p>
<p>
<ul>
<li>Аттрибут <code>type</code> со значением <code>text</code> говорит о том, что это текстовое поле. Всегда указывайте нужный тип поля. Позже мы разберем поля других типов.</li>
<li>Аттрибут <code>name</code> со значением <code>school</code> - это имя поля. Имя поля необходимо, чтобы правильно отправить значение поля на сервер. Всегда указывайте имя поля.</li>
<li>Аттрибут <code>placeholder</code> со значением <code>Введите название школы</code> - это текст, который отображается в поле по умолчанию. Он дает подсказку пользователю, какую именно информацию нужно ввести в поле. Данный аттрибут не является обязательным и нужен для удобства пользователя.</li>
</ul>
<p>Есть еще важный аттрибут <code>value</code>, в который записывается значение, введенное пользователем в поле. При отправке формы на сервер, данные из поля отправятся в виде пары значений <code>name="value"</code>. Например, если в поле сверху ввести текст "Гимназия №5", то при отправке формы на сервер уйдут данные <code>school="Гимназия №5"</code>, а если оставить поле пустым, то <code>school=""</code>. Значение <code>value</code> можно задать по умолчанию:</p>

<pre><code><span class="tag"><<span>input</span> <span class="attr-name">type=</span><span class="attr-value">"text"</span> <span class="attr-name">name=</span><span class="attr-value">"school"</span> <span class="attr-name">value=</span><span class="attr-value">"Гимназия №5"</span> <span class="attr-name">placeholder=</span><span class="attr-value">"Введите название школы"</span>></span></code></pre>

<p><input type="text" name="school" value="Гимназия №5" placeholder="Введите название школы"></p>
<p>Теперь в поле по умолчанию проставляется значение <code>value</code>, а не <code>placeholder</code>. Подчеркнем разницу между ними: <code>value</code> - это реальное значение поля, введенное пользователем, которое отправляется с формой и хранится на сервере, в то время как плэйсхолдер - это просто текст-заглушка, созданный для визуального удобства пользователя.</p>
`,
      goal: `Начните заполнять форму с создания текстового поля.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">

</form>
`,
        css: `
        form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Внутри формы создайте текстовое поле.`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]");
            return textInput && textInput.parentElement && textInput.parentElement.tagName === "FORM";
          },
          failMsg: "Убедитесь, что в форме создан элемент input с правильным типом",
        },
        {
          id: 2,
          label: `Укажите имя поля "username".`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]") as HTMLInputElement;
            return textInput && textInput.name === "username";
          },
          failMsg: "Убедитесь, что вы правильно задали аттрибут name",
        },
        {
          id: 3,
          label: `Укажите плэйсхолдер "Иван Сидоров".`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]") as HTMLInputElement;
            return textInput && textInput.placeholder === "Иван Сидоров";
          },
          failMsg: "Убедитесь, что вы правильно задали аттрибут placeholder",
        },
        {
          id: 4,
          label: `В качестве исходного значения поле укажите свое имя (исходное значение не должно быть пустым).`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]") as HTMLInputElement;
            return textInput && textInput.value !== "";
          },
          failMsg: "Убедитесь, что вы задали непустой аттрибут value",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <input type="text" name="username" value="Дмитрий Степанов" placeholder="Иван Сидоров">
</form>`,
    },

    {
      id: 3,
      header: "Подписи полей - элемент label",
      url: "html-labels",
      theory: `<p>Мы создали текстовое поле, но пока не понятно, для чего оно предназначено. Полю необходимо текстовое описание и для этого существует элемент <code>label</code>. Мы должны связать элементы <code>label</code> и <code>input</code>, чтобы понимать, какая подпись к какому полю относится. Вот один из способов это сделать:</p>
      
<pre><code><span class="tag"><<span>label</span>></span>
  Название школы
  <span class="tag"><<span>input</span> <span class="attr-name">type=</span><span class="attr-value">"text"</span> <span class="attr-name">name=</span><span class="attr-value">"school"</span> <span class="attr-name">placeholder=</span><span class="attr-value">"Введите название школы"</span>></span>
<span class="tag"><<span>/label</span>></span></code></pre>
      
<p><label>Название школы  <input type="text" name="school" placeholder="Введите название школы"></label></p>
<p>Наш текстовый <code>input</code> из прошлого упражнения мы просто обернули в <code>label</code> и дали ему текстовое описание "Название школы". Кстати, вот зачем еще нужен <code>label</code>: если вы кликните по этому элементу, курсор автоматически встанет в нужное поле (поле получит фокус). Попробуйте кликнуть на "Название школы".</p>
<p>Это вполне рабочий способ, но есть вариант получше:</p>

<pre><code><span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"school"</span>></span>Название школы<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"school"</span> <span class="attr-name">type=</span><span class="attr-value">"text"</span> <span class="attr-name">name=</span><span class="attr-value">"school"</span> <span class="attr-name">placeholder=</span><span class="attr-value">"Введите название школы"</span>></span></code></pre>

<p><label for="school">Название школы</label>  <input id="school" type="text" name="school" placeholder="Введите название школы"></p>
<p>Полю <code>input</code> мы задаем аттрибут <code>id</code>, а элементу <code>label</code> аттрибут <code>for</code>  с точно таким же значением. Визуально ничего не изменится, но у такого способа есть преимущество - поле и его текстовое описание могут находится в разных частях разметки и все-равно будут связаны по <code>id</code>.</p>
<p>Также следует помнить, что <code>id</code> с определенным значением может быть только один на странице, поэтому к выбору значения идентификатора надо подходить внимательно.</p>
`,
      goal: `Создайте текстовое описание для поля.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
 
  <input type="text" name="username" placeholder="Иван Сидоров">
</form>
`,
        css: `
        form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

label {
  margin-right: 7px;
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Дайте текстовому полю уникальный идентификатор <code>username</code>.`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]");
            return textInput && textInput.id === "username";
          },
          failMsg: "Убедитесь, что полю задан правильный id",
        },
        {
          id: 2,
          label: `<b>Перед</b> текстовым полем создайте <code>label</code> с текстом "Имя заказчика".`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]") as HTMLInputElement;
            return (
              textInput &&
              textInput.previousElementSibling &&
              textInput.previousElementSibling.tagName === "LABEL" &&
              textInput.previousElementSibling.textContent === "Имя заказчика"
            );
          },
          failMsg: "Убедитесь, что вы создали label перед текстовым полем",
        },
        {
          id: 3,
          label: `Свяжите <code>label</code> c текстовым полем.`,
          test: (iframe: HTMLIFrameElement) => {
            const textInput = iframe.contentDocument.body.querySelector("input[type=text]") as HTMLInputElement;
            if (!textInput) {
              return false;
            }
            const label = textInput.previousElementSibling as HTMLLabelElement;
            return textInput.id === "username" && label && label.htmlFor === "username";
          },
          failMsg: "Убедитесь, что вы правильно задали аттрибут for",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <label for="username">Имя заказчика</label>
  <input id="username" type="text" name="username" placeholder="Иван Сидоров">
</form>`,
    },

    {
      id: 4,
      header: "Числовое поле - input[type='number']",
      url: "html-input-number",
      theory: `<p>Мы уже можем вводить текстовые данные. Для того, чтобы можно было вводить числа создадим <code>input</code> с типом <code>number</code>:</p>
      
<pre><code><span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"students"</span>></span>Количество учеников<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"students"</span> <span class="attr-name">type=</span><span class="attr-value">"number"</span> <span class="attr-name">name=</span><span class="attr-value">"students"</span> <span class="attr-name">value=</span><span class="attr-value">"4"</span> <span class="attr-name">step=</span><span class="attr-value">"5"</span>></span></code></pre>
      
<p><label for="students">Количество учеников</label>  <input id="students" type="number" name="students" value="4" step="5"></p>
<p>Мы уже знакомы с большинством аттрибутов. Мы задали: 
<ul>
<li>идентификатор <code>id</code> со значением <code>students</code> (а также аттрибут <code>for</code> с таким же значением, чтобы связать <code>input</code> и <code>label</code>)</li>
<li>тип поля <code>type</code> со значением <code>number</code></li>
<li>имя поля <code>name</code> со значением <code>students</code></li>
<li>изначальное значение <code>value</code> - <code>4</code></li>
</ul></p>
<p>Есть также специфичный для числового поля аттрибут <code>step</code>. Если вы установите фокус в числовое поле, то увидите справа управляющие стрелки. При клике на стрелки они увеличат или уменьшат значение в поле на величину, указанную в <code>step</code> (в данном случае на 5). Попробуйте.</p>
`,
      goal: `Создайте в форме числовое поле.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <div class="input-group">
    <label for="username">Имя заказчика</label>
    <input id="username" type="text" name="username" placeholder="Иван Сидоров">
  </div>
  <!--Создавайте элементы ниже этой линии-->
  
</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

label {
  margin-right: 7px;
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте числовое поле.`,
          test: (iframe: HTMLIFrameElement) => {
            const numInput = iframe.contentDocument.body.querySelector("input[type=number]");
            return numInput && numInput.parentElement && numInput.parentElement.tagName === "FORM";
          },
          failMsg: "Убедитесь, что вы создали поле с правильным типом",
        },
        {
          id: 2,
          label: `Укажите аттрибуты поля: <ul><li>идентификатор со значением <code>num-guests</code></li><li>название поля <code>num-guests</code></li><li>исходное значение <code>4</code></li><li>шаг изменения значения <code>1</code></li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const numInput = iframe.contentDocument.body.querySelector("input[type=number]") as HTMLInputElement;
            return (
              numInput &&
              numInput.id === "num-guests" &&
              numInput.name === "num-guests" &&
              numInput.value === "4" &&
              numInput.step === "1"
            );
          },
          failMsg: "Убедитесь, что числовому полю заданы аттрибуты с правильными значениями",
        },
        {
          id: 3,
          label: `<b>Перед</b> числовым полем создайте <code>label</code> с текстом "Количество участников".`,
          test: (iframe: HTMLIFrameElement) => {
            const numInput = iframe.contentDocument.body.querySelector("input[type=number]") as HTMLInputElement;
            return (
              numInput &&
              numInput.previousElementSibling &&
              numInput.previousElementSibling.tagName === "LABEL" &&
              numInput.previousElementSibling.textContent === "Количество участников"
            );
          },
          failMsg: "Убедитесь, что вы создали label перед числовым полем",
        },
        {
          id: 4,
          label: `Свяжите <code>label</code> c числовым полем.`,
          test: (iframe: HTMLIFrameElement) => {
            const numInput = iframe.contentDocument.body.querySelector("input[type=number]") as HTMLInputElement;
            if (!numInput) {
              return false;
            }
            const label = numInput.previousElementSibling as HTMLLabelElement;
            return numInput.id === "num-guests" && label && label.htmlFor === "num-guests";
          },
          failMsg: "Убедитесь, что вы правильно задали аттрибут for",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <div class="input-group">
    <label for="username">Имя заказчика</label>
    <input id="username" type="text" name="username" placeholder="Иван Сидоров">
  </div>
  <!--Создавайте элементы ниже этой линии-->
  <label for="num-guests">Количество участников</label>
  <input type="number" id="num-guests" name="num-guests" value="4" step="1">
</form>`,
    },

    {
      id: 5,
      header: "Поля для телефона и email - input[type='tel'], input[type='email']",
      url: "html-input-tel-email",
      theory: `<p>Пользователям на сайтах часто предлагают ввести свой телефон и электронную почту <span style="text-decoration: line-through">чтобы заваливать их потом спамом</span>. Вводить эти данные нужно так часто, что в стандарте HTML5 предусмотрены специальные поля для этого.</p>
      
<code><pre><span class="tag"><<span>input</span> <span class="attr-name">type=</span><span class="attr-value">"tel"</span> <span class="attr-name">name=</span><span class="attr-value">"tel"</span> <span class="attr-name">maxlength=</span><span class="attr-value">"16"</span> <span class="attr-name">placeholder=</span><span class="attr-value">"+7(906)342-43-12"</span>></span></code></pre>
      
<p><input type="tel" name="tel" maxlength="16" placeholder="+7(906)342-43-12"></p>
<p>Поле с типом <code>tel</code> нужно для ввода номера телефона. Помимо знакомых вам аттрибутов, здесь можно использовать аттрибут <code>maxlength</code>, который ограничивает количество символов в поле. Его удобно использовать, когда формат телефонного номера может быть разный. В данном случае в поле можно ввести не более 16 символов.</p>

<code><pre><span class="tag"><<span>input</span> <span class="attr-name">type=</span><span class="attr-value">"email"</span> <span class="attr-name">name=</span><span class="attr-value">"email"</span> <span class="attr-name">placeholder=</span><span class="attr-value">"example@gmail.com"</span>></span></code></pre>
      
<p><input type="email" name="email" placeholder="example@gmail.com"></p>
<p>Поле с типом <code>email</code> нужно для ввода адреса электронной почты. При отправке формы браузер проверяет, чтобы в поле был валидный e-mail адрес, в частности присутствовал символ <code>@</code>.</p>
`,
      goal: `Создайте в форме поле для номера телефона и электронной почты.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <div class="input-group">
    <label for="username">Имя заказчика</label>
    <input id="username" type="text" name="username" placeholder="Иван Сидоров">
  </div>
  <div class="input-group">
    <label for="num-guests">Количество участников</label>
    <input type="number" id="num-guests" name="num-guests" value="4" step="1">
  </div>
  <!--Добавляйте поля ниже этой линии-->

</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

label {
  margin-right: 7px;
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте поле для номера телефона: <ul><li>идентификатор со значением <code>tel</code></li><li>название поля <code>tel</code></li><li>максимальную длину <code>18</code> символов</li><li>плэйсхолдер на свое усмотрение (значение не должно быть пустым)</li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const telInput = iframe.contentDocument.body.querySelector("input[type=tel]") as HTMLInputElement;
            return (
              telInput &&
              telInput.parentElement &&
              telInput.parentElement.tagName === "FORM" &&
              telInput.id === "tel" &&
              telInput.name === "tel" &&
              telInput.maxLength === 18 &&
              telInput.placeholder !== ""
            );
          },
          failMsg: "Убедитесь, что вы создали поле для телефона с правильными значениями аттрибутов",
        },
        {
          id: 2,
          label: `<b>Перед</b>  полем для телефона создайте <code>label</code> с текстом "Телефон:", свяжите поле со своей подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const telInput = iframe.contentDocument.body.querySelector("input[type=tel]") as HTMLInputElement;
            if (!telInput) {
              return false;
            }
            const label = telInput.previousElementSibling as HTMLLabelElement;
            return label && label.textContent === "Телефон:" && label.htmlFor === "tel";
          },
          failMsg:
            "Убедитесь, что вы создали label перед полем для телефона с правильным текстовым содержанием и аттрибутом for",
        },
        {
          id: 3,
          label: `Создайте поле для email: <ul><li>идентификатор со значением <code>email</code></li><li>название поля <code>email</code></li><li>плэйсхолдер на свое усмотрение (значение не должно быть пустым)</li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const emailInput = iframe.contentDocument.body.querySelector("input[type=email]") as HTMLInputElement;
            return (
              emailInput &&
              emailInput.parentElement &&
              emailInput.parentElement.tagName === "FORM" &&
              emailInput.id === "email" &&
              emailInput.name === "email" &&
              emailInput.placeholder !== ""
            );
          },
          failMsg: "Убедитесь, что вы создали поле для email с правильными значениями аттрибутов",
        },
        {
          id: 4,
          label: `<b>Перед</b>  полем для email создайте <code>label</code> с текстом "E-mail:", свяжите поле со своей подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const emailInput = iframe.contentDocument.body.querySelector("input[type=email]") as HTMLInputElement;
            if (!emailInput) {
              return false;
            }
            const label = emailInput.previousElementSibling as HTMLLabelElement;
            return label && label.textContent === "E-mail:" && label.htmlFor === "email";
          },
          failMsg:
            "Убедитесь, что вы создали label перед полем для email с правильным текстовым содержанием и аттрибутом for",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <div class="input-group">
    <label for="username">Имя заказчика</label>
    <input id="username" type="text" name="username" placeholder="Иван Сидоров">
  </div>
  <div class="input-group">
    <label for="num-guests">Количество участников</label>
    <input type="number" id="num-guests" name="num-guests" value="4" step="1">
  </div>
  <!--Добавляйте поля ниже этой линии-->
  <label for="tel">Телефон:</label>
  <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" placeholder="example@gmail.com">
</form>`,
    },

    {
      id: 6,
      header: "Выпадающий список - элементы select и option",
      url: "html-select-option",
      theory: `<p>Не все интерактивные элементы форм отображаются с помощью <code>input</code>. Например, мы хотим отобразить выпадающий список элементов. Для этого используем элемент <code>select</code>:</p>
      
<pre><code><span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"color"</span>></span>Выберите цвет автомобиля:<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>select</span> <span class="attr-name">id=</span><span class="attr-value">"color"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span>></span>
  <span class="tag"><<span>option</span> <span class="attr-name">value=</span><span class="attr-value">"red"</span>></span>Красный<span class="tag"><<span>/option</span>></span>
  <span class="tag"><<span>option</span> <span class="attr-name">value=</span><span class="attr-value">"blue"</span>></span>Синий<span class="tag"><<span>/option</span>></span>
  <span class="tag"><<span>option</span> <span class="attr-name">value=</span><span class="attr-value">"black"</span>></span>Черный<span class="tag"><<span>/option</span>></span>
  <span class="tag"><<span>option</span> <span class="attr-name">value=</span><span class="attr-value">"white"</span>></span>Белый<span class="tag"><<span>/option</span>></span>
  <span class="tag"><<span>option</span> <span class="attr-name">value=</span><span class="attr-value">"custom"</span>></span>Кастомный<span class="tag"><<span>/option</span>></span>
<span class="tag"><<span>/select</span>></span></code></pre>      

<p><label for="color">Выберите цвет автомобиля:</label>
<select id="color" name="color">
  <option value="red">Красный</option>
  <option value="blue">Синий</option>
  <option value="black">Черный</option>
  <option value="white">Белый</option>
  <option value="custom">Кастомный</option>
</select></p>

<p>Выпадающий список представлен элементом <code>select</code>, а каждый из вариантов выбора с помощью элемента <code>option</code>. Текст, расположенный между открывающим и закрывающим тэгами <code>option</code> отобразится в списке, но нам важнее аттрибут <code>value</code>. При отправке формы он уйдет на сервер в паре с аттрибутом <code>name</code> элемента <code>select</code>.</p>
<p>Например, если в списке сверху выбрать черный цвет, то при отправке формы на сервер уйдет значение <code>color="black"</code>. Не забывайте давать <code>value</code> своим <code>option</code>.</p>
`,
      goal: `Создайте в форме выпададающий список.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <!--Добавляйте элементы ниже этой линии-->
 
  </fieldset>
</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

fieldset {
  border: 1px dotted yellow;
  border-radius: 30px;
}

legend {
  font-weight: bold;
}

label {
  margin-right: 7px;
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте выпадающий список, укажите <ul><li>идентификатор на свое усмотрение (значение не должно быть пустым)</li><li>название списка <code>scary</code></li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const select = iframe.contentDocument.body.querySelector("select");
            return (
              select &&
              select.parentElement &&
              select.parentElement.tagName === "FIELDSET" &&
              select.id !== "" &&
              select.name === "scary"
            );
          },
          failMsg: "Убедитесь, что вы создали элемент select с правильными значениями аттрибутов",
        },
        {
          id: 2,
          label: `Создайте следующие варианты выбора <ul><li>Первый вариант с текстом "Не страшно" и значением <code>scary-none</code></li><li>Второй вариант с текстом "Немного страшно" и значением <code>scary-low</code></li><li>Третий вариант с текстом "Страшновато" и значением <code>scary-moderate</code></li><li>Четвертый вариант на свое усмотрение</li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const select = iframe.contentDocument.body.querySelector("select");
            if (!select) {
              return false;
            }
            const options = select.options;
            return (
              options.length === 4 &&
              options[0].textContent === "Не страшно" &&
              options[0].value === "scary-none" &&
              options[1].textContent === "Немного страшно" &&
              options[1].value === "scary-low" &&
              options[2].textContent === "Страшновато" &&
              options[2].value === "scary-moderate" &&
              options[3].textContent !== "" &&
              options[3].value !== ""
            );
          },
          failMsg: "Убедитесь, что вы создали 4 элемента option с текстом и исходным значением",
        },
        {
          id: 3,
          label: `<b>Перед</b> выпадающим списком создайте <code>label</code> с текстом "Хотите страшного?", свяжите выпадающий список со своей подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const select = iframe.contentDocument.body.querySelector("select");
            if (!select) {
              return false;
            }
            const label = select.previousElementSibling as HTMLLabelElement;
            return label && label.textContent === "Хотите страшного?" && label.htmlFor === select.id;
          },
          failMsg:
            "Убедитесь, что вы создали label перед выпадающим списком с правильным текстовым содержанием и аттрибутом for",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <!--Добавляйте элементы ниже этой линии-->
    <label for="scary">Хотите страшного?</label>
    <select id="scary" name="scary">
      <option value="scary-none">Не страшно</option>
      <option value="scary-low">Немного страшно</option>
      <option value="scary-moderate">Страшновато</option>
      <option value="scary-high">Очень страшно</option>
    </select>
  </fieldset>
</form>`,
    },

    {
      id: 7,
      header: "Чекбоксы - input[type=checkbox]",
      url: "html-checkbox",
      theory: `<p>Элемент <code>select</code> предоставляет пользователям выбор одного варианта из множества. Если мы хотим предоставить возможность выбора нескольких вариантов, используем элемент <code>input</code> с типом <code>checkbox</code>.</p>
      
<pre><code><span class="tag"><<span>span</span>></span>Выберите предпочитаемые цвета:<span class="tag"><<span>/span</span>></span>
<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"red"</span>></span>Красный<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"red"</span> <span class="attr-name">type=</span><span class="attr-value">"checkbox"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"red"</span> <span class="attr-name">checked</span>></span>

<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"blue"</span>></span>Синий<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"blue"</span> <span class="attr-name">type=</span><span class="attr-value">"checkbox"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"blue"</span>></span>

<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"black"</span>></span>Черный<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"black"</span> <span class="attr-name">type=</span><span class="attr-value">"checkbox"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"black"</span>></span>

<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"white"</span>></span>Белый<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"white"</span> <span class="attr-name">type=</span><span class="attr-value">"checkbox"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"white"</span>></span>
</code></pre>      

<p><span style="display: block">Выберите предпочитаемые цвета:</span>
<label for="red">Красный</label>
<input id="red" type="checkbox" name="color" value="red" checked>
<label for="blue">Синий</label>
<input id="blue" type="checkbox" name="color" value="blue">
<label for="black">Черный</label>
<input id="black" type="checkbox" name="color" value="black">
<label for="white">Белый</label>
<input id="white" type="checkbox" name="color" value="white"></p>

<p>У нас на странице появилось 4 варианта выбора цвета, причем вы можете выбрать любое количество. Обратите внимание, что для группы чекбоксов значение аттрибута <code>name</code> должно быть одинаковым (в данном случае <code>color</code>) и должно быть сразу указано значение <code>value</code>. Как и в случае с другими полями, именно это значение уйдет на сервер при отправке формы.</p>
<p>Также у первого чекбокса указан аттрибут <code>checked</code> (у этого аттрибута нет значения). Это означает, что вариант со значением <code>red</code> будет выбран по умолчанию.</p>
`,
      goal: `Создайте в форме группу чекбоксов.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <!--Добавляйте элементы ниже этой линии-->

  </fieldset>
</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

fieldset {
  border: 1px dotted yellow;
  border-radius: 30px;
}

legend {
  font-weight: bold;
}

label {
  margin-right: 7px;
}

span {
  width: 100%;
  display: block;
  font-weight: bold;
}

.checkbox-group label,
.radio-group label {
  margin-right: 20px
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте первый чекбокс, укажите <ul><li>идентификатор <code>reality</code></li><li>исходное значение <code>reality</code></li><li>имя чекбокса (и всей группы) <code>type</code></li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const firstCheckbox = iframe.contentDocument.body.querySelectorAll(
              "input[type=checkbox]"
            )[0] as HTMLInputElement;
            return (
              firstCheckbox &&
              firstCheckbox.parentElement &&
              firstCheckbox.parentElement.tagName === "FIELDSET" &&
              firstCheckbox.id === "reality" &&
              firstCheckbox.value === "reality" &&
              firstCheckbox.name === "type"
            );
          },
          failMsg: "Убедитесь, что вы создали чекбокс с правильными значениями аттрибутов",
        },
        {
          id: 2,
          label: `<b>После</b> первого чекбокса создайте <code>label</code> с текстом "Квест в реальности", свяжите чекбокс с подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const firstCheckbox = iframe.contentDocument.body.querySelectorAll(
              "input[type=checkbox]"
            )[0] as HTMLInputElement;
            if (!firstCheckbox) {
              return false;
            }
            const label = firstCheckbox.nextElementSibling as HTMLLabelElement;
            return label && label.textContent === "Квест в реальности" && label.htmlFor === firstCheckbox.id;
          },
          failMsg: "Убедитесь, что вы создали label после чекбокса с правильным текстовым содержанием и аттрибутом for",
        },
        {
          id: 3,
          label: `Создайте второй чекбокс, укажите <ul><li>идентификатор <code>performance</code></li><li>исходное значение <code>performance</code></li></ul> Второй чекбокс должен быть выбран по умолчанию.`,
          test: (iframe: HTMLIFrameElement) => {
            const secondCheckbox = iframe.contentDocument.body.querySelectorAll(
              "input[type=checkbox]"
            )[1] as HTMLInputElement;
            return (
              secondCheckbox &&
              secondCheckbox.parentElement &&
              secondCheckbox.parentElement.tagName === "FIELDSET" &&
              secondCheckbox.id === "performance" &&
              secondCheckbox.value === "performance" &&
              secondCheckbox.name === "type" &&
              secondCheckbox.checked
            );
          },
          failMsg: "Убедитесь, что вы создали чекбокс с правильными значениями аттрибутов",
        },
        {
          id: 4,
          label: `<b>После</b> второго чекбокса создайте <code>label</code> с текстом "Перформанс", свяжите чекбокс с подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const secondCheckbox = iframe.contentDocument.body.querySelectorAll(
              "input[type=checkbox]"
            )[1] as HTMLInputElement;
            if (!secondCheckbox) {
              return false;
            }
            const label = secondCheckbox.nextElementSibling as HTMLLabelElement;
            return label && label.textContent === "Перформанс" && label.htmlFor === secondCheckbox.id;
          },
          failMsg: "Убедитесь, что вы создали label после чекбокса с правильным текстовым содержанием и аттрибутом for",
        },
        {
          id: 5,
          label: `Создайте третий чекбокс, укажите аттрибуты на свое усмотрение, <b>после</b> него создайте подпись и свяжите ее с чекбоксом.`,
          test: (iframe: HTMLIFrameElement) => {
            const thirdCheckbox = iframe.contentDocument.body.querySelectorAll(
              "input[type=checkbox]"
            )[2] as HTMLInputElement;
            if (!thirdCheckbox) {
              return false;
            }
            const label = thirdCheckbox.nextElementSibling as HTMLLabelElement;
            return (
              thirdCheckbox &&
              thirdCheckbox.parentElement &&
              thirdCheckbox.parentElement.tagName === "FIELDSET" &&
              thirdCheckbox.id !== "" &&
              thirdCheckbox.value !== "" &&
              thirdCheckbox.name === "type" &&
              label &&
              label.textContent !== "" &&
              label.htmlFor === thirdCheckbox.id
            );
          },
          failMsg:
            "Убедитесь, что вы создали чекбокс с не пустыми значениями аттрибутов и элемент label, связанный с чекбоксом",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <!--Добавляйте элементы ниже этой линии-->
  
    <input id="reality" type="checkbox" name="type" value="reality">
    <label for="reality">Квест в реальности</label>
    <input id="performance" type="checkbox" name="type" value="performance" checked>
    <label for="performance">Перформанс</label>
    <input id="vr" type="checkbox" name="type" value="vr">
    <label for="vr">Квест в VR</label> 
  </fieldset>
</form>`,
    },

    {
      id: 8,
      header: "Радиокнопки - input[type=radio]",
      url: "html-radio",
      theory: `<p>Наконец, есть еще один способ предоставить пользователю выбор из нескольких вариантов - использование полей с типом <code>radio</code> - радиокнопок. Вот пример:</p>
      
<pre><code><span class="tag"><<span>span</span>></span>Выберите один любимый цвет:<span class="tag"><<span>/span</span>></span>
<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"red"</span>></span>Красный<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"red"</span> <span class="attr-name">type=</span><span class="attr-value">"radio"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"red"</span> <span class="attr-name">checked</span>></span>

<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"blue"</span>></span>Синий<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"blue"</span> <span class="attr-name">type=</span><span class="attr-value">"radio"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"blue"</span>></span>

<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"black"</span>></span>Черный<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"black"</span> <span class="attr-name">type=</span><span class="attr-value">"radio"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"black"</span>></span>

<span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"white"</span>></span>Белый<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>input</span> <span class="attr-name">id=</span><span class="attr-value">"white"</span> <span class="attr-name">type=</span><span class="attr-value">"radio"</span> <span class="attr-name">name=</span><span class="attr-value">"color"</span> <span class="attr-name">value=</span><span class="attr-value">"white"</span>></span>
</code></pre>      

<p><span style="display: block">Выберите один любимый цвет:</span>
<label for="red">Красный</label>
<input id="red" type="radio" name="color" value="red" checked>
<label for="blue">Синий</label>
<input id="blue" type="radio" name="color" value="blue">
<label for="black">Черный</label>
<input id="black" type="radio" name="color" value="black">
<label for="white">Белый</label>
<input id="white" type="radio" name="color" value="white"></p>

<p>Радиокнопки близки к элементу <code>select</code> в том смысле, что позволяют выбрать только один вариант из множества, но в данном случае все варианты сразу отображены на странице.</p>
<p>Правила использования радиокнопок такие же, как и чекбоксов. У группы радиокнопок должен быть аттрибут <code>name</code> с одинаковым значением и аттрибут <code>value</code> с уникальным значением. Также вы можете указать аттрибут <code>checked</code>, чтобы выбрать радиокнопку по умолчанию.</p>
`,
      goal: `Создайте в форме группу радиокнопок.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <div class="input-group checkbox-group">
      <div class="input-group">
        <input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
      </div>
      <div class="input-group">
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
      </div>
      <div class="input-group">
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> 
      </div>
    </div>
    <span>Параметр подбора</span>
    <!--Добавляйте элементы ниже этой линии-->

  </fieldset>
</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

fieldset {
  border: 1px dotted yellow;
  border-radius: 30px;
}

legend {
  font-weight: bold;
}

label {
  margin-right: 7px;
}

span {
  width: 100%;
  display: block;
  font-weight: bold;
}

.checkbox-group label,
.radio-group label {
  margin-right: 20px
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте первую радиокнопку, укажите <ul><li>идентификатор <code>popularity</code></li><li>исходное значение <code>popularity</code></li><li>имя радиокнопки (и всей группы) <code>preference</code></li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const firstRadio = iframe.contentDocument.body.querySelectorAll("input[type=radio]")[0] as HTMLInputElement;
            return (
              firstRadio &&
              firstRadio.parentElement &&
              firstRadio.parentElement.tagName === "FIELDSET" &&
              firstRadio.id === "popularity" &&
              firstRadio.value === "popularity" &&
              firstRadio.name === "preference"
            );
          },
          failMsg: "Убедитесь, что вы создали радиокнопку с правильными значениями аттрибутов",
        },
        {
          id: 2,
          label: `<b>После</b> первой радиокнопки создайте <code>label</code> с текстом "Популярность", свяжите радиокнопку с подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const firstRadio = iframe.contentDocument.body.querySelectorAll("input[type=radio]")[0] as HTMLInputElement;
            if (!firstRadio) {
              return false;
            }
            const label = firstRadio.nextElementSibling as HTMLLabelElement;
            return label && label.textContent === "Популярность" && label.htmlFor === firstRadio.id;
          },
          failMsg:
            "Убедитесь, что вы создали label после радиокнопки с правильным текстовым содержанием и аттрибутом for",
        },
        {
          id: 3,
          label: `Создайте вторую радиокнопку, укажите <ul><li>идентификатор <code>reviews</code></li><li>исходное значение <code>reviews</code></li></ul> Вторая радиокнопка должна быть выбрана по умолчанию.`,
          test: (iframe: HTMLIFrameElement) => {
            const secondRadio = iframe.contentDocument.body.querySelectorAll(
              "input[type=radio]"
            )[1] as HTMLInputElement;
            return (
              secondRadio &&
              secondRadio.parentElement &&
              secondRadio.parentElement.tagName === "FIELDSET" &&
              secondRadio.id === "reviews" &&
              secondRadio.value === "reviews" &&
              secondRadio.name === "preference" &&
              secondRadio.checked
            );
          },
          failMsg: "Убедитесь, что вы создали радиокнопку с правильными значениями аттрибутов",
        },
        {
          id: 4,
          label: `<b>После</b> второй радиокнопки создайте <code>label</code> с текстом "Отзывы", свяжите радиокнопку с подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const secondRadio = iframe.contentDocument.body.querySelectorAll(
              "input[type=radio]"
            )[1] as HTMLInputElement;
            if (!secondRadio) {
              return false;
            }
            const label = secondRadio.nextElementSibling as HTMLLabelElement;
            return label && label.textContent === "Отзывы" && label.htmlFor === secondRadio.id;
          },
          failMsg:
            "Убедитесь, что вы создали label после радиокнопки с правильным текстовым содержанием и аттрибутом for",
        },
        {
          id: 5,
          label: `Создайте третью радиокнопку, укажите аттрибуты на свое усмотрение, <b>после</b> нее создайте подпись и свяжите ее с радиокнопкой.`,
          test: (iframe: HTMLIFrameElement) => {
            const thirdRadio = iframe.contentDocument.body.querySelectorAll("input[type=radio]")[2] as HTMLInputElement;
            if (!thirdRadio) {
              return false;
            }
            const label = thirdRadio.nextElementSibling as HTMLLabelElement;
            return (
              thirdRadio &&
              thirdRadio.parentElement &&
              thirdRadio.parentElement.tagName === "FIELDSET" &&
              thirdRadio.id !== "" &&
              thirdRadio.value !== "" &&
              thirdRadio.name === "preference" &&
              label &&
              label.textContent !== "" &&
              label.htmlFor === thirdRadio.id
            );
          },
          failMsg:
            "Убедитесь, что вы создали радиокнопку с не пустыми значениями аттрибутов и элемент label, связанный с радиокнопкой",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <div class="input-group checkbox-group">
      <div class="input-group">
        <input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
      </div>
      <div class="input-group">
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
      </div>
      <div class="input-group">
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> 
      </div>
    </div>
    <span>Параметр подбора</span>
    <!--Добавляйте элементы ниже этой линии-->

    <input type="radio" name="preference" id="popularity" value="popularity">
    <label for="popularity">Популярность</label>
    <input type="radio" name="preference" id="reviews" value="reviews" checked>
    <label for="reviews">Отзывы</label>
    <input type="radio" name="preference" id="distance" value="distance">
    <label for="distance">Расстояние</label>
  </fieldset>
</form>`,
    },

    {
      id: 9,
      header: "Многострочный текст - элемент textarea",
      url: "html-textarea",
      theory: `<p>В элемент <code>input</code> с типом <code>text</code> можно записать только одну строку текста. Но что если нам нужно отправить многострочный текст, например текст статьи или текст обращения куда-либо? Для этой цели есть специальный элемент - <code>textarea</code>:</p>
      
<pre><code><span class="tag"><<span>label</span> <span class="attr-name">for=</span><span class="attr-value">"details"</span>></span>Укажите подробности<span class="tag"><<span>/label</span>></span>
<span class="tag"><<span>textarea</span> <span class="attr-name">id=</span><span class="attr-value">"details"</span> <span class="attr-name">name=</span><span class="attr-value">"details"</span> <span class="attr-name">rows=</span><span class="attr-value">"8"</span> <span class="attr-name">cols=</span><span class="attr-value">"30"</span>></span>Текст обращения<span class="tag"><<span>/textarea</span>></span></code></pre>      

<p><label for="details">Укажите подробности:</label>
<textarea id="details" name="details" cols="30" rows="8">Текст обращения</textarea></p>

<p>На странице появилось большое текстовое поле, в которое можно ввести многострочный текст. Размер поля можно задать заранее, указывая количество столбцов с помощью аттрибута <code>col</code> (в данном случае <code>30</code>) и количество строк с помощью аттрибута <code>rows</code> (в данном случае <code>8</code>). Но вы также можете изменить размер <code>textarea</code> просто потянув мышкой за правый нижний угол элемента!</p>
<p>У <code>textarea</code> нет аттрибута <code>value</code>. На сервер отправится текст, который вы ввели между открывающим и закрывающим тэгами элемента (в данном случае "Текст обращения"). Аттрибут <code>name</code> по прежнему необходим.</p>
`,
      goal: `Создайте в форме поле для многострочного текста.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <div class="input-group checkbox-group">
      <div class="input-group">
        <input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
      </div>
      <div class="input-group">
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
      </div>
      <div class="input-group">
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> 
      </div>
    </div>
    <span>Параметр подбора</span>
    <div class="input-group radio-group">
      <div class="input-group">
        <input type="radio" name="preference" id="popularity" value="popularity">
        <label for="popularity">Популярность</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="reviews" value="reviews" checked>
        <label for="reviews">Отзывы</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="distance" value="distance">
        <label for="distance">Расстояние</label>
      </div>
    </div>
    <!--Добавляйте элементы ниже этой линии-->

  </fieldset>
</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

fieldset {
  border: 1px dotted yellow;
  border-radius: 30px;
}

legend {
  font-weight: bold;
}

label {
  margin-right: 7px;
}

span {
  width: 100%;
  display: block;
  font-weight: bold;
}

textarea {
  width: 80%
}

.checkbox-group label,
.radio-group label {
  margin-right: 20px
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте поле для многострочного текста, укажите <ul><li>идентификатор <code>message</code></li><li>имя <code>message</code></li><li><code>10</code> колонок</li><li><code>10</code> рядов</li></ul>`,
          test: (iframe: HTMLIFrameElement) => {
            const textarea = iframe.contentDocument.body.querySelector("textarea");
            return (
              textarea &&
              textarea.parentElement &&
              textarea.parentElement.tagName === "FIELDSET" &&
              textarea.id === "message" &&
              textarea.name === "message" &&
              textarea.cols === 10 &&
              textarea.rows === 10
            );
          },
          failMsg: "Убедитесь, что вы создали textarea с правильными значениями аттрибутов",
        },
        {
          id: 2,
          label: `<b>Перед</b> полем для многострочного текста создайте <code>label</code> с текстом "Дополнительная информация:", свяжите поле с подписью.`,
          test: (iframe: HTMLIFrameElement) => {
            const textarea = iframe.contentDocument.body.querySelector("textarea");
            if (!textarea) {
              return false;
            }
            const label = textarea.previousElementSibling as HTMLLabelElement;
            return label && label.textContent === "Дополнительная информация:" && label.htmlFor === textarea.id;
          },
          failMsg: "Убедитесь, что вы создали label перед полем с правильным текстовым содержанием и аттрибутом for",
        },
        {
          id: 3,
          label: `Полю для многострочного текста задайте исходный текст на свое усмотрение`,
          test: (iframe: HTMLIFrameElement) => {
            const textarea = iframe.contentDocument.body.querySelector("textarea");
            return textarea && textarea.textLength > 0;
          },
          failMsg: "Убедитесь, что поле для текста не пустое",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <div class="input-group checkbox-group">
      <div class="input-group">
        <input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
      </div>
      <div class="input-group">
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
      </div>
      <div class="input-group">
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> 
      </div>
    </div>
    <span>Параметр подбора</span>
    <div class="input-group radio-group">
      <div class="input-group">
        <input type="radio" name="preference" id="popularity" value="popularity">
        <label for="popularity">Популярность</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="reviews" value="reviews" checked>
        <label for="reviews">Отзывы</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="distance" value="distance">
        <label for="distance">Расстояние</label>
      </div>
    </div>
    <!--Добавляйте элементы ниже этой линии-->
    <label for="message">Дополнительная информация:</label>
    <textarea id="message" name="message" cols="10" rows="10">Пожеланий нет</textarea>
  </fieldset>
</form>`,
    },

    {
      id: 10,
      header: "Отправка формы - button[type='submit']",
      url: "html-submit",
      theory: `<p>В нашей форме мы собрали уже много самой разнообразной информации и теперь всего один клик отделяет нас от отправки формы на сервер. Так, стоп, но куда кликать? Давайте используем специальное поле для отправки данных с типом <code>submit</code>:</p>
      
<pre><code><span class="tag"><<span>input</span> <span class="attr-name">type=</span><span class="attr-value">"submit"</span> <span class="attr-name">value=</span><span class="attr-value">"submit"</span>></span></code></pre>      

<p><input type="submit" value="submit"></p>

<p>На странице появилась вот такая кнопка, при клике на которую данные формы отправятся на сервер. В данном случае аттрибут <code>value</code> имеет несколько иное значение - это просто текст, который отобразится на кнопке.</p>
<p>Есть еще один элемент, который служит той же цели и который чаще используется в реальных проектах - это, собственно, кнопка <code>button</code>! Вот пример разметки с использованием кнопки:</p>

<pre><code><span class="tag"><<span>button</span> <span class="attr-name">type=</span><span class="attr-value">"submit"</span>></span>Отправить<span class="tag"><<span>/button</span>></span></code></pre>      

<p>При использовании элемента <code>button</code> в качестве аттрибута мы указываем только тип, а текст разместим между открывающим и закрывающим тэгами.</p>
<p>Давайте потренируемся отправлять данные формы с помощью <code>button</code>, так как этот способ более широко применяется в реальных проектах.</p>
`,
      goal: `Создайте в форме кнопку отправки данных.`,
      initValues: {
        html: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <div class="input-group checkbox-group">
      <div class="input-group">
        <input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
      </div>
      <div class="input-group">
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
      </div>
      <div class="input-group">
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> 
      </div>
    </div>
    <span>Параметр подбора</span>
    <div class="input-group radio-group">
      <div class="input-group">
        <input type="radio" name="preference" id="popularity" value="popularity">
        <label for="popularity">Популярность</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="reviews" value="reviews" checked>
        <label for="reviews">Отзывы</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="distance" value="distance">
        <label for="distance">Расстояние</label>
      </div>
    </div>
    <div class="input-group">
      <label for="message">Дополнительная информация:</label>
      <textarea id="message" name="message" cols="10" rows="10">Пожеланий нет</textarea>
    </div>
    <!--Добавляйте элементы ниже этой линии-->

  </fieldset>
</form>
`,
        css: `
form {
  background-color: #d7d6d6;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}

button {
  border: none;
  color: #fff;
  height: 30px;
  background-color: #1980b8;
}

fieldset {
  border: 1px dotted yellow;
  border-radius: 30px;
}

legend {
  font-weight: bold;
}

label {
  margin-right: 7px;
}

span {
  width: 100%;
  display: block;
  font-weight: bold;
}

textarea {
  width: 80%
}

.checkbox-group label,
.radio-group label {
  margin-right: 20px
}

.input-group {
  margin-bottom: 15px
}
`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: `Создайте кнопку отправки данных формы.`,
          test: (iframe: HTMLIFrameElement) => {
            const submitButton = iframe.contentDocument.body.querySelector("button[type=submit]");
            return submitButton && submitButton.parentElement && submitButton.parentElement.tagName === "FIELDSET";
          },
          failMsg: "Убедитесь, что вы создали кнопку с правильным типом",
        },
        {
          id: 2,
          label: `Задайте кнопке текст "Показать!".`,
          test: (iframe: HTMLIFrameElement) => {
            const submitButton = iframe.contentDocument.body.querySelector("button[type=submit]");
            return submitButton && submitButton.textContent === "Показать!";
          },
          failMsg: "Убедитесь, что кнопка содержит правильный текст",
        },
      ],
      solution: `<h2>Забронируйте квест в компании Quest and Adventure!</h2>
<p>Заполните форму ниже:</p>

<form action="http://webgrove/server" method="POST">
  <fieldset>
    <legend>Персональная информация</legend>
    <div class="input-group">
      <label for="username">Имя заказчика</label>
      <input id="username" type="text" name="username" placeholder="Иван Сидоров">
    </div>
    <div class="input-group">
      <label for="num-guests">Количество участников</label>
      <input type="number" id="num-guests" name="num-guests" value="4" step="1">
    </div>
    <div class="input-group">
      <label for="tel">Телефон:</label>
      <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
    </div>
    <div class="input-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="example@gmail.com">
    </div>
  </fieldset>
  <fieldset>
    <legend>Подбор квеста</legend>
    <div class="input-group">
      <label for="scary">Хотите страшного?</label>
      <select id="scary" name="scary">
        <option value="scary-none">Не страшно</option>
        <option value="scary-low">Немного страшно</option>
        <option value="scary-moderate">Страшновато</option>
        <option value="scary-high">Очень страшно</option>
      </select>
    </div>
    <span>Тип игры</span>
    <div class="input-group checkbox-group">
      <div class="input-group">
        <input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
      </div>
      <div class="input-group">
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
      </div>
      <div class="input-group">
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> 
      </div>
    </div>
    <span>Параметр подбора</span>
    <div class="input-group radio-group">
      <div class="input-group">
        <input type="radio" name="preference" id="popularity" value="popularity">
        <label for="popularity">Популярность</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="reviews" value="reviews" checked>
        <label for="reviews">Отзывы</label>
      </div>
      <div class="input-group">
        <input type="radio" name="preference" id="distance" value="distance">
        <label for="distance">Расстояние</label>
      </div>
    </div>
    <div class="input-group">
      <label for="message">Дополнительная информация:</label>
      <textarea id="message" name="message" cols="10" rows="10">Пожеланий нет</textarea>
    </div>
    <button type="submit">Показать!</button>
  </fieldset>
</form>`,
    },
  ],
};
