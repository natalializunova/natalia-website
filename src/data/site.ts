export const site = {
  name: 'Ведьма во мне. Путь к себе',
  shortName: 'Ведьма во мне',
  author: 'Наталья Лизунова',
  sigil: {
    width: 'clamp(3.65rem, 5.5vw, 4.8rem)',
    height: 'clamp(3.65rem, 5.5vw, 4.8rem)',
    scale: 1,
    translateX: '0px',
    translateY: '0px',
    opacity: 1,
    animationEnabled: true,
    alt: 'Авторский сигил Натальи Лизуновой: звезда, две змеи и лотос',
  },
  description:
    'Авторское пространство о внутренней силе, самопознании и пути к себе через образы четырёх Стихий.',
};

export const navigation = [
  { href: '/', label: 'Главная' },
  { href: '/about/', label: 'Обо мне' },
  { href: '/blog/', label: 'Мой блог' },
  { href: '/courses/', label: 'О курсе' },
  { href: '/shop/', label: 'Лавка артефактов' },
] as const;

export const footerNavigation = [
  {
    title: 'Основные разделы',
    items: navigation,
  },
  {
    title: 'Проект и работа',
    items: [
      { href: '/about-project/', label: 'О проекте' },
      { href: '/services/', label: 'Услуги и практики' },
      { href: '/contact/', label: 'Контакты' },
    ],
  },
  {
    title: 'Документы',
    items: [
      { href: '/privacy/', label: 'Политика конфиденциальности' },
      { href: '/consent/', label: 'Обработка персональных данных' },
      { href: '/offer/', label: 'Публичная оферта' },
    ],
  },
] as const;

