# accu-energo-backend

Родитель: [hub/projects/non-work/apps](https://github.com/gavrilovdm/hub/blob/main/domains/projects/non-work/apps/AGENTS.md)

Связи: фронтенд — [accu-energo-frontend](https://github.com/gavrilovdm/accu-energo-frontend) (не в hub, неактивен)

## Что это

Бэкенд сайта accu-energo на NestJS + PostgreSQL. Публичный контент, а также приватная админка под JWT: продукты, новости, вебинары и спикеры, партнёры, команда, заказы. Почтовые уведомления.

## Команды

```bash
npm install
cp .env.example .env   # JWT_KEY, PG*
npm run start:dev
npm run build && npm run lint
```

## Структура

- `src/public/` — публичный контент; `src/private/<entity>/` — CRUD админки
- `src/auth/`, `src/strategies/jwt.strategy.ts`, `src/guards/` — авторизация
- `src/handlers/` — доступ к данным (OData → SQL), почта
- `src/configs/` — JWT и Postgres

## Соглашения и подводные камни

- Скрипты `test`/`test:e2e` есть в `package.json`, но тестов и папки `test/` нет.
- Миграций нет: схема БД живёт вне репо.
