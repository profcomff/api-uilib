# Схемы и клиент для взаимодействия с API Твой ФФ

Представляет интерфейс для совершения запросов к API по адресу <https://api.profcomff.com>.


[<img src="https://cdn.profcomff.com/easycode/easycode.svg" width="200"></img>](https://easycode.profcomff.com/templates/docker-node/workspace?mode=manual&param.Repository+URL=https://github.com/profcomff/api-uilib.git&param.Working+directory=api-uilib)

## Использование

```ts
import { createClient } from '@profcomff/api-uilib';

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
            info: ["session_scopes"]
        }
    }
});
```
