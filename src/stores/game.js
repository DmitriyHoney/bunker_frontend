import { defineStore } from 'pinia';
import { API, getStorageTokens, setStorageTokens } from '@/api/index';
import { jwtDecode } from 'jwt-decode';
window.API = API;

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    room: null,
    // constants
    minPlayers: 2,
  }),
  getters: {
    owner: (state) => state.room?.users.find((u) => u.is_owner),
    roomLink: (state) => (state.room?.id ? `${import.meta.env.VITE_SERVER_URL}/start-game-room/${state.room.id}` : 'Ссылка не сформирована'),
    currentUserInRoom: (state) => state.room?.users.find((u) => u.isMy),
    isOwner: (state) => state.room?.users.find((u) => u.isMy && u.is_owner),
    players: (state) => state.room?.users,
    isGameCanStart: (state) => state.players?.length >= state.minPlayers,
    game: (state) => (state.room?.games?.length ? state.room?.games[0] : null),
  },
  actions: {
    // Owner Logic
    async ownerCreateRoomAndAuth(username) {
      await this.createRoomAndOwner(username);
      await this.authUserAndSaveToken(this.owner.id);
      this.defineCurrentUserInRoom();
    },
    async startGameCreateDistributeDeck() {
      const res = await API.games.create({
        name: String(new Date().getTime()),
        room_id: this.room.id,
      });
      await API.decks.create({ game_id: res.data.id });
      await API.decks.distribute({ game_id: res.data.id });
    },
    // User Logic
    async createUserAuthAndJoinInRoom(username, room_id) {
      const user = await this.createUser(username, room_id);
      setStorageTokens(user.token.access);
      await this.joinInRoom(user.id);
    },
    // Common Logic
    async getCurrentRoomAndDefineCurrentUser() {
      const res = await API.rooms.getAll();
      res?.data?.length > 0
        ? this.room = res.data[0]
        : this.room = [];
      this.defineCurrentUserInRoom();
    },

    // Syntax
    async joinInRoom(userId) {
      const res = await API.rooms.join(userId);
      this.room = res.data;
      this.defineCurrentUserInRoom();
    },
    async createUser(username, room_id) {
      const res = await API.users.create({ username, is_owner: false, room_id });
      return res.data;
    },
    async createRoomAndOwner(username) {
      const res = await API.rooms.create({ name: `room_${Date.now()}`, username });
      this.room = res.data;
    },
    async authUserAndSaveToken(userId) {
      const res = await API.auth.getToken(userId);
      setStorageTokens(res.data.access);
    },
    defineCurrentUserInRoom() {
      if (!this.room?.id) return;
      const { access } = getStorageTokens();
      if (access && this.room?.users) this.room.users = this.room.users.map((u) => ({ ...u, isMy: u.id === jwtDecode(access).sub }));
    },
  },
});
