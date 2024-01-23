import { createRouter, createWebHistory } from 'vue-router';
import CreateGameRoom from '../views/CreateGameRoom.vue';
import StartGameRoom from '../views/StartGameRoom.vue';
import GameRules from '../views/GameRules.vue';

import { useCommonStore } from '@/stores/index';

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

router.beforeEach(async (to, from, next) => {
  const commonStore = useCommonStore();
  commonStore.setActiveLoader();
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 1500);
  });
  next();
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 1500);
  });
  commonStore.setInactiveLoader();
});

export default router;
