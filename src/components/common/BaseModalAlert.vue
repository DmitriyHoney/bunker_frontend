<script setup>
import BaseButton from '@/components/common/BaseButton.vue';

defineProps({
  active: false,
  player: Object,
  toPlayer: Object,
});
</script>

<template>
  <div :class="active ? 'base-alert base-alert_active' : 'base-alert'">
    <div class="base-alert__content">
      <h3 class="base-alert__title">Внимание!</h3>
      <p>Игрок: "{{ player }}" применил карту специальные условия к игроку "{{ toPlayer }}"</p>
    </div>
    <base-button @click="active = false">Хорошо</base-button>
  </div>
</template>

<style scoped lang="scss">
.base-alert {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  padding: 42px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 42px;
  background: #fff;
  box-shadow: 0px 11px 250px 0px #2c394b;
  border-radius: 42px;
  background: #fff;
  width: 320px;
  transition: 500ms;
  transform: translate(700px, -100px);
  &_active {
    transform: translate(-100px, -100px);
  }
  &__content {
    display: flex;
    width: 240px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  &__title {
    color: var(--d, #2c394b);
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    align-self: stretch;
  }
  button {
    width: 100%;
  }
}
</style>
