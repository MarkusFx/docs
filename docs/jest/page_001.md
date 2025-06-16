---
outline: [2]
---

# Jest

## Что такое Jest?

**Jest** - это фреймворк для тестирования **JavaScript**.

## Виды тестирования

- **Unit-тесты** - тестирование функции, класса, модуля, компонента;
- **Интеграционные** - комбинация **unit-тестов**;
- **End to End** - работа приложения в целом (_имитация действий пользователя_);

## Установка Jest и первый тест

Выполним команды:

```sh
mkdir jest-proj
cd jest-proj
npm init -y
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev @types/jest
```

- **`-y`** - автоматическое создание файла **`package.json`**;
- **`--save-dev`** - установка пакета как dev-зависимость (_зависимость для разработки - **`devDependencies`** файла **`package.json`**_);

Изменим файл **`babel.config.js`**:

```js:line-numbers
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

Изменим файл **`jest.config.js`**:

```js:line-numbers
/** @type {import('jest').Config} */
const config = {
    verbose: true,
}

module.exports = config
```

Изменим файл **`package.json`**:

```json:line-numbers
{
    "name": "jest-proj",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
        "test": "jest" // [!code ++]
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "devDependencies": {
        "jest": "^29.7.0"
    }
}
```

Изменим файл **`math.js`**:

```js:line-numbers
export function sum(a, b) {
    return a + b
}
```

Изменим файл **`math.test.js`**:

```js:line-numbers
import { sum } from './math.js'

test('Складывает 1 + 2, получает 3', () => {
    expect(sum(1, 2)).toBe(3)
})
```

Выполним команду:

```sh
npm test
```

## expect и матчеры

Матчеры:

- **`toBe(value)`** - строгое сравнение (===);
- **`toThrow()`** - проверка, что функция выбрасывает ошибку;
- **`toEqual(obj)`** - глубокое сравнение объектов и массивов;
- **`toBeNull()`** - проверка на null;
- **`toBeDefined()`** - проверка, что значение определено;
- **`toBeUndefined()`** - проверка, что значение не определено;
- **`toBeTruthy()`** - проверка на true;
- **`toBeFalsy()`** - проверка на false;
- **`toContain()`** - проверка значения в массиве и строке;
- **`toHaveLenght()`** - проверка длинны массива;

Например, изменим файл **`math.js`**:

```js:line-numbers
export function divide(a, b) {
    if (b === 0) throw new Error('Деление на ноль')
    return a / b
}
```

Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { divide } from './math.js'

test('Делит 6 на 2, получает 3', () => {
    expect(divide(6, 2)).toBe(3)
})

test('Делит 10 на 2, возвращает число', () => {
    expect(typeof divide(10, 2)).toBe('number')
})

test('Делит на 0, выбрасывает ошибку', () => {
    expect(() => divide(5, 0)).toThrow('Деление на ноль')
})

test('Сравнение объектов', () => {
    expect({ name: 'Alex' }).toEqual({ name: 'Alex' })
})

test('Сравнение массивов', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3])
})

test('Проверка на null', () => {
    expect(null).toBeNull()
})

test('Проверка, что значение определено', () => {
    expect(123).toBeDefined()
})

test('Проверка, что значение не определено', () => {
    expect(undefined).toBeUndefined()
})

test('Проверка на true', () => {
    expect(123).toBeTruthy()
})

test('Проверка на false', () => {
    expect('').toBeFalsy()
})

test('Проверка элемента строки', () => {
    expect('abc').toContain('b')
})

test('Проверка элемента массива', () => {
    expect(['a', 'b', 'c']).toContain('b')
})

test('Проверка длинны массива', () => {
    expect([1, 2, 3]).toHaveLength(3)
})
```

Также можно использовать **`not`**. Например:

```js:line-numbers
test('Проверка на отсутствие элемента строки', () => {
    expect('abc').not.toContain('f')
})
```

Выполним команду:

```sh
npm test
```

## Группировка тестов

Например, изменим файл **`math.js`**:

```js:line-numbers
export function sum(a, b) {
    return a + b
}
```

Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { sum } from './math.js'

describe('Группа тестов', () => {

    test('Складывает 1 + 2, получает 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('Складывает 2 + 3, получает 5', () => {
        expect(sum(2, 3)).toBe(5)
    })

})
```

Можно помещать **`describe`** внутрь **`describe`**. Например:

```js:line-numbers
describe('Группа тестов', () => {

    describe('Группа 1', () => {
        ... // тесты
    })

    describe('Группа 2', () => {
        ... // тесты
    })

    describe('Группа 3', () => {
        ... // тесты
    })

})
```

Выполним команду:

```sh
npm test
```

## Параметризованные тесты

- **`skip`** - пропуск теста;

Например, изменим файл **`math.test.js`**:

```js:line-numbers
test('Проверка длинны массива (3)', () => {
    expect([1, 2, 3]).toHaveLength(3)
})

// тест будет пропущен
test.skip('Проверка длинны массива (4)', () => {
    expect([1, 2, 3, 4]).toHaveLength(4)
})

test('Проверка длинны массива (5)', () => {
    expect([1, 2, 3, 4, 5]).toHaveLength(5)
})
```

- **`only`** - протестировать только этот тест;

Например, изменим файл **`math.test.js`**:

```js:line-numbers
test('Проверка длинны массива (3)', () => {
    expect([1, 2, 3]).toHaveLength(3)
})

// будет протестирован только этот тест
test.only('Проверка длинны массива (4)', () => {
    expect([1, 2, 3, 4]).toHaveLength(4)
})

test('Проверка длинны массива (5)', () => {
    expect([1, 2, 3, 4, 5]).toHaveLength(5)
})
```

- **`each`** - набор тест-кейсов;

Например, изменим файл **`math.test.js`**:

```js:line-numbers
test.each([
    { input: [1, 2, 3], expected: 3 },
    { input: [1, 2, 3, 4], expected: 4 },
    { input: [1, 2, 3, 4, 5], expected: 5 },
])('Проверка длинны массива $input, ожидаем $expected', ({ input, expected }) => {
    expect(input).toHaveLength(expected)
})
```

- **`todo`** - то, что мы планируем делать;

Например, изменим файл **`math.test.js`**:

```js:line-numbers
test.todo('Написать тест для чего-то...')
```

- **`concurent`** - запуск тестов в параллельном (_конкурентном_) режиме;

## Алиасы

При тестировании можно использовать как **`test()`**, так и **`it()`**.

Например:

```js:line-numbers
test('Проверка длинны массива', () => {
    expect([1, 2, 3]).toHaveLength(3)
})

it('Проверка длинны массива', () => {
    expect([1, 2, 3]).toHaveLength(3)
})
```

**`test()`** и **`it()`** - полностью взаимозаменяемые функции.

Существует **алиас** для **`it.skip()`** - **`xit()`**. Например:

```js:line-numbers
it.skip('Проверка длинны массива (4)', () => {
    expect([1, 2, 3, 4]).toHaveLength(4)
})

xit('Проверка длинны массива (5)', () => {
    expect([1, 2, 3, 4, 5]).toHaveLength(5)
})
```

Существует **алиас** для **`it.only()`** - **`fit()`**. Например:

```js:line-numbers
it('Проверка длинны массива (4)', () => {
    expect([1, 2, 3, 4]).toHaveLength(4)
})

fit('Проверка длинны массива (5)', () => {
    expect([1, 2, 3, 4, 5]).toHaveLength(5)
})
```

## Хуки

**Хук (hook) в Jest** - это специальная функция, которая выполняется до или после тестов, или групп тестов. Они используются для подготовки и очистки окружения, чтобы каждый тест выполнялся в контролируемых условиях.

- **`beforeEach`** - вызывается перед каждым тестом;
- **`afterEach`** - вызывается после каждого теста;
- **`beforeAll`** - вызывается перед всеми тестами;
- **`afterAll`** - вызывается после всех тестов;

Например, изменим файл **`math.test.js`**:

```js:line-numbers
beforeAll(() => {
    console.log('Запуск до всех тестов')
})

beforeEach(() => {
    console.log('Запуск перед каждым тестом')
})

afterEach(() => {
    console.log('Запуск после каждого теста')
})

afterAll(() => {
    console.log('Запуск всех тестов')
})

test('Проверка длинны массива', () => {
    expect([1, 2, 3]).toHaveLength(3)
})

test('Проверка длинны массива', () => {
    expect([1, 2, 3, 4]).toHaveLength(4)
})
```

Если внутри **`describe`** будет вложен ещё один **`describe`**, то эти **хуки** будут работать и для него.

Если эти **хуки** будут вынесены за пределы **`describe`**, то они будут работать вообще для всего.

## Моки (mocks)

**Мок (mock)** - это подменная функция, которая заменяет настоящую. Её используют, чтобы проверить, как и сколько раз её вызвали, без выполнения реальной логики.

Например, изменим файл **`math.js`**:

```js:line-numbers
// Фильтрует массив с помощью callback-функции
export function filterArray(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i])) newArray.push(array[i])
    }
    return newArray
}
```

Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { filterArray } from './math'

test('Проверка, что функция cb не вызывалась', () => {
    // это мок
    const cb = jest.fn() // создание фейковой функции

    filterArray([], cb)

    expect(cb).not.toHaveBeenCalled()
})

test('Проверка, что функция вызывалась 3 раза', () => {
    const cb = jest.fn()
    const arr = [1, 2, 3]

    filterArray(arr, cb)

    expect(cb).toHaveBeenCalledTimes(arr.length)
})
```

Создание тестовой функции можно вынести на уровень выше. Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { filterArray } from './math'

const cb = jest.fn()

test('Проверка, что функция cb не вызывалась', () => {
    filterArray([], cb)
    expect(cb).not.toHaveBeenCalled()
})

test('Проверка, что функция вызывалась 3 раза', () => {
    const arr = [1, 2, 3]
    filterArray(arr, cb)
    expect(cb).toHaveBeenCalledTimes(arr.length)
})
```

Но если мы поменяем первый и второй тест местами, то второй тест не пройдёт. Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { filterArray } from './math'

const cb = jest.fn()

test('Проверка, что функция вызывалась 3 раза', () => {
    const arr = [1, 2, 3]
    filterArray(arr, cb)
    expect(cb).toHaveBeenCalledTimes(arr.length)
})

// этот тест не пройдёт
test('Проверка, что функция cb не вызывалась', () => {
    filterArray([], cb)
    expect(cb).not.toHaveBeenCalled()
})
```

Дело в том, что мы сталкиваемся с "побочным эффектом". В первом тесте наша "фейковая функция" уже была вызвана 3 раза. Т.е. необходимо обнулить мок после каждого теста. Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { filterArray } from './math'

const cb = jest.fn()

afterEach(() => {           // [!code ++]
    jest.clearAllMocks()    // [!code ++]
})                          // [!code ++]

test('Проверка, что функция вызывалась 3 раза', () => {
    const arr = [1, 2, 3]
    filterArray(arr, cb)
    expect(cb).toHaveBeenCalledTimes(arr.length)
})

test('Проверка, что функция cb не вызывалась', () => {
    filterArray([], cb)
    expect(cb).not.toHaveBeenCalled()
})
```

Ещё один пример использования **моков** и **фикстур**.

**Фикстуры (fixtures)** - это предопределённые данные или состояния, которые используются в тестах для создания стабильных и воспроизводимых условий.

Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { filterArray } from './math'

const cb = jest.fn()

afterEach(() => {
    jest.clearAllMocks()
})

const noPrice = [                                           // [!code ++]
    { id: 1, name: 'TV', price: 1000 },                     // [!code ++]
    { id: 2, name: 'PS4', price: 0 },                       // [!code ++]
    { id: 3, name: 'Monitor', price: 800 },                 // [!code ++]
]                                                           // [!code ++]

const filteredWithPrice = [                                 // [!code ++]
    { id: 1, name: 'TV', price: 1000 },                     // [!code ++]
    { id: 3, name: 'Monitor', price: 800 },                 // [!code ++]
]                                                           // [!code ++]

test('Проверка, что функция вызывалась 3 раза', () => {
    const arr = [1, 2, 3]
    filterArray(arr, cb)
    expect(cb).toHaveBeenCalledTimes(arr.length)
})

test('Проверка, что функция cb не вызывалась', () => {
    filterArray([], cb)
    expect(cb).not.toHaveBeenCalled()
})

test('Проверка, что возвращается массив только с ценами', () => {       // [!code ++]
    const hasPrice = (order) => order.price > 0                         // [!code ++]
                                                                        // [!code ++]
    const result = filterArray(noPrice, hasPrice)                       // [!code ++]
                                                                        // [!code ++]
    expect(result).toEqual(filteredWithPrice)                           // [!code ++]
})                                                                      // [!code ++]
```

## Шпионы (spies)

### Введение

**Шпион (spy)** - это способ отслеживать вызовы реальной функции. С его помощью можно узнать: вызывалась ли функция, с какими аргументами и сколько раз.

Например, изменим файл **`math.js`**:

```js:line-numbers
export function filterArray(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i += 1) {
        console.log(array[i])                               // [!code ++]
        if (callback(array[i])) newArray.push(array[i])
    }
    return newArray
}
```

Например, изменим файл **`math.test.js`**:

```js:line-numbers
import { filterArray } from './math'

const cb = jest.fn()

// это шпион                                                        // [!code ++]
const logSpy = jest.spyOn(console, 'log') // отслеживание консоли   // [!code ++]

afterEach(() => {
    jest.clearAllMocks()
})

const noPrice = [
    { id: 1, name: 'TV', price: 1000 },
    { id: 2, name: 'PS4', price: 0 },
    { id: 3, name: 'Monitor', price: 800 },
]

const filteredWithPrice = [
    { id: 1, name: 'TV', price: 1000 },
    { id: 3, name: 'Monitor', price: 800 },
]

test('Проверка, что функция вызывалась 3 раза', () => {
    const arr = [1, 2, 3]
    filterArray(arr, cb)
    expect(cb).toHaveBeenCalledTimes(arr.length)
    expect(logSpy).toHaveBeenCalledTimes(arr.length)                // [!code ++]
})

test('Проверка, что функция cb и logSpy не вызывались', () => {     // [!code ++]
    filterArray([], cb)
    expect(cb).not.toHaveBeenCalled()
    expect(logSpy).not.toHaveBeenCalled()                           // [!code ++]
})

test('Проверка, что функция cb не вызывалась', () => {
    const hasPrice = (order) => order.price > 0
    const result = filterArray(noPrice, hasPrice)
    expect(result).toEqual(filteredWithPrice)
    expect(logSpy).toHaveBeenCalledTimes(noPrice.length)            // [!code ++]
})
```

### Пример с использованием `axios`

- **`axios`** - это **JavaScript**-библиотека для выполнения HTTP-запросов из браузера или **Node.js**. Она позволяет взаимодействовать с REST API и другими веб-сервисами.

Установим библиотеку. Выполним команду:

```sh:line-numbers
npm i axios
```

Например, изменим файл **`main.js`**:

```js:line-numbers
import axios from 'axios'

export async function getTodos() {
    try {
        const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        )
        return data
    } catch (err) {
        console.error(err)
        return []
    }
}
```

Например, изменим файл **`main.test.js`**:

```js:line-numbers
import axios from 'axios'

import { getTodos } from './main'

// шпионы для подмены поведения
const axiosSpy = jest.spyOn(axios, 'get')
const errorSpy = jest.spyOn(console, 'error')

describe('getTodos', () => {
    // после каждого теста сбрасываем все моки и шпионы
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Должен вернуть пустой массив в случае ошибки', async () => {
        const errMessage = 'Network error'

        // указываем, чтобы при следующем вызове вернулся промис с ошибкой
        axiosSpy.mockRejectedValueOnce(errMessage)

        const result = await getTodos()

        expect(errorSpy).toHaveBeenCalledWith(errMessage)
        expect(result).toEqual([])
    })

    test('Должен вернуть 200 todos', async () => {
        const result = await getTodos()

        expect(axiosSpy).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/todos'
        )

        expect(result).toHaveLength(200)
    })
})
```
