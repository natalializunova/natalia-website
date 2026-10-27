# SEO Checklist

## Реализовано

- [x] человекопонятные URL и trailing slash;
- [x] уникальные title и descriptions;
- [x] один H1 и последовательная иерархия заголовков;
- [x] canonical на основе `SITE_URL`;
- [x] Open Graph и Twitter Card;
- [x] XML sitemap с исключениями;
- [x] динамический `robots.txt`;
- [x] breadcrumbs и BreadcrumbList;
- [x] WebSite schema;
- [x] `lang="ru"`, favicon и alt-тексты;
- [x] черновик статьи с `noindex`;
- [x] staging закрыт от индексации по умолчанию.

## Перед публичным запуском

- [ ] подтвердить production-домен и задать `SITE_URL=https://...`;
- [ ] проверить все страницы с реальным контентом и снять локальный `noindex`;
- [ ] сохранить `PUBLIC_SITE_INDEXABLE=false` для Preview Deploys;
- [ ] установить `PUBLIC_SITE_INDEXABLE=true` только в production;
- [ ] проверить выдачу `robots.txt`, canonical и sitemap на production;
- [ ] удалить или завершить демонстрационный черновик;
- [ ] добавить подтверждённые Person/Organization данные;
- [ ] добавить BlogPosting только для опубликованных статей;
- [ ] добавить Product/Course schema только при наличии реальных условий;
- [ ] подключить Search Console после подтверждения домена;
- [ ] выбрать режим аналитики и обновить privacy/cookie документы;
- [ ] проверить Lighthouse и ручную мобильную навигацию на production.

## Критически важно

Не включать глобальную индексацию до проверки локальных `noindex`. После запуска отдельно убедиться, что главная и утверждённые содержательные страницы больше не закрыты.
