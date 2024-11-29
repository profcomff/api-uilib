# Схемы и клиент для взаимодействия с API Твой ФФ

Представляет интерфейс для совершения запросов к API по адресу <https://api.profcomff.com>.

Поддерживает типы данных TypeScript и подсветку синтаксиса.

[<img src="https://cdn.profcomff.com/easycode/easycode.svg" width="200"></img>](https://easycode.profcomff.com/templates/docker-node/workspace?mode=manual&param.Repository+URL=https://github.com/profcomff/api-uilib.git&param.Working+directory=api-uilib)


## Использование

Установите библиотеку

```shell
pnpm install @profcomff/api-uilib
```

Используйте для совершения запросов к <https://api.test.profcomff.com> и <https://api.profcomff.com>.

```ts
import { createClient, setupAuth } from "@profcomff/api-uilib";

// Setup client with base API path
// You can use environment `import.meta.env.VITE_API_URL` for example
const apiClient = createClient("https://api.test.profcomff.com");

// Setup token for requests to API
// It is optional, only for routes with authention
setupAuth("myApiTokenHere");

// Make request
const me_with_scopes = await apiClient.GET("/auth/me", {
  params: {
    query: {
      info: ["session_scopes"],
    },
  },
});
```


## Тестирование

_На основе <https://openapi-ts.dev/openapi-fetch/testing>._

```ts
import { createTestClient } from "@profcomff/api-uilib";
import { http, HttpResponse } from 'msw';
import { afterEach, beforeAll, afterAll, expect, test } from 'vitest';
import { setupServer } from 'msw/node';

export const server = setupServer();

beforeAll(() => {
	server.listen({
		onUnhandledRequest: request => {
			throw new Error(`No request handler found for ${request.method} ${request.url}`);
		},
	});
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Get basic info from Auth API with hardload', async () => {
	const baseUrl = import.meta.env.VITE_API_URL;

	const rawData = {
		id: 1,
		email: 'hello@world.com',
	};

	server.use(http.get(`${baseUrl}/auth/user/1`, () => HttpResponse.json(rawData, { status: 200 })));
	const testClient = createTestClient({ baseUrl });  // Клиент API должен быть инициализирован ПОСЛЕ msw сервера

	const { data, error } = await testClient
        .GET(
            '/auth/user/{user_id}',
            { params: { path: { user_id: this.id } },
        });
    expect(data).toEqual(rawData);
    expect(error).toBeUndefined();
});
```


## Разработка

### Автоматическая генерация

Используйте команду `pnpm generate` или [CI-пайплайн Autogen API bindings](https://github.com/profcomff/api-uilib/actions/workflows/autogen.yaml) для кодогенерации последней версии биндингов с **продового** API <https://api.profcomff.com>.

CI исполняется вручную по нажатии кнопки run workflow. После завершения исполнения новая версия будет доступна для ревью в виде Pull Request с названием "Automated API update".

### Релизный процесс

Библиотека релизится по созданию тега вида `v*`, где вместо звездочки идет описание версии [по правилам semver](https://semver.org/lang/ru/). Менять версию в `package.json` не нужно.
