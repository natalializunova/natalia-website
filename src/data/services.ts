export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  suitableFor: string[];
  format: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  status: 'editorial';
}

export const services: Service[] = [
  {
    slug: 'individual-practice',
    title: 'Индивидуальная практика',
    eyebrow: 'Редакционная заготовка',
    summary: 'Место для будущего описания персональной практики и её формата.',
    description: 'Содержание предложения будет добавлено после согласования авторской методики, границ работы и условий записи.',
    suitableFor: ['Аудитория и запросы будут уточнены', 'Противопоказания и границы формата будут описаны отдельно'],
    format: 'Уточняется',
    duration: 'Уточняется',
    price: 'Будет объявлена после утверждения программы',
    image: '/images/placeholders/service.svg',
    imageAlt: 'Декоративная арка — место для изображения индивидуальной практики',
    status: 'editorial',
  },
  {
    slug: 'elements-practice',
    title: 'Практика четырёх Стихий',
    eyebrow: 'Редакционная заготовка',
    summary: 'Будущий формат знакомства с образами Земли, Воды, Огня и Воздуха.',
    description: 'Здесь появится подтверждённое описание практики, её цели и последовательности. Сейчас страница показывает структуру будущего предложения.',
    suitableFor: ['Для знакомства с темой Стихий', 'Для тех, кому близок символический язык проекта'],
    format: 'Уточняется',
    duration: 'Уточняется',
    price: 'Будет объявлена после утверждения программы',
    image: '/images/placeholders/elements.svg',
    imageAlt: 'Четыре символа Стихий в готической арке',
    status: 'editorial',
  },
  {
    slug: 'reflection-session',
    title: 'Сессия самопознания',
    eyebrow: 'Редакционная заготовка',
    summary: 'Нейтральная карточка для будущего формата личной работы.',
    description: 'Перед публикацией автор добавит точное содержание, квалификационные границы и порядок взаимодействия.',
    suitableFor: ['Критерии будут добавлены после согласования', 'Формат не заменяет медицинскую или психотерапевтическую помощь'],
    format: 'Уточняется',
    duration: 'Уточняется',
    price: 'Будет объявлена после утверждения программы',
    image: '/images/placeholders/service.svg',
    imageAlt: 'Линии и круг — место для изображения сессии',
    status: 'editorial',
  },
];
