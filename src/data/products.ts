import ritualCandlesImage from '../assets/images/home/shop/ritual-candles-v1.jpg';
import lunarCalendarImage from '../assets/images/home/shop/lunar-calendar-v1.jpg';
import ritualKitImage from '../assets/images/home/shop/ritual-kit-v1.jpg';
import artifactsImage from '../assets/images/home/shop/artifacts-v1.jpg';

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
  { slug: 'program-candles', title: 'Программные свечи', category: 'Свечи', summary: 'Раздел для будущих авторских свечей.', description: 'Состав, назначение и правила безопасного использования будут добавлены после утверждения ассортимента.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: ritualCandlesImage.src, imageAlt: 'Авторские ритуальные свечи с травами и растениями' },
  { slug: 'calendars', title: 'Магический календарь', category: 'Печатные материалы', summary: 'Место для будущих тематических календарей.', description: 'Форматы, содержание и тираж будут добавлены после подготовки продукта.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: lunarCalendarImage.src, imageAlt: 'Раскрытый магический календарь с лунными циклами' },
  { slug: 'ritual-sets', title: 'Ритуальные наборы', category: 'Наборы', summary: 'Раздел для будущих наборов и их состава.', description: 'Карточка не является офертой. Точный состав и рекомендации появятся после подтверждения ассортимента.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: ritualKitImage.src, imageAlt: 'Ритуальный набор со свечами, травами, кристаллами и алтарной тканью' },
  { slug: 'other-artifacts', title: 'Другие артефакты', category: 'Артефакты', summary: 'Открытая категория для новых предметов.', description: 'Здесь можно будет размещать новые категории без изменения структуры сайта.', price: 'Не указана', availability: 'Каталог готовится', variants: 'Будут добавлены', delivery: 'Условия будут опубликованы до начала продаж', image: artifactsImage.src, imageAlt: 'Амулет, кристаллы, чёрное зеркало и ритуальные инструменты' },
];
