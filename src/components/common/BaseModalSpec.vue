<script setup>
import BaseButton from '@/components/common/BaseButton.vue';

defineProps({
  players: Array,
  active: Boolean,
});
</script>

<template>
  <div :class="active ? 'spec-modal spec-modal_active' : 'spec-modal'">
    <div class="spec-modal__content">
      <div class="spec-modal__text">
        <h3>Особые условия!</h3>
        <p>
          Чтобы применить карту особого условия необходимо выбрать игрока, к кому будет применена
          данная карта.
        </p>
      </div>
      <ul class="spec-modal__list">
        <li v-for="(player, key) in players" :key="key">{{ player.name }}</li>
      </ul>
    </div>
    <div class="spec-modal__actions">
      <base-button>Применить</base-button>
      <base-button variant="primary_outlined" @click="active = false">Свернуть</base-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spec-modal {
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  width: 494px;
  height: 100vh;
  padding: 64px 42px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 42px 0px 0px 42px;
  background: #fff;
  box-shadow: 0px 11px 250px 0px #2c394b;
  transform: translateX(5000px);
  transition: 300ms;
  &_active {
    transform: translateX(0px);
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    h4 {
      color: var(--d, #2c394b);
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      align-self: stretch;
    }
    p {
      color: var(--d, #2c394b);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      align-self: stretch;
    }
  }
  &__list {
    column-gap: 12px;
    align-self: stretch;
    padding: 0;
    margin: 0;
    list-style: none;
    column-count: 2;
    li {
      height: 55px;
      padding: 18px 24px;
      border-radius: 8px;
      background: var(--regreg, linear-gradient(315deg, #2c394b 0%, #334756 100%));
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 12px;
    }
  }
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    button {
      align-self: stretch;
    }
  }
}
</style>
