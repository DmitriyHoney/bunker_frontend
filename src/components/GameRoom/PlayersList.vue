<script setup>
import IconArrowNext from '@/components/icons/IconArrowNext.vue';
import { ref } from 'vue';

const mainHeaders = [
  { name: 'Игроки' },
  { name: 'Профессия' },
  { name: 'Чел. качества' },
  { name: 'Чел. характеристики' },
  { name: 'Профессия' },
  { name: 'Профессия' },
  { name: 'Профессия' },
  { name: 'Профессия' },
  { name: 'Профессия' },
  { name: 'Профессия' },
];
const specHeaders = [
  { name: 'Спец. возможность №1' },
  { name: 'Спец. возможность №2' },
];

const newPlayersStructure = [
  ['Евгений', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...' ],
  ['Максим', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...' ],
  ['Александр', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...' ],
  ['Дмитрий', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...', 'Строитель', 'Капризный', '...' ],
];

const newPlayersStructureSpec = [
  ['Быстрый', 'Голос' ],
  ['Быстрый', 'Голос' ],
  ['Быстрый', 'Голос' ],
  ['Быстрый', 'Голос' ],
];

defineProps({
  players: Array,
  label: String,
});

const parent = ref(null);
const isScrollEnd = ref(false);
const scrollTable = () => {
  if (isScrollEnd.value) {
    parent.value.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    return;
  }
  let scrollAmount = 0;
  const scrollMax = parent.value.offsetWidth;
  parent.value.scrollTo({
    top: 0,
    left: Math.max(scrollAmount += 500, scrollMax),
    behavior: 'smooth'
  });
};

const checkScroll = () => {
  parent.value
    ? isScrollEnd.value = parent.value.scrollLeft > 0
    :  isScrollEnd.value = false;
};

</script>

<template>
  <div class="players-header">
    <h3>{{ label }}</h3>
    <div class="players-header__slide">
      <span>{{ isScrollEnd ? 'Карточки игроков' : 'Специальные условия' }}</span>
      <button type="button" style="transition: all ease .3s" :style="isScrollEnd ? 'transform: rotate(180deg)' : ''" @click="scrollTable"><icon-arrow-next type="single"></icon-arrow-next></button>
    </div>
  </div>
<!--  -->
  <div class="players-list hidden-scroll" ref="parent" @scroll="checkScroll">
    <div class="players-list__content">
      <div class="players-table">
        <div class="players-table__head">
          <div v-for="h in mainHeaders" :key="h.name">{{ h.name }}</div>
        </div>
        <div class="players-table__body">
          <div class="players-table__row" v-for="(p, idx) in newPlayersStructure" :key="idx">
            <div v-for="(cell, idxCell) in p" :key="idxCell">{{ cell }}</div>
          </div>
        </div>
      </div>
      <div class="players-table players-table_spec" id="wow">
        <div class="players-table__head">
          <div v-for="h in specHeaders" :key="h.name">{{ h.name }}</div>
        </div>
        <div class="players-table__body">
          <div class="players-table__row" v-for="(p, idx) in newPlayersStructureSpec" :key="idx">
            <div v-for="(cell, idxCell) in p" :key="idxCell">{{ cell }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.players {
  &-header {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    h3 {
      color: #fff;
      font-family: Inter;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      flex: 1 0 0;
    }
    &__slide {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      span {
        color: #fff;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      button {
        display: flex;
        padding: 12px;
        align-items: flex-start;
        gap: 10px;
        border: none;
        border-radius: 80px;
        background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
      }
    }
  }
}
.players-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  overflow: hidden;
  overflow-x: scroll;
}

.hidden-scroll {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  &::-webkit-scrollbar {
    height: 8px;
    display: none;
  }
}
/* W3C standard
   сейчас только для Firefox */
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* для Chrome/Edge/Safari */
.custom-scroll::-webkit-scrollbar {
  height: 8px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #334656;
  border-radius: 12px;

}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #D2D2D2;
  border-radius: 12px;
}

.players-list.custom-scroll {
  padding-bottom: 24px;
}

.players-list__content {
  display: flex;
  gap: 24px;
}
.players-table {
  padding: 42px;
  border-radius: 42px;
  border: 1px solid  #2C394B;
  &_spec {
    border: 1px solid #D2D2D2;
    background: linear-gradient(315deg, #2C394B 0%, #334756 100%);
    .players-table__row {
      & div {
        padding: 18px 24px;
        border: 1px solid #D2D2D2;
        border-radius: 8px;
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        background: transparent;
        &:first-child {
          background: transparent;
          border: 1px solid #D2D2D2;
        }
      }
    }
  }
  &__head {
    display: flex;
    justify-content: flex-start !important;
    margin-bottom: 24px;
    & div {
      display: flex;
      justify-content: flex-start !important;
      color: #D2D2D2;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  &__row {
    & div {
      padding: 18px 24px;
      border: 1px solid #2C394B;
      border-radius: 8px;
      color: #FFF;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      &:first-child {
        background: linear-gradient(315deg, #2C394B 0%, #334756 100%);
        border: none;
      }
    }
  }
  &__row,
  &__head {
    display: flex;
    gap: 24px;
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 170px;
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
