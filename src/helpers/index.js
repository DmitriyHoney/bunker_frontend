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

