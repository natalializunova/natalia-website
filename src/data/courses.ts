export interface CourseModule { title: string; description: string; }
export interface Course {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  audience: string[];
  modules: CourseModule[];
  format: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  faq: { question: string; answer: string }[];
}

export const courses: Course[] = [
  {
    slug: 'path-to-self',
    title: 'Путь к себе',
    eyebrow: 'Основная программа · содержание уточняется',
    summary: 'Будущий авторский курс о внутренней опоре, самопознании и образах четырёх Стихий.',
    description: 'Страница подготовлена для программы курса. Финальные формулировки, модули и условия участия появятся после авторского согласования.',
    audience: ['Для тех, кто исследует отношения с собой', 'Для тех, кому близка метафора четырёх Стихий'],
    modules: [
      { title: 'Вступление', description: 'Контекст, намерение и правила бережной работы.' },
      { title: 'Четыре Стихии', description: 'Земля, Вода, Огонь и Воздух как язык самонаблюдения.' },
      { title: 'Интеграция', description: 'Место для практик завершения и дальнейшего пути.' },
    ],
    format: 'Будет подтверждён перед открытием записи',
    duration: 'Будет подтверждена перед открытием записи',
    price: 'Не определена',
    image: '/images/placeholders/course.svg',
    imageAlt: 'Готическая арка со звёздным мотивом — обложка курса «Путь к себе»',
    faq: [
      { question: 'Когда откроется запись?', answer: 'Дата будет опубликована после завершения программы и подготовки материалов.' },
      { question: 'Можно ли уже оплатить курс?', answer: 'Нет. В первой версии сайта оплаты и предварительного сбора денег нет.' },
    ],
  },
];
