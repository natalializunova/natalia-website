export interface Product {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  price: string;
  availability: string;
  variants: string;
  delivery: string;
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  { slug: 'program-candles', title: 'Программные свечи', category: 'Свечи', summary: 'Раздел для будущих авторских свечей.', description: 'Состав, назначение и правила безопасного использования будут добавлены после утверждения ассортимента.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: '/images/placeholders/candle.svg', imageAlt: 'Силуэт свечи в готической арке' },
  { slug: 'calendars', title: 'Календари', category: 'Печатные материалы', summary: 'Место для будущих тематических календарей.', description: 'Форматы, содержание и тираж будут добавлены после подготовки продукта.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: '/images/placeholders/artifact.svg', imageAlt: 'Декоративный круг — место для изображения календаря' },
  { slug: 'ritual-sets', title: 'Ритуальные наборы', category: 'Наборы', summary: 'Раздел для будущих наборов и их состава.', description: 'Карточка не является офертой. Точный состав и рекомендации появятся после подтверждения ассортимента.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: '/images/placeholders/artifact.svg', imageAlt: 'Геометрическая композиция — место для изображения набора' },
  { slug: 'other-artifacts', title: 'Другие артефакты', category: 'Артефакты', summary: 'Открытая категория для новых предметов.', description: 'Здесь можно будет размещать новые категории без изменения структуры сайта.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: '/images/placeholders/artifact.svg', imageAlt: 'Золотой ромб — место для изображения артефакта' },
];
