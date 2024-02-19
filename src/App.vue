<script setup>
import { RouterView } from 'vue-router';
import TransitionBetweenPages from '@/components/Loaders/TransitionBetweenPages.vue';
import { useCommonStore } from '@/stores/index.js';
const commonStore = useCommonStore();
import VideoSrc  from '@/assets/videos/preloader.mp4';
import LoadersV1 from '@/components/Loaders/LoadersV1.vue';
</script>

<template>
  <main>
    <RouterView />
    <loaders-v1 :is-active="commonStore.isActiveLoader" />
    <!-- Необходимо чтобы видео подгрузилось заранее -->
    <video autoplay loop muted style="display: none;">
      <source :src="VideoSrc" type="video/mp4" />
    </video>
  </main>
</template>

<style scoped></style>
