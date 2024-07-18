# Схемы и клиент для взаимодействия с API Твой ФФ

Представляет интерфейс для совершения запросов к API по адресу <https://api.profcomff.com>.


[<img src="https://cdn.profcomff.com/easycode/easycode.svg" width="200"></img>](https://easycode.profcomff.com/templates/docker-node/workspace?mode=manual&param.Repository+URL=https://github.com/profcomff/api-uilib.git&param.Working+directory=api-uilib)

## Использование

```ts
import { client } from @profcomff/api-uilib;

const me = await client.GET('/auth/me', {
  params: {
    info: ["groups", "indirect_groups", "session_scopes", "user_scopes", "auth_methods"],
  },
});
```
