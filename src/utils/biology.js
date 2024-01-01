import { getRandomRange } from '@/helpers';

const GENDERS = {
  MALE: {
    key: 'MALE',
    translate: 'Мужчина',
  },
  FEMALE: {
    key: 'FEMALE',
    translate: 'Женщина',
  },
};

const AGE_RANGE = {
  CHILD: {
    ageRange: [1, 17],
    key: 'CHILD',
    translate: 'Ребёнок',
  },
  YOUNG: {
    ageRange: [18, 29],
    key: 'YOUNG',
    translate: 'Молодой',
  },
  MATURE: {
    ageRange: [30, 59],
    key: 'MATURE',
    translate: 'Зрелый',
  },
  OLD: {
    ageRange: [60, 99],
    key: 'OLD',
    translate: 'Старый',
  },
  ANCIENT: {
    ageRange: [100, 110],
    key: 'ANCIENT',
    translate: 'Древний',
  },
};

export const generateCards = (countCards = 90) => {
  if (countCards % 2 > 0 || countCards % 5 > 0) {
    console.error('Кол-во карт должно быть кратно двум и 5');
    return;
  }
  const result = [];
  for (let i = 0; i < countCards; i++) {
    const currentAgeIdx = i % Object.keys(AGE_RANGE).length;
    const isMaleGenderFull = i > countCards / 2;
    const gender = isMaleGenderFull ? GENDERS.FEMALE : GENDERS.MALE;
    const currentAgeKey = Object.keys(AGE_RANGE)[currentAgeIdx];
    const newBiologyCard = {
      category: 'biology',
      name: `${gender.translate}, возраст: ${getRandomRange(
        ...AGE_RANGE[currentAgeKey].ageRange
      )} (${AGE_RANGE[currentAgeKey].translate})`,
    };
    result.push(newBiologyCard);
  }
  return result;
};
