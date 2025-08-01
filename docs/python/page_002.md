# Типы данных

## Числа

- **`int`** - целое число;
- **`float`** - дробное число;
- **`complex`** - комплексное число;

Например:

```py [main.py] :line-numbers
age = 25            # int
height = 1.75       # float
z = 3 + 4j          # complex
```

## Байты

- **`bytes`** - неизменяемая последовательность байтов;
- **`bytearray`** - изменяемая последовательность байтов;

Например:

```py [main.py] :line-numbers
data = b"Hello"                     # bytes
arr = bytearray(b"Hello")           # bytearray
```

## Строки

- `str` - строка;

Например:

```py [main.py] :line-numbers
name = "Анна"       # str
```

## Логический тип

- **`bool`** - логический тип;

Например:

```py [main.py] :line-numbers
is_student = False          # bool
```

## Структуры данных

- **`list`** - список;
- **`tuple`** - кортеж;
- **`set`** - множество;
- **`dict`** - словарь;

Например:

```py [main.py] :line-numbers
grades = [5, 4, 5]                          # list
position = (100, 200)                       # tuple
unique_tags = {"python", "code"}            # set
info = {"city": "Москва", "zip": 101000}    # dict
```

## Специальные типы

- **`None`** - ничего;

Например:

```py [main.py] :line-numbers
nothing = None      # NoneType
```
