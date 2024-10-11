import { defineStore } from 'pinia';
import { API } from '@/api/index';
import { useUserStore } from '@/stores/user.js';
import { useSocketStore } from '@/stores/socket.js';
import { CARD_TYPES } from '@/constants/index.js';

export const useRoomStore = defineStore('roomStore', {
  state: () => ({
    isLoading: false,
    isGameStartLoading: false,
    room: null,
  }),
  getters: {
    roomLink: (state) => (state.room
      ? `${import.meta.env.VITE_SERVER_URL}/connect/${state.room.id}`
      : null),
    playersInGame:  (state) => (state.room ? state.room.players.filter((p) => !p.is_dropped) : []),
    playersDropped:  (state) => (state.room ? state.room.players.filter((p) => p.is_dropped) : []),
    readyToStart: (state) => state.room?.players?.length >= state.room?.min_players,
    isGameStart: (state) => state.room?.is_game_start,
    bunkerCard: (state) => (state.room?.cards?.length ? state.room?.cards.find((c) => c.type === CARD_TYPES.bunker) || null : null),
    disasterCard: (state) => (state.room?.cards?.length ? state.room?.cards.find((c) => c.type === CARD_TYPES.disaster) || null : null),
    luggageCards: (state) => (state.room?.cards?.length ? state.room?.cards.filter((c) => c.type === CARD_TYPES.luggage) || null : null),
  },
  actions: {
    pushPlayerIntoRoom(player) {
      this.room.players.push(player);
    },
    async startGameInRoom() {
      this.isGameStartLoading = true;
      try {
        await API.rooms.startGame();
      } catch (e) {
        console.error(e);
      } finally {
        this.isGameStartLoading = false;
      }
    },
    async createRoom() {
      this.isLoading = true;
      try {
        const res = await API.rooms.create();
        this.room  = res.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    async getMyRoom() {
      const userStore = useUserStore();
      const socketStore = useSocketStore();
      this.isLoading = true;
      try {
        const res = await API.rooms.getOne(userStore.user.room);
        this.room  = res.data;
        socketStore.subscribeOnRoomEvent(this.room.id);
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
