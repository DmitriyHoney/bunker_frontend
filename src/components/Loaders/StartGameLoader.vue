<script setup>
import { onUnmounted, ref } from 'vue';

const infoText = [
  'Раздаём карты',
  'Создаём бункер',
  'Придумываем катастрофу',
  'Вспоминаем професии',
  'Усложняем условия',
  'Определяем кто будет порноактёром',
  'Ищем бабуль в бункер',
  'Ещё момент...',
];
const inc = ref(0);


const tId = setInterval(() => {
  if (inc.value + 1 === infoText.length) inc.value = 0;
  else inc.value++;
}, 2500);

onUnmounted(() => {
  tId ? clearInterval(tId) : null;
});
</script>

<template>
  <div class="main-loader">
    <div class="main-loader__info">
<!--      Подготовка игры-->
      {{ infoText[inc] }}
    </div>
    <video autoplay loop muted>
      <source src="../../assets/videos/preloader.mp4" type="video/mp4" />
      <source src="../../assets/videos/preloader.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped lang="scss">
.main-loader {
  height: 100vh !important;
  width: 100% !important;
  position: fixed;
  display: block;
  z-index: 999;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  transition: width 0s 1.4s ease;
  &__info {
    position: absolute;
    z-index: 9999;
    font-size: 75px;
    color: #fff;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .5);
    }
  }
}
</style>
