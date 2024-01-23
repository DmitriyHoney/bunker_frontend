<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const infoText = [
  'Создаём катострофу...',
  'Ищем подходящий бункер...',
  'Создаем персонажей...',
  'Узнаем профессию...',
  'Отправляем персонажей на медицинский осмотр...',
  'Узнаем хобби...',
  'Собираем багаж...',
  'Раздаём специальные карты...',
  'Выдыхаем перед игрой...',
  'Приятной игры!',
];
const inc = ref(0);
const percents = ref(0);

const router = useRouter();

const maxTimePreloader = 10000;
const timeInterval = +((maxTimePreloader / 1000) / infoText.length * 1000).toFixed(0);

const tId = setInterval(() => {
  if (inc.value + 1 === infoText.length) {
    clearInterval(tId);
    return intervalDone();
  } else inc.value++;
}, timeInterval);

const tId2 = setInterval(() => {
  if (percents.value === 100) {
    clearInterval(tId2);
    return intervalDone();
  };
  percents.value++;
}, timeInterval / 10);

function intervalDone() {
  if (percents.value === 100 && inc.value + 1 === infoText.length) {
    router.push({ name: 'game-room' });
  }
}
</script>

<template>
  <div class="main-loader">
    <div class="main-loader__info">
      <span>{{ percents }}%</span>
      <p>{{ infoText[inc] }}</p>
    </div>
    <video autoplay loop muted>
      <source src="../assets/videos/preloader.mp4" type="video/mp4" />
      <source src="../assets/videos/preloader.mp4" type="video/ogg" />
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
    z-index: 99;
    color: #fff;
    bottom: 42px;
    left: 42px;
    & span {
      color: #C31F0B;
      font-size: 42px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      margin-bottom: 12px;
      display: flex;
    }
    & p {
      color: #FFF;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
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
