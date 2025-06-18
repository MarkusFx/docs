# Примеры

## Использованием `axios`

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

## Использование `uuid`

- **`uuid`** - это JavaScript-библиотека для генерации уникальных идентификаторов.

Установим библиотеку. Выполним команду:

```sh:line-numbers
npm i uuid
```

Например, изменим файл **`main.js`**:

```js:line-numbers
import { v4 } from 'uuid'

export function createTodo(title) {
    return {
        title,
        completed: false,
        id: v4(),
    }
}

export async function createTodoOnServer(title) {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
    , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createTodo(title)),
    })

    if (!response.ok) throw new Error('Ошибка создания todo')

    return response.json()
}
```

Например, изменим файл **`main.test.js`**:

```js:line-numbers
import { createTodo, createTodoOnServer } from './main'

const mockedV4 = jest.fn(() => 'abcd')

const mockTodo = {
    id: 1,
    title: 'Todo 1',
    completed: false,
}

jest.mock('uuid', () => ({
    v4: () => mockedV4(),
}))

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTodo),
    })
)

describe('createTodo', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Должен вернуть объект todo', () => {
        const title = 'Изучить Jest'

        const expectedResult = {
            title,
            completed: false,
            id: 'abcd',
        }

        const result = createTodo(title)

        expect(mockedV4).toHaveBeenCalledTimes(1)
        expect(result).toEqual(expectedResult)
    })

    test('Должен создать todo на сервере', async () => {
        const result = await createTodoOnServer('my todo')

        expect(fetch).toHaveBeenCalledTimes(1)
        expect(result).toEqual(mockTodo)
    })

    test('Должен выбросить сетевую ошибку', async () => {
        fetch.mockRejectedValueOnce('Network error')

        await expect(createTodoOnServer('my todo')).
            rejects.toMatch('Network error')
    })
})
```
