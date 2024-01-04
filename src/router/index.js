import { createRouter, createWebHistory } from 'vue-router';
import CreateGameRoom from '../views/CreateGameRoom.vue';
import StartGameRoom from '../views/StartGameRoom.vue';
import GameRules from '../views/GameRules.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'create-game-room',
      component: CreateGameRoom,
    },
    {
      path: '/start-game-room',
      name: 'start-game-room',
      component: StartGameRoom,
    },
    {
      path: '/game-rules',
      name: 'game-rules',
      component: GameRules,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/uikit',
      name: 'uikit',
      component: () => import('../views/UIKit.vue'),
    },
    {
      path: '/game-room',
      name: 'game-room',
      component: () => import('../views/GameRoom.vue'),
    },
  ],
});

export default router;
