---
outline: [2, 3]
---

# Функции

## Определение функции

```1C:line-numbers
Функция ИмяФункции()
    Количество = 20;
    Возврат Количество;
КонецФункции

ВозвратИзФункции = ИмяФункции();
Сообщить(ВозвратИзФункции); // 20
```

::: warning Важно
Точка с запятой в конце ключевого слова **`КонецФункции`** не ставится.
:::

## Параметры функций

```1C:line-numbers
Функция Рассчитать(ПереданноеЧислоА, ПереданноеЧислоБ)
    Возврат ПереданноеЧислоА * ПереданноеЧислоБ;
КонецФункции

Результат = Рассчитать(20, 10);

Сообщить(Результат); // 200
```

## Параметры функции по умолчанию

```1C:line-numbers
Функция РассчитатьПлощадьКруга(Радиус, ЧислоПи = 3.14)
    Возврат ЧислоПи * Радиус;
КонецФункции

Сообщить(РассчитатьПлощадьКруга(20)); // 62.80
Сообщить(РассчитатьПлощадьКруга(20, 3.1415)); // 62.8300
```

## Передача параметров по ссылке

```1C:line-numbers
Функция РассчитатьСтоимость(Цена, Количество)
    Цена = 10;
    Количество = 30;
    Возврат Цена * Количество;
КонецФункции

ЦенаКильки = 50;
КоличествоКильки = 200;

Сообщить(ЦенаКильки);           // 50
Сообщить(КоличествоКильки);     // 200

Стоимость = РассчитатьСтоимость(ЦенаКильки * КоличествоКильки);

Сообщить(ЦенаКильки);           // 10
Сообщить(КоличествоКильки);     // 30
Сообщить(Стоимость);            // 300
```

## Передача параметров по значению

```1C:line-numbers
Функция РассчитатьСтоимость(Знач Цена, Знач Количество)
    Цена = 10;
    Количество = 30;
    Возврат Цена * Количество;
КонецФункции

ЦенаКильки = 50;
КоличествоКильки = 200;

Сообщить(ЦенаКильки);           // 50
Сообщить(КоличествоКильки);     // 200

Стоимость = РассчитатьСтоимость(ЦенаКильки * КоличествоКильки);

Сообщить(ЦенаКильки);           // 50
Сообщить(КоличествоКильки);     // 200
Сообщить(Стоимость);            // 300
```
