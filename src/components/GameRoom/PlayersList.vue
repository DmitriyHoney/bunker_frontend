<script setup>
import IconArrowNext from '@/components/icons/IconArrowNext.vue';

defineProps({
  players: Array,
  label: String,
});
</script>

<template>
  <div class="players-list">
    <div class="players-list__header">
      <h3>{{ label }}</h3>
      <div class="players-list__slide">
        <span>Специальные возможности</span>
        <button type="button"><icon-arrow-next type="single"></icon-arrow-next></button>
      </div>
    </div>
    <div class="players-list__tables"></div>
  </div>
</template>

<style scoped lang="scss">
.players-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  &__header {
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
</style>
