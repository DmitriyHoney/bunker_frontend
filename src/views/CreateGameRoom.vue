<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserGameStore } from '@/stores/userGame.js';
// import { useAuthStore } from '@/stores/auth.js';

const userGameStore = useUserGameStore();
// const authStore = useAuthStore();

const router = useRouter();
const form = reactive({ name: '' });
const isLoading = ref(false);
const handleClickCreateGame = async () => {
  if (!form.name.length) return;
  isLoading.value = true;
  await userGameStore.createRoomAndOwner(form.name);
  const currentUser = userGameStore.currentUser;
  await userGameStore.authUserAndSaveToken(currentUser.id);
  router.push({ name: 'start-game-room', params: { room_id: userGameStore.room.id } });
  // isLoading.value = false;
};
</script>

<template>
  <section class="start-player-section create-game-room">
    <div class="container">
      <base-button class="center" variant="primary_flat" to="game-rules">Как играть?</base-button>
      <h2 class="base-title">Создать игровую комнату</h2>
      <form class="start-player-section__form" @submit.prevent="handleClickCreateGame">
        <base-input label="Введите имя" v-model.trim="form.name" />
        <base-button @click="handleClickCreateGame" :disabled="!form.name.length || isLoading" :isLoading="isLoading">Создать игру</base-button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.create-game-room {
  background-image: url('../assets/images/creategameroom-bg.jpg');
}
</style>
