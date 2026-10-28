# Architecture

## Стек

- Astro 7, TypeScript strict mode;
- статическая генерация HTML;
- чистый CSS и централизованные design tokens;
- Astro Content Collections для Markdown-блога;
- `@astrojs/sitemap` для XML sitemap;
- Netlify как целевая площадка сборки.

## Структура

```text
src/
  components/
    layout/       Header и Footer
    sections/     секционные композиции
    seo/          метаданные и schema.org
    ui/           кнопки, карточки, breadcrumbs
  content/blog/   Markdown-статьи
  data/           услуги, курсы, товары, навигация
  layouts/        основной HTML layout
  pages/          статические и динамические маршруты
  styles/         токены и глобальные стили
public/
  images/placeholders/
docs/
```

## Решения

- Каталоги строятся из типизированных массивов; новые записи автоматически получают страницы через `getStaticPaths`.
- Статьи хранятся отдельно и валидируются схемой `src/content.config.ts`.
- Индексация по умолчанию выключена. `PUBLIC_SITE_INDEXABLE=true` разрешает индексацию только страниц без локального `noindex`.
- Production URL задаётся через `SITE_URL`; он используется для canonical, sitemap и structured data.
- Юридические, коммерческие и черновые страницы закрыты от индексации до появления достоверного содержания.
- Корзина является честной информационной страницей, а не имитацией checkout.

## Расширение

Реальную торговлю следует подключать отдельным слоем после выбора товарной модели, провайдера оплаты, обработки заказов и юридических условий. Не добавлять состояние корзины до фиксации этого решения.
