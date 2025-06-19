---
outline: [2, 3]
---

<script setup>
    import CodePreview from '.././.vitepress/components/CodePreview.vue';
    
    import html_025 from '.././.vitepress/examples/html/demo_025/index.html?raw';
    import css_025 from '.././.vitepress/examples/html/demo_025/style.css?raw';
    import js_025 from '.././.vitepress/examples/html/demo_025/script.js?raw';
    
    import html_026 from '.././.vitepress/examples/html/demo_026/index.html?raw';
    import css_026 from '.././.vitepress/examples/html/demo_026/style.css?raw';
    import js_026 from '.././.vitepress/examples/html/demo_026/script.js?raw';
    
    import html_027 from '.././.vitepress/examples/html/demo_027/index.html?raw';
    import css_027 from '.././.vitepress/examples/html/demo_027/style.css?raw';
    import js_027 from '.././.vitepress/examples/html/demo_027/script.js?raw';
    
    import html_028 from '.././.vitepress/examples/html/demo_028/index.html?raw';
    import css_028 from '.././.vitepress/examples/html/demo_028/style.css?raw';
    import js_028 from '.././.vitepress/examples/html/demo_028/script.js?raw';
    
    import html_029 from '.././.vitepress/examples/html/demo_029/index.html?raw';
    import css_029 from '.././.vitepress/examples/html/demo_029/style.css?raw';
    import js_029 from '.././.vitepress/examples/html/demo_029/script.js?raw';
    
    import html_030 from '.././.vitepress/examples/html/demo_030/index.html?raw';
    import css_030 from '.././.vitepress/examples/html/demo_030/style.css?raw';
    import js_030 from '.././.vitepress/examples/html/demo_030/script.js?raw';
    
    import html_031 from '.././.vitepress/examples/html/demo_031/index.html?raw';
    import css_031 from '.././.vitepress/examples/html/demo_031/style.css?raw';
    import js_031 from '.././.vitepress/examples/html/demo_031/script.js?raw';
    
    import html_032 from '.././.vitepress/examples/html/demo_032/index.html?raw';
    import css_032 from '.././.vitepress/examples/html/demo_032/style.css?raw';
    import js_032 from '.././.vitepress/examples/html/demo_032/script.js?raw';
    
    import html_033 from '.././.vitepress/examples/html/demo_033/index.html?raw';
    import css_033 from '.././.vitepress/examples/html/demo_033/style.css?raw';
    import js_033 from '.././.vitepress/examples/html/demo_033/script.js?raw';
</script>

# Формы

## Создание формы

Форма используется для ввода и отправки данных от пользователя.

Например:

```html:line-numbers
<form action="/submit" method="post">

    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" required />

    <br />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <br />

    <button type="submit">Отправить</button>

</form>
```

- **`<form> ... </form>`** - добавление формы;
    - **`action`** - адрес, куда отправлять данные формы;
    - **`method`** - способ отправки;
        - **`get`** - передача данных через строку запроса;
        - **`post`** - передача данных через специальные заголовки;
    - **`enctype`** - тип передаваемых данных;
        - **`application/x-www-form-urlencoded`** - кодировка отправляемых данных по умолчанию;
        - **`multipart/form-data`** - кодировка применяемая при отправке файлов;
        - **`text/plain`** - кодировка применяемая при отправке простой текстовой информации;
    - **`autocomplete`** - автодополнение формы (_**`autocomplete="on"`, `autocomplete="off"`**_);
- **`<label> ... </label>`** - подпись для поля ввода;
    - **`for`** - указывает к какому полю относится подпись (_совпадает с **`id`** тега **`<input>`**_);
- **`<input/>`** - поле ввода;
    - **`type`** - тип вводимых данных (_**`text`** - текст_);
    - **`id`** - уникальный идентификатор (_используется **`<label>`**_);
    - **`name`** - имя поля (_под этим именем оно будет отправлено на сервер_);
    - **`required`** - поле обязательно для заполнения;
- **`<button> ... </button>`** - кнопка;
    - **`type="submit"`** - отправка формы при нажатии на кнопку;

<CodePreview :html="html_025" :css="css_025" :js="js_025" height="150px" />

## Элементы форм

### input

- **`<input>`** - поле ввода;
- **`type`** - тип вводимых данных;
    - **`text`** - текстовое поле;
    - **`email`** - поле для ввода email;
    - **`password`** - текстовое поле, но отображаются "звёздочки";
    - **`checkbox`** - флажок;
    - **`radio`** - радиокнопка (_переключатель_);
    - **`file`** - поле для выбора отправляемого файла;
        - **`multiple`** - выбор нескольких файлов;
        - **`accept`** - типы файлов доступных для выбора;
    - **`submit`** - кнопка отправки формы;
    - **`number`** - поле ввода числа;
        - **`min`** - минимальное значение;
        - **`max`** - максимальное значение;
        - **`step`** - шаг увеличения/уменьшения значения;
    - **`date`** - поле ввода даты;
    - **`time`** - поле ввода времени;
    - **`image`** - кнопка в виде изображения;
    - **`range`** - ползунок;
        - **`min`** - минимальное значение;
        - **`max`** - максимальное значение;
        - **`step`** - шаг увеличения/уменьшения значения;
    - **`color`** - поле выбора цвета;
- **`name`** - имя поля (_под этим именем оно будет отправлено на сервер_);
- **`value`** - значение поля;
- **`maxlength`** - максимальное кол-во символов в поле;
- **`placeholder`** - подсказка внутри поля;
- **`readonly`** - поле доступно только для чтения;
- **`required`** - поле обязательно для заполнения;
- **`size`** - ширина поля;
- **`disabled`** - блокировка поля (_нельзя выбрать, ввести, отправить данные_);

Например:

```html:line-numbers
<p>text: <input type="text" value="test" /></p>
<p>email: <input type="email" value="mail@mail.ru" /></p>
<p>password: <input type="password" value="test" /></p>
<p>file: <input type="file" /></p>
<p>submit: <input type="submit" /></p>
<p>number: <input type="number" value="300.33" /></p>
<p>date: <input type="date" /></p>
<p>checkbox_1: <input type="checkbox" checked /></p>
<p>checkbox_2: <input type="checkbox" /></p>
<p>radio_1: <input type="radio" name="myRadio" checked /></p>
<p>radio_2: <input type="radio" name="myRadio" /></p>
```

<CodePreview :html="html_026" :css="css_026" :js="js_026" height="480px" />

### textarea

- **`<textarea>`** - многострочное текстовое поле;
    - **`rows`** - кол-во строк;
    - **`cols`** - кол-во столбцов;

Например:

```html:line-numbers
<textarea name="message" rows="6" cols="50">Текст...</textarea>
```

<CodePreview :html="html_027" :css="css_027" :js="js_027" height="150px" />

### select

- **`<select>`** - выпадающий список;
    - **`multiple`** - список с множественным выбором;
- **`<option>`** - элементы списка;
    - **`value`** - значение;
    - **`selected`** - выбранный элемент по умолчанию;
    - **`disabled`** - запрет выбора определенного значения;
- **`<optgroup>`** - группировка;

Например:

```html:line-numbers
<p>
    <select>
        <option value="cat">Кот</option>
        <option value="dog" selected>Собака</option>
        <option value="fish" disabled>Рыба</option>
    </select>
</p>

<p>
    <label for="totem">Выбери тотемное животное (удерживаем Ctrl/Cmd): </label
    ><br />
    <select id="totem" multiple>
        <option value="cat">Кот</option>
        <option value="dog">Собака</option>
        <option value="fish">Рыба</option>
    </select>
</p>

<p>
    <select>
        <optgroup label="Смартфоны">
            <option value="iphone">iPhone</option>
            <option value="samsung">Samsung</option>
            <option value="LG">LG</option>
        </optgroup>
        <optgroup label="Игровые приставки">
            <option value="ps">PS</option>
            <option value="xbox">XBOX</option>
        </optgroup>
    </select>
</p>
```

<CodePreview :html="html_028" :css="css_028" :js="js_028" height="380px" />

### label

- **`<label>`** - подпись к полю;
    - **`for`** - указывает к какому полю относится подпись (_совпадает с **`id`** тега **`<input>`**_);

Например:

```html:line-numbers
<label for="name">Имя:</label>
<input type="text" id="name" name="name" />
```

Если в **`<input>`** добавить атрибут **`autofocus`**, то при нажатии на **`<label>`** будет происходить автофокус на полее ввода **`<input>`**.

<CodePreview :html="html_029" :css="css_029" :js="js_029" height="100px" />

### button

- **`<button>`** - кнопка;
    - **`type`** - тип кнопки;
        - **`submit`** - отправка формы;
        - **`reset`** - очистка (_сброс_) формы;
        - **`button`** - кнопка без действия;

Например:

```html:line-numbers
<button type="submit">Отправить</button>
<button type="reset">Сбросить</button>
<button type="button">Кнопка без действия</button>
```

<CodePreview :html="html_030" :css="css_030" :js="js_030" height="100px" />

### fieldset

- **`<fieldset>`** - группировка полей;
- **`<legend>`** - заголовок группы;

Например:

```html:line-numbers
<fieldset>
    <legend>Личные данные</legend>
    <p>Имя: <input type="text" name="firstname" /></p>
    <p>Фамилия: <input type="text" name="lastname" /></p>
</fieldset>
```

<CodePreview :html="html_031" :css="css_031" :js="js_031" height="200px" />

### datalist

- **`<input>`** - поле ввода;
    - **`list`** - указатель на подсказки;
- **`<datalist>`** - подсказки при вводе;

Например:

```html:line-numbers
<input list="browsers" name="browser" />
<datalist id="browsers">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Edge"></option>
</datalist>
```

<CodePreview :html="html_032" :css="css_032" :js="js_032" height="150px" />

### output

- **`<output>`** - вывод результата (_обычно с JavaScript_);

Например:

```html:line-numbers
<form oninput="result.value = Number(a.value) + Number(b.value)">
    <input type="number" id="a" value="49" />
    +
    <input type="number" id="b" value="51" />
    =
    <output name="result" for="a b">100</output>
</form>
```

<CodePreview :html="html_033" :css="css_033" :js="js_033" height="150px" />
