// общие параметры для карточек
let defaultFormats = {
  digital: { label: 'Только файлы', addPrice: 0 },
  print: { label: 'Файлы + печать', addPrice: 3000 },
  album: { label: 'Файлы + альбом', addPrice: 7000 }
};

let defaultDurations = {
  '1h': { label: '1 час', addPrice: 0 },
  '2h': { label: '2 часа', addPrice: 4000 },
  day: { label: 'Весь день', addPrice: 10000 }
};

let products = [
  {
    id: 1,
    name: 'Классическая свадьба',
    description: 'Регистрация, прогулка и банкет в Симферополе',
    price: 25000,
    category: 'wedding',
    image: 'assets/images/wedding-1.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 2,
    name: 'Камерная церемония',
    description: 'Съёмка для небольшой компании у моря или в городе',
    price: 18000,
    category: 'wedding',
    image: 'assets/images/wedding-2.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 3,
    name: 'Love Story',
    description: 'Романтическая прогулка по Симферополю',
    price: 12000,
    category: 'wedding',
    image: 'assets/images/wedding-3.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 4,
    name: 'Свадьба у моря',
    description: 'Церемония и закат на побережье Крыма',
    price: 30000,
    category: 'wedding',
    image: 'assets/images/wedding-4.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 5,
    name: 'Городская свадьба',
    description: 'Съёмка в центре Симферополя',
    price: 22000,
    category: 'wedding',
    image: 'assets/images/wedding-5.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 6,
    name: 'Вечерний банкет',
    description: 'Репортаж праздника и эмоции гостей',
    price: 15000,
    category: 'wedding',
    image: 'assets/images/wedding-6.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 7,
    name: 'Полный свадебный день',
    description: 'От сборов до финала вечера',
    price: 40000,
    category: 'wedding',
    image: 'assets/images/wedding-7.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 8,
    name: 'Выездная регистрация',
    description: 'Церемония на природе Крыма',
    price: 20000,
    category: 'wedding',
    image: 'assets/images/wedding-8.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 9,
    name: 'Женский портрет',
    description: 'Студия или город, естественный свет',
    price: 8000,
    category: 'portrait',
    image: 'assets/images/portrait-1.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 10,
    name: 'Мужской портрет',
    description: 'Портрет для сайта и соцсетей',
    price: 8000,
    category: 'portrait',
    image: 'assets/images/portrait-2.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 11,
    name: 'Семейная съёмка',
    description: 'Тёплые кадры семьи в Симферополе',
    price: 10000,
    category: 'portrait',
    image: 'assets/images/portrait-3.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 12,
    name: 'Парный портрет',
    description: 'Съёмка для пары без свадьбы',
    price: 9000,
    category: 'portrait',
    image: 'assets/images/portrait-4.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 13,
    name: 'Контент для бренда',
    description: 'Кадры для личного бренда',
    price: 11000,
    category: 'portrait',
    image: 'assets/images/portrait-5.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 14,
    name: 'Концерт и сцена',
    description: 'Репортаж выступления',
    price: 14000,
    category: 'reportage',
    image: 'assets/images/reportage-1.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 15,
    name: 'Городской фестиваль',
    description: 'Съёмка события в Симферополе',
    price: 16000,
    category: 'reportage',
    image: 'assets/images/reportage-2.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 16,
    name: 'Корпоратив',
    description: 'Репортаж мероприятия компании',
    price: 18000,
    category: 'reportage',
    image: 'assets/images/reportage-3.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 17,
    name: 'День рождения',
    description: 'Живые кадры праздника',
    price: 10000,
    category: 'reportage',
    image: 'assets/images/reportage-4.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  },
  {
    id: 18,
    name: 'Открытие',
    description: 'Репортаж презентации или магазина',
    price: 15000,
    category: 'reportage',
    image: 'assets/images/reportage-5.jpg',
    formats: defaultFormats,
    durations: defaultDurations
  }
];
