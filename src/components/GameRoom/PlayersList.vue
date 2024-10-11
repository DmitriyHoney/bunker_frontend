<script setup>
import { onMounted, ref } from 'vue';
import IconArrowNext from '@/components/icons/IconArrowNext.vue';
import { useUserStore } from '@/stores/user.js';
import { CARD_TYPES, CARD_TYPES_TRANSLATE } from '@/constants/index.js';

const props = defineProps({
  players: Array,
  label: String,
  emptyLabel: String
});


const CARD_TYPES_ORDER_IN_TABLE = Object.values(CARD_TYPES).filter((t) => ![CARD_TYPES.disaster, CARD_TYPES.bunker].includes(t));
const SPEC_CARD_TYPES_ORDER_IN_TABLE = Object.values(CARD_TYPES).filter((t) => [CARD_TYPES.disaster, CARD_TYPES.bunker].includes(t));
const headers = CARD_TYPES_ORDER_IN_TABLE.map((type) => ({ type, translate: CARD_TYPES_TRANSLATE[type] }));
const headers2 = SPEC_CARD_TYPES_ORDER_IN_TABLE.map((type) => ({ type, translate: CARD_TYPES_TRANSLATE[type] }));

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

const userStore = useUserStore();

onMounted(() =>  {
  widthFixedBlock.value = fixedBlock.value.offsetWidth;
});

const findPlayerCardByType = (player, cardType) => {
  if (!player?.cards) return null;
  return player.cards.find((c) => c.type === cardType);
};

</script>

<template>
  <div class="base-table-header">
    <h3>{{ label }}</h3>
    <div class="base-table-header__slide">
      <template v-if="players.length">
        <span>{{ isScrollEnd ? 'Карточки игроков' : 'Специальные условия' }}</span>
        <button type="button"  @click="scrollTable"><icon-arrow-next type="single" style="transition: all ease .3s" :style="isScrollEnd ? 'transform: rotate(180deg)' : ''"></icon-arrow-next></button>
      </template>
      <span v-else>{{ emptyLabel }}</span>
    </div>
  </div>
  <div class="base-table" v-if="players.length">
    <div class="base-table__fixed-cols" ref="fixedBlock">
      <div class="base-table__header">Игроки</div>
      <div class="base-table__cell" :class="{'current_user': player.id === userStore.user.id}" v-for="(player, idx) in props.players" :key="idx">{{ player.username }} {{ player.id === userStore.user.id ? '(Вы)' : ''}}</div>
    </div>
    <div class="base-table__content hidden-scroll" ref="parent" @scroll="checkScroll">
      <div class="base-table__content_base">
        <div class="base-table__headers">
          <div class="base-table__header" v-for="(header, idx) in headers" :key="idx">
            {{ header.translate }}
          </div>
        </div>
        <div class="base-table__content-row" v-for="player in players" :key="player.id">
          <!-- TODO fixed 'base-table__cell_center': col === '...' -->
          <div class="base-table__content-cell base-table__cell base-table__cell_ghost" v-for="cardType in headers" :key="cardType">
            <span v-if="findPlayerCardByType(player, cardType.type)">{{ findPlayerCardByType(player, cardType.type).property.name }}</span>
            <span v-else>Скрыта</span>
          </div>
        </div>
      </div>
      <div class="base-table__content_additional">
        <div class="base-table__headers">
          <div class="base-table__header">Спец. возможность №1:</div>
          <div class="base-table__header">Спец. возможность №2:</div>
        </div>
        <div class="base-table__content-row" v-for="player in players" :key="player.id">
          <div class="base-table__content-cell base-table__cell base-table__cell_ghost_white" v-for="cardType in headers2" :key="cardType">
            <span v-if="findPlayerCardByType(player, cardType.type)">{{ findPlayerCardByType(player, cardType.type).property.name }}</span>
            <span v-else>Скрыта</span>
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
.current_user {
  border: 2px solid #FF4C29;
}
</style>
