import individualPracticeImage from '../assets/images/home/services/individual-practice-v1.jpg';
import elementsRitualImage from '../assets/images/home/services/elements-ritual-v1.jpg';
import selfKnowledgeImage from '../assets/images/home/services/self-knowledge-v1.jpg';
import teacherMeditationImage from '../assets/images/home/services/teacher-meditation-v1.jpg';

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
    image: individualPracticeImage.src,
    imageAlt: 'Женщина в пространстве индивидуальной практики у чёрного зеркала',
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
    image: elementsRitualImage.src,
    imageAlt: 'Ритуальный алтарь Земли, Воды, Огня и Воздуха',
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
    image: selfKnowledgeImage.src,
    imageAlt: 'Проводник и участница во время спокойной сессии самопознания',
    status: 'editorial',
  },
  {
    slug: 'teacher-meditation',
    title: 'Медитации с учителями',
    eyebrow: 'Редакционная заготовка',
    summary: 'Будущий формат совместной практики внимания и внутренней тишины.',
    description: 'Точная программа, состав ведущих и условия участия будут добавлены после согласования авторского формата.',
    suitableFor: ['Для знакомства с совместной практикой', 'Для тех, кому близок мягкий групповой формат'],
    format: 'Уточняется',
    duration: 'Уточняется',
    price: 'Будет объявлена после утверждения программы',
    image: teacherMeditationImage.src,
    imageAlt: 'Небольшая группа людей во время медитации с проводником',
    status: 'editorial',
  },
];
