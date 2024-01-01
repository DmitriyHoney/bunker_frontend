const EXPIRIENCE = {
  DILETTANTE: {
    name: 'Дилетант ( до 1 месяца)',
  },
  INTERN: {
    name: 'Стажер (опыт от 1 до 3 месяцев)',
  },
  JUNIOR: {
    name: 'Новичок (опыт от 4 месяцев до 1 года)',
  },
  MIDDLE: {
    name: 'Опытный (опыт от 1 до 5 лет)',
  },
  EXPERT: {
    name: 'Эксперт (опыт от 5 до 10 лет)',
  },
  PRO: {
    name: 'Профессионал (от 10 лет)',
  },
};

const PROFESSIONS = [
  { category: 'profession', name: 'Уролог'},
  { category: 'profession', name: 'Разнорабочий'},
  { category: 'profession', name: 'Правовед'},
  { category: 'profession', name: 'Военнослужащий'},
  { category: 'profession', name: 'Плотник'},

  { category: 'profession', name: 'Животновод'},
  { category: 'profession', name: 'Филолог'},
  { category: 'profession', name: 'Каскадер'},
  { category: 'profession', name: 'Спортивный врач'},
  { category: 'profession', name: 'Рыбак'},

  { category: 'profession', name: 'Невролог'},
  { category: 'profession', name: 'Программист сайтов'},
  { category: 'profession', name: 'Музыкант'},
  { category: 'profession', name: 'Мусоропроводчик'},
  { category: 'profession', name: 'Дизайнер'},

  { category: 'profession', name: 'Специалист по стрижке овец'},
  { category: 'profession', name: 'Критик'},
  { category: 'profession', name: 'Психолог'},
  { category: 'profession', name: 'Археолог'},
  { category: 'profession', name: 'Профессор истории'},

  { category: 'profession', name: 'Инженер строитель'},
  { category: 'profession', name: 'Инфоцыган'},
  { category: 'profession', name: 'Разработчик сайтов на битрикс'},
  { category: 'profession', name: 'Грузчик'},
  { category: 'profession', name: 'Закладчик'},

  { category: 'profession', name: 'Хирург'},
  { category: 'profession', name: 'Гинеколог'},
  { category: 'profession', name: 'Формацевт'},
  { category: 'profession', name: 'Участковый'},
  { category: 'profession', name: 'Дворник'},

  { category: 'profession', name: 'Швея'},
  { category: 'profession', name: 'Таксист'},
  { category: 'profession', name: 'Шахматист'},
  { category: 'profession', name: 'Слесарь'},
  { category: 'profession', name: 'Автомеханик'},

  { category: 'profession', name: 'Кондуктор'},
  { category: 'profession', name: 'Телеведущий'},
  { category: 'profession', name: 'Пастух'},
  { category: 'profession', name: 'Гос служащий'},
  { category: 'profession', name: 'Экскурсовод'},

  { category: 'profession', name: 'Библиотекарь'},
  { category: 'profession', name: 'Математик'},
  { category: 'profession', name: 'Тренер по физ подготовке'},
  { category: 'profession', name: 'Пропагандист'},
  { category: 'profession', name: 'Лётчик испытатель'},

  { category: 'profession', name: 'Снайпер'},
  { category: 'profession', name: 'Кинокритик'},
  { category: 'profession', name: 'Дипломат'},
  { category: 'profession', name: 'Водитель автобуса'},
  { category: 'profession', name: 'Егерь'},

  { category: 'profession', name: 'Агроном'},
  { category: 'profession', name: 'Адвокат'},
  { category: 'profession', name: 'Альпинист'},
  { category: 'profession', name: 'Археолог'},
  { category: 'profession', name: 'Астролог'},

  { category: 'profession', name: 'Бариста'},
  { category: 'profession', name: 'Блогер'},
  { category: 'profession', name: 'Боксёр'},
  { category: 'profession', name: 'Боец спецназа'},
  { category: 'profession', name: 'Браконьер'},

  { category: 'profession', name: 'Вирусолог'},
  { category: 'profession', name: 'Визажист'},
  { category: 'profession', name: 'Диджей'},
  { category: 'profession', name: 'Геолог'},
  { category: 'profession', name: 'Иммунолог'},

  { category: 'profession', name: 'Клоун'},
  { category: 'profession', name: 'Писатель'},
  { category: 'profession', name: 'Пожарный'},
  { category: 'profession', name: 'Повар'},
  { category: 'profession', name: 'Порноактер'},

  { category: 'profession', name: 'Радист'},
  { category: 'profession', name: 'Психотерапевт'},
  { category: 'profession', name: 'Священник'},
  { category: 'profession', name: 'Шахтёр'},
  { category: 'profession', name: 'Электрик'},
];

export const generateCards = () => PROFESSIONS;
