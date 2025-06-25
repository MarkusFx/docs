---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_025 from '../.././.vitepress/examples/html/demo_025/index.html?raw';
import css_025 from '../.././.vitepress/examples/html/demo_025/style.css?raw';
import js_025 from '../.././.vitepress/examples/html/demo_025/script.js?raw';
</script>

# Создание формы

Форма используется для ввода и отправки данных от пользователя.

Например:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Моя первая страница</title>
    </head>
    <body>
        <form action="/submit" method="post">
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name" required />

            <br />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <br />

            <button type="submit">Отправить</button>
        </form>
    </body>
</html>
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
