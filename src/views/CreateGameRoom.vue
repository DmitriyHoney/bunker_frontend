<script setup>
// Vue, vue-utils
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

//Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';

// Pinia
import { useRoomStore } from '@/stores/room.js';
import { useUserStore } from '@/stores/user.js';

const router = useRouter();

const roomStore = useRoomStore();
const userStore = useUserStore();

const state = reactive({
  isLoading: false,
  username: ''
});
const methods = {
  async handleClickCreateGame() {
    state.isLoading = true;
    try {
      await roomStore.createRoom();
      await userStore.createPlayerAndJoinRoom({ username: state.username, room_id: roomStore.room.id });
      router.push({ name: 'start-game-room' });
    } catch (e) {
      console.error(e);
    } finally {
      state.isLoading = false;
    }
  }
};
</script>

<template>
  <section class="start-player-section create-game-room">
    <div class="container">
      <base-button class="center" variant="primary_flat" to="game-rules">Как играть?</base-button>
      <h2 class="base-title">Создать игровую комнату</h2>
      <form class="start-player-section__form" @submit.prevent="methods.handleClickCreateGame">
        <base-input label="Введите имя" v-model.trim="state.username" />
        <base-button @click="methods.handleClickCreateGame" :disabled="!state.username.length || state.isLoading" :isLoading="state.isLoading">Создать игру</base-button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.create-game-room {
  background-image: url('../assets/images/creategameroom-bg.jpg');
}
</style>
