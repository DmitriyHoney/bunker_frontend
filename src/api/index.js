import { generateBaseCRUD } from '@/helpers/';
import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setStorageTokens = (access) => {
  localStorage.setItem('accessToken', access);
};

export const getStorageTokens = () => {
  const access = localStorage.getItem('accessToken');
  return { access };
};

export const clearStorageTokens = () => {
  baseInstance.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('accessToken');
};


export const API = {
  rooms: generateBaseCRUD(baseInstance, 'rooms', {
    startGame: () => baseInstance.post('rooms/startgame')
  }),
  players: generateBaseCRUD(baseInstance, 'players', {
    myProfile: () => baseInstance.get('players/me')
  }),
};
