import { createRouter, createWebHistory } from 'vue-router';
import CreateGameRoom from '../views/CreateGameRoom.vue';
import StartGameRoom from '../views/StartGameRoom.vue';
import GameRules from '../views/GameRules.vue';
import GameRoom from '../views/GameRoom.vue';
import StartGameLoader from '../views/Loaders/StartGameLoader.vue';

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
      component: GameRoom,
    },
    {
      path: '/start-game-loader',
      name: 'start-game-loader',
      component: StartGameLoader,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  // TODO: если игра уже начата и активна - запретить переход на start-game-loader
  const commonStore = useCommonStore();
  commonStore.setActiveLoader();
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 800);
  });
  next();
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 1500);
  });
  commonStore.setInactiveLoader();
});

export default router;
