import { createRouter, createWebHistory } from 'vue-router';
import CreateGameRoom from '@/views/CreateGameRoom.vue';
import ConnectGameRoom from '@/views/ConnectGameRoom.vue';
import StartGameRoom from '@/views/StartGameRoom.vue';
import GameRules from '@/views/GameRules.vue';
import GameRoom from '@/views/GameRoom.vue';
import StartGameLoader from '@/views/Loaders/StartGameLoader.vue';

import { useCommonStore } from '@/stores/index';
import { customDelay } from '@/helpers/index.js';
import { useUserStore } from '@/stores/user.js';
import { getStorageTokens } from '@/api/index.js';
import { useRoomStore } from '@/stores/room.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'create-game-room',
      component: CreateGameRoom,
    },
    {
      path: '/connect/:room_id?',
      name: 'connect-game-room',
      component: ConnectGameRoom,
    },
    {
      path: '/start-game-room/:room_id?',
      name: 'start-game-room',
      component: StartGameRoom,
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
  startPreloaderBetweenPages(async () => {
    const userStore = useUserStore();
    const roomStore = useRoomStore();
    const { access } = getStorageTokens();

    const conditions = {
      isNotAuthorized: !userStore.user && !access,
      isUserWantConnectGame: to.name === 'start-game-room' && !!to.params?.room_id,
      isNotAuthorizedButTokenExist: !userStore.user && access,
    };

    if (to.name === 'connect-game-room' && conditions.isNotAuthorized) return next();
    else if (to.name === 'create-game-room' && conditions.isNotAuthorized) return next();
    else if (conditions.isNotAuthorized && conditions.isUserWantConnectGame)
      return next({
        name: 'connect-game-room',
        params: {
          room_id: to.params.room_id
        }
      });
    else if (conditions.isNotAuthorized) return next({ name: 'create-game-room' });
    else if (conditions.isNotAuthorizedButTokenExist) {
      await userStore.getMyProfile();
      await roomStore.getMyRoom();
      return roomStore.isGameStart
        ? next({ name: 'game-room' })
        : next({ name: 'start-game-room', params: { room_id: userStore?.room?.id } });
    }
    // if user exit and token exist, and game not start => user go only await page
    // if game start user go to game page
    // if token exist and not user in store get current room

    next();
  });
});

export default router;
