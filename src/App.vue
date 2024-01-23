<script setup>
import { RouterView } from 'vue-router';
import TransitionBetweenPages from '@/components/Loaders/TransitionBetweenPages.vue';
import { useCommonStore } from '@/stores/index.js';
import StartGameLoader from '@/views/StartGameLoader.vue';
const commonStore = useCommonStore();
</script>

<template>
  <main>
    <RouterView />
<!--    <start-game-loader />-->
    <transition-between-pages :is-active="commonStore.isActiveLoader" />
  </main>
</template>

<style scoped></style>
