# Схемы и клиент для взаимодействия с API Твой ФФ

Представляет интерфейс для совершения запросов к API по адресу <https://api.profcomff.com>.


## Использование

```ts
import { client } from @profcomff/api-uilib;

const me = await client.GET('/auth/me', {
  params: {
    info: ["groups", "indirect_groups", "session_scopes", "user_scopes", "auth_methods"],
  },
});
```
