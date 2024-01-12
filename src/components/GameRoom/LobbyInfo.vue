<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTooltip from '@/components/common/BaseTooltip.vue';
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue';

defineProps({
  title: String,
  description: String,
  img: String,
  bunkerPlaces: [Number, String],
  bunkerAvailableCardsCount: [Number, String],
  bunkerCards: Array,
});
</script>

<template>
  <div class="lobby-info">
    <div class="lobby-info__cataclysm cataclysm">
      <div class="cataclysm__header">
        <h3 class="base-title">{{ title }}</h3>
        <base-button variant="primary_flat" to="game-rules">Как играть?</base-button>
      </div>
      <p class="cataclysm__description">{{ description }}</p>
    </div>
    <div class="lobby-info__bunker bunker">
      <div class="bunker__header">
        <div class="bunker__text">
          <h4 class="base-title-h4">Карты бункера</h4>
          <p class="bunker__available-cards">
            Всего доступно {{ bunkerAvailableCardsCount }} карт бункера
          </p>
        </div>
        <div class="bunker__places">Всего мест в бункере: {{ bunkerPlaces }}</div>
      </div>
      <ul class="bunker__cards">
        <li class="bunker__card" v-for="(card, key) in bunkerCards" :key="key">
          <base-tooltip :title="card.tooltip">
            <icon-info-circle></icon-info-circle>
          </base-tooltip>
          {{ card.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lobby-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 42px;
  border: 1px solid var(--regreg, #2c394b);
  .cataclysm {
    display: flex;
    padding: 42px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border-radius: 42px 42px 0px 0px;
    background-image: url('../src/assets/images/cataclysm-bg.jpg');
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;
      h3 {
        flex: 1 0 0;
      }
    }
    &__description {
      align-self: stretch;
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .bunker {
    display: flex;
    padding: 42px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    border-radius: 0px 0px 42px 42px;
    &__header {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
    }
    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      flex: 1 0 0;
      h4 {
        color: #fff;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        align-self: stretch;
      }
      p {
        color: #fff;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        align-self: stretch;
      }
    }
    &__places {
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      padding: 18px 32px;
      align-items: center;
      gap: 12px;
      border-radius: 12px;
      border: 1.5px solid var(--regreg, #2c394b);
    }
    &__cards {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: flex-start;
      gap: 32px 24px;
      align-self: stretch;
      flex-wrap: wrap;
    }
    &__card {
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;
      min-width: 32.11%;
      padding: 18px 24px;
      align-items: center;
      gap: 12px;
      align-self: stretch;
      border-radius: 8px;
      background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
    }
  }
}
</style>
