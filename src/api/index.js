import axios from 'axios';
import { generateBaseCRUD } from '@/helpers/';

export const baseInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const API = {
  auth: {
    getToken: (user_id) => baseInstance.post('/auth/token/', { query: { user_id } })
  },
  rooms: generateBaseCRUD(baseInstance, 'rooms', {
    join: (userId) => baseInstance.post(`/rooms/join/${userId}`)
  }),
  users: generateBaseCRUD(baseInstance, 'users'),
  games: generateBaseCRUD(baseInstance, 'games'),
  decks: generateBaseCRUD(baseInstance, 'decks', {
    distribute: (payload) => baseInstance.post('/decks/distribute/', payload),
    getMyDeck: () => baseInstance.get('/decks/me/'),
  }),
  moves: generateBaseCRUD(baseInstance, 'moves', {
    makeMove: (payload) => baseInstance.post('/moves/make/', payload),
  }),
  cards: generateBaseCRUD(baseInstance, 'cards', {
    getRandomCards: () => baseInstance.get('/cards/random/'),
    useCard: (payload) => baseInstance.post('/cards/use/', payload),
  }),
  rounds: generateBaseCRUD(baseInstance, 'rounds'),
  polls: generateBaseCRUD(baseInstance, 'polls'),
};

