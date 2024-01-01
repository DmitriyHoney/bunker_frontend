// import { convertToCSV } from '@/helpers';
import { generateCards as generateBiologyCards } from './biology';
import { generateCards as generateHealthCards } from './health';
import { generateCards as generateCatastropheCards } from './catastrophe';
import { generateCards as generateProfessionsCards } from './profession';
import { generateCards as generateHobbyCards } from './hobby';
import { generateCards as generateFobiesCards } from './fobies';
import { generateCards as generateQualitiesCards } from './quality';
import { generateCards as generateBagageCards } from './bagage';
import { generateCards as generateAdditionalCards } from './additional';
import { generateCards as generateBunkersCards } from './bunker';

const biology = generateBiologyCards(); // Биология(30)

const health = generateHealthCards(); // Здоровье(30)

const catastrophe = generateCatastropheCards(); // Катастрофы(7)

const professions = generateProfessionsCards(); // Профессии(75)

const hobby = generateHobbyCards(); // Хобби(45)

const fobies = generateFobiesCards(); // Фобии(40)

const qualities = generateQualitiesCards(); // Черты характера(90)

const bagage = generateBagageCards(); // Багажи(65)

const addtional = generateAdditionalCards(); // Доп навыки(50)

const bunkers = generateBunkersCards(); // Бункеры(10)

export const csv = {
  biology: () => biology,
  health: () => health,
  catastrophe: () => catastrophe,
  professions: () => professions,
  hobby: () => hobby,
  fobies: () => fobies,
  qualities: () => qualities,
  bagage: () => bagage,
  addtional: () => addtional,
  bunkers: () => bunkers,
};
