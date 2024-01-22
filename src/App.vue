<script setup>
import { RouterView, useRoute } from 'vue-router';
import TransitionBetweenPages from '@/components/Loaders/TransitionBetweenPages.vue';
import { useCommonStore } from '@/stores/index.js';
import StartGameLoader from '@/components/Loaders/StartGameLoader.vue';
const commonStore = useCommonStore();
</script>

<template>
  <main>
    <RouterView />
  </main>
<!--  <start-game-loader />-->
  <transition-between-pages :is-active="commonStore.isActiveLoader" />
</template>

<style scoped></style>
