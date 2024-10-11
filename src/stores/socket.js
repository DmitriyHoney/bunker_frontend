import { defineStore } from 'pinia';
import { io } from 'socket.io-client';
import { useRoomStore } from '@/stores/room.js';
// TODO: go to .env file
const URL = 'http://localhost';
const socket = io(URL);
const EVENTS = {
  PLAYER_JOIN_ROOM: 'PLAYER_JOIN_ROOM',
  START_GAME_IN_ROOM: 'START_GAME_IN_ROOM',
};
export const useSocketStore = defineStore('socketStore', {
  state: () => ({
    isConnected: false,
    isSubscribeByRoom: false,
  }),

  actions: {
    bindEvents() {
      socket.on('connect', () => {
        this.isConnected = true;
      });

      socket.on('disconnect', () => {
        this.isConnected = false;
      });
      socket.on('wow', (e) => {
        console.log(e);
      });
    },
    subscribeOnRoomEvent(roomId) {
      if (this.isSubscribeByRoom) return;
      const roomStore = useRoomStore();
      const roomActions = {
        [EVENTS.PLAYER_JOIN_ROOM]: (e) => roomStore.pushPlayerIntoRoom(e.data.player),
        [EVENTS.START_GAME_IN_ROOM]: () => this.router.push({ name: 'start-game-loader' }),
      };
      socket.on(`room_${roomId}`, (e) => {
        const eventAction = roomActions[e.type];
        if (!eventAction) return;
        eventAction(e);
      });
      this.isSubscribeByRoom = true;
    },
    connect() {
      socket.off();
      socket.connect();
    }
  },
});
