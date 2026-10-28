export const site = {
  name: 'Ведьма во мне. Путь к себе',
  shortName: 'Ведьма во мне',
  author: 'Наталья Лизунова',
  description:
    'Авторское пространство о внутренней силе, самопознании и пути к себе через образы четырёх Стихий.',
};

export const navigation = [
  { href: '/', label: 'Главная' },
  { href: '/about-project/', label: 'О проекте' },
  { href: '/about/', label: 'Об авторе' },
  { href: '/services/', label: 'Услуги и практики' },
  { href: '/courses/', label: 'Курсы' },
  { href: '/shop/', label: 'Лавка' },
  { href: '/blog/', label: 'Блог' },
  { href: '/contact/', label: 'Контакты' },
] as const;

export const elements = [
  { key: 'earth', name: 'Земля', symbol: '◫', essence: 'Стабильность', text: 'Опора, границы и возвращение к тому, что действительно важно.' },
  { key: 'water', name: 'Вода', symbol: '⌇', essence: 'Эмоции', text: 'Чувствование, принятие и умение слышать движение внутри.' },
  { key: 'fire', name: 'Огонь', symbol: '△', essence: 'Сила', text: 'Воля, действие и бережное знакомство с собственной энергией.' },
  { key: 'air', name: 'Воздух', symbol: '○', essence: 'Свобода', text: 'Ясность, новый взгляд и пространство для выбора.' },
] as const;
