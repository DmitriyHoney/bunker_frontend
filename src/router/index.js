import { createRouter, createWebHistory } from 'vue-router';
import CreateGameRoom from '../views/CreateGameRoom.vue';
import StartGameRoom from '../views/StartGameRoom.vue';
import GameRules from '../views/GameRules.vue';
import GameRoom from '../views/GameRoom.vue';
import StartGameLoader from '../views/Loaders/StartGameLoader.vue';

import { useCommonStore } from '@/stores/index';
import { customDelay } from '@/helpers/index.js';
import { useUserGameStore } from '@/stores/userGame.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'create-game-room',
      component: CreateGameRoom,
    },
    {
      path: '/start-game-room/:room_id?',
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

const startPreloaderBetweenPages = async (cb) => {
  const commonStore = useCommonStore();
  commonStore.setActiveLoader();
  await customDelay(3000);
  cb();
  commonStore.setInactiveLoader();
};

router.beforeEach((to, from, next) => {
  // TODO: если игра уже начата и активна - запретить переход на start-game-loader
  // next();
  startPreloaderBetweenPages(() => {
    next();
  });
});

export default router;
