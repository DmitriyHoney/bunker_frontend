<script setup>
import { onMounted, ref } from 'vue';
import IconArrowNext from '@/components/icons/IconArrowNext.vue';

defineProps({
  players: Array,
  label: String,
});

const headers = [
  'Профессия:',
  'Чел. качества:',
  'Чел. характеристики:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
  'Профессия:',
];

const fixedColumn = [
  'Евгений',
  'Дмитрий',
  'Александр',
  'Максим',
  'Новый игрок',
];

const rows = [
  ['Строитель', 'Педант', 'test3', 'test4', 'test5', '...', 'test7', 'test1', 'test2', 'test3', 'test4', 'test5', '...', 'test7'],
  ['Курьер', 'Изи', '...', '...', '...', 'test6', 'test7', 'test1', 'test2', 'test3', 'test4', 'test5', '...', 'test7'],
  ['Безработный', 'Настырный', 'test3', 'test4', '...', 'test6', '...', 'test1', 'test2', 'test3', '...', 'test5', 'test6', '...'],
  ['Презентации', 'Мигрант', '...', '...', 'test5', 'test6', 'test7', '...', 'test2', '...', 'test4', 'test5', 'test6', 'test7'],
  ['Порноактёр', '...', 'test3', '...', 'test5', 'test6', 'test7', 'test1', 'test2', '...', 'test4', 'test5', 'test6', 'test7'],
];

const rowsAdds = [
  ['test1', 'test2'],
  ['test1', 'test2'],
  ['test1', 'test2'],
  ['test1', 'test2'],
  ['test1', 'test2'],
];


const fixedBlock = ref(null);
const widthFixedBlock = ref(0);

const isScrollEnd = ref(false);
const parent = ref(null);
const scrollTable = () => {
  if (isScrollEnd.value) return parent.value.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  parent.value.scrollTo({
    top: 0,
    left: Math.max(999999, parent.value.offsetWidth),
    behavior: 'smooth'
  });
};

const checkScroll = () => (parent.value ? isScrollEnd.value = parent.value.scrollLeft > 0 :  isScrollEnd.value = false);
onMounted(() =>  widthFixedBlock.value = fixedBlock.value.offsetWidth);

</script>

<template>
  <div class="base-table-header">
    <h3>{{ label }}</h3>
    <div class="base-table-header__slide">
      <span>{{ isScrollEnd ? 'Карточки игроков' : 'Специальные условия' }}</span>
      <button type="button"  @click="scrollTable"><icon-arrow-next type="single" style="transition: all ease .3s" :style="isScrollEnd ? 'transform: rotate(180deg)' : ''"></icon-arrow-next></button>
    </div>
  </div>
  <div class="base-table">
    <div class="base-table__fixed-cols" ref="fixedBlock">
      <div class="base-table__header">Игроки</div>
      <div class="base-table__cell" v-for="(column, idx) in fixedColumn" :key="idx">{{ column }}</div>
    </div>
    <div class="base-table__content hidden-scroll" ref="parent" @scroll="checkScroll">
      <div class="base-table__content_base">
        <div class="base-table__headers">
          <div class="base-table__header" v-for="(header, idx) in headers" :key="idx">
            {{ header }}
          </div>
        </div>
        <div class="base-table__content-row" v-for="(row, idx) in rows" :key="idx">
          <!-- TODO fixed 'base-table__cell_center': col === '...' -->
          <div class="base-table__content-cell base-table__cell base-table__cell_ghost" :class="{ 'base-table__cell_center': col === '...'}" v-for="(col, colIdx) in row" :key="colIdx">
            {{ col }}
          </div>
        </div>
      </div>
      <div class="base-table__content_additional">
        <div class="base-table__headers">
          <div class="base-table__header">Спец. возможность №1:</div>
          <div class="base-table__header">Спец. возможность №2:</div>
        </div>
        <div class="base-table__content-row" v-for="(row, idx) in rowsAdds" :key="idx">
          <div class="base-table__content-cell base-table__cell base-table__cell_ghost_white" v-for="(col, colIdx) in row" :key="colIdx">
            {{ col }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.base-table__cell {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 18px 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #FFF;
  background: linear-gradient(315deg, #2C394B 0%, #334756 100%);
  min-width: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &_center {
    justify-content: center;
  }
  &_ghost {
    background: transparent;
    border: 1px solid #2C394B;
  }
  &_ghost_white {
    border: 1px solid #fff;
  }
}

.base-table {
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
.base-table {
  display: flex;
  width: 100%;
  &__headers {
    display: flex;
    gap: 24px;
  }
  &__header {
    min-width: 190px;
    color: #D2D2D2;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__fixed-cols {
    padding: 42px;
    padding-right: 24px;
    border: 1px solid red;
    border: 1px solid rgba(204, 204, 204, 0.18);
    border-radius: 42px 0px 0px 42px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__content {
    width: 100%;
    display: flex;
    gap: 24px;
    &_base {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 42px;
      padding-left: 24px;
      border: 1px solid rgba(204, 204, 204, 0.18);
      border-radius: 0px 42px 42px 0px;
      border-left: none;
      width: 100%;
      width: max-content;
    }
    &_additional {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 42px;
      padding-left: 24px;
      border-radius: 42px;
      width: 100%;
      width: max-content;
      border: 1px solid #D2D2D2;
      background: linear-gradient(315deg, #2C394B 0%, #334756 100%);
    }

    overflow: hidden;
    overflow-x: auto;
    &-row {
      display: flex;
      gap: 24px;
    }
  }
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
</style>
