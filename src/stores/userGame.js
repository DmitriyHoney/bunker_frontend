import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { API, baseInstance } from '@/api/index';

export const useUserGameStore = defineStore('userGame', () => {
  // State
  const room = ref(null);
  const userId = ref(null);
  // Methods
  const setBearerTokenFromStorage = () => {
    const access = localStorage.getItem('access');
    baseInstance.interceptors.request.use((req) => {
      access
        ? (req.headers.Authorization = 'Bearer ' + access)
        : localStorage.clear('access');
      return req;
    });
  };
  const createRoomAndOwner = async (username) => {
    const res = await API.rooms.create({ name: `room_${Date.now()}`, username });
    userId.value = res.data.users[0].id;
    room.value = res.data;
  };
  const authUserAndSaveToken = async (userId) => {
    const res = await API.auth.getToken(userId);
    localStorage.setItem('access', res.data.access);
    // localStorage.setItem('user_id', userId);
    setBearerTokenFromStorage();
  };
  // Computed
  const owner = computed(() => room?.value.users.find((u) => u.is_owner));
  const currentUser = computed(() => room?.value.users.find((u) => u.id === userId.value));
  const roomLink = computed(() => (room?.value?.id ? `${import.meta.env.VITE_SERVER_URL}/start-game-room/${room.value.id}` : 'Ссылка не сформирована'));
  return {
    room, // state
    createRoomAndOwner, authUserAndSaveToken, // methods
    owner, currentUser, roomLink // computed
  };
});
