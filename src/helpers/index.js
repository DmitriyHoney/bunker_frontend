export const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const generateBaseCRUD = (instance, url, custom) => ({
  getAll: (payload) => instance.get(`${url}/`, payload),
  getOne: (id) => instance.get(`${url}/${id}`),
  create: (payload) => instance.post(`${url}/`, payload),
  updatePatch: (id, payload) => instance.patch(`${url}/${id}`, payload),
  updatePut: (id, payload) => instance.put(`${url}/${id}`, payload),
  delete: (id) => instance.delete(`${url}/${id}`),
  ...custom,
});
export const getPluralValues = (count, rules) => { // 21, ['админ', 'админа', 'админов']
  const result = new Intl.PluralRules(
    'ru-RU'
  ).select(count);
  switch (result) {
  case 'one':
    return `${count} ${rules[0]}`;
  case 'few':
    return `${count} ${rules[1]}`;
  default:
    return `${count} ${rules[2]}`;
  }
};

export const translatePeopleBiology = (peopleProp) => {
  const gender = { 'male': 'Мужчина', 'female': 'Женщина' };
  return `${gender[peopleProp.gender]} (${getPluralValues(+peopleProp.age, ['год', 'года', 'лет'])})`;
};
export const customDelay = (ms = 1500) => new Promise((resolve) => setTimeout(() => resolve(true), ms));
