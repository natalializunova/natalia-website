# «Ведьма во мне. Путь к себе»

Первая версия авторского сайта Натальи Лизуновой: многостраничный статический сайт на Astro с каталогами, блогом и SEO-основой.

## Требования

- Node.js 22+
- pnpm 10+

## Локальный запуск

```bash
pnpm install
pnpm dev
```

Сайт откроется на `http://localhost:4321`.

## Проверки и сборка

```bash
pnpm check
pnpm build
pnpm preview
```

Готовые статические файлы создаются в `dist/`.

## Переменные окружения

Скопируйте `.env.example` в `.env`. До публичного запуска оставьте `PUBLIC_SITE_INDEXABLE=false`. При запуске укажите подтверждённый production-домен в `SITE_URL` и переключите индексацию на `true`.

## Добавление контента

- статьи: `src/content/blog/*.md`;
- услуги: `src/data/services.ts`;
- курсы: `src/data/courses.ts`;
- товары: `src/data/products.ts`.

Подробности — в [руководстве по контенту](docs/CONTENT_GUIDE.md).

## GitHub и Netlify

1. Создайте feature-ветку: `git switch -c feature/<name>`.
2. Зафиксируйте изменения: `git add . && git commit -m "Описание"`.
3. Отправьте ветку: `git push -u origin feature/<name>`.
4. После проверки объедините её с `main` через pull request.

Netlify использует `pnpm build`, публикует `dist/` и берёт production-ветку `main`. Переменные `SITE_URL` и `PUBLIC_SITE_INDEXABLE` задаются в интерфейсе Netlify. Preview Deploys должны оставаться закрытыми от индексации.

## Безопасный откат

- До публикации найдите нужный коммит: `git log --oneline`.
- Для отмены уже опубликованного изменения создайте обратный коммит: `git revert <commit>`.
- Для возврата Netlify используйте повторную публикацию ранее успешного deploy в интерфейсе сервиса.

Не используйте `git reset --hard` и force push для `main`.
