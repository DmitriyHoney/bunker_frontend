<script setup>
// Vue, vue-utils
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

//Components
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { useUserStore } from '@/stores/user.js';

// Pinia
// import { useGameStore } from '@/stores/room.js';

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const state = reactive({
  form: { name: '' },
  isLoading: false,
});

const methods = {
  async handleClickConnectGame() {
    if (!state.form.name.length) return;
    state.isLoading = true;
    try {
      await userStore.createPlayerAndJoinRoom({
        username: state.form.name,
        room_id: route.params.room_id
      });
      router.push({ name: 'start-game-room', params: { room_id: userStore.user?.room } });
    } catch (e) {
      console.error(e);
    }
    state.isLoading = false;
  }
};
</script>

<template>
  <section class="start-player-section create-game-room">
    <div class="container">
      <base-button class="center" variant="primary_flat" to="game-rules">Как играть?</base-button>
      <h2 class="base-title">Подключение к игре</h2>
      <form class="start-player-section__form" @submit.prevent="methods.handleClickConnectGame">
        <base-input label="Введите имя" v-model.trim="state.form.name" />
        <base-button @click="methods.handleClickConnectGame" :disabled="!state.form.name.length || state.isLoading" :isLoading="state.isLoading">Подключиться</base-button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.create-game-room {
  background-image: url('../assets/images/creategameroom-bg.jpg');
}
</style>
