<script setup>
import BaseTooltip from '@/components/common/BaseTooltip.vue';
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue';
import IconArrowNext from '@/components/icons/IconArrowNext.vue';
import IconLock from '@/components/icons/IconLock.vue';
import IconUnlock from '@/components/icons/iconUnlock.vue';

defineProps({
  playerNow: Object,
  player: Object,
  players: Array,
  modals: Object,
});
</script>

<template>
  <div class="player">
    <div class="player__game">
      <h4 class="base-title-h4">Информация о вас</h4>
      <img class="player__img" src="../../../src/assets/images/game-room-card.jpg" />
      <div class="player__buttons">
        <button type="button">
          Ваш ход, осталось: {{ playerNow.time }} <icon-arrow-next></icon-arrow-next>
        </button>
        <span>Ходит игрок: {{ players[playerNow.key]['name'] }}</span>
      </div>
    </div>
    <div class="player__card">
      <ul class="player__attrs">
        <li v-for="(attr, key) in player.attrs" :key="key">
          <span class="player__attr-name">{{ attr.name }}:</span>
          <div class="player__item">
            <base-tooltip :title="attr.tooltip">
              <icon-info-circle></icon-info-circle>
            </base-tooltip>
            <p>{{ attr.value }}</p>
            <icon-unlock v-if="attr.opened"></icon-unlock>
            <base-tooltip v-else title="Нажмите чтобы открыть эту карту">
              <icon-lock></icon-lock>
            </base-tooltip>
          </div>
        </li>
      </ul>
      <div class="player__specs">
        <h4 class="base-title-h4">Специальные условия</h4>
        <div class="player__item" v-for="(spec, key) in player.specs" :key="key">
          <base-tooltip :title="spec.tooltip">
            <icon-info-circle></icon-info-circle>
          </base-tooltip>
          <p>{{ spec.value }}</p>
          <icon-unlock v-if="spec.used"></icon-unlock>
          <base-tooltip v-else title="Нажмите чтобы использовать эту способность">
            <icon-lock></icon-lock>
          </base-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.player {
  border-radius: 42px;
  border: 1px solid var(--regreg, #2c394b);
  display: flex;
  padding: 42px;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  &__game {
    display: flex;
    width: 332px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    h4 {
      align-self: stretch;
    }
    img {
      width: 332px;
      height: 332px;
      flex-shrink: 0;
      border-radius: 24px;
      background: var(--reg, #d2d2d2);
    }
    button {
      display: flex;
      width: 332px;
      padding: 18px 32px;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #24ff00;
      background-color: transparent;
      color: #24ff00;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    span {
      display: flex;
      width: 332px;
      padding: 18px 32px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      border: 1px solid var(--hr, #ff4c29);
      color: var(--hr, #ff4c29);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
  }
  &__attrs {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    li {
      width: 31.66%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
  &__attr-name {
    color: var(--reg, #d2d2d2);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__specs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
  }
  &__item {
    display: flex;
    padding: 18px 24px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    flex: 1 0 0;
    p {
      flex-grow: 1;
    }
  }
}
</style>
