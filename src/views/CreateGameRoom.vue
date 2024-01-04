<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({ name: '' });
const handleClickCreateGame = () => {
  router.push({ name: 'start-game-room' });
};
</script>

<template>
  <section class="start-player-section create-game-room">
    <div class="container">
      <base-button class="center" variant="primary_flat" to="game-rules">Как играть?</base-button>
      <h2 class="base-title">Создать игровую комнату</h2>
      <form class="start-player-section__form">
        <base-input label="Введите имя" v-model="form.name" />
        <base-button @click="handleClickCreateGame">Создать игру</base-button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.create-game-room {
  background-image: url('../assets/images/creategameroom-bg.jpg');
}
</style>
