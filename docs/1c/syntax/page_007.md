---
outline: [2, 3]
---

# Условный оператор

## Определение условия

```1C:line-numbers
Цена = 200;
Количество = 10;

Если Количество <> 0 Тогда
    Сообщить(Цена * Количество);
КонецЕсли;
```

## Блок Иначе

```1C:line-numbers
Цена = 200;
Количество = 10;

Если Количество Тогда
    Сообщить(Цена * Количество);
Иначе
    Сообщить("Количество равно нулю!");
КонецЕсли;
```

## Блок ИначеEсли

```1C:line-numbers
Цена = 200;
Количество = 10;

Если Количество И Количество <= 5 Тогда
    Сообщить(Цена * Количество);
ИначеЕсли Количество > 5 Тогда
    Сообщить(Цена * Количество * 0.95);
Иначе
    Сообщить("Количество равно нулю!");
КонецЕсли;
```

## Краткая форма условного оператора

```1C:line-numbers
Цена = 200;
Количество = 10;

Сообщить(?(Количество, Цена * Количество, "Количество равно нулю!"));

// ?(<Условие>, <ВыражениеЕслиУсловиеИстина>, <ВыражениеЕслиУсловиеЛожь>)
```
