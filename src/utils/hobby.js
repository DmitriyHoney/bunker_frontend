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

const HOBBY = [
  { category: 'hobby', name: 'Ведение блога'},
  { category: 'hobby', name: 'Волонтёрство'},
  { category: 'hobby', name: 'Выращивание растений'},
  { category: 'hobby', name: 'Вышивание'},
  { category: 'hobby', name: 'Занятие боевыми искусствами'},

  { category: 'hobby', name: 'Занятие йогой'},
  { category: 'hobby', name: 'Занятие фитнесом'},
  { category: 'hobby', name: 'Игра в страйкбол'},
  { category: 'hobby', name: 'Игра в футбол'},
  { category: 'hobby', name: 'Игра на гитаре'},

  { category: 'hobby', name: 'Игра на пианино'},
  { category: 'hobby', name: 'Изучение языков'},
  { category: 'hobby', name: 'Коллекционирование монет'},
  { category: 'hobby', name: 'Кулинария'},
  { category: 'hobby', name: 'Лепка из глины'},

  { category: 'hobby', name: 'Метание копья'},
  { category: 'hobby', name: 'Метание ножей'},
  { category: 'hobby', name: 'Охота'},
  { category: 'hobby', name: 'Пение'},
  { category: 'hobby', name: 'Пивоварение'},

  { category: 'hobby', name: 'Подводное плавание'},
  { category: 'hobby', name: 'Посещение концертов'},
  { category: 'hobby', name: 'Походы'},
  { category: 'hobby', name: 'Просмотр аниме'},
  { category: 'hobby', name: 'Прохождение компьютерных игр'},

  { category: 'hobby', name: 'Работа с металлом'},
  { category: 'hobby', name: 'Радиолюбительство'},
  { category: 'hobby', name: 'Резьба по дереву'},
  { category: 'hobby', name: 'Решение головоломок'},
  { category: 'hobby', name: 'Рисование'},

  { category: 'hobby', name: 'Рыбалка'},
  { category: 'hobby', name: 'Сбор грибов'},
  { category: 'hobby', name: 'Скалолазание'},
  { category: 'hobby', name: 'Создание битбокса'},
  { category: 'hobby', name: 'Создание фигурок оригами'},

  { category: 'hobby', name: 'Создание фокусов'},
  { category: 'hobby', name: 'Сочинение рэпа'},
  { category: 'hobby', name: 'Стрельба из лука'},
  { category: 'hobby', name: 'Сурвивализм'},
  { category: 'hobby', name: 'Сёрфинг'},

  { category: 'hobby', name: 'Танцы'},
  { category: 'hobby', name: 'Туризм'},
  { category: 'hobby', name: 'Фехтование'},
  { category: 'hobby', name: 'Чтение'},
  { category: 'hobby', name: 'Шопинг'},

];

export const generateCards = () => HOBBY;
