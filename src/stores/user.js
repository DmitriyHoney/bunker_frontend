import { defineStore } from 'pinia';
import { API, setStorageTokens } from '@/api/index';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isLoading: false,
    user: null,
  }),
  getters: {
    isOwner: (state) => state?.user?.is_owner
  },
  actions: {
    async createPlayerAndJoinRoom({ username, room_id }) {
      this.isLoading = true;
      try {
        const res = await API.players.create({ username, room_id });
        this.user  = res.data;
        setStorageTokens(res.data.id);
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    async getMyProfile() {
      this.isLoading = true;
      try {
        const res = await API.players.myProfile();
        this.user  = res.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    }
  },
});
